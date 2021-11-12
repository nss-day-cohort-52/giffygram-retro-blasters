import { getPosts, getFavorites, unfavoritePost, favoritePost } from "../data/provider.js"
const posts = getPosts()
const favorites = getFavorites()
const emptyStar = "./images/favorite-star-blank.svg"
const yellowStar = "./images/favorite-star-yellow.svg"

document.addEventListener("click", (e) => {
    if (e.target.id.startsWith("favoritePost--")) {
        const [, postId, favoriteId] = e.target.id.split("--")
        if (parseInt(favoriteId)) {
            unfavoritePost(parseInt(favoriteId))
        }
        else {
            favoritePost(parseInt(postId))
        }
    }
})




// Defining the giffyGramFeed function
export const giffyGramFeed = (post) => {
    // setting the posts variable to get the Posts
    const posts = getPosts()
    // declaring an empty variable for HTML
    let html = ""
    html = `<section class="feed">`
    // if there's posts in the array
    
        // iterate through each post 
        
            // posting feed content for post 
            html +=
                `<h3> ${post.title}</h3> 
            <img class="gif" src="${post.url}"> 
            <p>${post.story}</p> 
            <section class="post__tagline" class="post__tagline">
                Posted by:
                <a href="#" class="userName" name="userProfile" id=${post.userId}>${post.foundUser}  </a>
                on ${post.postDate}
            </section>
            
                <img id="favoritePost--${post.id}--${post.favoriteId}" value="${post.userId}"
                    class="actionIcon"
                    src="${post.favoriteId === 0
                    ? "/images/favorite-star-blank.svg"
                    : "/images/favorite-star-yellow.svg"
                }"
                /> `
            return html
        
        html += `</section>`
        return html
    }