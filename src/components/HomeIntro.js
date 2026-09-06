import BLUEPRINT from "./BLUEPRINT.js"

class HomeIntro extends BLUEPRINT {
    handler() {

    }

    template() {
        return `
        <div id="intro" class="intro">
            <div>
                <h1>Amirhossein Karimi</h1>
                <p>Front End Developer</p>
                <p>
                   <a href="#about" style="text-decoration: none; color: white;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE --><path fill="currentColor" d="M15.08 9.59L12 12.67L8.92 9.59L7.5 11l4.5 4.5l4.5-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"/></svg>
                   </a>
                </p>
            </div>
        </div>
        `
    }
}

export default new HomeIntro()