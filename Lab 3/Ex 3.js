const colors=['red','green','blue'];
const capitalizedColors = colors.map(clr => clr.charAt(0).toUpperCase() + clr.slice(1));
console.log(capitalizedColors);