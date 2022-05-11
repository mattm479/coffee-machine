const input = require("sync-input");

require("coffee");
require("machine");

let action = input("Write action (buy, fill, take, remaining, exit):");
let machine = new coffeeMachine();

while (action !== "exit") {
    switch (action) {
        case "buy":
            machine.buyCoffee();
            break;
        case "fill":
            machine.fillMachine();
            break;
        case "take":
            machine.takeMoney();
            break;
        case "remaining":
            machine.printInventory();
            break;
    }

    action = input("Write action (buy, fill, take, remaining, exit):");
}
