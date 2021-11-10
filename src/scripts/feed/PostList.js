
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
            html += ` ${post.title}`
        }
        return html
    }
    html += `</section>`
}



