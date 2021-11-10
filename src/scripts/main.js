import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchUsers, getUsers } from "./data/provider.js"
import { getCurrentUser } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

// Custome Event Listener that rerenders the page
applicationElement.addEventListener(
    "stateChanged",
    customEvent => {
        // Renders the document if state is changed
        renderApp()
    }
)

export const renderApp = () => {
    const currentUser = getCurrentUser()
    
    fetchUsers().then(
        () => {
        
            if (currentUser.userId) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        }

    )
}

renderApp()
