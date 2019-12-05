/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/thericktastic")
  .then(response => {
    console.log(response.data);
    const newCard = cardCreator(response.data);
    entryPoint.appendChild(newCard);
  })

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

const followersArray = [
  'https://api.github.com/users/cholman', 
  'https://api.github.com/users/FreedomWriter', 
  'https://api.github.com/users/alexisdavalos', 
  'https://api.github.com/users/LoganSorensen', 
  'https://api.github.com/users/Issac909'
];

followersArray.forEach(object => {
  axios.get(object)
  .then(response => {
    console.log(response.data);
    const newCard = cardCreator(response.data);
    entryPoint.appendChild(newCard);
  })
})

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

function cardCreator(profile) {
  // define new elements
  const newCard = document.createElement("div"),
  profImg = document.createElement("img"),
  userInfo = document.createElement("div"),
  realName = document.createElement("h3"),
  handle = document.createElement("p"),
  location = document.createElement("p"),
  urlCard = document.createElement("p"),
  url = document.createElement("a"),
  followers = document.createElement("p"),
  following = document.createElement("p"),
  bio = document.createElement("p");

  // set class names
  newCard.classList.add("card");
  userInfo.classList.add("card-info");
  realName.classList.add("name");

  // set up structure of the elements
  newCard.appendChild(profImg);
  newCard.appendChild(userInfo);
  userInfo.appendChild(realName);
  userInfo.appendChild(handle);
  userInfo.appendChild(location);
  userInfo.appendChild(urlCard);

  userInfo.appendChild(followers);
  userInfo.appendChild(following);
  userInfo.appendChild(bio);

  // set text content
  profImg.src = profile.avatar_url;
  realName.textContent = profile.name;
  handle.textContent = profile.login;
  location.textContent = `Location: ${profile.location}`;
  
  // Adding Profile text to urlCard and appending the 'a' tag before assigning it the URL
  urlCard.textContent = `Profile: `;
  urlCard.appendChild(url);
  url.textContent = profile.html_url;

  // set text content (continued)
  followers.textContent = `Followers: ${profile.followers}`;
  following.textContent = `Following: ${profile.following}`;
  bio.textContent = `Bio: ${profile.bio}`;

  return newCard;
}

const entryPoint = document.querySelector(".cards");

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
