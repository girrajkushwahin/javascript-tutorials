// function timeout(){
//     setTimeout(() => {
//         console.log('hello world');
//     }, 3000);
// }
async function checktimeout(){
    // await timeout();
    await setTimeout(() => {
        console.log('hello world');
    }, 3000);
}
checktimeout();