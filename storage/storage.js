// console.log("Connected");
const handleSubmit=()=>{
    const id =document.getElementById("id").value;
    const name=document.getElementById("name").value;
    // console.log(id,name)
    const data={id,name};
     localStorage.setItem(id,JSON.stringify(data));
}


const getItem=localStorage.getItem("1234");
console.log(getItem);

// localStorage.clear();
