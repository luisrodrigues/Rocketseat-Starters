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

/*
    if: 
        console.log(result); it returns "Pending"
        because it is executed first 
*/

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


