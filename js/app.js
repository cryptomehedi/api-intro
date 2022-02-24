function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))
}


function displayUser(users){
    const ul = document.querySelector('#users')
    for(const user of users){
        // console.log(user);
        const li = document.createElement('li');
        li.innerText= `ID: ${user.id} 
                        Name: ${user.name}
                        Email: ${user.email}
                        UserName: ${user.username}
                        Phone: ${user.phone}
                        website: ${user.website}
                        
                        `;
        ul.appendChild(li)
    }
}