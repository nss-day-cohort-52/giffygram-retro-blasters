const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")



const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: []
}



// Get Functions
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}

export const getCurrentUser = () => {
    return applicationState.currentUser
}

// Set Functions
export const setCurrentUser = (id) => {
    applicationState.currentUser.userId = id
}

// Fetches
export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )

}