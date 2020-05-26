import { IProduct } from '../interfase/interfase';



export const getProduct = (): Promise<IProduct[]> => {
  return fetch('https://mate-academy.github.io/react_phone-catalog/api/products.json')
    .then(res => res.json());
}

// export const getDetails = (): Promise<IProductDetails[]> => {
//   return fetch(`https://mate-academy.github.io/react_phone-catalog/api/products/${itemId}.json`)
//     .then(itemDetails => {
//       return itemDetails.json()})
//   }
