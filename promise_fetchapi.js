// promises
// GET https://icanhazdadjoke.com/
const myjoke=document.querySelector('#jokerandom');
const btn=document.querySelector('#jokebtn');
const generateJoke=()=>{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    fetch('https://icanhazdadjoke.com',setHeader).then((res)=>res.json()).then((data)=>{
        myjoke.innerHTML=data.joke;
    })
    .catch((error)=>{
        console.log(error);
    })
}
btn.addEventListener('click',generateJoke);
generateJoke();