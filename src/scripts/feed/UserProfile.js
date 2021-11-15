import { getUsers, getPosts, getUserProfile, getMessages} from '../data/provider.js'

const mainContainer = document.querySelector(".giffygram")

export const userProfile = () => {
    const users = getUsers()
    const profile = getUserProfile()
    const posts = getPosts()
    const messages = getMessages()
    const currentUser = localStorage.getItem('gg_user');

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

    const findUser = users.find(
        (user) => {
            return parseInt(currentUser) === user.id
        }
    )


    const userMessages = messages.filter(
        (message) => {
            return message.recipientId === profile.userId && parseInt(currentUser) === findUser.id
        }
    )

    const userMessageList = userMessages.map(
        (userMessage) => {
            const findRecipient = users.find(
                (recipient) => {
                    return userMessage.recipientId === recipient.id
                }
            )
            html += `<section class="messageObject">
                    <p>${findRecipient.name}</p>
                    <p>${userMessage.message}</p>
                    <p>${findUser.name}</p>
                    </section>`
        }
    )

        html += userMessageList.join("")
        
        html += `</section>`
    
    return html


}