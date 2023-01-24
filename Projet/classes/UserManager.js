import { Book } from "./Book.js";
import { User } from "./User.js";
class UserManager {
    #users;   
    
    
      constructor(users = []){
        this.#users = users;
    } 
            get users (){
                return this.#users;
            }
        
            set users (users){
                this.#users = users;
            }
            
            
        findAllUsers() {
            let AllUsers = [];
    
            for(let i = 0; i < this.#users.length; i++)
            {   
                AllUsers.push(this.#users[i]);
                
            }
            return AllUsers ;
        }
        findUserById(id) {
            let UserbyId = [];
    
            for(let i = 0; i < this.#users.length; i++)
            {   
                
            
                if (this.#users[i].id === id)
                {
                    UserbyId.push(this.#users[i]);
                    
                }
                else 
                {
                    UserbyId = [];
                }
            }
            return UserbyId;
        };
        findUserByUsername(username) {
            
            let UserbyName = [];
    
                for(let i = 0; i < this.#users.length; i++)
                {   
                    
                
                    if (this.#users[i].username === username)
                    {
                        UserbyName.push(this.#users[i]);
                    }
                    else 
                    {
                        UserbyName = [];
                        
                    }
                }
                return UserbyName;
        };
        findUserByEmail(email) {
            
            let UserbyEmail = [];
    
                for(let i = 0; i < this.#users.length; i++)
                {   
                    
                
                    if (this.#users[i].email === email)
                    {
                        UserbyEmail.push(this.#users[i]);
                    }
                    else 
                    {
                        UserbyEmail = [];
                        
                    }
                }
                return UserbyEmail;
        };
        createUser(user) {
           
            let userID = this.#users.length + 1;
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirm = document.getElementById("confirm").value;
            let firstName = document.getElementById("firstname").value;
            let lastName = document.getElementById("lastname").value;
            let profileImage = document.getElementById("img").value;
            
            let double = false ;
                    
                    for (let i = 0; i < this.#users.length; i++)
                    
                    {
                       if (this.#users[i].email === email )
                       {
                           double = true;
                       }
                    }   
                       
                if (double === true) 
                {
                    console.log("existe deja");
                }
                else 
                {
                    let user = new User (userID, username, email, password, confirm, firstName, lastName, profileImage);
                    this.#users.push(user);
                }
                      
                    
            
        }
        deleteUser(userId) {
            deleteUs = [ ];
            
            for(let i = 0; i < this.#users.length; i++)
            {
                if (this.#users[i].id !== userId)
                    
                    {   
                        deleteUs.push(this.#users[i]);
                        
                    }   
            }
            this.#users=deleteUs;
        };
        editUser(user) {
             for(let i = 0; i < this.#users.length; i++)
            {
                if (user.id === this.#users[i].id)
                    {   
                        this.#users[i] = user;
                    }   
            }
        };
        save() {
            sessionStorage.setItem("user", JSON.stringify(this.#users));
        };
        
        load() {

        let SaveUsers = JSON.parse(sessionStorage.getItem("user"));
        
        if (SaveUsers === null)
        {
            this.#users = [];
        }
        else 
        {
            for (let i = 0; i < SaveUsers.length; i++)
            {
                let SaveUser = JSON.parse(SaveUsers[i]);
                let user = new User(SaveUser.id, SaveUser.username, SaveUser.email, SaveUser.password, SaveUser.firstName, SaveUser.lastName, SaveUser.profileImage);
                    this.#users.push(user);
            }
            
          }
        }
        
        
        login(username, password) {
            
            
        }
            
};
export { UserManager };
