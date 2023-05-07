class Add {
    constructor(n) {
        this.n = n;
    }

    counter() {
        return this.n++;
    } 
}

const AddObj = new Add(10);

AddObj.counter();
AddObj.counter();
AddObj.counter();
AddObj.counter();