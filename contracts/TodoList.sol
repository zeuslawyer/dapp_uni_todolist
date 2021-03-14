pragma solidity ^0.5.0;

contract Todolist {
<<<<<<< HEAD
    // State variable for the Todolist contract
    uint256 public taskCount = 0;
=======
    // State variable for the Todolist contract.
    // State variables get stored on the blockchain to represent the state of the contract.
    uint256 public taskCount = 0;

    // Constructor function gets run to initialize the contract.
    // The constructor gets run on deployment.
    constructor() public {
        createTask("Your first, default task!");
    }

    // model the task data type
    enum TaskStatus {NotStarted, Started, NotComplete, Abandoned}

    struct Task {
        uint256 id;
        string content;
        bool completed;
        TaskStatus status;
    }

    // Create a data structure to store Tasks on the blockchain.
    mapping(uint256 => Task) public tasks;

    // Save a task.
    // For the memory keyword's use, see https://stackoverflow.com/questions/33839154/in-ethereum-solidity-what-is-the-purpose-of-the-memory-keyword
    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(
            taskCount,
            _content,
            false,
            TaskStatus.NotStarted
        );
    }
>>>>>>> Update config. Create migration/deployment file.
}
