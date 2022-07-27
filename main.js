// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMod = document.querySelector("#modal");
errorMod.classList.add("hidden");
let likes = document.querySelector(".like");
console.log(likes);

const liker = document.querySelectorAll('.like-glyph');
liker.forEach(like => {
  console.log(like);
  like.addEventListener('click', function(event) {
    if(like.classList.contains('activated-heart')) {
      like.textContent = EMPTY_HEART;
      like.classList.remove('activated-heart')
    }
    else {
      mimicServerCall().then(function(resp) {
        console.log(resp);
        like.textContent = FULL_HEART;
        like.classList.add('activated-heart');
      }).catch(function(error) {
        console.log(error);
        errorMod.classList.remove("hidden");
        errorMod.textContent = error.mesage;
        window.setTimeout(errorMod.classList.add("hidden"),3000);
      })
      //like.textContent = FULL_HEART;
      //like.classList.add('activated-heart');
    }
    
  })
})

//let liker = document.getElementsByClassName("like-glyph");
//liker is now an HTML collection of all the hearts 
/*
console.log(liker);
//liker.forEach(handleLike);
for(i = 0; i < liker.length; i++) {
  console.log(liker.length);
  liker[i].addEventListener('click', function(event) {
    console.log(liker[i]);
  })
}
*/
/*    if(liker[i].classList.contains('activated-heart')) {
      console.log('full heart');
    }
    else {
      console.log('empty heart');
    }
    mimicServerCall().then((resp) => {
      console.log('I was clicked');
      console.log(i);
    })
    .catch(function(error) {
      errorMod.classList.remove("hidden");
      errorMod.textContent = error.mesage;
      window.setTimeout(errorMod.classList.add("hidden"),3000);
    });
  });
}
*/
/*
for(like of liker) {
  console.log(like);
  console.log(like.textContent);
  like.addEventListener('click', function(event) {
    mimicServerCall().then(() => {
      if(like.classList.contains('activated-heart')) {
        like.textContent = EMPTY_HEART;
        like.classList.remove('activated-heart')
      }
      else {
        like.textContent = FULL_HEART;
        like.classList.add('activated-heart');
      }
    })
    .catch(function(error) {
      errorMod.classList.remove("hidden");
      errorMod.textContent = error.mesage;
      window.setTimeout(errorMod.classList.add("hidden"),3000);
    })
  })
}
*/
/*
  function handleLike(like) {
    like.addEventListener('click', function(event) {
      mimicServerCall().then(() => {
        if(liker.classList.contains('activated-heart')) {
          liker.textContent = EMPTY_HEART;
          liker.classList.remove('activated-heart')
        }
        else {
          liker.textContent = FULL_HEART;
          liker.classList.add('activated-heart');
        }
      })
      .catch(function(error) {
        errorMod.classList.remove("hidden");
        errorMod.textContent = error.mesage;
        window.setTimeout(errorMod.classList.add("hidden"),3000);
      })
    })
  }
  */



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
