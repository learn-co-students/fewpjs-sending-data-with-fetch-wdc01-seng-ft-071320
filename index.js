submitData("cla", "cla@gmail.com")
function submitData(name, email){
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify({name: name, email: email})
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(user => modifyDom(user.id))
    .catch(function(error){
        document.body.append(error.message)
    })
}


function modifyDom(id) {
    document.body.append(id)
}