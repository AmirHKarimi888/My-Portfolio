import BLUEPRINT from "./BLUEPRINT.js"
import Navbar from "./Navbar.js"

class Header extends BLUEPRINT {

    handler() {

    }

    template() {
        return `
        <div id="navbar" class="navbar">
            ${Navbar.render()}
        </div>
        `
    }
}

export default new Header()