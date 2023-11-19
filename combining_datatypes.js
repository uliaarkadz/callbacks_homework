//Combining Datatypes

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
  name: [
    "breathe deep",
    "life is gouda",
    "you're so a-peel-ing",
    "kind to the core",
    "have a scoop of fun!",
  ],
  box: true,
  price: 5,
};

console.log(crayonBox.name[2]);

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
  cap: { material: ["metal", "plastic"], color: ["blue", "white", "red"] },
};

console.log(bottle.cap.color[2]);

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
  { name: "apple", price: 2 },
  { name: "pear", price: 3 },
  { name: "lemon", price: 1 },
  { name: "cheese", price: 6 },
  { name: "milk", price: 4.5 },
];

console.log(receipt[2].name);

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  "5 floors",
  "20 apprtments",
  ["John Doe", "Sarah James", "Christian Moose", "Johny Starr"],
];

console.log(apartmentBuilding[2][2]);
