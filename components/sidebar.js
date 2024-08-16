function SideBarComponent() {
    /*In the code you provided, the function is named SideComponent,
     but it should ideally be named SideBarComponent to match the custom tag <SideBarComponent> in your HTML.
      This will make it more intuitive.*/
    // Tạo component sidebar.
    const sidebar = document.createElement("aside");
    // Tên function phải riêng và đúng với bên HTML
    // thêm nội dung cho sidebar
    sidebar.innerHTML = `
    <div class="container">
        <h1>SideBar component</h1>
    </div>
    `;
    return sidebar;
}

const sidebarElements = document.getElementsByTagName("SideBarComponent"); // array
for (let item of sidebarElements) {
    item.appendChild(SideBarComponent()); // append = add vào arrays.
}
