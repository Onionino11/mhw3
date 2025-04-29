const promoScopri = document.querySelector('#promo-scopri');
const popup = document.querySelector('#modal-view');
    
function showPopup() {
    popup.classList.remove('hidden');
    
    

    const banneroffert = document.createElement('div');
    banneroffert.classList.add('popup-content');

    const banneroffertTitle = document.createElement('h3');
    banneroffertTitle.textContent = 'Offerta speciale';
    banneroffertTitle.classList.add('popup-title');
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');

    const closeIcon = document.createElement('img');
    closeIcon.src = 'xbianca.svg';
    closeIcon.classList.add('close-icon');
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener('click', removePopup);

    function removePopup() {
        popup.removeChild(banneroffert);
        popup.classList.add('hidden');
        promoScopri.addEventListener('click', showPopup);
    }

    banneroffertTitle.appendChild(closeButton);
    banneroffert.appendChild(banneroffertTitle);
    
    const offerte= data.offerte;

    for (let index = 0; index < offerte.length; index++) {
        const element = offerte[index];
        const offertElement = document.createElement('div');
        offertElement.classList.add('offerta-element');
        const offertElementImg = document.createElement('img');
        offertElementImg.src = element.link;
        offertElementImg.classList.add('offerta-img');
        offertElement.appendChild(offertElementImg);

        const offertElementValidity = document.createElement('div');
        offertElementValidity.classList.add('offerta-validity');
        const offertElementValidityText = document.createElement('p');
        offertElementValidityText.classList.add('offerta-validity-text');
        offertElementValidityText.textContent = element.validita;
        offertElementValidity.appendChild(offertElementValidityText);
        offertElement.appendChild(offertElementValidity);

        const offertElementTitle = document.createElement('h3');
        offertElementTitle.textContent = element.Titolo;
        offertElementTitle.classList.add('offerta-title');
        offertElement.appendChild(offertElementTitle);

        const offertElementText = document.createElement('p');
        offertElementText.textContent = element.text;
        offertElementText.classList.add('offerta-text');
        offertElement.appendChild(offertElementText);

        const offertElementdisponibile = document.createElement('div');
        offertElementdisponibile.classList.add('offerta-disponibile');

        const offertElementdisponibileText = document.createElement('p');
        offertElementdisponibileText.textContent = 'Disponibile per:';
        offertElementdisponibile.appendChild(offertElementdisponibileText);

        const offertElementdisponibileTag = document.createElement('div');
        offertElementdisponibileTag.classList.add('bestseller');
        const offertElementdisponibileTagText = document.createElement('p');
        offertElementdisponibileTagText.textContent = element.disponibile;
        offertElementdisponibileTag.appendChild(offertElementdisponibileTagText);
        offertElementdisponibile.appendChild(offertElementdisponibileTag);
        offertElement.appendChild(offertElementdisponibile);

        banneroffert.appendChild(offertElement);
    }
    popup.appendChild(banneroffert);
    document.body.appendChild(popup);

    promoScopri.removeEventListener('click', showPopup);

}

promoScopri.addEventListener('click', showPopup);


















const languageSelector = document.querySelector('#nav-flag');
const menu = document.querySelector('#language-menu');
function displayLanguageMenu() {
    const element = document.querySelector('#language-menu');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        console.log('Menu lingua mostrato');
    } else {
        element.classList.add('hidden');
        console.log('Menu lingua nascosto da click');
    }
}

function hideLanguageMenu() {
    const element = document.querySelector('#language-menu');
    element.classList.add('hidden');
    console.log('Menu lingua nascosto da blur');
}

languageSelector.addEventListener('click',  displayLanguageMenu);
languageSelector.addEventListener('blur', hideLanguageMenu);

menu.addEventListener('mousedown', preventDefault);
function preventDefault(event){
    event.preventDefault();
}



let linguaAttuale = languageSelector.dataset.linguaattuale;
function setLinguaAttuale() {
    
    if (linguaAttuale === 'Italiano') {
        let linguaAttiva = menu.querySelector('#Italiano');
        linguaAttiva.classList.add('linguaattuale');
        languageSelector.querySelector('img').src = 'Flag_of_Italy.svg';
    } else if (linguaAttuale === 'English') {
        let linguaAttiva = menu.querySelector('#English');
        linguaAttiva.classList.add('linguaattuale');
        languageSelector.querySelector('img').src = 'Flag_of_the_United_Kingdom.svg';
    }
}
setLinguaAttuale();

const lingue = menu.querySelectorAll('.lingua'); 
for (const lingua of lingue) {
    lingua.addEventListener('click', cambiaLingua);
    console.log(lingua.dataset.value);
}

function cambiaLingua(event) {
    const linguaSelezionata = event.currentTarget.dataset.value; 
    console.log("cambiaLingua:", linguaSelezionata);
    let linguaAttiva = menu.querySelector('#'+linguaAttuale);
    linguaAttiva.classList.remove('linguaattuale');

    if (linguaSelezionata === 'Italiano') {
        linguaAttuale = 'Italiano';
        console.log(linguaAttuale);
        setLinguaAttuale();
    } else if (linguaSelezionata === 'English') {
        linguaAttuale = 'English';
        console.log(linguaAttuale);
        setLinguaAttuale();
    }
}









const navCampanella = document.querySelector('#nav-campanella');
function displayletterbox() {
    const element = document.querySelector('#letterbox');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function hideletterbox() {
    const element = document.querySelector('#letterbox');
    element.classList.add('hidden');
   
}
navCampanella.addEventListener('click', displayletterbox);
navCampanella.addEventListener('blur',  hideletterbox);













function createItem(elemento) {
    const panelItem = document.createElement('div');
    panelItem.classList.add('panel-item', 'boxed');
    panelItem.dataset.prodotto = elemento.prodotto || 0;
    panelItem.dataset.immagine = elemento.immagine;
    panelItem.dataset.nome = elemento.nome;
    panelItem.dataset.bestseller = elemento.bestseller ? 1 : 0;
    panelItem.dataset.burger = elemento.burger ? 1 : 0;
    panelItem.dataset.chips = elemento.chips ? 1 : 0;
    panelItem.dataset.drink = elemento.drink ? 1 : 0;
    panelItem.dataset.descrizione = elemento.descrizione;
    panelItem.dataset.nProdotti = elemento.prodotti;
    panelItem.dataset.prezzo= elemento.prezzo;


    const img = document.createElement('img');
    img.classList.add('item-img');
    img.src = elemento.immagine || 'default.png';
    panelItem.appendChild(img);


    const itemBody = document.createElement('div');
    itemBody.classList.add('item-body');


    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');

    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-titolo');

    const itemCategory = document.createElement('a');
    itemCategory.classList.add('item-category');
    itemCategory.href = '#';
    itemCategory.textContent = elemento.nome;

    const opzionali = document.createElement('div');
    opzionali.classList.add('opzionali');

    if (elemento.bestseller) {
        const bestseller = document.createElement('div');
        bestseller.classList.add('bestseller');
        bestseller.textContent = 'Best seller';
        opzionali.appendChild(bestseller);
    }

    if (elemento.burger) {
        const burgerIcon = document.createElement('img');
        burgerIcon.classList.add('burger', 'icon');
        burgerIcon.src = 'burger.svg';
        opzionali.appendChild(burgerIcon);
    }

    if (elemento.chips) {
        const chipsIcon = document.createElement('img');
        chipsIcon.classList.add('chips', 'icon');
        chipsIcon.src = 'chips.svg';
        opzionali.appendChild(chipsIcon);
    }

    if (elemento.drink) {
        const drinkIcon = document.createElement('img');
        drinkIcon.classList.add('drink', 'icon');
        drinkIcon.src = 'drink.svg';
        opzionali.appendChild(drinkIcon);
    }

    itemTitle.appendChild(itemCategory);
    itemTitle.appendChild(opzionali);
    itemDescription.appendChild(itemTitle);
    itemDescription.appendChild(document.createTextNode(elemento.descrizione));
    itemBody.appendChild(itemDescription);


    const itemButton = document.createElement('div');
    itemButton.classList.add('item-button');

    const prodottiLink = document.createElement('a');
    prodottiLink.href = '#';
    itemButton.appendChild(prodottiLink);

    const prodottiText = document.createElement('strong');
   
    if (elemento.prodotti>0) {
        prodottiText.classList.add('N-Prodotti');
        prodottiText.textContent = elemento.prodotti + ' prodotti';
        prodottiLink.appendChild(prodottiText);

        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = '>';
        itemButton.appendChild(square);
    }
    else{
        prodottiText.classList.add('N-Prodotti');
        prodottiText.textContent = elemento.prezzo + '€';
        prodottiLink.appendChild(prodottiText);
    
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = '+';
        itemButton.appendChild(square);
    }


    
    itemBody.appendChild(itemButton);
    if (elemento.nome === "MALU BURGER (SOLO PANINO)") {
        itemButton.addEventListener('click', createHamburger); 
    }
    else if(elemento.prezzo>0){
        // itemButton.addEventListener('click', addtoCart); 
    }
   

    panelItem.appendChild(itemBody);

    return panelItem;
}

const panelBody = document.querySelector('#panel-body');
for (const elemento of data.categorie) {
    const panelItem = createItem(elemento);
    panelBody.appendChild(panelItem);
}





function createHamburger() {
    hideItemsCategoria(); 
    const query = 'hamburger';
    let number = 5;
    const panelItems = document.querySelectorAll('#panel-body .panel-item');
    for (const item of panelItems) {
        if (item.dataset.nome === "MALU BURGER (SOLO PANINO)") {
            number = item.dataset.nProdotti;
            break; 
        }
    }
    // const apiKey = 'La mia chiave sta nel file config.js che non pubblico su github';

    fetch('https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&number=' + number + '&apiKey=' + apiKey)
        .then(onSuccess, onError)
        .then(onJsonItems);
}


function onSuccess(response) {
    if (!response.ok) {  
        throw new Error('Errore nella risposta: ' + response.status);
    }
    return response.json();
}

function onError(error) {
    console.error('Errore nella richiesta:', error);
}

function onJsonItems(data) {
    console.log('Risultato della fetch:', data); 
    const Results= data.results
    for (item of Results) {
        const element = {
            prodotto: 1,
            nome: item.title,
            descrizione: 'No description',
            immagine: item.image,
            burger: true,
            bestseller: false,
            prezzo: getRandomFloat(7,12)
        };
        console.log(element);
        const panelItem = createItem(element);
        panelBody.appendChild(panelItem);
    }
}


function hideItemsCategoria() {
    console.log('hideItemsCategoria');
    const panelItems = document.querySelectorAll('#panel-body .panel-item');
    for (const item of panelItems) {
        console.log(item.dataset.nome);
        if (item.dataset.prodotto == 0) {
            item.classList.add('hidden');
        }
    }
}

function getRandomFloat(min, max) {
    return ((Math.random() * (max - min) + min).toFixed(1)+'0');
}







function orariGiornalieri() {
    fetch('https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="fast_food"]["name"="Maluburger"];out;')
        .then(onSuccess, onError)
        .then(onJsonOrariGiornalieri);
}


function onJsonOrariGiornalieri(data) {
    console.log('Risultato della fetch:', data);

    if (data.elements.length > 0) {
        const place = data.elements[0];
        const openingHours = place.tags.opening_hours; 
        const phone = place.tags.phone;
        const website = place.tags.website;

        console.log('Orari di apertura:', openingHours);

    
        const giorniSettimana = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const oggi = new Date().getDay();
        const giornoCorrente = giorniSettimana[oggi]; 
        const orariArray= parseOpeningHours(openingHours);
        console.log(orariArray);
        for (const orario of orariArray) {
            if (orario.giorno.trim() === giornoCorrente.trim()) {
                orarioOggi = orario.orario;
            }
        }
        console.log('Orari di apertura per oggi:',giornoCorrente, orarioOggi);

        const orario = document.querySelector('#orario');
        orario.textContent = orarioOggi;

        const telefono = document.querySelector('#telefono');
        telefono.textContent = phone;

        const sito = document.querySelector('#sito');
        sito.textContent = website;

    } else {
        console.log('Nessun luogo trovato con i criteri specificati.');
    }
}

function parseOpeningHours(openingHours) {
    const giorniSettimana = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const result = [];


    const orari = openingHours.split(';');

    for (const orario of orari) {
        const [giorni, ore] = orario.trim().split(' ');

  
        const giorniEspansi = [];
        if (giorni.includes('-')) {
            const [inizio, fine] = giorni.split('-');
            const startIndex = giorniSettimana.indexOf(inizio);
            const endIndex = giorniSettimana.indexOf(fine);

            for (let i = startIndex; i <= endIndex; i++) {
                giorniEspansi.push(giorniSettimana[i]);
            }
        } else {
            for (const giorno of giorni.split(',')) {
                giorniEspansi.push(giorno);
            }
        }


        for (const giorno of giorniEspansi) {
            result.push({ giorno, orario: ore });
        }
    }

    return result;
}


orariGiornalieri();

