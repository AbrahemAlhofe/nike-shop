import './view.scss'
import html from './view.pug';
class Navbar extends HTMLElement {

    get image () {
        return document.querySelector('.view__image') as HTMLImageElement
    }

    connectedCallback() {
        this.innerHTML = html();
        this.classList.add( 'view' )

        // ===============================
        // Image
        // ===============================
        window.store.product.$on('update:image', (image: string) => {
            this.image.setAttribute('src', image)
        })
    }

    constructor() { super() }

}

customElements.define("v-view", Navbar);
