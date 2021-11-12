import { setMessage } from "../data.provider.js"



mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "count") {
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }


})


export const directMessage = () => {


    const users = getUsers()
    const messages = getMessages()

    // finding the userId in the feed array that matches the chosen User from Droplist
    // if feed.chosenUser is equal to 0, rerendering the entire page 

    const foundUser = users.find(
        (user) => {
            return feed.chosenUser === user.id

        }
    )

    // filtering the posts for any post that has a userId that matches the chosen User
    const foundMessageArray = messages.filter(
        (message) => {
            return message.userId === foundUser.id
        }

    )

    // display filtered posts
    let html = ""
    for (const foundMessage of foundMessageArray) {
        // posting feed content for post 
        html += `<h3> ${foundMessage.title}</h3> <p>${foundMessage.story}</p> <p>Posted by: ${foundMessage.foundUser} on ${foundMessage.Date}`

    }

    return html



}



document.addEventListener(
    "change",
    (event) => {
        // listening for "User" which is the dropdown
        if (event.target.id === "count") {
    //  setFeed is setting who ever you clicked on - setting the value of that user
            setMessage(parseInt(event.target.value))
            // runs the UserChoice function which returns the HTML in GiffyGram Feed
            document.querySelector(".giffygram__feed").innerHTML=directMessage()
            

        }
    }

)
