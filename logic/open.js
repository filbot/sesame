var gpio = require('pi-gpio');


function openSesame() {

    console.log('openSesame function fired');

    // open pin 16 and set to output
    gpio.open(16, "output", function(err) {

        if (err) {  // if error stop and console log out
          console.log(err);
        }
        else { // do all the rest

            // set pin 16 to low
            gpio.write(16, 0, function() {
                setTimeout(function() {
                    gpio.write(16, 1, function() { // set pin 16 to high
                        gpio.close(16);
                    });
                },500); // keep pins active for 500ms
            });
            // open pin 18 and set to output
            gpio.open(18, "output", function(err) {

                if (err) {  // if error stop and console log out
                    console.log(err);
                }
                else { // do all the rest

                    // set pin 18 to low
                    gpio.write(18, 0, function() {
                        setTimeout(function() {
                            gpio.write(18, 1, function() { // set pin 18 to high
                                gpio.close(18);
                            });
                        },500); // keep pins active for 500ms
                    });
                }
            });
        }
    });
}

exports.openSesame = function(req, res){
    openSesame();
    res.json(200, {message: 'success'});
};