import { PostForm } from "./message/MessageForm.js"
import { getPosts } from "./data/provider.js"

// Finding and selecting Main Container 
const mainContainer = document.querySelector(".giffygram")
const posts = getPosts()

// Defining function to return the Post Form button HTML 
export const GiffyGram = () => {
    return `
    <section class="postForm">
    <h1>Giffygram</h1>
    <button class="button" id="postButton">Have a gif to post?</button>
    </section>


<section class="feed">
</section>          
    `
}


let html = ""
for (const post of posts) {
    html += `${post.name}`

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




