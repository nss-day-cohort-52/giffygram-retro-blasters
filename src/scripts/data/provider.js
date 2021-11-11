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

export const getFeed = () => {
    return applicationState.feed
}

// Set Functions
export const setCurrentUser = (id) => {
    applicationState.currentUser.userId = id
}

export const setFeed = (id) => {
    applicationState.feed.chosenUser = id
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


// Posting whatever object gets put into the parameter into the API 
export const sendPost = (userPost) => {
    // directions for the API 
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    // fetching the post table & telling the API to post the object into the post table
    return fetch(`${apiURL}/posts`, fetchOptions)
        .then(response => response.json())
        // rerendering the page due to post page being updated
        .then(
            () => 
                { mainContainer.dispatchEvent(new CustomEvent("stateChanged")) }




        )
}