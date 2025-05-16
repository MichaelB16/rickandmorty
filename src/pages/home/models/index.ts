import type { IPagination } from 'src/@types';

// Enums devem vir antes das interfaces que os utilizam
export enum GenderName {
  male = 'Masculino',
  female = 'Feminino',
  unknown = 'Desconhecido',
  genderless = 'Sem gênero',
}

export enum GenderColor {
  male = 'grey-8',
  female = 'purple',
  unknown = 'green',
  genderless = 'orange',
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
  humanoid = 'Humanóide',
  animal = 'Animal',
  robot = 'Robô',
  poopybutthole = 'Poopybutthole',
  mythological = 'Mitológico',
  cronenberg = 'Cronenberg',
  disease = 'Doença',
  planet = 'Planeta',
}

export interface ILocation {
  name: string;
  dimension?: string;
  id?: number;
}

export interface IEpisode {
  air_date: string;
  episode: string;
  created: string;
  name: string;
  id?: number;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: ILocation;
}

export interface IDetails extends Omit<ICharacter, 'location'> {
  location: Omit<ILocation, 'id'>;
  episode: IEpisode[];
}

export interface IStateHome {
  loadingPage: boolean;
  listCharacteres: ICharacter[];
  listDetails: IDetails;
  pagination: IPagination;
}

export interface ICharacterFilter {
  name?: string;
  status?: keyof typeof StatusName;
  species?: keyof typeof SpeciesName;
  gender?: keyof typeof GenderName;
  page?: number;
}
