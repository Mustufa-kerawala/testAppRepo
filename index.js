const mainCotainer = document.querySelector('.container')


// Getting data from the server 
fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(elements => elements.forEach((element) => {
//    Creating a div for each element
    const elementDiv = document.createElement('div')
    elementDiv.className = "posts"
    // Creating h2 and p for title and body
    const title = document.createElement('h2')
    const body = document.createElement('p')
    title.innerText = element.title
    body.innerText = element.body
    elementDiv.appendChild(title)
    elementDiv.appendChild(body)
    mainCotainer.append(elementDiv)
}))