//  Define click event to trigger Post Form , x
//  Return HTML for Post Form - Buttons/Input Fields x
// Set all transient Data into it's own table 
// Post to API 
// Fetch for Post table from API 
// Get for the Application State Post Table 
// Printing in GiffyGram / Displaying 

import { sendPost } from "../data/provider.js"



// Returns the HTML for PostForm
export const PostForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="postTitle">Title</label>
            <input type="text" name="postTitle" class="input" />
        </div>
        <div class="field">
            <label class="label" for="postURL">URL</label>
            <input type="text" name="postURL" class="input" />
        </div>
        <div class="field">
            <label class="label" for="postStory">Story</label>
            <textarea name="postStory" class="input" row="30" col="60"/>
            </textarea>
        </div>
       
        <button class="button" id="saveButton">Save</button>
        <button class="button" id="cancelButton">Cancel</button>
    `

    return html
}


const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveButton") {
        // Get what the user typed into the form fields querySelector searches document
        const titlePost = document.querySelector("input[name='postTitle']").value
        const urlPost = document.querySelector("input[name='postURL']").value
        const storyPost = document.querySelector("textarea[name='postStory']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            title: titlePost,
            url: urlPost,
            story: storyPost,
           
        }
        // calling SendPost (in database) with object created 
        sendPost(dataToSendToAPI)
    }
})





