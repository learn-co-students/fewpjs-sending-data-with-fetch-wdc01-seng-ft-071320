const { config } = require("chai");

// Add your code here
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  // method: "POST" is missing from the object below
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });

    let myData = {
      name: "Christina",
      email: "chsohn"
    };


function submitData(name, email){
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
      }

        return fetch("http://localhost:3000/users", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                document.body.append(object.id);
            })
            .catch(function(error){
                let message = "Unauthorized Access";
                document.body.append(message)
            })
    }

    submitData("christina", "chsohn")

 
