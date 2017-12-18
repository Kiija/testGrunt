myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, "Im the second file");

  },

  doSomething() {
    console.log('called module1 doSomthing function');
  }
}
