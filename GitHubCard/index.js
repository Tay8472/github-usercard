/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let cards = document.querySelector(".cards");
const followersArray = [
  "tay8472",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach((item) => {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then(function (response) {
      cards.appendChild(cardCreator(response.data));
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

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

let cardCreator = function (cardData) {
  let card = document.createElement("div");
  card.classList.add("card");
  //1BREAK CHILDREN//
  let image = document.createElement("img");

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  //2BREAK CHILDREN//
  let name1 = document.createElement("h3");
  name1.classList.add("name");

  let username = document.createElement("p");
  username.classList.add("username");

  let location1 = document.createElement("p");

  let profile = document.createElement("p");
  //3BREAK CHILDREN//
  let aProfile = document.createElement("a");
  profile.appendChild(aProfile);
  //3BREAK CHILDREN//
  let followers1 = document.createElement("p");

  let following1 = document.createElement("p");

  let bio1 = document.createElement("p");

  cardInfo.appendChild(name1);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location1);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers1);
  cardInfo.appendChild(following1);
  cardInfo.appendChild(bio1);
  //2BREAK CHILDREN//
  card.appendChild(image);
  card.appendChild(cardInfo);

  image.src = cardData.avatar_url;
  name1.textContent = cardData.name;
  username.textContent = cardData.login;
  location1.textContent = cardData.location;
  aProfile.href = cardData.url;
  aProfile.textContent = cardData.url;
  followers1.textContent = cardData.followers;
  following1.textContent = cardData.following;
  bio1.textContent = cardData.bio;

  return card;
};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
