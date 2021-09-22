//import statements
const progressBar = require('progress');
const chalk = require('chalk');

//bar details
const bar = new progressBar('Downloading [:bar]   :percent :etas',{ width: 20 , total: 100 ,complete: chalk.bgGreen(' ') ,incomplete :' '})

//exporting startProgress function
exports.startProgress = () =>{
    console.log(chalk.green(`Download --> started`));
    const timer = setInterval(function () {
        bar.tick({
            'percent':" " ,
            'eta': ""
        });

    if (bar.complete) {
        console.log(chalk.green(`Download --> completed`));
        clearInterval(timer);
    }
  }, 500);
}