// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let inventory = {
    money: 550,
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9
};

const espresso = {
    water: 250,
    beans: 16,
    milk: 0,
    money: 4
};

const latte = {
    water: 350,
    beans: 20,
    milk: 75,
    money: 7
};

const cappuccino = {
    water: 200,
    beans: 12,
    milk: 100,
    money: 6
};

const frappuccino = {
    water: 300,
    beans: 15,
    milk: 100,
    money: 8
};

let action = input("Write action (buy, fill, take, remaining, exit):");

while (action !== "exit") {
    switch (action) {
        case "buy":
            const brew = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - frappuccino, back - to main menu:");
            switch (brew) {
                case "1":
                    processBrew(espresso, "espresso");
                    break;
                case "2":
                    processBrew(latte, "latte");
                    break;
                case "3":
                    processBrew(cappuccino, "cappuccino");
                    break;
                case "4":
                    processBrew(frappuccino, "frappuccino");
                    break;
            }
            break;
        case "fill":
            const waterAdd = input("Write how many ml of water you want to add:");
            const milkAdd = input("Write how many ml of milk you want to add:");
            const beansAdd = input("Write how many g of coffee beans you want to add:");
            const cupsAdd = input("Write how many disposable coffee cups you want to add:");

            updateInventory(waterAdd, milkAdd, beansAdd, cupsAdd);
            break;
        case "take":
            console.log("I gave you $" + inventory.money);
            inventory.money = 0;
            break;
        case "remaining":
            printCoffeeMachineStats();
            break;
    }

    action = input("Write action (buy, fill, take, remaining, exit):");
}

function printCoffeeMachineStats() {
    console.log("The coffee machine has:");
    console.log(inventory.water + " ml of water");
    console.log(inventory.milk + " ml of milk");
    console.log(inventory.beans + " g of coffee beans");
    console.log(inventory.cups + " disposable cups");
    console.log("$" + inventory.money + " of money");
}

function processBrew(brewStats, brewType) {
    let brew = true;

    if (brewStats.water > inventory.water) {
        console.log("Sorry, not enough water!");
        brew = false;
    }

    if (brewStats.milk > inventory.milk) {
        console.log("Sorry, not enough milk!");
        brew = false;
    }

    if (brewStats.beans > inventory.beans) {
        console.log("Sorry, not enough beans!");
        brew = false;
    }

    if (inventory.cups === 0) {
        console.log("Sorry, not enough cups!");
        brew = false;
    }

    if (brew) {
        console.log("I have enough resources, making you a " + brewType + "!");
        inventory.money += brewStats.money;
        inventory.water -= brewStats.water;
        inventory.milk -= brewStats.milk;
        inventory.beans -= brewStats.beans;
        inventory.cups -= 1;
    }
}

function updateInventory(addtlWater, addtlMilk, addtlBeans, addtlCups) {
    inventory.water += Number.parseInt(addtlWater);
    inventory.milk += Number.parseInt(addtlMilk);
    inventory.beans += Number.parseInt(addtlBeans);
    inventory.cups += Number.parseInt(addtlCups);
}