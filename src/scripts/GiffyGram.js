import { PostForm } from "./message/MessageForm.js"
import { getPosts } from "./data/provider.js"
import { giffyGramFeed } from "./feed/PostList.js"
import { setUserProfile } from "./data/provider.js"
import { userProfile } from "./feed/UserProfile.js"
// Finding and selecting Main Container 
const mainContainer = document.querySelector(".giffygram")


// Defining function to return the Post Form button HTML 

export const GiffyGram = () => {
    // setting HTML to empty string
    let html = ""
    //   setting HTML for the post form section (button)
    html += `
    <section class="postForm">
    <h1>Giffygram</h1>
    <button class="button" id="postButton">Have a gif to post?</button>
    </section>

    <!-- Calling the function that displays posts in feed -->
    <section class="postFeed">
    ${giffyGramFeed()}
    </section>`

    return html
}



// document.querySelector(".giffygram .feed").innerHTML = html
// Listening to see if Post Form button is clicked 
mainContainer.addEventListener("click", click => {
    // If Post Form button is clicked
    if (click.target.id === "postButton") {
        // Search through entire page and find the giffygram class - go into class - find postForm class
        // set container = the Post Form HTML 
        document.querySelector(".giffygram .postForm").innerHTML = PostForm()

    }
})


  //Listens to see if a user profile is being clicked on
mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.name === "userProfile") {
        setUserProfile(parseInt(clickEvent.target.value))
        document.querySelector(".giffygram").innerHTML = userProfile()
        
    }


})





