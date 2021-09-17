const say = require('say');

function sayHello() {
    say.speak("Hello, Alex");
  }
  
  setTimeout(sayHello, 5000);