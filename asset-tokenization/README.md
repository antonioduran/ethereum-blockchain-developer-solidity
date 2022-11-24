# React client

This project is bootstraped with [Create React App](https://create-react-app.dev). It is unopinionated with only `web3.js` as an added dependency, so nothing stands in your way.

## Getting started

Run `npm start` to start the dev server.

See all [available scripts](https://create-react-app.dev/docs/available-scripts).

## Note on `react-scripts` version

The installed version of `react-scripts` is 4.x instead of the latest 5.x, which uses Webpack 5. This is because Webpack 5 no longer auto-polyfills Node.js core modules, which `web3.js` depends on.

If you don't want to use `react-scripts` at 4.x, alternative solutions include [`eject`](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) and [`react-app-rewired`](https://github.com/timarney/react-app-rewired) (See [instruction](https://github.com/ChainSafe/web3.js#web3-and-create-react-app)).

# React Truffle Box

This box comes with everything you need to start using Truffle to write, compile, test, and deploy smart contracts, and interact with them from a React app.

## Installation

First ensure you are in an empty directory.

Run the `unbox` command using 1 of 2 ways.

```sh
# Install Truffle globally and run `truffle unbox`
$ npm install -g truffle
$ truffle unbox react
```

```sh
# Alternatively, run `truffle unbox` via npx
$ npx truffle unbox react
```

Start the react dev server.

```sh
$ cd client
$ npm start
  Starting the development server...
```

From there, follow the instructions on the hosted React app. It will walk you through using Truffle and Ganache to deploy the `SimpleStorage` contract, making calls to it, and sending transactions to change the contract's state.

## FAQ

- __How do I use this with Ganache (or any other network)?__

  The Truffle project is set to deploy to Ganache by default. If you'd like to change this, it's as easy as modifying the Truffle config file! Check out [our documentation on adding network configurations](https://trufflesuite.com/docs/truffle/reference/configuration/#networks). From there, you can run `truffle migrate` pointed to another network, restart the React dev server, and see the change take place.

- __Where can I find more resources?__

  This Box is a sweet combo of [Truffle](https://trufflesuite.com) and [Create React App](https://create-react-app.dev). Either one would be a great place to start!
