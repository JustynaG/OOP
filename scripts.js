function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("Phone brand: " + this.brand + ", color: " + this.color + ", price: " + this.price);

}


var iPhone6 = new Phone("Apple", "1700 PLN", "złoty" );
var SamsungGalaxyS6 = new Phone("Samsung", "1800 PLN", "biały" );
var OnePlusOne = new Phone("OnePlus", "1999 PLN", "czarny");

iPhone6.printInfo()
SamsungGalaxyS6.printInfo()
OnePlusOne.printInfo()

// Zad. 11.5 Użycie "self"

function Button(text) {
	this.text = text || 'Hello';
}
Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');
btn1.create();


