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
let btn = document.getElementById("form");

btn.addEventListener('submit', function(event)
        {
            event.preventDefault();
            userMan.createUser();
            userMan.save();
          
            
    
           
        });

        let btn2 = document.getElementById("s2");
        userMan.load();
        
        console.log(userMan);
        console.log(userMan.users);
        console.log(userMan.users.length);
        console.log(userMan.users[1].email);
        

        btn2.addEventListener('submit', function(event) {
        event.preventDefault();


        let email2 = document.getElementById("email2").value;
        let password2 = document.getElementById("password2").value;
        console.log(password2);
        let connexion = false ;
        for (let i = 0; i < userMan.users.length; i++)

        {
            if ((userMan.users[i].password === password2) && (userMan.users[i].email === email2)) 
            {
                connexion = true;
            }
           
        }

        if (connexion === true) {
            alert("Bienvenue !")
        }
        else {
            alert("Mauvais mot de passe")
        }
        });
        });