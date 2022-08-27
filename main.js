// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector('div#modal').className = 'hidden'
mimicServerCall()
.then((response) => {
  return response})
.catch((error) => {
  const element = document.querySelector('div#modal')
  element.classList.remove('hidden');})
  setTimeout(() => {
    document.querySelector('div#modal').className = 'hidden';
    const fullHeart = document.querySelector('.like-glyph');
    fullHeart.innerHTML = FULL_HEART;
    document.querySelector('.like-glyph').style.color = 'red'
    
    fullHeart.addEventListener('click', ()=> {
      fullHeart.innerHTML = EMPTY_HEART;
    })
  }, 3000);



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
