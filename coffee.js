class coffee {
    water: number;
    beans: number;
    milk: number;
    money: number
}

class espresso extends coffee {
    constructor() {
        super();
        this.water = 250;
        this.beans = 16;
        this.milk = 0;
        this.money = 4;
    }
}

class latte extends coffee {
    constructor() {
        super();
        this.water = 350;
        this.beans = 20;
        this.milk = 75;
        this.money = 7;
    }
}

class cappuccino extends coffee {
    constructor() {
        super();
        this.water = 200;
        this.beans = 12;
        this.milk = 100;
        this.money = 6;
    }
}

class frappuccino extends coffee {
    constructor() {
        super();
        this.water = 300;
        this.beans = 15;
        this.milk = 100;
        this.money = 8;
    }
}
