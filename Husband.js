class Husband extends Person {
    constructor(name,payMethod) {
        super(name,payMethod);
    }
    set paymentMethod(payMethod){
        this._paymentMethod= payMethod;
    }
}