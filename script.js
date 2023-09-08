//GET https://icanhazdadjoke.com/j/<joke_id>
//GET https://icanhazdadjoke.com/
//  <div id="joke" class="joke"> loading....</div>
//<button id="jokeBtn" class="btn">Next joke</button>
const jokes= document.querySelector('#joke');
const jokeBtn= document.querySelector('#jokeBtn');

const generateJokes =()=>{
    console.log('clicked');                 
   const setHeader={
    headers: {
        Accept : "application/json"
    }
   }



fetch('https://icanhazdadjoke.com/',setHeader)
.then((res)=> res.json())
.then((data)=>{
    jokes.innerHTML= data.joke;
}).catch((error)=>{
    console.log(error); 
})
}





jokeBtn.addEventListener('click',generateJokes);
generateJokes();