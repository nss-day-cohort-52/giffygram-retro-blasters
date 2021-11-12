import { getPosts, getFavorites, getUsers, getCurrentUser } from "../data/provider.js"
import { giffyGramFeed } from "./post.js"
const posts = getPosts()
const favorites = getFavorites()
const emptyStar = "./images/favorite-star-blank.svg"
const yellowStar = "./images/favorite-star-yellow.svg"
const mainContainer = document.querySelector(".giffygram")


export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getFavorites()
    const users = getUsers()
    const currentUser = parseInt(localStorage.getItem('gg_user'));

    return `
        ${
            allPosts.map(
                currentPost => {
                    /*
                        Determine if the current post is favorited by the current user
                        then add a new `favoriteId` property for use when generating the
                        HTML representation. Default to 0 if post not favorited.
                    */
                   currentPost.favoriteId = userLikes.find(like =>
                        like.userId === currentUser &&
                        like.postId === currentPost.id
                    )?.id || 0
                    /*
                        Who created this post? Add a new `user` property for use when
                        generating the HTML representation
                    */
                    currentPost.user = users.find(u => u.id === currentPost.userId)
                    // Generate the HTML representation for the current post
                    
                    return giffyGramFeed(currentPost)
                }
            ).join("")
        }
    `
}



    // mainContainer.addEventListener("click", clickEvent => {
    //     const posts = getPosts()

    //     if (clickEvent.target.name === "favoriteStarBlank") {
    //         setFavorites(parseInt(clickEvent.target.id))
    //         setFavoritePost(parseInt(clickEvent.target.id))
    //         setFavoriteUser(parseInt(clickEvent.target.value))
    //         document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))



    //         sendFavorite()
    //     }
    // })






