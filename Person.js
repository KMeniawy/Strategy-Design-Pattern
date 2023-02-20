class Person{
    constructor(name,payMethod){
        this._name=name;
        this._paymentMethod= payMethod;
    }
    Pay(money){
        this._paymentMethod.Pay(this._name,money);
    }
}