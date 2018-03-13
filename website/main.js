//XML-HTTP-REQUEST

//event funtion
function reqListener () {
    let requestData = (XMLReq.response);
    sortData(requestData)
}

//XML request
let XMLReq = new XMLHttpRequest();
XMLReq.addEventListener("load", reqListener);
XMLReq.open("GET", "https://jsonplaceholder.typicode.com/users");
XMLReq.responseType = "json";
XMLReq.send();

//pulls elements from JSON into an array
function sortData(data){
    emails = new Array();
    for (var i = 0; i < 10; i++){
        emails.push("<br>" + data[i].email)
    }
//alphabetize
    emails.sort()
//writes output
    document.write("User emails from XMLHttpRequest: <br>")
    document.write(emails) 
}





// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response) {
//     return response.json();
// })
// .then(function(myJson) {
//     fetchSort(myJson);
    
// });

// //pulls elements from JSON into an array
// function fetchSort(data){
//     users = new Array();
//     for (var i = 0; i < 10; i++){
//         users.push("<br>" + data[i].username)
//     }
// //sort by length
//     users.sort(function(a, b){
//     return a.length - b.length;
//     });
// //writes output
//     document.write("<br><br><br>Usernames from fetch request: <br>");
//     document.write(users);
// }