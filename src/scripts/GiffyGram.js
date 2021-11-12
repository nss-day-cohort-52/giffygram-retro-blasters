import { PostForm } from "./message/MessageForm.js"
import { getPosts, setFeed} from "./data/provider.js"
import { giffyGramFeed } from "./feed/PostList.js"
import { setUserProfile } from "./data/provider.js"
import { userProfile } from "./feed/UserProfile.js"
import { userDropDown, UserChoice } from "./nav/Footer.js"
import { navBar } from "./nav/navBar.js"

// Finding and selecting Main Container 
const mainContainer = document.querySelector(".giffygram")


// Defining function to return the Post Form button HTML 

export const GiffyGram = () => {
    // setting HTML to empty string
    let html = ""
    //   setting HTML for the post form section (button)
    html += `
    <nav class="navBar">
    ${navBar()}
    </nav>

    <div class="giffygram__feed">
    
    <section class="postForm">
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    </section>

    <!-- Calling the function that displays posts in feed -->
    <section class="postFeed">
    ${giffyGramFeed()}
    </section>
    </div>
    <footer class="footer">
    ${userDropDown()}
    
    </footer>`
    return html
}



// document.querySelector(".giffygram .feed").innerHTML = html
// Listening to see if Post Form button is clicked 
mainContainer.addEventListener("click", click => {
    // If Post Form button is clicked
    if (click.target.id === "miniMode") {
        // Search through entire page and find the giffygram class - go into class - find postForm class
        // set container = the Post Form HTML 
        document.querySelector(".giffygram__feed .miniMode").innerHTML = PostForm()

    }
})


  //Listens to see if a user profile is being clicked on
mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.name === "userProfile") {
        setUserProfile(parseInt(clickEvent.target.id))
        document.querySelector(".giffygram__feed").innerHTML = userProfile()
        
    }


})

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "User") {

            setFeed(parseInt(event.target.value))
            document.querySelector(".giffygram__feed").innerHTML=UserChoice()


        }
    }
)


  mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "logo") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        
    }


})
