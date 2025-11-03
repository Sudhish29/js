// function User(name,email,password){
//     this.name=name;
//     this.email=email;
//     this.password=password;
// }
// User.prototype.changeUserName=function() {
//     return `${this.name.toUpperCase()}`
    
// }
// User.prototype.setPassword=function(){
//     return `${this.password}abc123`
// }
// const s=new User("Sudhish","sud@gmail.com",456789)
// console.log(s.changeUserName());
// console.log(s.setPassword());
class User{
    constructor(name,email,password){
      this.name=name;
      this.email=email;
      this.password=password;
    }
    changeUserName(){
        return `${this.name.toUpperCase()}`
    }
    EncryptPassword(){
        return `${this.password}abc`
    }
}
const p=new User("Sudhish","sud@gmail.com","sud123")
console.log(p.changeUserName());
console.log(p.EncryptPassword());

