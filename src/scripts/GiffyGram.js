import { PostForm } from "./message/MessageForm.js"
import { getPosts, setFavorites, setFeed} from "./data/provider.js"
import { giffyGramFeed } from "./feed/PostList.js"
import { userDropDown, UserChoice } from "./nav/Footer.js"
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
    </section>

    <section class="footer">
    ${userDropDown()}
    
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

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "User") {

            setFeed(parseInt(event.target.value))
            document.querySelector(".giffygram").innerHTML=UserChoice()


        }
    }
)


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.name === "favoriteStarBlank") {
        
        
        setFavorites(parseInt(clickEvent.target.id))
        document.querySelector(".giffygram .postFeed").innerHTML = giffyGramFeed()
    }
})
