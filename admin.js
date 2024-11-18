const addBookForm = document.getElementById("add-book");

addBookForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const category = document.getElementById("category").value;

    const book = { title : title, author : author, year : year, category :category };

    if(book) {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
        alert("Book added successfully");
        addBookForm.reset();
    }
    else{
        alert("Please fill in all fields");
    }
});