
// const fetchVerseOfDay = () =>
// {
//     // GET /image.jpg
//     Vue.$http.get('/john%3:16', {responseType: 'json'}).then(response => {
    
//         // resolve to Blob
//         return response.json();
    
//     }).then(json => {
//         // use image Blob
//     });
// }

const fetchVerseOfDay = () =>
{

    // GET request
    this.$http.get('http://bible-api.com/john%203:16', function (data, status, request) {

        // set data on vm
        this.$set('origin', data)

    }).error(function (data, status, request) {
        // handle error
    })
}

export {fetchVerseOfDay};