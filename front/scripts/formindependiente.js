const { response } = require("../back/src/server");

const URL = 'http://localhost:3000/movies'

const title = document.getElementById('titulo');
const year = document.getElementById('anio');
const director = document.getElementById('director');
const duration = document.getElementById('duracion');
const rate = document.getElementById('calificacion');
const genre = document.getElementById('genero');
const image = document.getElementById('poster');


const buttonReset = document.getElementById('reset');
const buttonSend = document.getElementById('send');
const formSend = document.getElementById('peliculaForm')

const sendData = () => {
    const data = {
        title: title.value,
        year: year.value,
        director: director.value,
        duration: duration.value,
        rate: rate.value,
        genre: genre.value,
        image: image.value,
    };
    console.log("dta", data);

    fetch(URL, {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : 'application/json'
        }
    })
    .then((response) => console.log('response', response))
    .catch((error) => console.log(error));
    
};

const handleReset = () =>{
    title.value = "";
    year.value = "";
    director.value ="";
    duration.value = "";
    rate.value = "";
    genre.value = "";
    image.value = "";
};

buttonReset.addEventListener("click",()=> handleReset());
buttonSend.addEventListener("click",()=>{
    sendData()
});
formSend.addEventListener("submit", (e)=>{
    console.log('quien es e', e)
    e.preventDefault()
    sendData()
})

