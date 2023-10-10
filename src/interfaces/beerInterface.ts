export interface IBeer {
  abv: number;
  attenuation_level: 75;
  boil_volume: {
    value: number;
    unit: string;
  };
  brewers_tips: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    hops: {
      add: string;
      amount: {
        value: number;
        unit: string;
      };
      attribute: string;
      name: string;
    }[];
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    yeast: string;
  };
  method: {
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    mash_temp: {
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }[];
    twist: null;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: {
    value: number;
    unit: string;
  };
}
