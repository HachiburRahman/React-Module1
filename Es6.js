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
console.log(newNumbers);


