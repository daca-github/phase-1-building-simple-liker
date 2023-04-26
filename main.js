// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");
errorModal.classList.add("hidden");

document.addEventListener('DOMContentLoaded', () => {
  const likeGlyphs = document.querySelectorAll('.like-glyph');
  for (let glyph of likeGlyphs) {
    glyph.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (glyph.innerHTML === EMPTY_HEART) {
            glyph.innerHTML = FULL_HEART;
            glyph.classList.add('activated-heart');
          } else {
            glyph.innerHTML = EMPTY_HEART;
            glyph.classList.remove('activated-heart');
          }
        })
        .catch(() => {
          errorModal.classList.remove('hidden');
          const errorMessage = document.querySelector('#modal-message');
          errorMessage.innerText = "Server error. Please try again.";
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 1000);
        });
    });
  }
});


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
