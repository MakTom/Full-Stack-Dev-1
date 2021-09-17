const say = require('say');

function saySorry() {
    say.speak("I’m sorry, Dave");
  }
  
  setTimeout(saySorry, 5000); 