import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { Book } from "./classes/Book.js";
import { User } from "./classes/User.js";
import { UserManager } from "./classes/UserManager.js";
import { BookManager } from "./classes/BookManager.js";

window.addEventListener("DOMContentLoaded", function(){
    
    
let book0 = new Book ("0","title0", "author0", "publicationDate0", "totalPages0", "excerpt0", "coverImage0");
let book1 = new Book ("1","title1", "author1", "publicationDate1", "totalPages1", "excerpt1", "coverImage1");
let book2 = new Book ("2","title2", "author2", "publicationDate2", "totalPages2", "excerpt2", "coverImage2");

let books = [book0, book1, book2];

let user0 = new User ("0","username0", "email0", "password0", "firstName0", "lastName0", "profileImage0");
let user1 = new User ("1","username1", "email1", "password1", "firstName1", "lastName1", "profileImage1");
let user2 = new User ("2","username2", "email2", "password2", "firstName2", "lastName2", "profileImage2");

let users = [user0, user1, user2];

console.log(save1); 
   
    
});