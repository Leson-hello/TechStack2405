function FooterComponent() {
    // Tạo component footer.
    const footer = document.createElement("footer"); //Tạo tên riêng ra . 

    // thêm nội dung cho footer (Tập trung vào chính tả )
    footer.innerHTML = `
    <div class="container">
        <h1>Footer component</h1>
    </div>
    `;
    return footer;
}

const footerElements = document.getElementsByTagName("FooterComponent"); // array
for (let item of footerElements) {
    item.appendChild(FooterComponent()); // append = add vào arrays.
}
