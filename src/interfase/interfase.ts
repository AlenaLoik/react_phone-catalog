export interface IProductDetails {
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string[];
  battery: Record<string, any>;
  camera: {
    primary: string;
  };
  connectivity: {
    cell: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
  };
  hardware: {
    cpu: string;
  };
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: Record<string, any>;
  storage: {
    flash: string;
    ram: string;
  };
}

export interface IProduct {
  age: number;
  id: string;
  type: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
}

export interface IMyContext {
  items: IProduct[];
  basket: IProduct[];
  setBasket: ([]) => void;
  favorites: IProduct[];
  setFavorites: ([]) => void;
}
