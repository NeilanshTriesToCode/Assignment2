// file using Wikipedia API to search for issue
const request = require('request');  // module to facilitate HTTP requests
// function to retrieve Wikipedia links
// topic is the health issue received from the user
function getWikiInfo(topic){
    var searchFor = topic;
    var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search="+ ${searchFor} +"&limit=5&format=json`;
    var info = '';
    
    // this url is the Wikipedia API which will be used by the request module. It limits results to 3
    // the request module will send an HTTP request using the url and retrieve the results
    // results retrieved are in JSON format, and would have to be parsed

    return new Promise((resolve, reject) =>{
        // sending HTTP request
        let r = request(url, function(error, response, body){
            if(error){
                console.log("can't connect to the server");
                return null;
            }
            else{
                //console.log('body: \n', body);    // prints the HTML body content
                //console.log('\n');   
                info = "Here are some links I found online: <br>";
                var wiki_info = JSON.parse(body);
                for (var i = 0; i < wiki_info[1].length; i++) {  
                    info = info + `${wiki_info[1][i]}  -- <a href=\"${wiki_info[3][i]}\">Link</a>` + "<br>";
                }
                //console.log(info);
                resolve(info);
            }
        });     
    });      
}

module.exports = {getWikiInfo};

// testing
/*let info;
getWikiInfo().then(res => { 
    info = res;
    //console.log('hi');
    console.log(info); 
}); */

