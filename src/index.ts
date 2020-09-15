import './index.scss'
import { onDragDrop, pad, createElement } from "./utils";
import { RecordValue } from "./recorder";
import { RecordArray, RecordObject } from "./recorder";
import { currentProduct, Product } from "./types";

// ========================================
// Store
// ========================================

const description =
  "هذا النص مثال لنص يمكن أن يستبدل في نفس المساحة. لتوليد هذا النص من مولد النص العربي حيث يمكن أن تولد";

const part1 = [
  {
    name: "جوردان زيرو تو",
    price: 126,
    image: "images/shoe-1.png",
    description,
  },
  {
    name: "أير ماكس 270",
    price: 160,
    image: "images/shoe-2.png",
    description,
  },
  {
    name: "أير جوردان 1 ميد",
    price: 200,
    image: "images/shoe-3.png",
    description,
  },
  {
    name: "كيفين دورانت 12",
    price: 323,
    image: "images/shoe-4.png",
    description,
  },
];

const part2 = [
  {
    name: "فليكيس ميثود",
    price: 500,
    image: "images/shoe-5.png",
    description,
  },
  {
    name: "جاكوب زيرو وان",
    price: 740,
    image: "images/shoe-6.png",
    description,
  },
];

var store = {
  goods: [part1, part2],

  products: new RecordArray(part1),

  product_index: new RecordValue(2),

  product : {
    name : '',
    price : 0,
    image : '',
    description : ''
  }
};

store.product_index.$on('set', () => {
  store.product = store.products.value[store.product_index.value];
})

store.products.$on('set', () => {
  store.product_index.set( Math.min( store.product_index.value, 0 ) )
})

////////////////////////////////////////////////
// Navbar
////////////////////////////////////////////////
class Navbar {

  $elm = document.querySelector('.navbar') as HTMLElement

  navbar__sections = this.$elm.querySelector('.navbar__sections') as HTMLElement

  sections = this.navbar__sections.querySelectorAll(".navbar__section") as NodeListOf< HTMLElement >

  constructor() {
    // =====================================
    // Sections Animation
    // =====================================
    this.sections.forEach((section: HTMLElement) => {
      section.addEventListener('mouseover', () => {
        this.navbar__sections.style.setProperty("--left", section.offsetLeft + "px");
        this.navbar__sections.style.setProperty('--width', section.getBoundingClientRect().width + 'px' )
      })
      section.addEventListener('mouseleave', () => {
        this.navbar__sections.style.setProperty('--width', '0px' )
      })
    })
  }

}

const navbar = new Navbar()

////////////////////////////////////////////////
// View
////////////////////////////////////////////////
class View {

    image = document.querySelector('.view__image') as HTMLImageElement

    constructor() {
      store.product_index.$on("set", () => {
        this.image.setAttribute("src", store.product.image);
      });
    }

}

const view = new View()

////////////////////////////////////////////////
// Scroll
////////////////////////////////////////////////
class Scroll {
  numerator: RecordValue<number> = new RecordValue(0, {
    set : (value: number) => Math.min(Math.max( value, 0 ), this.denominator.value - 1)
  });

  denominator: RecordValue<number> = new RecordValue(4);

  heightUnit: number = 0

  $elm = document.querySelector('.scroll') as HTMLElement
  
  scroll__bar = this.$elm.querySelector(".scroll__bar") as HTMLElement;

  scroll__thumbnail = this.$elm.querySelector(".scroll__thumbnail") as HTMLElement;

  scroll__numerator = this.$elm.querySelector(".scroll__numerator") as HTMLElement;

  scroll__denominator = this.$elm.querySelector(".scroll__denominator") as HTMLElement;

  constructor () {
    this.computedData();
    this.updateView();

    // =======================================
    // Data
    // =======================================
    this.numerator.set(0);
    this.denominator.set(store.goods.length);

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

  computedData () {
    this.denominator.$on('set', (value: number) => this.heightUnit = this.scroll__bar.offsetHeight / value)
    this.numerator.$on('set', (value: number) => {
      store.products.set(store.goods[value])
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

const scroll = new Scroll()

////////////////////////////////////////////////
// Slider
////////////////////////////////////////////////
class Slider {

  $elm = document.querySelector('.slider') as HTMLElement

  slider__slides = this.$elm.querySelector(".slider__slides") as HTMLElement;

  get slider__slide () {
    return this.$elm.querySelectorAll(".slider__slides .slider__slide");
  }

  get currentSlide () {
    return this.$elm.querySelector(".slider__slide--current");
  }

  constructor () {
    // =====================================
    // Remove Slides
    // =====================================
    store.products.$on("remove", (index: number, item: Product) => {
      this.slider__slide.forEach((slide) => slide.remove());
    });

    // =====================================
    // Add Slides
    // =====================================
    store.products.$on("add", (product: Product, index: number) => {
      const slide = createElement("div", { classList: ["slider__slide"] });
      slide.appendChild(
        createElement("img", { attrs: { src: product.image } })
      );
      this.slider__slides.appendChild(slide);
      slide.addEventListener("click", () => store.product_index.set(index));
    });

    // =====================================
    // Add class "slider__slide--current" to currentProduct
    // =====================================
    store.product_index.$on("set", (index: number) => {
      this.currentSlide?.classList.remove("slider__slide--current");
      this.slider__slide[index].classList.add("slider__slide--current");
    });
  }
  
}

const slider = new Slider();

class Descriptor {

  $elm = document.querySelector('.descriptor') as HTMLElement

  descriptor__name = this.$elm.querySelector(".descriptor__name span") as HTMLElement;

  descriptor__price = this.$elm.querySelector(".descriptor__price span") as HTMLElement;

  descriptor__description = this.$elm.querySelector(".descriptor__description") as HTMLElement;

  constructor () {
    store.product_index.$on('set', () => {
      const { name, price, description } = store.product
      this.descriptor__name.innerText = name
      this.descriptor__price.innerText = String(price);
      this.descriptor__description.innerText = description;
    })
  }

}

const descriptor = new Descriptor()