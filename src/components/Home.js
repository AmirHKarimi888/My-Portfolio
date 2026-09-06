import BLUEPRINT from "./BLUEPRINT.js"
import HomeIntro from "./HomeIntro.js"
import HomeAbout from "./HomeAbout.js"
import HomeContact from "./HomeContact.js"

class Header extends BLUEPRINT {

    handler() {
        window.addEventListener("scroll", () => {
            if (scrollY < this.selectEl("#intro").offsetHeight) {
                this.selectEl("#intro div").style = "animation: fadeInBottom 2s ease 0s 1 normal forwards;"
            }
            
            if (scrollY > this.selectEl("#intro").offsetHeight - 200) {
                this.selectEl(".about-container .about-header").style = "animation: fadeInRight 1.5s ease 0s 1 normal forwards;"
                this.selectEl(".about-container .about-content").style = "animation: fadeInLeft 1.5s ease 0s 1 normal forwards;"
                this.selectEl(".about-container .technologies").style = "animation: fadeInRight 1.5s ease 0s 1 normal forwards;"
                this.selectEl(".about-container .what-i-care").style = "animation: fadeInLeft 1.5s ease 0s 1 normal forwards;"
            }

            if (scrollY > this.selectEl("#about").offsetHeight - 200) {
                this.selectEl(".contact-container .contact-header").style = "animation: fadeInRight 1.5s ease 0s 1 normal forwards;"
                this.selectEl(".contact-container .contact-links-container").style = "animation: fadeInLeft 1.5s ease 0s 1 normal forwards;"
            }
        })
    }

    template() {
        return `
        <div id="home" class="home">
            <section>
                ${HomeIntro.render()}
            </section>

            <section>
                ${HomeAbout.render()}
            </section>

            <section>
                ${HomeContact.render()}
            </section>
        </div>
        `
    }
}

export default new Header()