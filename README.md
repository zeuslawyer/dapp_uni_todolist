### Dapp university tute
[github ref files.](https://github.com/dappuniversity/eth-todo-list)

#### Deployment (aka migration)

`truffle compile` to compile the smart contracts. Will build into the `/build` folder.

Then `truffle deploy` or `truffle migrate`. Add the `--reset` flag if you want to replace an existing contract [31:43].

[19:37] Then run `truffle console` to open up the console, which is an CLI interactive dev tool to interact with the contract.

-   In the prompt put in `todolist = await Todolist.deployed()`. Ensure that the object you call `deployed()` on is given the same capitalization as the name of the contract that is confirmed to be deployed when you do `truffle deploy`.

-   NOTE: to work with items in the console, always assign them to variables first. For example `count = await todolist.taskCount()`. Then work with count as `count.ToNumber()`.

-   `todolist` now has details of the contract. For example you can view the address with `todolist.address`

#### Listing Tasks

[22:46] 4 steps : list in smart contract, list in truffle console, list in client app and list in tests.

Model the task by defining a new `struct`. These data types are used by solidity do define new types.
Add new function to store new Todo item to blockchain.

Compile and deploy [31:30]

[32:36] Listing out all the tasks (todo items) using the getter func provided by Solidity (provided when a `public` access modifier is specified).


#### Client side app[35:07] in the `/src` folder
- [36:00] using `lite-server` to serve the client side html. It is listed in package.json as a dep.
-  Also for the `index.html` it uses Bootstrap styling and so needs a `bs-config.json` file in the project root to set up configuration for where to serve client side files from, and it also maps vendor files to `node_modules`.
- fire up lite-server with `npm run dev` (check the package.json)
- [42:45] What is web3.js and how it relates to Ethereum. Using the Ganache UI to get the key to connect the client browser code to the ethereum blockchain via metamask and web3.
- [48:10] fetching out the actual contract from the ethereum network
- [51:01] preparing UI to show the account number and loader elements
- [53:46] rendering the tasks fetched from the Ethereum network


// resume at [53:46] rendering the tasks fetched from the Ethereum network