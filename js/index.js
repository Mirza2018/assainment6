const Phonesearch = () => {
    const searchField = document.getElementById('search-text').value;
    document.getElementById('search-text').value = '';

    // console.log(searchField);
    url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => phoneDisplay(data.data))


}

const phoneDisplay = (phones) => {
    const divcontainer = document.getElementById('display-div');
    divcontainer.textContent = ''
    console.log(phones);
    if (phones == '') {
        console.log('No result found');
        document.getElementById('no-result').style.display = "block";
    }
    else {
        phones.forEach(phone => {
            console.log(phone);
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <a href="#" class="btn btn-primary text-center">Get Details</a>
            </div>     
        `
            divcontainer.appendChild(div);

        });
    }
}


