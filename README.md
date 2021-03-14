### TOC

#### Deployment (aka migration)

`truffle deploy` or `truffle migrate`

[19:37] Then run `truffle console` to open up the console, which is an CLI interactive dev tool to interact with the contract.

-   In the prompt put in `todolist = await Todolist.deployed()`. Ensure that the object you call `deployed()` on is given the same capitalization as the name of the contract that is confirmed to be deployed when you do `truffle deploy`.

-   `todolist` now has details of the contract. For example you can view the address with `todolist.address`

#### Listing Tasks [22:46]
