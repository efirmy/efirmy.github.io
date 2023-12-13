
const dataContainer = document.getElementById('data-container');
fetch('entries_json_file.json')
    .then(response => response.json())
    .then(data => {
        // Iterate through the data and create HTML elements to display it
       
            const entryDiv = document.getElementById("app");
            console.log("1")
            var queryString = window.location.search;
            var params = new URLSearchParams(queryString);
            var elementFromJSON = params.get('tagname');
            if(elementFromJSON != 'alltags'){
                 data = data.filter( element => element.tag ==elementFromJSON)
            }
           
            entryDiv.innerHTML =
            
            `
            <ul id="entryList" class="news__list">${data.map(function(oneEntry, index){
                    return`
                    
                        <li class="news__item" data-show=${oneEntry.tag}>
                            <div class="news__item--img" style="background-image: url(&#39; ${oneEntry.image} &#39;);"></div>
                            <div class="news__content">
                              <div class="news__content--main">
                                <h3 class="news__item--title font-size-20-22 weight-300">
                                ${oneEntry.title}</h3>
                                <p>${oneEntry.content} […]</p>
                              </div>
                              <div class="news__content--footer">
                                <span class="news__item--date">${oneEntry.data_wpisu}</span>
                                <a class="news__item--link" data-entry-index="${index}" 
                                href="article.html?title=${encodeURIComponent(oneEntry.title)}" >Czytaj dalej</a>
                              </div>
                              </div>
                          </li> 
                             `
                 }).join("")}</ul>`
                 
                 const readMoreButtons = document.querySelectorAll('.news__item--link');
     readMoreButtons.forEach(button => {
     button.addEventListener('click', () => {
        // Get the index of the associated entry from the data-entry-index attribute
        const index = button.getAttribute('data-entry-index');
        
        // Get the selected entry's data
        const selectedEntry = data[index];
        

        // Store the selected entry's data in local storage
        localStorage.setItem('selectedEntry', JSON.stringify(selectedEntry));

        // Open a new page with detailed information for the clicked entry
        window.location.href = `article.html?title=${encodeURIComponent(selectedEntry.title)}`;
     });
     });  
           
            dataContainer.appendChild(entryDiv);
     
      })
     .catch(error => {
        console.error('Error loading JSON data:', error);
      });




