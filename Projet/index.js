import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { Book } from "./classes/Book.js";
import { User } from "./classes/User.js";
import { UserManager } from "./classes/UserManager.js";
import { BookManager } from "./classes/BookManager.js";

window.addEventListener("DOMContentLoaded", function(){
    
    
let book0 = new Book ("0","title0", "author0", "0", "totalPages0", "excerpt0", "coverImage0");
let book1 = new Book ("1","title1", "author1", "1", "totalPages1", "excerpt1", "coverImage1");
let book2 = new Book ("2","title2", "author2", "2", "totalPages2", "excerpt2", "coverImage2");

let books = [book0, book1, book2];

let user0 = new User ("0","username0", "email0", "password0", "firstName0", "lastName0", "profileImage0");
let user1 = new User ("1","username1", "email1", "password1", "firstName1", "lastName1", "profileImage1");
let user2 = new User ("2","username2", "email2", "password2", "firstName2", "lastName2", "profileImage2");

let users = [user0, user1, user2];

let newuser = [];
let userMan = new UserManager(newuser);

let formulaire = document.getElementById("fieldset");


let btn = document.getElementById("form");

btn.addEventListener('submit', function(event)
        {
            event.preventDefault();
            let userID = newuser.length + 1;
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirm = document.getElementById("confirm").value;
            let firstName = document.getElementById("firstname").value;
            let lastName = document.getElementById("lastname").value;
            let profileImage = document.getElementById("img").value;
         
           
           
            if (userMan.users.length === 0)
            {
                console.log("c'est le premier");
               let newuser2 = new User(userID, username, email, password, confirm, firstName, lastName, profileImage );
               userMan.createUser(newuser2);
               userMan.save();
               userMan.load();
               console.log(userMan);
            }
               
            else {
             
                    for (let i = 0; i < userMan.users.length; i++)
                    
                    {
                       if  (userMan.users[i].email === email ) {
                           console.log("existe deja");
                       }
                       else 
                       {
                           console.log("existe pas encore");
                           let newuser2 = new User(userID, username, email, password, confirm, firstName, lastName, profileImage );
                           userMan.createUser(newuser2);
                           userMan.save();
                       }
                       
                    }
            } 
           
        });
    
});