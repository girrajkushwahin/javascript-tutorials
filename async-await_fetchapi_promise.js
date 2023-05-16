const myjoke=document.querySelector('#jokerandom');
const btn=document.querySelector('#jokebtn');
const generateJoke= async ()=>{
    const setHeader={
        headers:{
            Accept:"application/json"
        }
    }
    try{
    const res= await fetch('https://icanhazdadjoke.com',setHeader);
    const data= await res.json();
    myjoke.innerHTML=data.joke;
    }catch(error){
        console.log(error);
    }
}
btn.addEventListener('click',generateJoke);
generateJoke();