### TOC

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

// RESUME AT [34:22]