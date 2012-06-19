/*
 *  Name: Responsive
 *
 *  Product: Open Web Device
 *
 *  Copyright(c) 2012 Telefónica I+D S.A.U.
 *
 *  LICENSE: TBD
 *
 *  @author Ismael González (igonzaleznicolas@gmail.com)
 *
 *  This files is in charge of calculating the amout of resizing needed for the device
 *
*/

//Base config
base =  {
	font: 62.5,
	width: 320,
	height: 480,
	pixel: 1,
	ratio: function () {
		 return this.height / this.width;
	}
};

//Get some information of the device
device =  {
	width: function () {
		return window.innerWidth;
	},
	height: function () {
		return window.innerHeight;
	},
	pixel: function () {
		if ( window.devicePixelRatio !== undefined ) {
			return window.devicePixelRatio;
		} else {
			return base.pixel;
		}
	},
	ratio: function () {
		var raw = this.height() / this.width();
		decimal_split(raw);
	}
}

//Scale function
scale =  (function (){
	
	//Ratio calculation
	var scale_ratio = device.width() / base.width;
	scale_ratio = scale_ratio.toFixed(2);

	var root = document.getElementsByTagName("html")[0];
	var font_size = base.font;

	//Check for non base width devices
	if (  base.width != device.width() ) {
		var font_size = scale_ratio * base.font; 
	}

	//Check for portrait devices
	if ( device.width() == device.height() || device.width() > device.height() ) {
		var font_size = device.width() / 1000 * base.font;
	}

	//Apply final font-size
	var font_size = font_size.toFixed(2);
	root.style.fontSize = font_size+"%";

});

//Add scale to listeners
window.addEventListener("load", function (e) {
	scale();
});