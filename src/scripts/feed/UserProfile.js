import { getUsers, getPosts, getCurrentUser, getUserProfile} from '../data/provider.js'

const mainContainer = document.querySelector(".giffygram")

export const userProfile = () => {
    const users = getUsers()
    const profile = getUserProfile()
    const posts = getPosts()

    let html = `<section class="userProfilePage"> `

    //Find user name
    const foundUser = users.find(
        (user) => {
            return user.id === profile.userId
        })

    //Creates an array of posts
    const userPosts = posts.filter(
        (post) => {
            return post.userId === foundUser.id
        })

     //Prints the user name
     html += `<h1>${foundUser.name}</h1>
            <h4>Number of Posts: ${userPosts.length}`

        

    html += `</section>`
    
    return html


}