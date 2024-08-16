function HeaderComponent(){
    //Tạo component header .
    const header = document.createElement("header");

     // thêm nội dung cho header
     header.innerHTML = `
     <div class="container">
         <h1>Header component</h1>
     </div>
 `;
 return header;
}
const headerElements = document.getElementsByTagName("HeaderComponent"); // array
for (let item of headerElements){
    item.appendChild(HeaderComponent());//append = add vào arrays.
}