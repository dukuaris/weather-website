const weatherForm = document.querySelector('form');
const search = document.getElementById('location');
const message = document.getElementById('message');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.innerText = data.error
            } else {
                message.innerHTML = `${data.location}<br><br>${data.forecast}`
            }
        })
    })
})


