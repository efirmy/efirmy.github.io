

// Retrieve the selected entry's data from local storage
const selectedEntry = JSON.parse(localStorage.getItem('selectedEntry'));

// Check if the data exists
if (selectedEntry) {
    // Display the data on the page
    document.getElementById('entry-title').textContent = selectedEntry.title;
    
    
    
    document.getElementById('entry-description').textContent = selectedEntry.content;
   
    document.getElementById('entry-image').src = selectedEntry.image;
} else {
    // Handle the case where no data is found (optional)
    console.error('No selected entry data found.');
}


