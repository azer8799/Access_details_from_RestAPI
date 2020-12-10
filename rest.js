// const axios = require('axios');
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
// 	console.log(res.data)
// })
// .catch(err => {
// 	console.log("ERROR!",err)
// })

// get request

 // const axios = require('axios');
// const Url = "https://jsonplaceholder.typicode.com/posts?userId=1&&id=5";
// axios.get(Url)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))



const text = document.querySelector('#text');
const button = document.querySelector('button');


const addData = async () =>{
	const joketext = await getData();
	const newli = document.createElement('li');
    newli.append(joketext);
	text.append(newli)
 }

const getData = async () => {
	try{
		const config = { headers: { Accept:'application/json'} }
	    const res = await axios.get("https://icanhazdadjoke.com/",config);
	    return res.data.joke;
	}
	catch (e){
		return "not available"

	}
	
}

button.addEventListener('click', addData)
















// const axios = require('axios');
// axios.get("https://jsonplaceholder.typicode.com/posts",{
// 	params:{
//     id: 24
// }
// })
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


// post request
// const axios = require('axios');
// const Url = "https://jsonplaceholder.typicode.com/posts";
// const user={
//     name: "steel",
//     id: 21
// }
// axios({
//     method: 'POST',
//     url:Url,
//     data:{
//         user
//     }
// })
// .then(data=>console.log(data))
// .catch(err=>console.log(err))



