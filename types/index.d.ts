interface Size {
    size: string,
    price: number
  }
  
export interface Item {
label:string,
description:string,
allergies?:string,
price?:number,
sizes?:Array<Size>,
spicelevel: number,
isVegetarian: boolean
}

type MenyDeal = {
  active: Boolean,
  label: String,
  price: Number
}


export interface Menu{
  isMenu: Boolean,
  burgers: Array<Item>,
  sides: Array<Item>,
  drinks: Array<Item>,
  extraStuff: Array<Item>,
  allergies: string,
  menyDeal: Object<MenyDeal>,
}