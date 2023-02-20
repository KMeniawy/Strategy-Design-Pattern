class PayMethod{
    Pay(){};
}

class useCredit extends PayMethod{
    Pay(name,money){
        console.log(`${name} paid ${money} using Credit Card`);
    }
}

class useDebit extends PayMethod{
    Pay(name,money){
        console.log(`${name} paid ${money} using Debit Card`);
    }
}