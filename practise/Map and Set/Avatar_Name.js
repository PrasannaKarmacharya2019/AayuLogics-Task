// const str="Raj hbjbj hbjh Koirala"
// const name=str.split(' ');
// // console.log(name);
// for (let i=0;i<str.length;i++)
//     {
       
// if (i===0)
// {console.log(str[0])}
// else if
// (
//     str[i]===" "
// )
// {console.log(str[i+1])}
       
//     }

    let name = "Prasanna Man Kumar dev Karmacharya";
console.log(typeof name);
let splitted = name.split(" ");
console.log(splitted);
console.log(typeof splitted);
console.log(splitted.length);
let firstName = splitted[0];
console.log(firstName);
let lastName = splitted[splitted.length - 1];
console.log(lastName);

let avatar =
  firstName[0].toUpperCase() +
  lastName[0].toUpperCase();
console.log(avatar);
