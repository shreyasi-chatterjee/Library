const form = document.querySelector("#book-form");
const modal = document.getElementById("modal");
const addBtn = document.getElementById("addBook");
const closeModal = document.getElementById("xbtn");
const bookCont = document.getElementById("book-cont");

addBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

function Book(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;
}
Book.prototype.readStatus = function() {
    this.read = !this.read;
}
const books = []

function createBookCard(book){
    var card = document.createElement("div");
    card.classList.add("book-card");

    var divAuthor = document.createElement("p");
    divAuthor.classList.add("book-card-author");
    divAuthor.textContent = "By " + book.author;

    var divTitle = document.createElement("p");
    divTitle.classList.add("book-card-title");
    divTitle.textContent =  book.title;

    var divPages = document.createElement("p");
    divPages.classList.add("book-card-page");
    divPages.textContent = "Pages: " + book.pages;

    var read = document.createElement("p");
    read.textContent = book.read ? "Finished" : "Pending"



    card.appendChild(divTitle);
    card.appendChild(divAuthor);
    card.appendChild(divPages);
    card.appendChild(read);

    return card
}
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let pages = document.getElementById("pages").value.trim();
    let read = document.getElementById("read").checked;
    let id = crypto.randomUUID();

    let book = new Book(title, author, pages, id, read);
    bookCard = createBookCard(book);
    books.push(bookCard);

    for (const book of books){
        modal.style.display = "none";
        form.reset()
        bookCont.appendChild(book);
    }
    bookCont.classList.remove("hidden");
    addBtn.innerHTML = "+ add another book";
});