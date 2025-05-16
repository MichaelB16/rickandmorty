import type { IPagination } from 'src/@types';

export interface IStateHome {
  loadingPage: boolean;
  listCharacteres: ICharacter[];
  listDetails: IDetails;
  pagination: IPagination;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: {
    name: string;
    id: number;
    dimension: string;
  };
}
export interface IDetails {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: {
    name: string;
    dimension: string;
  };
  episode: Array<{
    air_date: string;
    episode: string;
    created: string;
    name: string;
  }>;
}
export enum GenderName {
  male = 'Masculino',
  female = 'Feminino',
  unknown = 'Desconhecido',
}
export enum GenderColor {
  male = 'grey-8',
  female = 'purple',
  unknown = 'green',
}
export enum StatusName {
  dead = 'Morto',
  alive = 'Vivo',
  unknown = 'Desconhecido',
}
export enum StatusColor {
  dead = 'red',
  alive = 'green',
  unknown = 'grey-8',
}
export enum SpeciesName {
  alien = 'Alienígena',
  human = 'Humano',
  unknown = 'Desconhecido',
}
