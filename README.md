# Nekoweb API OpenAPI Definition

## Install

1. Install [Node JS](https://nodejs.org/).
2. Clone this repo and run `npm install` in the repo root.

## Usage

### `npm start`
Starts the reference docs preview server.

### `npm run build`
Bundles the definition to the dist folder.

### `npm test`
Validates the definition.

# Contribution Guide

Currently all definitions are stored in `openai/openapi.yaml`. 
It's a monster file, and should eventually be broken down into 
smaller files.

Version is purposely not set in the `openapi.yaml` file since
we don't have an official API version mentioned in Nekoweb's
documentation.

No `40x` or `50x` error responses are defined yet.

The `.redocly.yaml` controls settings for various
tools including the lint tool and the reference
docs engine.  Open it to find examples and
[read the docs](https://redoc.ly/docs/cli/configuration/)
for more information.

To contribute, you can add new paths, components, or
schemas.  You can also edit existing ones or edit
the OpenAPI definition itself. Here's how:

1. Fork the repo.
2. Make your changes.
3. Submit a pull request.

Feel free to ask questions or open issues if you need help.

### Redocly Documentation

- [Redocly CLI](https://redoc.ly/docs/cli/)
- [Redocly Reference Docs](https://redoc.ly/docs/reference-docs/)
- [Redocly Lint](https://redoc.ly/docs/lint/)
- [Create OpenAPI Repo](https://github.com/Redocly/create-openapi-repo)