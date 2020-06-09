import { IProduct, IProductDetails } from '../interfase/interfase';



export const getProduct = (): Promise<IProduct[]> => {
  return fetch('https://mate-academy.github.io/react_phone-catalog/api/products.json')
    .then(res => res.json());
}

export const getDetails = (id: string): Promise<IProductDetails> => {
  return fetch(`https://mate-academy.github.io/react_phone-catalog/api/products/${id}.json`)
    .then(itemDetails => {
      return itemDetails.json()})
  }
