import { DirectMessage } from '../friends/DirectMessage.js'
const apiURL = "http://localhost:3000"
const mainContainer = document.querySelector(".giffygram")




export const applicationState = {
    currentUser: {},
    userProfile: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    messages: [],
    favorites: {},
    recipientMessage: {},
    postMessage: {}
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

export const getUserProfile = () => {
    return applicationState.userProfile
}

export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}

export const getPostMessage = () => {
    return applicationState.postMessage.id
}


export const getFavorites = () => {
    return applicationState.favorites
}

export const getMessageRecipient = () => {
    return applicationState.recipientMessage
}

export const getFeed = () => {
    return applicationState.feed
}

// Set Functions
export const setCurrentUser = (id) => {
    applicationState.currentUser.userId = id
}

export const setUserProfile = (id) => {
    applicationState.userProfile.userId = id
}

export const setFavorites = (id) => {
    applicationState.favorites.favoriteId = id
}

export const setMessageRecipient = (id) => {
    applicationState.recipientMessage.id = id
}

export const setPostMessage = (id) => {
    applicationState.postMessage.id = id
}



export const setFeed = (id) => {
    applicationState.feed.chosenUser = id
}


// // Sets for message object
// export const setMessageRecipient = (id) => {
//     applicationState.message.recipientId = id
// }
// export const setMessage = (text) => {
//     applicationState.message.text = text
// }
// export const setMessageUser = (id) => {
//     applicationState.message.userId = id
// }
// export const setMessageRead = (boolean) => {
//     applicationState.message.read = boolean
// }



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

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
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

// Posting whatever object gets put into the parameter into the API 
export const sendMessage = (userPost) => {
    // directions for the API 
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    // fetching the post table & telling the API to post the object into the post table
    return fetch(`${apiURL}/messages`, fetchOptions)
        .then(response => response.json())
        // rerendering the page due to post page being updated
        .then(
            () => 
                { 
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
        ).then(
            () => {
                document.querySelector(".giffygram__feed").innerHTML=DirectMessage()
            }
        )
}