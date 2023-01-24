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
            this.#users.push(user);
        };
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
            
            let SaveUser = [];

        SaveUser = sessionStorage.getItem("user");
        
        let otherUsers = JSON.parse(SaveUser);
        
        let otherUsers2 =[];
        for (let i = 0; i < otherUsers.length; i++)
        {
            
            otherUsers2.push(JSON.parse(otherUsers[i]));
                 
        }
        let save2=[];
        
        for (let i = 0; i < otherUsers2.length; i++)
            {
             save2.push(new User(otherUsers2[i].id, otherUsers2[i].username, otherUsers2[i].email, otherUsers2[i].password, otherUsers2[i].firstName, otherUsers2[i].lastName, otherUsers2[i].profileImage));
            
            }
            return save2;
                };
        
        login(username, password) {
            
            
        }
            
};
export { UserManager };
