function lastInformation() {
    // Create a div element with Bootstrap classes
    const container = document.createElement('div');
    container.className = 'd-flex justify-content-evenly'; // Đặt các lớp CSS
    container.style.paddingTop = '50px'; // Thêm CSS inline cho padding-top


    // Define the icons, their Bootstrap classes, and corresponding labels
    const icons = [
        { class: 'bi bi-geo-alt', label: 'Address', text: '198 West 21th Street,<br> Suite 721 New York NY 10016' },
        { class: 'bi bi-telephone', label: 'Phone', text: '+ 1235 2355 98' },
        { class: 'bi bi-send', label: 'Email', text: 'info@yoursite.com' },
        { class: 'bi bi-globe', label: 'Website', text: 'yoursite.com' }
    ];

    // Loop through the icons array and create the necessary HTML structure
    icons.forEach(icon => {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'text-center';

        // Create a container for the icon with circle styles
        const circleDiv = document.createElement('div');
        circleDiv.style.width = '70px';
        circleDiv.style.height = '70px';
        circleDiv.style.borderRadius = '50%';
        circleDiv.style.backgroundColor = '#007bff';
        circleDiv.style.display = 'flex';
        circleDiv.style.alignItems = 'center';
        circleDiv.style.justifyContent = 'center';
        circleDiv.style.margin = '0 auto'; // Center the circle div

        // Create the icon element
        const iconElement = document.createElement('i');
        iconElement.className = icon.class;
        iconElement.style.fontSize = '2rem';
        iconElement.style.color = 'white'; // White color for the icon inside the blue circle

        // Append the icon to the circleDiv
        circleDiv.appendChild(iconElement);

        // Create the text element
        const textElement = document.createElement('p');
        textElement.innerHTML = `<strong>${icon.label}:</strong> ${icon.text}`;
        textElement.style.marginTop = '10px';  // Add some spacing above the text

        // Append everything to the iconDiv
        iconDiv.appendChild(circleDiv);
        iconDiv.appendChild(textElement);

        // Append the iconDiv to the container
        container.appendChild(iconDiv);
    });

    // Append the container to the body or any other desired element
    document.body.appendChild(container); // You can change document.body to any specific element
}

// Call the function to render the icons and text
lastInformation();
