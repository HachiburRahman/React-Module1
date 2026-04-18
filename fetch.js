const person={
    name:"Hachibur Rahman",
    age:25,
    friends:["Moon","Nahid","Rahman"],
    isMarried:false,
    family:{
        fatherName:"Mizanur",
        motherName:"Hamida"
    }
}

const jsonData=JSON.stringify(person);
// console.log(jsonData);
const planeData=JSON.parse(jsonData);
// console.log(planeData);

const keys=Object.keys(person);
console.log(keys);
const values=Object.values(person);
console.log(values);


fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
// .then(data=>console.log(data))

