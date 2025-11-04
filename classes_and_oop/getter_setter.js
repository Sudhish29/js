class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    get username(){
        return this._username.toUpperCase();
    }
    set username(value){
        this._username=value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}
const sud=new User("sudhish","unknown0569")
console.log(sud.password);
console.log(sud.username);

