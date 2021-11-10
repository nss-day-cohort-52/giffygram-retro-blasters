import { getUsers, setCurrentUser } from "../data/provider.js"

// Targets when someone tries to login
document.addEventListener("click", clickEvent => {
    //Targets the login buttton
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        //stores the email and password
        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        // If the user is correct sets the gg_user
        if (foundUser !== null) {
            setCurrentUser(foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

export const LoginForm = () => {
    return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        </div>
    `
}
