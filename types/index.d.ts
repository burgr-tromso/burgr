interface Size {
    size: string,
    price: number
  }
  
export interface Item {
label:string,
description:string,
allergies?:string,
price?:number,
sizes?:Size,
spicelevel: number,
isVegetarian: boolean
}