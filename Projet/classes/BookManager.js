import { Book } from "./Book.js";
import { User } from "./User.js";
class BookManager {
    #books;   
    
    
       constructor(books){
        this.#books = [];
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
                return AllBooks ;
            }
            
        }
        
        findBookById(id) {
        let BookbyId = [];
    
            for(let i = 0; i < this.#books.length; i++)
            {   
                
            
                if (this.#books[i].id === this.#books.id)
                {
                    BookbyId.push(this.#books[i]);
                    return BookbyId;
                }
                else 
                {
                    BookbyId = null;
                    return BookbyId;
                }
            }
        };
        findBooksByTitle(title) {
            let BookbyTitle = [];
    
                for(let i = 0; i < this.#books.length; i++)
                {   
                    
                
                    if (this.#books[i].title === this.#books.title)
                    {
                        BookbyTitle.push(this.#books[i]);
                        return BookbyTitle;
                    }
                    else 
                    {
                        BookbyTitle = null;
                        return BookbyTitle;
                    }
                }
            
        };
        findBooksByAuthor(author) {
            let BookbyAuthor = [];
    
                for(let i = 0; i < this.#books.length; i++)
                {   
                    
                
                    if (this.#books[i].author === this.#books.author)
                    {
                        BookbyAuthor.push(this.#books[i]);
                        return BookbyAuthor;
                    }
                    else 
                    {
                        BookbyAuthor = null;
                        return BookbyAuthor;
                    }
                }
        };
        findBooksByPublicationYear(year) {
            let BookbyYear = [];
    
                for(let i = 0; i < this.#books.length; i++)
                {   
                    
                
                    if (this.#books[i].publicationDate === this.#books.publicationDate)
                    {
                        BookbyYear.push(this.#books[i]);
                        return BookbyYear;
                    }
                    else 
                    {
                        BookbyYear = null;
                        return BookbyYear;
                    }
                }
            
        };
        createBook(book) {
            this.#books.push(book);
        };
        deleteBook(bookId) {
            this.#books.pop();
        };
        editBook(book) {
            this.#books
        };
        save() {
            sessionStorage.setItem("books", JSON.stringify(this.#books));
        };
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
