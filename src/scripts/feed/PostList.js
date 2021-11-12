import { getPosts, getFavorites } from "../data/provider.js"
const posts = getPosts()
const favorites = getFavorites()
const emptyStar = "./images/favorite-star-blank.svg"
const yellowStar = "./images/favorite-star-yellow.svg"
const trash = "./images/block.svg"



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
            html +=
                `<h3> ${post.title}</h3> 
            <img class="gif" src="${post.url}"> 
            <p>${post.story}</p> 
            <section class="post__tagline" class="post__tagline">
                Posted by:
                <a href="#" class="userName" name="userProfile" id=${post.userId}>${post.foundUser}  </a>
                on ${post.postDate}
            </section>
            `
            if(post.id === favorites.favoriteId){
          html +=  `<img id="${post.id}" name="favoriteStarBlank" value="${post.id}" class="favorites" src="${yellowStar}">`
        } else {
          html +=  `<img id="${post.id}" name="favoriteStarBlank" value="${post.id}" class="favorites" src="${emptyStar}">`
        }
        }
        return html
    }
    html += `</section>`
    return html
}


export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (post) => {   
return `<li>
<button class="post__delete"
id="post--${post.id}">
<img id="{post.id}" name="trashcan" value="{post.id}" class="delete" src="${trash}">
</button>
</li>`

    }



}




