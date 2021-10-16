function getUserDiv(user) {
    return `<div class="online-users">
    <div class="user-name">${user.username}</div>
    <div class="online-presence"></div>
   </div>`
 }
 



function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        document.body.innerHTML = `
        <div class=header>Header</div>
        <div class="myOnline-user">
        ${users.map(user => getUserDiv(user)).join("") }</div>
        <div class=main-content>Main Content</div>
        <div class=footer>Footer</div>`
        
     
})
}

getUsers()



     
       
    