const colors=['red','green','blue'];
let capitalizedColors = colors.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedColors);