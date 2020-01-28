/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// component 
function createComponents(obj) {
  let cardDiv = document.createElement('div')
  let imgSrc = document.createElement('img')
  let infoDiv = document.createElement('div')
  let h3 = document.createElement('h3')
  let username = document.createElement('p')
  let location = document.createElement('p')
  let profile = document.createElement('p')
  let link = document.createElement('a')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')

  // create class names
  cardDiv.classList.add('card')
  infoDiv.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')

  //create child relationships
  cardDiv.appendChild(imgSrc)
  infoDiv.appendChild(h3)
  infoDiv.appendChild(username)
  infoDiv.appendChild(location)
  profile.appendChild(link)
  infoDiv.appendChild(profile)
  infoDiv.appendChild(followers)
  infoDiv.appendChild(following)
  infoDiv.appendChild(bio)
  cardDiv.appendChild(infoDiv)

  // add content
  imgSrc.src = obj.data.avatar_url;
  h3.textContent = 'Sable Madison Childs';
  username.textContent = obj.data.login;
  location.textContent = obj.data.location;
  link.textContent = obj.data.url;
  followers.textContent = obj.data.followers;
  following.textContent = obj.data.following;
  bio.textContent = obj.data.bio;

  return cardDiv;
}

//select parent element
const parentDOMElement = document.querySelector('.cards')

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


//get request
const axiosData = axios.get(' https://api.github.com/users/sablemadison')

axiosData
 .then( dataObj => {
console.log('data', dataObj)
const newCard = createComponents(dataObj)
parentDOMElement.appendChild(newCard)
 })
 .catch(error => {
console.log('error', error)
 })