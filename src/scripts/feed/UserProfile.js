import { getUsers, getPosts, getCurrentUser, getUserProfile} from '../data/provider.js'

const mainContainer = document.querySelector(".giffygram")


const currentUser = getCurrentUser()
const posts = getPosts()



export const userProfile = () => {
    const users = getUsers()
    const profile = getUserProfile()

    let html = `<section class="userProfilePage"> `

    //Prints the user name
    for (const user of users) {
        if (user.id === profile.userId) {
            html += `<h1>${user.name}</h1>`
        }
        
    }

    //Prints number of posts

        

    html += `</section>`
    
    return html


}