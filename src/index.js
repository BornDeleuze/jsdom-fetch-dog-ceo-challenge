console.log('%c HI', 'color: firebrick')


fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => console.log(data));


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"