import { getPosts, getUsers,  getFeed, setFeed } from "../data/provider.js"

// exporting a function that maps over the Users Array to display each user name

export const userDropDown = () => {
    
    const feed = getFeed()
    const users = getUsers()
    const posts = getPosts()

    
    return `
    <h3 class="footer__item">Posts by user</h3>
    <select name="User" id="Users">
    <option class="footer__item" value="0">--Choose A User--</option>
    // setting the value to (any number)
    <option value="0">All Posts</option>
    ${users.map(
        (userObj) => {
            return `
            <option value="${userObj.id}">${userObj.name}</option>`
            
        }
        )
    }
    </select>
    `
    
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

        // display filtered posts
            let html=""
        for (const foundPost of foundPostArray) {
            // posting feed content for post 
            html += `<h3> ${foundPost.title}</h3> <img class="gif" src="${foundPost.url}"> <p>${foundPost.story}</p> <p>Posted by: ${foundPost.foundUser} on ${foundPost.Date}</p><img class="favorites" src="./images/favorite-star-blank.svg">
            
     <section class="footer">
    ${userDropDown()}
       </section>`
            
            

        }
        return html
    


    }


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
