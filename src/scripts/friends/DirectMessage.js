import { getUsers, sendMessage, getMessages, setMessageRecipient, getMessageRecipient, setPostMessage } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const DirectMessage = () => {
    const currentUser = localStorage.getItem('gg_user');
    const users = getUsers()
    const messages = getMessages()
    let html = `
        <section class="messagePostForm">
        <div class="miniMode" id="sendMessage">Send a message</div>
        </section>
    `

    //filter messages if current user === recipientId or userId is not

    const directMessagesArray = messages.filter(
        (message) => {
            return currentUser === message.userId || currentUser === message.recipientId
        }
    )


    html += `<section class="messageList">`
    directMessagesArray.slice().reverse()
    .forEach( (message) => {
        html += `<section class="messageObject">`
        for (const user of users) {
            if (user.id === parseInt(message.userId)) {
                html += `<p class="message__author">${user.name}</p>`
                html += `<p class="messageText">${message.message}</p>`
            }
        }
        for (const user of users) {
            if (user.id === parseInt(message.recipientId)) {
                html += `<p class="messageRecipient">${user.name}</p>`
            }
        }
        html += `</section>`
    });
  
        html += `</section>`
    
    html += `</section>`

    return html
}


const directMessageForm = () => {
    const users = getUsers()
    return `<section class="messagePostForm">
        <div class="miniMode">
        <div class="field">
        <select class="newPost__input" name="messageUser">
        <option class="" value="0">--Choose A User--</option>
        ${users.map(
        (userObj) => {
            return `
                <option value="${userObj.id}">${userObj.name}</option>`
        })
        }
        </select>
        </div>

        <div class="field">
            <textarea class="newPost__input newPost__description" name="messageText" class="input" placeholder="Type your message..."/></textarea>
        </div>
       
        <button class="button" id="sendMessage">Send</button>
        <button class="messageButton" id="messageCancel">Cancel</button>
        </div>>
        </section>`
}





mainContainer.addEventListener("click", clickEvent => {
    const recipientObj = getMessageRecipient()
    const currentUser = localStorage.getItem('gg_user');
    if (clickEvent.target.id === "sendMessage") {
        setPostMessage(1);
        // Get what the user typed into the form fields querySelector searches document
        const recipient = recipientObj.id
        const message = document.querySelector("textarea[name='messageText']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            userId: currentUser,
            recipientId: recipient,
            message: message,
            read: false

        }
        // calling SendPost (in database) with object created 
        sendMessage(dataToSendToAPI)
    }
})

mainContainer.addEventListener("change", clickEvent => {
    if (clickEvent.target.name === "messageUser") {
        setMessageRecipient(parseInt(clickEvent.target.value))


    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendMessage") {
        document.querySelector(".messagePostForm").innerHTML = directMessageForm()


    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "messageCancel") {
        document.querySelector(".messagePostForm").innerHTML = DirectMessage()


    }
})
