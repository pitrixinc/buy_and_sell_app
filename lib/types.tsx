export type FormData = {
  category: string;
  subcategory: string;
  location: string;
  youtube: string;
  title: string;
  description: string;
  price: number | null;
  marketprice: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<string>;
  userName: string;
  userImage: string;
  formattedDate: string;
  type: string;
  quantity: number | null;
  condition: string;
  material: string;
  name: string;
  warranty: boolean;
  delivery: boolean;
  specialty: string;
  dietary: string;
  color: string;
  ghana: boolean;
  brand: string;
  handmade: boolean;
  age: number | null;
  gender: string;
  size: number;
  capacity: string;
};

export type uploadData = {
  category: string;
  subcategory: string;
  location: string;
  youtube: string;
  title: string;
  userEmail: string;
  description: string;
  price: number | null;
  marketprice: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
  userName: string;
  userImage: string;
  formattedDate: string;
  type: string;
  quantity: number | null;
  condition: string;
  material: string;
  name: string;
  warranty: boolean;
  delivery: boolean;
  specialty: string;
  dietary: string;
  color: string;
  ghana: boolean;
  brand: string;
  handmade: boolean;
  age: number | null;
  gender: string;
  size: number;
  capacity: string;
};

export type adData = {
  title: string;
  negotiable: boolean;
  category: string;
  subcategory: string;
  location: string;
  youtube: string;
  description: string;
  userEmail: string;
  price: number;
  marketprice: number | null;
  imagesUrl: Array<string>;
  id: string;
  contactNumber: number | null;
  userName: string;
  userImage: string;
  formattedDate: string;
  type: string;
  quantity: number | null;
  condition: string;
  material: string;
  name: string;
  warranty: boolean;
  delivery: boolean;
  specialty: string;
  dietary: string;
  color: string;
  ghana: boolean;
  brand: string;
  handmade: boolean;
  age: number | null;
  gender: string;
  size: number;
  capacity: string;
};
