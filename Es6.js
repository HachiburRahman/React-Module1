const fName="Hachibur";
const lName="Rahman";
const fullName=`I am Md ${fName} ${lName}`;
// console.log(fullName);


const sum=(a,b,c)=>a+b+c;

const result=sum(1,2,3);
// console.log(result);

const sum1=(...rest)=>{
    return rest.reduce((acc,curr)=>acc+curr,0)
}

const result1=sum1(1,2,3,4);
// console.log(result1);

const numbers=[1,2,3,4,5];
const newNumbers=[...numbers,6,7];
// console.log(newNumbers);
const friends=["Jalal","Galib","Waes","Asif","Baha"];
const [ele1,ele2,ele3,ele4,ele5]=friends;
// console.log(ele1,ele2,ele3,ele4,ele5);

const person={
    name:"Hachib",
    age:25,
    friend:friends,
    isMarried:false
}

const{name,age,friend,isMarried}=person;
console.log(name);


