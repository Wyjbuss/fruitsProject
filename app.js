const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

//opens the connection then we have to close the connection
//or the termanl wont close
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// creating or the C in CRUD
const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Check data entry, no name specified."]
	},
	rating: {
		type: Number,
		min: 0,
		max: 10
	},
	review: String
});

const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

//updating data
Person.updateOne({
	_id: "5f8ba4eb2a808b0d5069cd04"
}, {
	favFruit: orange
	// cannot add this because its already created
	// SQL database is better for this
	// can have it point to the id tho.
	// may have an array that explaines the new object.
	//for EXAPLE: below
	//     {
	//   name: "Joe Bloggs",
	//   age: 19,
	//   favouriteFruits: [
	//     {fruit: "Apple", review: "Good"},
	//     {fruit: "Banana", review: "Great"}
	//   ]
	// }
}, function(err) {
	if (err) {
		console.log(err);

	} else {
		console.log("Succesfully updated document");
	}
});

//deleting data
// Fruit.deleteOne({
// 	_id: "5f8c98ebe0932c14a8e1339e"
// }, function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("You deleted one.");
// 	}
// });

// READING or the R in CRUD
Fruit.find(function(err, fruits) {
	if (err) {
		console.log(err);
	} else {
		// console.log(fruits);
		fruits.forEach(function(fruit) {
			console.log(fruit.name);
		});
		//closes the connection
		mongoose.connection.close();
	}
});


// const pineapple = new Fruit({
// 	name: "Pineapple",
// 	rating: 7,
// 	review: "Pineapple's are good"
// });
//
// pineapple.save();
//
//
// const person = new Person({
// 	name: "Amy",
// 	age: 12,
// 	favFruit: pineapple
// });
//
// person.save();

// const kiwi = new Fruit({
// 	name: "Kiwi",
// 	rating: 10,
// 	review: "Can be sour."
// });
//
const orange = new Fruit({
	name: "Orange",
	rating: 6,
	review: "Healthy but can't have all the time."
});
//
// const banana = new Fruit({
// 	name: "Bananer",
// 	rating: 8,
// 	review: "Healthy and full of stuff."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('succesfully saved all the fruits');
// 	}
// });
