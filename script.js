// let person = {
//     'firstname': 'Nicola',
//     'age': 41,
//     'hardSkills': ['HTML', 'CSS', 'Javascript'],
//     'hair': false,
//     'sayHello': function() {
//         return `Ciao a tutti mi chiamo ${this.firstname}`;
//     }
// }

// // Accedere ad una proprieta' di un oggetto
// console.log(person.firstname);

// person.age = 18;

// console.log(person.age);

// // Accedere ad un metodo di un oggetto
// console.log( person.sayHello() );


// // DRY: Don't Repeat Your Self

// let num1 = 3;
// let num2 = 5;

// // Dichiarazione, parametri FORMALI
function sum(numero1, numero2) {
    let result = numero1 + numero2;

    return result;
}

// Arrow function
// let sum = (numero1, numero2) => {
//     let result = numero1 + numero2;

//     return result;
// }


// // Invocazione, parametri REALI
// console.log( sum(100, 200) );
// console.log( sum(5, 5) );
// console.log( sum(9, 9) );
// console.log( sum(1, 1) );

// DOM: Document Object Model
// console.dir(document);

// Catturare un elemento della pagina HTML
let h1 = document.querySelector('h1');

// Cambiare lo stile CSS di un elemento HTML
// h1.style.color = 'red';

// Aggiungere o rimuovere una classe CSS
h1.classList.add('border');

// Rimuovere una classe CSS
h1.classList.remove('border');

// Aggiunge o rimuove una classe CSS
h1.classList.toggle('bg-lime');

// Aggiungere del contenuto HTML
h1.innerHTML = `Benvenuti a tutti`;

// Creare un NUOVO elemento HTML:
// 1- catturare il contenitore
// 2- creare un nuovo elemento HTML
// 3- riempire questo nuovo elemento
// 4- inserire il nuovo elemento creato nel contenitore
let container = document.querySelector('#container');

let p = document.createElement('p');

p.innerHTML = 'Breve descrizione';

container.appendChild(p);

console.log(p);

console.log( Math.floor(Math.random() * (100 - 1) + 1));


// Associare un evento ad un elemento della pagina
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    // rgba: Red Green Blue Alpha
    // color: rgb();
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);
    // h1.style.color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

let title = document.querySelector('#title');
let btnArticle = document.querySelector('#btnArticle');
let sectionArticle = document.querySelector('#section-article');
let inputColor = document.querySelector('#inputColor');

btnArticle.addEventListener('click', () => {
    // console.log( title.value );
    console.log( inputColor.value );
    
    let article = document.createElement('article');
    article.style.backgroundColor = inputColor.value;

    article.innerHTML = `
        <h2>${title.value}</h2>
        <a href="">${title.value}</a>
    `;
    sectionArticle.appendChild(article);
})




