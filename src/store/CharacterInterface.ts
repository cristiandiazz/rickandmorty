export interface Character {
  id: number;
  name: string;
  status: string;
  location: {
    name: string;
    url: string;
  };
  firstSeenIn?: string;
  image: string;
  episode: string[];
  url: string;
}





