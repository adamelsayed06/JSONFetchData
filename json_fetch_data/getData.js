async function getData(num){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + num);
        let response2 = await fetch('https://jsonplaceholder.typicode.com/comments/' + num);
        let data = await response.json();
        let data2 = await response2.json();
        console.log(data);
        console.log(data2);
    }catch(err){
        console.log(err);
    }
}

for(let i = 1; i < 5; i++){
    getData(i);
}

/*
    Data I want from posts: title + Body
    Data I want from comments: Email + Body
*/