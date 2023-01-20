import { Book } from "./Book.js";
import { User } from "./User.js";
class BookManager {
    #users;   
    
    
       constructor(users)
    {
        this.#users = users;
    } 
            get users (){
                return this.#users;
            }
        
            set users (users){
                this.#users = users;
            }
            
            
        findAllUsers() {

        }
        findUserById(id) {
            
        };
        findUserByUsername(username) {
            
        };
        findUserByEmail(email) {
            
        };
        createUser(user) {
            
        };
        deleteUser(userId) {
            
        };
        editUser(user) {
            
        };
        save() {
            sessionStorage.setItem("user", JSON.stringify(users));
        };
        load() {
            let SaveUser = [];

        SaveUser = sessionStorage.getItem("users");
        
        let otherUsers = JSON.parse(SaveUser);
        
        let otherUsers2 =[];
        for (let i = 0; i < otherUsers.length; i++) {
            
            otherUsers2.push(JSON.parse(otherUsers[i]));
                 
        }
        let save2=[];
        
        for (let i = 0; i < otherUsers2.length; i++)
            {
             save2.push(new User(otherUsers2[i].id, otherUsers2[i].username, otherUsers2[i].email, otherUsers2[i].password, otherUsers2[i].firstName, otherUsers2[i].lastName, otherUsers2[i].profileImage));
            
            }
                };
            
};
export { BookManager };
