const greeter = (myArray, counter) => {
    const greetText = "Hello";
    for(const counter of myArray){
        console.log(`${greetText} ${myArray[counter]}`);
    }
}

greeter(['Randy Savage','Ric Flair','Hulk Hogan'],3);