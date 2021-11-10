const apiURL = "http://localhost:3000"
const mainContainer = document.querySelector(".giffygram")



export const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: []
}



// Get Functions
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}
export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
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
export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )

}

export const sendPost = (userPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        .then(
            () => 
                { mainContainer.dispatchevent(new CustomEvent("stateChanged")) }




        )}