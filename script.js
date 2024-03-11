const req = new XMLHttpRequest();

req.open('get', 'data.json'); //για να το πάρουμε από τον σέρβερ 

req.responseType = 'json'

req.addEventListener('readystatechange', () => {
    if(req.readyState === XMLHttpRequest.DONE){
        switch(req.status){
            case 200:
                const ul = document.getElementById('info'); // παίρνουμε τη λίστα από τη σελίδα που θέλουμε να εμφανιστεί.
                for( let car of req.response){
                    const li = document.createElement('li');
                    li.innerText = `${car.brand} : ${car.model}`;
                    ul.appendChild(li); //για να μη σβηστεί το προηγούμενο και απλά να προσθετει από κάτω στη λίστα.
                }


            case 404:
                console.error('Not Found');
                break;
        }
    }
}); // πρέπει να γίνει αυτό και καλά να λεχει διαβάσει το ξσον με επιτυχία

req.send();

