
import { getPosts } from "../data/provider.js"

// Defining the giffyGramFeed function
export const giffyGramFeed = () => {
    // setting the posts variable to get the Posts
    const posts = getPosts()
    // declaring an empty variable for HTML
    let html = ""
    html = `<section class="feed">`
    // if there's posts in the array
    if (posts.length > 0) {
        // iterate through each post 
        for (const post of posts) {
            // posting feed content for post 
            html += `<h3> ${post.title}</h3> <img class="gif" src="${post.url}"> <p>${post.story}</p> <p>posted by: ${post.foundUser} on ${post.postDate}</p><img class="favorites" src="./images/favorite-star-blank.svg">`

        }
        return html
    }
    html += `</section>`
}



