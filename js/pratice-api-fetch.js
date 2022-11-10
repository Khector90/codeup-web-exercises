

const doggoUrl = 'https://dog.ceo/api/breeds/image/random';


fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.text())
.then(text => console.log(text))


