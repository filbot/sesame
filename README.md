Sesame
======

RaspberryPi garage door opener app.

[SesameApp in action](http://youtu.be/XCi2deI26FY "Sesame") - video on youtube


This project was to negate the need for a dedicated garage door clicker and instead, use something that is always with me, my phone!

![Sesame App screenshot](http://i.imgur.com/rjDmSIz.png)

### Hardware Requirments

		RaspberryPi
		4GB SD card (minimum)
		Relay board

Depending on your hardware and garage door opener model, this project would work for you as well with minimal tweaks. There are multiple options as far as programming languages to use to interact with the RaspberryPi's GPIO. I've used python here but google around to see if there is a library in your prefered language. The relay board can be powered from the raspberrypi so connecting directly to the pins is not an issue. The application part of this project is an express app running on a node server on the Pi itself. If you wish to run the app without modification, just type node app.js and it will output which port, 3000 in this case, its running on.
