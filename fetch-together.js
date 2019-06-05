// fetch user data from jsonplaceholder
//generate a user list on the web page
//add a click even to the body that will
//refresh the list each time with a random
//number of users

//var uri = require('./users.JSON');
const uri = 'http://jsonplaceholder.typicode.com/users';
//const uri = 'http://localhost:3000/users';
//const uri = require('.user.json');

let req = new Request(uri, {
    method: 'GET',
    mode: 'cors'
});

fetch(req)
    .then( ( response )=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }    
    })
    .then ( (jsonData) =>{
        //console.log(jsonData)
        // for each user create a li
            let ul = document.querySelector('#users');
            let df = new DocumentFragment();
            jsonData.forEach( (oneuser) =>{     
                let li= document.createElement('li');
                let ppict= document.createElement('p');
                let pn = document.createElement('p');
                let pue = document.createElement('p');
                let pus = document.createElement('p');


                ppict.textContent = 'This is where the picture goes';
                pn.textContent = oneuser.name;
                pue.textContent= ''.concat(oneuser.username, ' - ', oneuser.email);
                pus.textContent= 'Professor Strumpff is.... (more)';

                pn.className = 'name';  //overwrites the full content of name class
                pue.classList.add('info'); // appends the content of class name
                pus.classList.add('pus');
                ppict.classList.add('ppict');
                
                li.appendChild(ppict);
                
                li.appendChild(pn);  //defines css style to pn
                li.appendChild(pue); // defines css style to pne
                li.appendChild(pus);

                df.appendChild(li); // append to the  html page
        });
        ul.appendChild(df);
    })
    .catch( ( err )=>{
        console.log('ERROR: ', err.message);
    });