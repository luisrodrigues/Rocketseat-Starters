/*
var xhr = new XMLHttpRequest();

// part 1 - get github api info
xhr.open('GET', 'https://api.github.com/users/luisrodrigues');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

// w/ Promises 

var myPromise = function () {
    return new Promise(function(resolve, reject) { // success, error
        var xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'https://api.github.com/users/luisrodrigues');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('error');
                }
            }
        }
    });
}


    if: 
        console.log(result); it returns "Pending"
        because it is executed first 


myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

// w/ Axios (async wrapper) - much simpler/readable

axios.get('https://api.github.com/users/luisrodrigues')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/

// challenge 1

var checkAge = function(age) {
    return new Promise(function(resolve, reject){
        setInterval(function(){
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

checkAge(20)
    .then(function(){
        console.log('Over 18 yo');
    })
    .catch(function(){
        console.warn('Younger than 18');
    });

// challenge 2

var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');
var listElement = document.querySelector('#app ul');

btnElement.onclick = function() {
    var username = inputElement.value;
    listElement.innerHTML = '';

    var itemElement = document.createElement('li');
    var itemText = document.createTextNode('Loading...');
            
    itemElement.appendChild(itemText);
    listElement.appendChild(itemElement);

    axios.get('https://api.github.com/users/' + username + '/repos')
        .then(function(response) {
            listElement.innerHTML = '';
            var repos = response.data || [];
            if (repos.length > 0) {
                for (repo of repos) {
                    var repoElement = document.createElement('li');
                    var repoNameText = document.createTextNode(repo.name);
                
                    repoElement.appendChild(repoNameText);
                    listElement.appendChild(repoElement); 
                }
            } else {
                var itemElement = document.createElement('li');
                var itemText = document.createTextNode('No repositories have been created');
                        
                itemElement.appendChild(itemText);
                listElement.appendChild(itemElement); 
            }       
        })
        .catch(function(error) {
            listElement.innerHTML = '';
            var itemElement = document.createElement('li');
            var itemText = document.createTextNode('User does not exist');
            
            itemElement.appendChild(itemText);
            listElement.appendChild(itemElement);
        });
}
