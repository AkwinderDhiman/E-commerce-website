
export class ShoppingCart {
    public id:any;
    public imageSrc: string;
    public subCategory: string;
    public price: any;
    public quantity: any;

    
  
    constructor(id:any ,imageSrc: string, subCategory: string, price: any, quantity:any) {
        this.id=id;
        this.imageSrc = imageSrc;
        this.subCategory = subCategory;
        this.price = price;
        this.quantity = quantity;
       
    }
  }
  