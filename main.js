fetch('https://us-central1-sigma-crawler-374104.cloudfunctions.net/joke', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        document.querySelector('.joke-gcp').innerHTML = data.joke;
        return fetch('https://us-central1-sigma-crawler-374104.cloudfunctions.net/joke', {
            headers: {
                'Accept': 'application/json'
            }
        })
    })


// API call to get random jokes
fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        // Set each joke to the corresponding section
        document.querySelector('.joke-1').innerHTML = data.joke;
        return fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('.joke-2').innerHTML = data.joke;
        return fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('.joke-3').innerHTML = data.joke;
        return fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
    })
    .catch(error => console.error(error));