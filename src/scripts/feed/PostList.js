import { getPosts, getFavorites, getUsers, getFeed } from "../data/provider.js"
import { giffyGramFeed } from "./post.js"
import { UserChoice } from "../nav/Footer.js"
const posts = getPosts()
const favorites = getFavorites()
const emptyStar = "./images/favorite-star-blank.svg"
const yellowStar = "./images/favorite-star-yellow.svg"
const mainContainer = document.querySelector(".giffygram")
const feed = getFeed()


export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getFavorites()
    const users = getUsers()
    const currentUser = parseInt(localStorage.getItem('gg_user'));
    const feed = getFeed()
    const favorites = getFavorites()
    
    
    
    const foundUser = users.find(
        (user) => {
            return currentUser === user.id
            
        }
        )

        const filterFavorites = favorites.filter(
            (favorite) => {
                return foundUser.id === favorite.userId
                
            }
            )
    
            let favoritePosts = []
        for (const favorite of filterFavorites) {
            const listFavoritePosts = allPosts.find(
                (post) => {
                    return post.id === favorite.postId
                }
            )
            favoritePosts.push(listFavoritePosts)
            }
    
       

        

    if (feed.displayFavorites) {
        return `
        ${
            favoritePosts.slice().reverse()
            .map(
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
    } else if (feed.chosenUser) {
        const foundPostArray = UserChoice()
        return `
        ${
            foundPostArray.slice().reverse()
            .map(
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
    } else {
        return `
        ${
            allPosts.slice().reverse()
            .map(
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


   
}









