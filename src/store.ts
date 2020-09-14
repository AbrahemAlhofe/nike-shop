import { RecordArray, RecordObject, RecordValue } from "./recorder";
import { currentProduct } from "./types";

const description = 'هذا النص مثال لنص يمكن أن يستبدل في نفس المساحة. لتوليد هذا النص من مولد النص العربي حيث يمكن أن تولد'

const part1 = [
  {
    name: "جوردان زيرو تو",
    price: 126,
    image: "../images/shoe-1.png",
    description,
  },
  {
    name: "أير ماكس 270",
    price: 160,
    image: "../images/shoe-2.png",
    description,
  },
  {
    name: "أير جوردان 1 ميد",
    price: 200,
    image: "../images/shoe-3.png",
    description,
  },
  {
    name: "كيفين دورانت 12",
    price: 323,
    image: "../images/shoe-4.png",
    description,
  },
];

const part2 = [
  {
    name: "فليكيس ميثود",
    price: 500,
    image: "../images/shoe-5.png",
    description,
  },
  {
    name: "جاكوب زيرو وان",
    price: 740,
    image: "../images/shoe-6.png",
    description,
  },
];

window.store = {
  goods: [part1, part2],

  products: new RecordArray(part1),

  product: new RecordObject({
    name: "",
    price: 0,
    image: "",
    description: "",
    index: 2,
  }),
};

window.store.products.$on("set", () => {
  const index = Math.min( window.store.product.value.index, window.store.products.value.length - 1 )
  window.store.product.set({ index, ...window.store.products.value[ index ] });
});