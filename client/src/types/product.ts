export interface Product {
  id: string;
  name: string;
  description: string;
  mrp: number;
  price: number;
  images: string[]; // ou outro tipo se for objeto
  category: string;
  storeId: string;
  inStock: boolean;
  store: any; // idealmente, crie uma interface Store
  rating: any; // idealmente, crie uma interface Rating
  createdAt: string;
  updatedAt: string;
}

// export interface Store {
//   id: string;
//   userId: string;
//   name: string;
//   description: string;
//   username: string;
//   address: string;
//   status: string;
//   isActive: boolean;
//   logo: string;
//   email: string;
//   contact: string;
//   createdAt: string;
//   updatedAt: string;
//   user: StoreUser;
// }