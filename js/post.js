function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

// loadPost()

function displayPost(posts){
    const section = document.querySelector('#post');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <p>ID: ${post.id}</p>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        section.appendChild(div)
    }
}



function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'Post',
        body: JSON.stringify({
            title: 'My new post',
            body: 'this is a post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

// addPost()