// Add your code here

    let url = "http://localhost:3000/users"
    function submitData(name, email) {
        let config = {
            method: "POST",
            headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    };
    

    
    
    
    return fetch(url, config)
    .then(resp => resp.json())
    .then(user =>  {
        document.body.innerHTML =` <div> ${user.id} </div>`
    })
    .catch(function(error) {
       document.body.innerHTML = `<div> ${error.message} </div>`;
    })
    
    
    }

