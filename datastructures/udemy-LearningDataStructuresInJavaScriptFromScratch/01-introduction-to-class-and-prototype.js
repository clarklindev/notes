//Class
class User{
    //Constructor function
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
}

const user = new User('Clark', 'Lin', 35, 'male');
console.log(user);

const user2 = new User('Sally', 'Lin', 20, 'female');
console.log(user2);

// Prototype Object
// Object that we can attach methods and properties to on a class that shares this data across all instances
User.prototype.emaildomain = "@facebook.com";

User.prototype.getEmailAddress = function(){
    return this.firstName+this.lastName + this.emaildomain;
}

console.log("emailaddress: ", user.getEmailAddress());