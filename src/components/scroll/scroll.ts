import './scroll.scss'
import html from './scroll.pug';
import { onDragDrop, pad } from '../../utils';
import { RecordValue } from '../../recorder';

class Scroll extends HTMLElement {
  numerator: RecordValue<number> = new RecordValue(0, {
    set : (value: number) => Math.min(Math.max( value, 0 ), this.denominator.value - 1)
  });

  denominator: RecordValue<number> = new RecordValue(4);

  heightUnit: number = 0

  get scroll__bar() {
    return this.querySelector(".scroll__bar") as HTMLElement;
  }

  get scroll__thumbnail() {
    return this.querySelector(".scroll__thumbnail") as HTMLElement;
  }

  get scroll__numerator() {
    return this.querySelector(".scroll__numerator") as HTMLElement;
  }

  get scroll__denominator() {
    return this.querySelector(".scroll__denominator") as HTMLElement;
  }

  connectedCallback() {
    this.innerHTML = html();
    this.classList.add("scroll");

    this.computedData();
    this.updateView();

    // =======================================
    // Data
    // =======================================
    this.numerator.set(0);
    this.denominator.set(window.store.goods.length);

    // =======================================
    // Scroll Bar Functionality
    // =======================================
    const onMove = (e: MouseEvent) => {
      const y = e.pageY - this.scroll__bar.getBoundingClientRect().top
      this.numerator.set( Math.floor( y / this.heightUnit ) );
    }

    onDragDrop(this.scroll__thumbnail, () => true, onMove, () => {});
    
    window.addEventListener('wheel', (e) => {
      // Scroll Up
      if ( e.deltaY > 0 ) this.numerator.set( this.numerator.value + 1 )
      else this.numerator.set( this.numerator.value - 1 )
    })

  }

  constructor() {
    super();
  }

  computedData () {
    this.denominator.$on('set', (value: number) => this.heightUnit = this.scroll__bar.offsetHeight / value)
    this.numerator.$on('set', (value: number) => {
      window.store.products.set(window.store.goods[value])
    })
  }

  updateView() {
    
    // Set Scroll Fraction Text
    this.numerator.$on(
      "set",
      (value: number) => (this.scroll__numerator.innerText = pad(value + 1, String(this.denominator.value).length))
    );
    this.denominator.$on(
      "set",
      (value: number) => (this.scroll__denominator.innerText = String(value))
    );

    // Set Height Of Thumbnail
    this.denominator.$on("set", (value: number) => {
      this.scroll__thumbnail.style.height = `${this.scroll__bar.offsetHeight / value}px`
    });

    // Set Y of Thumbnail
    this.numerator.$on(
      'set',
      (value: number) => (this.scroll__thumbnail.style.top = this.heightUnit * this.numerator.value + 'px')
    )

  }
}

customElements.define("v-scroll", Scroll);
