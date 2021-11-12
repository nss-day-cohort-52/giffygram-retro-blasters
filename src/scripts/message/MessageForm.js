//  Define click event to trigger Post Form , x
//  Return HTML for Post Form - Buttons/Input Fields x
// Set all transient Data into it's own table 
// Post to API 
// Fetch for Post table from API 
// Get for the Application State Post Table 
// Printing in GiffyGram / Displaying 

import { getUsers, sendPost, getCurrentUser} from "../data/provider.js"



// Returns the HTML for PostForm
export const PostForm = () => {
    let html = `
        <div class="field">
            <input type="text" name="postTitle" class="newPost__input" placeholder="Title"/>
        </div>
        <div class="field">
            <input type="text" name="postURL" class="newPost__input" placeholder="URL of gif"/>URL
        </div>
        <div class="field">
            <textarea class="newPost__input newPost__description" name="postStory" class="input" placeholder="Story behind your gif..."/></textarea>
        </div>
       
        <button class="button" id="saveButton">Save</button>
        <button class="button" id="cancelButton">Cancel</button>
    `

    return html
}


const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    const users = getUsers()
    const currentUser = localStorage.getItem('gg_user');
    if (clickEvent.target.id === "saveButton") {
        // Get what the user typed into the form fields querySelector searches document
        const titlePost = document.querySelector("input[name='postTitle']").value
        const urlPost = document.querySelector("input[name='postURL']").value
        const storyPost = document.querySelector("textarea[name='postStory']").value
        const date = new Date().toLocaleDateString();
        const findUser = users.find((user) => parseInt(currentUser) === user.id)


        // Make an object out of the user input
        const dataToSendToAPI = {
            title: titlePost,
            url: urlPost,
            story: storyPost,
            postDate: date,
            foundUser: findUser.name,
            userId: findUser.id
           
        }
        // calling SendPost (in database) with object created 
        sendPost(dataToSendToAPI)
    }
})


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "cancelButton") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }


})


