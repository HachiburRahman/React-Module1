const products=[
    {name:"iphone17",brand:"apple",price:170000,color:"navy"},
    {name:"iphone17 pro max",brand:"apple",price:190000,color:"sky-blue"},
    {name:"redmi",brand:"xiomi",price:150000,color:"black"},
    {name:"A35",brand:"samsung",price:100000,color:"white"},
    {name:"w50",brand:"walton",price:70000,color:"yellow"},
]

// console.log(products);
// const result =products.map(product=>product.price);
// console.log(result);

// products.forEach(product=>{
//     console.log(product.name);
// })

// const result =products.filter(product=>product.price>=150000);
// console.log(result);

const result=products.find(product=>product.brand==="apple");
console.log(result);