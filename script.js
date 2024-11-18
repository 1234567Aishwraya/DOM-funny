const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '46fde85caemsh4a8e79a169e9897p156fa6jsnb13aa190f572',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};
async function getdata(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.data);

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p")
    div.className="div";
    let a =result.data;
    let b =a.split("?")
   
	h1.innerText=b[0]+"?"
     p.innerText=b[1];

    div.append(h1,p);
    document.body.append(div);
} 
     catch (error) {
	console.error(error);
     }
}
getdata()