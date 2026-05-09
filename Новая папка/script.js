let products = [];

// 50 товаров генерация
const names = [
"Крем жемчужный", "Сыворотка океана", "Гель чистоты", "Тонер утро", "Маска сияния",
"BB крем", "Скраб соляной", "Шампунь травяной", "Бальзам хвойный", "Мыло облепиховое"
];

for(let i=0;i<50;i++){
    let type = i%3;

    products.push({
        id:i,
        name:names[i%names.length] + " " + (i+1),
        price: 300 + i*20,
        category: i%3==0 ? "care" : i%3==1 ? "decor" : "clean",
        color: i%3==0 ? "blue" : i%3==1 ? "yellow" : "green"
    });
}

let cart = [];

function render(list){
    const box = document.getElementById("products");
    box.innerHTML = "";

    list.forEach(p=>{
        box.innerHTML += `
        <div class="card ${p.color}">
            <h3>${p.name}</h3>
            <p>${p.price} сом</p>
            <button onclick="add(${p.id})">В корзину</button>
        </div>`;
    });
}

function add(id){
    let item = products.find(p=>p.id===id);
    cart.push(item);
    renderCart();
}

function renderCart(){
    const box = document.getElementById("cartItems");
    box.innerHTML = "";

    let total = 0;

    cart.forEach(c=>{
        total += c.price;
        box.innerHTML += <p>${c.name} - ${c.price} сом</p>;
    });

    document.getElementById("total").innerText = "Итого: " + total + " сом";
}

function filter(type){
    if(type=="all") render(products);
    else render(products.filter(p=>p.category==type));
}

render(products);