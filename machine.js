class inventory {
    money: number;
    water: number;
    milk: number;
    beans: number;
    cups: number;
}

class coffeeMachine extends inventory {
    constructor() {
        super();
        this.money = 550;
        this.water = 400;
        this.milk = 540;
        this.beans = 120;
        this.cups = 9;
    }

    buyCoffee() {
        const brew = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - frappuccino, back - to main menu:");
        switch (brew) {
            case "1":
                this.processBrew(new espresso());
                break;
            case "2":
                this.processBrew(new latte());
                break;
            case "3":
                this.processBrew(new cappuccino());
                break;
            case "4":
                this.processBrew(new frappuccino());
                break;
            case "back":
                break;
        }
    }

    fillMachine() {
        const waterAdd = input("Write how many ml of water you want to add:");
        const milkAdd = input("Write how many ml of milk you want to add:");
        const beansAdd = input("Write how many g of coffee beans you want to add:");
        const cupsAdd = input("Write how many disposable coffee cups you want to add:");

        this.updateInventory(waterAdd, milkAdd, beansAdd, cupsAdd);
    }

    takeMoney() {
        console.log("I gave you $" + this.money);
        this.money = 0;
    }

    printInventory() {
        console.log("The coffee machine has:");
        console.log(this.water + " ml of water");
        console.log(this.milk + " ml of milk");
        console.log(this.beans + " g of coffee beans");
        console.log(this.cups + " disposable cups");
        console.log("$" + this.money + " of money");
    }

    private updateInventory(addWater, addMilk, addBeans, addCups) {
        this.water += Number.parseInt(addWater);
        this.milk += Number.parseInt(addMilk);
        this.beans += Number.parseInt(addBeans);
        this.cups += Number.parseInt(addCups);
    }

    private processBrew(brewStats) {
        let brew = true;

        if (brewStats.water > this.water) {
            console.log("Sorry, not enough water!");
            brew = false;
        }

        if (brewStats.milk > this.milk) {
            console.log("Sorry, not enough milk!");
            brew = false;
        }

        if (brewStats.beans > this.beans) {
            console.log("Sorry, not enough beans!");
            brew = false;
        }

        if (this.cups === 0) {
            console.log("Sorry, not enough cups!");
            brew = false;
        }

        if (brew) {
            console.log("I have enough resources, making you a coffee!");
            this.money += brewStats.money;
            this.water -= brewStats.water;
            this.milk -= brewStats.milk;
            this.beans -= brewStats.beans;
            this.cups -= 1;
        }
    }
}
