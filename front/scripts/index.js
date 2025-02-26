const axios = require  ('axios')

const renderCards = require("./renderCards");

//const URL = 'https://students-api.up.railway.app/movies'
const URL = 'http://localhost:3000/movies'
let container = document.getElementById('movie-container');


//axios(URL)
//    .then((response) => renderCards(response.data))
//    .cath((err) => console.log ("error",err));

const test = async ()=>{
    console.log('entramos al test');

    const response = await axios(URL)
    renderCards(response.data)
    console.log ('response',response);

}

test()

const title = document.getElementById('titulo');
const year = document.getElementById('anio');
const director = document.getElementById('director');
const duration = document.getElementById('duracion');
const rate = document.getElementById('calificacion');
const genre = document.getElementById('genero');
const poster = document.getElementById('poster');


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
        genre: genre?.value?.split(', '),
        poster: poster.value,
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
    poster.value = "";
};

buttonReset?.addEventListener("click",()=> handleReset());

buttonSend?.addEventListener("click",()=>{
    sendData()
});
formSend?.addEventListener("submit", (e)=>{
    e.preventDefault()
    sendData()
});