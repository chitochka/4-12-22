console.log('start')






var main = function() {
    var fs = require('fs');
    // var mailer = require('./mailer.js');
    fs.readFile(process.argv[2], async function(erro, data) {
        // await mailer(data.toString()).catch(console.error);
        // waitAndExit()
        console.log('OK')
        console.log(data)
        console.log('OK')


        debugger
    })
}


main();