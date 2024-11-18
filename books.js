const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const category = document.getElementById('category');
const profile = document.getElementById('profile');
const bookContainer = document.getElementById("bookContainer");

const userData = JSON.parse(localStorage.getItem('userData'));
fullname.innerHTML = userData.fullname;
email.innerHTML = userData.email;
category.innerHTML = userData.category;
profile.innerHTML = userData.fullname[0]+userData.fullname[1];


const seacrh  = document.getElementById('selectedCategory');

   seacrh.addEventListener("click" , ()=>{
    const books  = JSON.parse(localStorage.getItem("books")) || [];
    bookContainer.innerHTML = "";
    const selectedCategory = seacrh.value.toLowerCase();
    console.log(selectedCategory);

    const filteredBooks = books.filter(book => book.category.toLowerCase().includes(selectedCategory));
    
      if(filteredBooks.length > 0){
            filteredBooks.forEach(book => {
                const bookCard = document.createElement("div");
                bookCard.innerHTML = `<div class="card shadow-lg border-2 border-green-700 ">
                        <div class="card-body">
                            <h2 class="card-title text-center text-white bg-green-700 p-2 rounded-lg
                            ">${book.title}</h2>
                            <p class="text-white"><span class="uppercase text-bold text-green-400" > Author</span> : ${book.author}</p>
                            <p class="text-white"><span class="uppercase text-bold text-green-400" > Category</span> : ${book.category} </p>
                            <p class="text-white"><span class="uppercase text-bold text-green-400" > year</span> : ${book.year} </p>
                        </div>
                    </div>`
        
                bookContainer.appendChild(bookCard);
            });
      } 
      else{
            bookContainer.innerHTML = `<div class="card shadow-lg border-2 border-green-700 ">
            <div class="card-body">
                <h2 class="card-title text-center text-white bg-green-700 p-2 rounded-lg
                ">No books found</h2>
            </div>
        </div>` 
      }
   })





