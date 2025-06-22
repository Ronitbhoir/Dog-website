const API_URL = 'https://api.thedogapi.com/v1/images/search';

const API_KEY = 'obZ1D8owkzJVVVaMyq1SGgiszGugLjOX8lnXBskjz7HMryQISGqIOnYKq1dGwG6t'; 

function getDog() {
  fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY 
    }
  })
  .then(response => response.json())
  .then(data => {
    const imgUrl = data[0].url;
    document.getElementById('dog-image').src = imgUrl;
  })
  .catch(error => {
    console.error('Error fetching dog image:', error);
  });
}


window.onload = getDog;