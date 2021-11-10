import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchPosts, fetchUsers, getUsers } from "./data/provider.js"
import { getCurrentUser } from "./data/provider.js"
import { applicationState } from "./data/provider.js"

// Looks for Main Container and selects
const mainContainer = document.querySelector(".giffygram")

// Function to Render whole site 
export const renderApp = () => {
    // looking to see if there is a current user object 
    const currentUser = getCurrentUser()
    // retrieve the users from the api 
    fetchUsers().then(
        () => {
            // 
         return fetchPosts()
        })
        .then(
            () => {
            // if current user id is "truthy" (exists) 
            if (currentUser.userId) {
                // runs GiffyGram page if it's truthy
                mainContainer.innerHTML = GiffyGram()
            } else {
                // runs the Login Form again if false 
                mainContainer.innerHTML = LoginForm()
            }
        }
        
        )
        console.log(applicationState.posts)
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