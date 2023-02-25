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
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <a href="#" onclick="phoneDetails ('${phone.slug}')" class="btn btn-primary text-center">Get Details</a>
            </div>     
        `
            divcontainer.appendChild(div);

        });
    }
}


const phoneDetails = (data) => {
    url = ` https://openapi.programming-hero.com/api/phone/${data}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => watchDetails(data.data))

}

const watchDetails = (phone) => {
    console.log(phone);
    const divcontainer = document.getElementById('one-details');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
   <img width="18rem"  src="${phone.image}" class="card-img-top" alt="...">
   <h5 class="card-title">Name: ${phone.name}</h5>
   <p class="card-text">Release Date: ${phone.releaseDate ? phone.releaseDate : 'Release date not found!!'}</p> 
   <P>Display Size: ${phone.mainFeatures.displaySize}</p> 
   <P>Chipset: ${phone.mainFeatures.chipSet}</p> 
   <P>Memory: ${phone.mainFeatures.memory}</p> 
   <P>Storage: ${phone.mainFeatures.storage}</p> 
   <P>Sensos: ${phone.mainFeatures.sensors}</p>  
   `
    divcontainer.appendChild(div);
}

