import { getPosts, getUsers,  getFeed } from "../data/provider.js"




// exporting a function that maps over the Users Array to display each user name

export const userDropDown = () => {

    const userChoice = getUsers()
    const allPosts = getPosts()
    let html = ""

    
    html += `<h3>Posts by user</h3>`
    html += ` <select name="User" id="Users">`
    for (const post of allPosts) {
             html += `<option value="0">--Choose A User--</option>
             <option value=${post.id}> All Posts </option>
             ${userChoice.map(
             (userObj) => {
                 return `
                         <option value="${userObj.id}">${userObj.name}</option>`
     
             }
         )
             }
         </select>
         `
        
    }
    
 return html
}



export const UserChoice = () => {


    const feed = getFeed()
    const users = getUsers()
    const posts = getPosts()

    // finding the userId in the feed array that matches the chosen User from Droplist
   

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







