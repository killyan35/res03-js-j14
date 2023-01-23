import { Book } from "./Book.js";
import { User } from "./User.js";
class BookManager {
    #books;   
    
    
       constructor(books = []){
        this.#books = books;
    } 
            get books (){
                return this.#books;
            }
        
            set books (books){
                this.#books = books;
            }
            
            
        findAllBooks() {
            
            let AllBooks = [];
    
            for(let i = 0; i < this.#books.length; i++)
            {   
                AllBooks.push(this.#books[i]);
                
            }
            return AllBooks ;
            
        }
        
        findBookById(id) {
        let BookbyId = [];
    
            for(let i = 0; i < this.#books.length; i++)
            {   
                
            
                if (this.#books[i].id === id)
                {
                    BookbyId.push(this.#books[i]);
                    
                }
                else 
                {
                    BookbyId = [];
                }
            }
            return BookbyId;
        }
        findBooksByTitle(title) {
            let BookbyTitle = [];
    
                for(let i = 0; i < this.#books.length; i++)
                {   
                    
                
                    if (this.#books[i].title === title)
                    {
                        BookbyTitle.push(this.#books[i]);
                    }
                    else 
                    {
                        BookbyTitle = [];
                        
                    }
                }
                return BookbyTitle;
            
        }
        findBooksByAuthor(author) {
            let BookbyAuthor = [];
    
                for(let i = 0; i < this.#books.length; i++)
                {   
                    
                
                    if (this.#books[i].author === author)
                    {
                        BookbyAuthor.push(this.#books[i]);
                    }
                    else 
                    {
                        BookbyAuthor = [];
                    }
                }
                return BookbyAuthor;
        }
        findBooksByPublicationYear(year) {
            let BookbyYear = [];
            
                for(let i = 0; i < this.#books.length; i++)
                {  
                   console.log(this.#books[i].publicationDate);
                    if (this.#books[i].publicationDate === year)
                    
                    {   
                        BookbyYear.push(this.#books[i]);
                    }
                    else 
                    {
                       BookbyYear = [];
                    }
                    
                }
                return BookbyYear;
        }
        createBook(book) {
            this.#books.push(book);
        }
        deleteBook(bookId) {
            deleteb = [ ];
            
            for(let i = 0; i < this.#books.length; i++)
            {
                if (this.#books[i].id !== bookId)
                    
                    {   
                        deleteb.push(this.#books[i]);
                        
                    }   
            }
            this.#books=deleteb;
        }
        editBook(book) {
               
            
            for(let i = 0; i < this.#books.length; i++)
            {
                if (book.id === this.#books[i].id)
                    
                    {   
                        this.#books[i] = book;
                        
                    }   
            }
        }
        save() {
            sessionStorage.setItem("books", JSON.stringify(this.#books));
        }
        load() {
            
        let SaveBook = [];

        SaveBook = sessionStorage.getItem("books");
        
        let otherBook = JSON.parse(SaveBook);
        
        let otherBook2 =[];
        for (let i = 0; i < otherBook.length; i++) {
            
            otherBook2.push(JSON.parse(otherBook[i]));
                 
        }
        let save1=[];
        
        for (let i = 0; i < otherBook2.length; i++)
            {
             save1.push(new Book(otherBook2[i].id, otherBook2[i].title, otherBook2[i].author, otherBook2[i].publicationDate, otherBook2[i].totalPages, otherBook2[i].excerpt, otherBook2[i].coverImage));
            
            }
};
};
export { BookManager };