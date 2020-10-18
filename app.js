const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);


mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
	name: "Apple",
	rating: 7,
	review: "The apple good."
});

// fruit.save();

const personSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
	name: "John",
	age: 37
});

// person.save();

const kiwi = new Fruit({
	name: "Kiwi",
	rating: 10,
	review: "Can be sour."
});

const orange = new Fruit({
	name: "Orange",
	rating: 6,
	review: "Healthy but can't have all the time."
});

const banana = new Fruit({
	name: "Bananer",
	rating: 8,
	review: "Healthy and full of stuff."
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('succesfully saved all the fruits');
// 	}
// });
