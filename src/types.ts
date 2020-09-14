export interface Product {
    name : string,
    description : string,
    image : string,
    price : number
}

export interface currentProduct extends Product {
  index: number;
}