var myApp = {
  mainMessage : "welcome to the app!",

  mainGreeting() {
    console.log('hey welcome to my app');
  }
}

myApp.module1 = {
  saySomething(message){
    console.log(myApp.mainMessage, message, "Im the second file");

  },

  doSomething() {
    console.log('called module1 doSomthing function');
  }
}

myApp.module2 = {

  doSomething() {
      console.log('called module1 doSomthing function');
    }
  }

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup');


  function myFunc(){
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }


myFunc();


});
