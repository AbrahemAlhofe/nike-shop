import './slider.scss'
import html from './slider.pug';
import { createElement } from '../../utils';
import { currentProduct, Product } from '../../types';
class Slider extends HTMLElement {

    get slider__slides () {
        return this.querySelector('.slider__slides') as HTMLElement
    }

    get slider__slide () {
        return this.querySelectorAll('.slider__slides .slider__slide')
    }

    get currentSlide () {
        return this.querySelector('.slider__slide--current')
    }

    connectedCallback() {
        this.innerHTML = html();
        this.classList.add( 'slider' )
        this.updateView()
    }

    updateView () {

        // =====================================
        // Remove Slides
        // =====================================
        window.store.products.$on('remove', (index: number, item: Product) => {
            this.slider__slide.forEach(slide => slide.remove())
        })

        // =====================================
        // Add Slides
        // =====================================
        window.store.products.$on('add', (product: Product, index: number) => {
            const slide = createElement("div", { classList: ["slider__slide"] });
            slide.appendChild(
                createElement("img", { attrs : { src : product.image } })
            );
            this.slider__slides.appendChild(slide);
            slide.addEventListener('click', () => {
                window.store.product.set({ index, ...window.store.products.value[index] })
            })
        })

        // =====================================
        // Add class "slider__slide--current" to currentProduct
        // =====================================
        window.store.product.$on('set', (product : currentProduct) => {
            this.currentSlide?.classList.remove('slider__slide--current')
            this.slider__slide[product.index].classList.add('slider__slide--current')
        })

    }

    constructor() { super() }

}

customElements.define("v-slider", Slider);
