const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const status = await res.json();
    const phones = status.data.tools;
    displayPhones(phones);
}

const phoneContainer = document.getElementById('phone-container')
const displayPhones = phones =>{
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 mb-8 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h1 class="text-extrabold text-3xl">Features</h1>
            <p>1. ${phone.features[0]}</p>
            <p>2. ${phone.features[1]}</p>
            <p>3. ${phone.features[2]}</p>
            <hr>
            <h2 class="card-title">${phone.name}</h2>
            <p>⏲${phone.published_in}</p>
            <div class="card-actions justify-end">
                <button class="btn "><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        `;

        phoneContainer.appendChild(phoneCard)
    })
}

loadPhone()

