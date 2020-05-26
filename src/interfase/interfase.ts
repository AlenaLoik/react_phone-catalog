export interface IProductDetails {
  additionalFeatures: string;
  android: {
      os: string;
      ui: string;
  },
  availability: [];
  battery: {
      standbyTime: string;
      talkTime: string;
      type: string;
  },
  camera: {
      features: [];
      primary: string;
  },
  connectivity: {
      bluetooth: string;
      cell: string;
      gps: boolean;
      infrared: boolean;
      wifi: string;
  },
  description: string;
  display: {
      screenResolution: string;
      screenSize: string;
      touchScreen: boolean;
  },
  hardware: {
      accelerometer: boolean;
      audioJack: string;
      cpu: string;
      fmRadio: boolean;
      physicalKeyboard: boolean;
      usb: string;
  },
  id: string;
  images: [];
  name: string;
  sizeAndWeight: {
      dimensions: [];
      weight: string;
  },
  storage: {
      flash: string;
      ram: string;
  }
}

export interface IProduct {
  age: number;
  id: number;
  type: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: 780,
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
}

export interface IImges {
  id: number;
  url: string;
}
