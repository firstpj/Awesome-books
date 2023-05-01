const container = document.querySelector('.container')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const submit = document.querySelector('#add-button')
const form = document.querySelector('.form')
function Books(title,author){
  this.title = title
  this.author = author
}
let cards = []

function addBook(title, author) {
  const book = new Books(title, author);
  cards.push(book);
  ShowCards()
}
function ShowCards(){
  const removeDivs = document.querySelectorAll('.card')
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove()
  }
  cards.map((card)=>{
    const div = document.createElement('div')
    div.classList.add('card')
    const heading = document.createElement('h1')
    const paragraph = document.createElement('p')
    const deleteBook = document.createElement('button')
    deleteBook.classList.add('delete-book')
    heading.textContent = `${card.title}`
    paragraph.textContent = `${card.author}`
    deleteBook.textContent = 'Remove'
    div.appendChild(heading)
    div.appendChild(paragraph)
    div.appendChild(deleteBook)
    container.appendChild(div)
  
  deleteBook.addEventListener('click', (e) => {
     cards.splice(cards.indexOf(card), 1);
     e.target.parentNode.remove()
     console.log(cards)

  });
  })  
}
submit.addEventListener('click',()=>{
  if(titleInput.value == ''&&authorInput.value == ""){
    return;
  }else{
    addBook(titleInput.value,authorInput.value)
    form.reset()
    console.log(cards)
  }
})
