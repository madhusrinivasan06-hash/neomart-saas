fetch("/api/products")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("products");

    data.products.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <p>${p.description}</p>
        `;
        container.appendChild(div);
    });
});