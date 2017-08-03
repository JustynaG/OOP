function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	var getWarrantyCost = this.price*0.1;

	console.log("Phone brand: " + this.brand + ", color: " + this.color + ", price: " + this.price + ", warranty cost: " + getWarrantyCost);

};


var iPhone6 = new Phone("Apple", 1700 , "złoty" );
var SamsungGalaxyS6 = new Phone("Samsung", 1800 , "biały" );
var OnePlusOne = new Phone("OnePlus", 1999 , "czarny");

iPhone6.printInfo()
SamsungGalaxyS6.printInfo()
OnePlusOne.printInfo()

