import BLUEPRINT from "./BLUEPRINT.js"

class HomeAbout extends BLUEPRINT {

    handler() {

    }

    template() {
        return `
        <div id="about" class="about">
                <div class="about-container">

        <div class="about-header">
            <h1>Hi, I'm Amirhossein Karimi 👋</h1>

            <h3>
                Front-End Developer |
                JavaScript · Vue.js · Nuxt.js
            </h3>
        </div>

        <div class="about-content">

            <p>
                I'm a self-taught Front-End Developer with several years
                of experience building web interfaces and applications.
            </p>

            <p>
                My main focus is
                <strong>JavaScript and the Vue ecosystem</strong>,
                particularly <strong>Vue 3, Composition API, and Nuxt.js</strong>.
                I also enjoy working with Vanilla JavaScript because I believe
                a strong understanding of the fundamentals is essential for
                becoming a better Front-End Developer.
            </p>

            <p>
                Over the years, I've worked on personal projects, client work,
                collaborative projects, and various Front-End challenges,
                while continuously deepening my understanding of JavaScript
                and modern web development.
            </p>

        </div>

        <div class="technologies">

            <h2>🛠️ Technologies</h2>

            <div class="tech-group">
                <h3>Languages</h3>
                <p>JavaScript · TypeScript · HTML · CSS · Python</p>
            </div>

            <div class="tech-group">
                <h3>Front-End</h3>
                <p>Vue.js · Vue 3 · Nuxt.js · React.js · Tailwind CSS · SCSS</p>
            </div>

            <div class="tech-group">
                <h3>Tools &amp; Technologies</h3>
                <p>
                    Git · GitHub · npm · Vite · Figma · REST APIs ·
                    Firebase · PocketBase · MongoDB
                </p>
            </div>

        </div>

        <div class="what-i-care">

            <h2>🧩 What I Care About</h2>

            <ul>
                <li>Strong JavaScript fundamentals</li>
                <li>Clean and maintainable code</li>
                <li>Reusable components</li>
                <li>Responsive user interfaces</li>
                <li>Understanding how tools and frameworks work under the hood</li>
                <li>Continuous learning and experimentation</li>
            </ul>

        </div>

    </div>
        </div>
        `
    }
}

export default new HomeAbout()