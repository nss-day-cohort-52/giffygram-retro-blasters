import { getPosts, getUsers,  getFeed, setFeed, setFeedFavorite } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")


// exporting a function that maps over the Users Array to display each user name

export const userDropDown = () => {
    
    const users = getUsers()
    const feed = getFeed()

    
    return `
    <h3 class="footer__item">Posts by user</h3>
    <select name="User" id="Users">
    <option class="footer__item" value="0">--Choose A User--</option>
    // setting the value to (any number)
    <option value="0">All Posts</option>
    ${users.map(
        (userObj) => {
            return feed.chosenUser === userObj.id ? `<option value="${userObj.id}" selected>${userObj.name}</option>`
                                            : `<option value="${userObj.id}">${userObj.name}</option>`
            
        }
        )
    }
    </select>
    `
    
}

export const selectFavorites = () => {
    const feed = getFeed()
    let html = ""
    html += `<label for="setFavorites" class="footer__item">Show Only Favorites</label>`
    feed.displayFavorites ? html += `<input type="checkbox" class="footer__item" id="setFavorites" checked>` 
                        : html += `<input type="checkbox" class="footer__item" id="setFavorites">`
    return html
    }

            




export const UserChoice = () => {
    
    
    const feed = getFeed()
    const users = getUsers()
    const posts = getPosts()
    
    // finding the userId in the feed array that matches the chosen User from Droplist
    // if feed.chosenUser is equal to 0, rerendering the entire page 
    if ( feed.chosenUser === 0){
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))

    }

    const foundUser = users.find(
        (user) => {
            return feed.chosenUser === user.id
            
        }
        )

        // filtering the posts for any post that has a userId that matches the chosen User
        const foundPostArray = posts.filter(
            (post) => {
                return post.userId === foundUser.id
            }

        )
    
        
    return foundPostArray

    

}

mainContainer.addEventListener("change", clickEvent => {
    if (clickEvent.target.id === "setFavorites") {
        // if checked
        //setFavoriteState(true)
        //else setFavoriteState(false)
        let checkbox = document.querySelector("#setFavorites")
        
        checkbox.checked ? setFeedFavorite(true) : setFeedFavorite(false);
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
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
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
            

        }
    }
)




