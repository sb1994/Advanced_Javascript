class User {
  constructor(n, pw, perm) {
    this.name = n;
    this.password = pw;
    this.permissions = perm;
  }
  print() {
    console.log(`My name is ${this.name} and I have ${this.permissions} permissions`);
  }
  ckPw(pw) {
    return pw === this.password
  }
}
class Admin extends User {
  constructor(n, pw, perm, salary) {
    super(n, pw, perm)
    this.salary = salary
  }
  print() {
    console.log(`My name is ${this.name} and I earn €${this.salary}.`);
  }
}

user1 = new User('Sean', 'secret', 'read-only')
user2 = new Admin('John', 'secret', 'all', 20000)
user1.print();
user2.print();