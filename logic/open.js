var gpio = require('pi-gpio');


function openSesame() {

    console.log('openSesame function fired');

    // open pin 16 and set to output
    // gpio.open(16, "output", function(err) {

    //     if (err) {  // if error stop and console log out
    //       console.log(err);
    //     }
    //     else { // do all the rest

    //         // set pin 16 to high
    //         gpio.write(16, 1, function() {

    //             // open pin 18 and set to output
    //             gpio.open(18, "output", function(err) {

    //                 if (err) {  // if error stop and close ping 16 and console log out
    //                     gpio.close(16);
    //                     console.log(err);
    //                 }
    //                 else { // do all the rest

    //                     // set pin 18 to high
    //                     gpio.write(18, 1, function() {
    //                         setInterval(function () {
    //                             gpio.close(16);  // clost pin 16
    //                             gpio.close(18);  // clost pin 18
    //                         },5000);
    //                     });
    //                 }
    //             });
    //         });
    //     }
    // });
    // 
    gpio.open(16, "output", function(err) {        // Open pin 16 for output
        gpio.write(16, 1, function() {            // Set pin 16 high (1)
            gpio.close(16);                        // Close pin 16
    });
});

}

exports.openSesame = function(req, res){
    openSesame();
    res.json(200, {message: 'success'});
};