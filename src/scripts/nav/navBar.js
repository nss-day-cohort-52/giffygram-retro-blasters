import { setFeedFavorite, setFeed} from "../data/provider.js"
const mainContainer = document.querySelector(".giffygram")

export const navBar = () => {
    return `
        <div class="navigation__item navigation__icon">
            <img src="/images/pb.png" alt="Giffygram icon" id= "logo">
        </div>
        <div class="navigation__item navigation__name">Giffygram</div>
        <div class="navigation__item navigation__search"></div>
        <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
                <div class="notification__count">
                    0
                </div>
            </div>
            <div class="navigation__item navigation__logout">
            <button  id="logout" class="fakeLink">Logout</button>
        </div>
`
}


mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "logo") {
        setFeedFavorite(false)
        setFeed(false)
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        
    }
}
  )

  mainContainer.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "logout") {
        localStorage.clear();
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        
    }
}
  )