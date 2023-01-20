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

        }
        findBookById(id) {
            
        };
        findBooksByTitle(title) {
            
        };
        findBooksByAuthor(author) {
            
        };
        findBooksByPublicationYear(year) {
            
        };
        createBook(book) {
            
        };
        deleteBook(bookId) {
            
        };
        editBook(book) {
            
        };
        save() {
            sessionStorage.setItem("books", JSON.stringify(books));
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
