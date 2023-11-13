

// Retrieve the selected entry's data from local storage
// const selectedEntry = JSON.parse(localStorage.getItem('selectedEntry'));
// Example URL: https://www.example.com/page.html?param1=value1&param2=value2
//var queryString = window.location.search;
//var params = new URLSearchParams(queryString);
//= `article.html?title=${encodeURIComponent(selectedEntry.title)}&imagePath=${encodeURIComponent(selectedEntry.imagePath)}&indexpage=${index + 1}`;

fetch('entries_json_file.json')
    .then(response => response.json())
    .then(data => {
            var queryString = window.location.search;
            var params = new URLSearchParams(queryString);
            var elementFromJSON = 'title'
            var szukanytitle = 'title'
                 data.forEach(element => {
                        if (element.title == params.get('title')){
                                elementFromJSON = element;
                                console.log('znalazlem cie' + szukanytitle)
                        }
            });
            if(elementFromJSON){
                // Display the data on the page
                document.getElementById('entry-title').textContent = elementFromJSON.title;
                document.getElementById('data_wpis').textContent = elementFromJSON.data_wpisu;
                document.getElementById('entry-description').textContent = elementFromJSON.content;
                document.getElementById('entry-image').src = elementFromJSON.image;
            }else {
                // Handle the case where no data is found (optional)
                console.error('No selected entry data found.');
            }
           
    });


// var param1Value = params.get('title');
// var param2Value = params.get('param2');


// // Check if the data exists
// if (selectedEntry) {
//     // Display the data on the page
//     document.getElementById('entry-title').textContent = selectedEntry.title;
    
    
    
//     document.getElementById('entry-description').textContent = selectedEntry.content;
   
//     document.getElementById('entry-image').src = selectedEntry.image;
// } else {
//     // Handle the case where no data is found (optional)
//     console.error('No selected entry data found.');
// }


