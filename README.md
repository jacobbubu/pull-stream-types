# @jacobbubu/pull-stream-types

[![Build Status](https://travis-ci.org/jacobbubu/pull-stream-types.svg)](https://travis-ci.org/jacobbubu/pull-stream-types)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/pull-stream-types/badge.svg)](https://coveralls.io/github/jacobbubu/pull-stream-types)
[![npm](https://img.shields.io/npm/v/@jacobbubu/pull-stream-types.svg)](https://www.npmjs.com/package/@jacobbubu/pull-stream-types/)

> Yet another [pull-stream](https://github.com/pull-stream/pull-stream) typescript declaration file.

## Intro.

Although [Michael de Wit](https://github.com/mjwwit) has provided a typescript declaration file for [pull-stream](https://github.com/pull-stream/pull-stream), in order to facilitate some type-wise modifications, I still extract the original one out and use it independently.

## Usage

```bash
npm install pull-stream -S
npm install @jacobbubu/pull-stream-types -D
```

Then add a module definition into your `compilerOptions` in `tsconfig.json`. That may look like:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "pull-stream": ["node_modules/@jacobbubu/pull-stream-types"]
    }
  }
}
```

It works for `tsc`, `ts-node` and `ts-node-dev`.

## Test

A test file(`test/pull-stream-test.ts`) has been provided to verify the correctness of the declaration file.

You can `npm run build:watch` for the debugging.
