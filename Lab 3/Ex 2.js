const greeter = (myArray, counter) => {
    const greetText = "Hello";
    for(const counter in myArray){ 
        console.log(`${greetText} ${myArray[counter]}`);
    }
}

greeter(['Randy Savage','Ric Flair','Hulk Hogan'],3);