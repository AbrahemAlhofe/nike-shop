import './descriptor.scss'
import html from './descriptor.pug';
import { animateCounting } from '../../utils'
class Navbar extends HTMLElement {

    get descriptor__name () {
        return this.querySelector('.descriptor__name span') as HTMLElement
    }

    get descriptor__price () {
        return this.querySelector('.descriptor__price span') as HTMLElement
    }

    get descriptor__description () {
        return this.querySelector(".descriptor__description") as HTMLElement
    }

    connectedCallback() {
        this.innerHTML = html();
        this.classList.add( 'descriptor' )

        this.updateView()
    }

    constructor() { super() }

    updateView () {
        let lastPrice = 0
        window.store.products.$on('set', () => lastPrice = 0)

        // ===============================
        // Set Name
        // ===============================
        window.store.product.$on("update:name", (name: string) => this.descriptor__name.innerText = name);

        // ===============================
        // Set Price
        // ===============================
        window.store.product.$on('update:price', (price: number) => {
            this.descriptor__price.innerText = String(price)
        });

        // ===============================
        // Set Description
        // ===============================
        window.store.product.$on("update:description", (desc: string) => this.descriptor__description.innerText = desc);
    }

}

customElements.define("v-descriptor", Navbar);
