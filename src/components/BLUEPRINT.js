export default class BLUEPRINT {
    selectEl(selector) {
        return document.querySelector(selector)
    }

    clearEl(selector) {
        this.selectEl(selector).innerHTML = ""
    }

    handler() {

    }

    template() {

    }

    render(parentSelector = "") {
        if (!parentSelector) {
            setTimeout(() => this.handler())
            return this.template()
        }
        this.clearEl(parentSelector)
        this.selectEl(parentSelector).insertAdjacentHTML("afterbegin", this.template())
        this.handler()
    }
}