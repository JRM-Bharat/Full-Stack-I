const products= [
    {name: "HP Laptop", price:"₹50000", category: "electronics"},
    {name: "Cotton T-Shirt", price:"₹800", category: "clothing"},
    {name: "Bluetooth Speaker", price:"₹6500", category: "electronics"},
    {name: "Swiss Family Robinson", price:"₹350", category: "books"},
    {name: "H&M Hoodie", price:"₹950", category: "clothing"},
    {name: "Classmate A4 Register", price:"₹150", category: "books"}
];

const prdtContainer = document.getElementById("products");
const fltrSelect = document.getElementById("filter");

function dispPrdts(filter){
    prdtContainer.innerHTML = "";

    products.forEach(product => {
        if (filter === "all" || product.category === filter){
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <h2>${product.name}</h2>
                <div class="price">${product.price}</div>
                <span class="tag ${product.category}">${product.category}</span>`;
            prdtContainer.appendChild(card);
        }
    });
}

fltrSelect.addEventListener("change", ()=>{
    dispPrdts(fltrSelect.value);
});

dispPrdts("all");