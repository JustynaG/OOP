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

