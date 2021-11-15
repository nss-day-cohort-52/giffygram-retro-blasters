import { GiffyGram} from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchFavorites, fetchPosts, fetchUsers, getUsers, fetchMessages } from "./data/provider.js"
import { getCurrentUser, applicationState } from "./data/provider.js"



// Looks for Main Container and selects
const mainContainer = document.querySelector(".giffygram")

// Function to Render whole site 
export const renderApp = () => {
    // looking to see if there is a current user object 
    const currentUser = localStorage.getItem('gg_user');
    // retrieve the users from the api 
    fetchUsers().then(
        () => {
            // grabbing Posts from API 
         return fetchPosts()
        }).then(
            () => {
                return fetchMessages()
            }).then(
            () => {
            return fetchFavorites()
            }).then(
            () => {
            // if current user id is "truthy" (exists) 
            if (currentUser) {
                // runs GiffyGram page if it's truthy
                mainContainer.innerHTML = GiffyGram()
               
            } else {
                // runs the Login Form again if false 
                mainContainer.innerHTML = LoginForm()
            }
        }
        
        )
    }
    // Automatic Render for Page 
    renderApp()
    
    // Custom Event Listener that rerenders the page
    mainContainer.addEventListener(
        "stateChanged",
        customEvent => {
            // Renders the document if state is changed
            renderApp()
        }
    )