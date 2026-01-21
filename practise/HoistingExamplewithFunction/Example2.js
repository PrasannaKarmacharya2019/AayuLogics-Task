// Regular function created using function declarations or expressions are 'constructable' and 'callable' 

function Car(name)
{
  this.brand=name;
}
let carData=new Car("Maruti")
console.log(carData);


// using arrow function
const Books=(author)=>{
this.person=author;
}
let bookData=new Book('The Bible');
console.log(bookData);

// Do not create arrow function in constructor