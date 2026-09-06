import Header from "./components/Header.js"
import Home from "./components/Home.js"

class App {

    template() {
        return `
        <header>
            ${Header.render()}
        </header>

        <main>
            ${Home.render()}
        </main>

        <footer>
        </footer>
        `
    }

    render(selector) {
        document.querySelector(selector).innerHTML = ""
        document.querySelector(selector).insertAdjacentHTML("afterbegin", this.template())
    }
}

export default new App()