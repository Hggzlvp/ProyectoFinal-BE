console.log("ESTE CODIGO SE EJECUTA EN EL CLIENTE")

const productForm=document.getElementById("productForm");
const productName=document.getElementById("productName");
const productPrice=document.getElementById("productPrice");

async function createProduct(data){

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  body:JSON.stringify(data),
  headers: myHeaders
};

console.log(data);

const response=await fetch(
    "http://localhost:8080/api/productos",
     requestOptions
     ).then(response => response.json());

     console.log(response.result)
  
}


productForm.addEventListener("submit",async (e) =>{
    e.preventDefault();

    console.log("ALGUIEN MANDO A SUBMIT")

    await createProduct({
        title:productName.value,
        price:productPrice.value,
    });

    productName.value="";
    productPrice.value="";
})