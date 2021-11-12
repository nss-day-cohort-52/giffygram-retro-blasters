import { PostForm } from "./message/MessageForm.js"
import { getPosts, setFavorites, setFeed,  setPostMessage } from "./data/provider.js"
import { giffyGramFeed } from "./feed/PostList.js"
import { setUserProfile } from "./data/provider.js"
import { userProfile } from "./feed/UserProfile.js"
import { userDropDown, UserChoice } from "./nav/Footer.js"
import { navBar } from "./nav/navBar.js"
import { DirectMessage } from "./friends/DirectMessage.js"
import { getPostMessage } from "./data/provider.js"

// Finding and selecting Main Container 
const mainContainer = document.querySelector(".giffygram")


// Defining function to return the Post Form button HTML 

export const GiffyGram = () => {
    const postState = getPostMessage()
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
    </section>`
    if (postState) {
        html += DirectMessage()
       
    } else {
        // runs the Login Form again if false 
        `<!-- Calling the function that displays posts in feed -->
        <section class="postFeed">`
       html += giffyGramFeed()
    }

    html += `</section>
    </div>
    <footer class="footer">
    ${userDropDown()}
    
    </footer>`
    setPostMessage(0); 
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
        // listening for "User" which is the dropdown
        if (event.target.name === "User") {
    //  setFeed is setting who ever you clicked on - setting the value of that user
            setFeed(parseInt(event.target.value))
            // runs the UserChoice function which returns the HTML in GiffyGram Feed
            document.querySelector(".giffygram__feed").innerHTML=UserChoice()
            

        }
    }
)
    

    
  mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "logo") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        
    }
}
  )


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.name === "favoriteStarBlank") {
        setFavorites(parseInt(clickEvent.target.id))
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})



mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
        document.querySelector(".giffygram__feed").innerHTML=DirectMessage()
    }
})

