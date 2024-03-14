var shoes = [
    {
        color: 'blue',
        brand: "Mike",
        price: 350,
        in_stock: 5
    },
    {
        color: 'orange',
        brand: "Hadidas",
        price: 275,
        in_stock: 3
    },
    // Add more shoe data here
];

// Populate color and brand dropdowns
var colorSelect = document.getElementById('color');
var brandSelect = document.getElementById('brand');

var colors = [...new Set(shoes.map(shoe => shoe.color))];
var brands = [...new Set(shoes.map(shoe => shoe.brand))];

colors.forEach(color => {
    var option = document.createElement('option');
    option.text = color;
    colorSelect.add(option);
});

brands.forEach(brand => {
    var option = document.createElement('option');
    option.text = brand;
    brandSelect.add(option);
});

function searchShoes() {
    var selectedColor = document.getElementById('color').value;
    var selectedSize = parseInt(document.getElementById('size').value);
    var selectedBrand = document.getElementById('brand').value;

    var results = shoes.filter(shoe =>
        (selectedColor === '' || shoe.color === selectedColor) &&
        (isNaN(selectedSize) || selectedSize <= shoe.in_stock) &&
        (selectedBrand === '' || shoe.brand === selectedBrand)
    );

    displayResults(results);
}

function displayResults(results) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(shoe => {
        var shoeDiv = document.createElement('div');
        shoeDiv.classList.add('shoe');
        shoeDiv.innerHTML = `
            <p>Color: ${shoe.color}</p>
            <p>Brand: ${shoe.brand}</p>
            <p>Price: $${shoe.price}</p>
            <p>In Stock: ${shoe.in_stock}</p>
        `;
        resultsDiv.appendChild(shoeDiv);
    });
}
