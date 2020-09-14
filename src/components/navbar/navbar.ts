import './navbar.scss'
import html from './navbar.pug';
class Navbar extends HTMLElement {

  connectedCallback() {
    this.innerHTML = html();
    this.classList.add( 'navbar' )

    // =====================================
    // Sections Animation
    // =====================================
    const navbar__sections = this.querySelector('.navbar__sections') as HTMLElement
    const sections: NodeListOf<HTMLElement> = navbar__sections.querySelectorAll('.navbar__section')
    sections.forEach((section: HTMLElement) => {
      section.addEventListener('mouseover', () => {
        navbar__sections.style.setProperty("--left", section.offsetLeft + "px");
        navbar__sections.style.setProperty('--width', section.getBoundingClientRect().width + 'px' )
      })
      section.addEventListener('mouseleave', () => {
        navbar__sections.style.setProperty('--width', '0px' )
      })
    })
  }

  constructor() { super() }

}

customElements.define("v-navbar", Navbar);
