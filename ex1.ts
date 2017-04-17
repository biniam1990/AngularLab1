type BankAccount = {money:number,deposit:(value:number)=>void}
type person = {name:string,account:BankAccount,hobbies:string[]};

let bankAccount = {
    money:2000,
    deposit:function(value){
        this.money +=value;
    }
}

let asaad:person = {
    name:"Asaad",
    account:bankAccount,
    hobbies:["Violin","Cooking"]
}

let Biniam:person = {
    name:"Biniam",
    account:bankAccount,
    hobbies:["volley ball","reading"]
}