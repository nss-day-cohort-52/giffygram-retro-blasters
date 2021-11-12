import { getUsers, sendMessage, getMessages, setMessageRecipient, getMessageRecipient, setPostMessage } from "../data/provider.js"

const mainContainer = document.querySelector(".giffygram")

export const DirectMessage = () => {
    const users = getUsers()
    const messages = getMessages()
    let html = `
        <div class="field">
        <select name="messageUser">
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
       
        <button class="button" id="sendMessage">Save</button>
        <button class="button" id="cancelButton">Cancel</button>
    `

    html += `<div class="messages">`
        for (const message of messages) {
            html += `<p>${message.userId}</p>
                    <p>${message.recipientId}</p>
                    <p>${message.message}</p>`
                }
        return html
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
