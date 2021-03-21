App = {
    contracts: {},
    loading: false,

    load: async () => {
        // Load app.
        await App.loadWeb3();
        await App.loadAccount();
        await App.loadContract("todolist");
        await App.render();
    },

    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
        if (typeof web3 !== "undefined") {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
            console.log("Connected...to metamask");
        } else {
            window.alert("Please connect to Metamask.");
        }
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                // Request account access if needed
                await ethereum.enable();
                // Accounts now exposed
                web3.eth.sendTransaction({
                    /* ... */
                });
            } catch (error) {
                // User denied account access...
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = web3.currentProvider;
            window.web3 = new Web3(web3.currentProvider);
            // Accounts always exposed
            web3.eth.sendTransaction({
                /* ... */
            });
        }
        // Non-dapp browsers...
        else {
            console.log(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    },

    // get the Account ( see Truffle ).
    loadAccount: async () => {
        // Set the current blockchain account
        App.account = web3.currentProvider.selectedAddress;
        console.log("The account: ", App.account);
    },

    // Load a contract.
    /**
     * loadContract takes the name of the contract (NOT case sensitive), which is usually the name of the JSON file
     * found in build/contracts.
     */
    loadContract: async contractName => {
        // Create a JavaScript version of the smart contract
        const name = contractName + ".json";
        const todoList = await $.getJSON(name); // taken from build/contracts
        console.log("The contract: ", todoList);
        App.contracts.TodoList = TruffleContract(todoList);
        App.contracts.TodoList.setProvider(App.web3Provider);

        // // Hydrate the smart contract with values from the blockchain
        App.todoList = await App.contracts.TodoList.deployed();
    },

    // Render UI.
    render: async () => {
        // Prevent double loading by using loading state
        if (App.loading) {
            return;
        }

        // Toggle loading state and update UI.
        App.setLoading(true);
        $("#account").html(App.account);
        App.setLoading(false);
    },

    setLoading: boolean => {
        App.loading = boolean;
        const loader = $("#loader");
        const content = $("#content");
        if (boolean) {
            loader.show();
            content.hide();
        } else {
            loader.hide();
            content.show();
        }
    },
};

// Window load call
$(() => {
    $(window).load(loadApp);
});

const loadApp = () => {
    App.load();
};
