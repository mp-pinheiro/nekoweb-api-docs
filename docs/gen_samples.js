// from https://github.com/Redocly/redoc/issues/15
const openAPISnippet = require('openapi-snippet');
const yaml = require('js-yaml');
const fs = require('fs');

const targets = ['node_fetch', 'python_requests', 'shell_curl'];
const httpRequestMethods = ['get', 'head', 'post', 'put', 'delete', 'options', 'trace', 'patch'];

const addRequestSamples = (swaggerJson) => {
    const swagger = JSON.parse(JSON.stringify(swaggerJson));

    for (const singlePath in swagger.paths) {
        Object.keys(swagger.paths[singlePath])
            .filter((method) => httpRequestMethods.some((supportedMethod) => supportedMethod === method))
            .forEach((method) => {
                try {
                    const snippets = openAPISnippet.getEndpointSnippets(
                        swagger,
                        singlePath,
                        method,
                        targets,
                    );
                    const samples = [];

                    snippets.snippets.forEach((snippet) => {
                        samples.push({
                            lang: snippet.title.split(' ')[0],
                            source: snippet.content,
                        });
                    });
                    swagger.paths[singlePath][method]['x-codeSamples'] = samples;
                } catch (error) {
                    console.log(error);
                }
            });
    }

    return swagger;
};

const args = process.argv.slice(2);
const openApi = yaml.load(fs.readFileSync(args[0], 'utf8'));

console.log(yaml.dump(addRequestSamples(openApi)));