# ICO

An ICO project for my learning.

## Setup

1. Clone this repository.
2. enter `yarn install` at console.
3. rename "./.env.sample" to "/.env" and fill the necessary settings there.

## Scripts

### `test`

Compile all contracts and run tests. You need to set up private chain or specify which network to connect before this action.

### `ganache`

Setup local private chain for testing.

### `coverage`

Run all tests and generate test coverage info.

### `type-gen`

Generate typescript typings of all contracts.

## CI

### Test

The tests run automatically at push and/or PR.

### Publish

This repository will be published to npm automatically when you mark as Release.
