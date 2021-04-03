export interface ExampleData {
  type: string;
  title: string;
  st: string;
  vehicle?: Vehicle;
  hotel?: Hotel;
  place?: Place;
}

export interface Vehicle {
  type: string;
  gearbox: string;
  ac: boolean;
}

export interface Hotel {
  rating: string;
  starRating: number;
  category: string;
}

export interface Place {
  category: string;
}
