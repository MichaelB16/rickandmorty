import { defineStore } from 'pinia';
import { $appolo } from 'src/boot/apollo';
import { CharactersService } from 'src/graphql/characters';
import type { IStateHome, ICharacter, IDetails } from '../models';
import { configPagination } from 'src/utils';

export const useHomeStore = defineStore('home', {
  state: (): IStateHome => ({
    loadingPage: false,
    listCharacteres: [] as ICharacter[],
    listDetails: {} as IDetails,
    pagination: configPagination(),
  }),
  actions: {
    async REQUEST_GET_CHARACTERS(page: number = 1, name: string = '') {
      this.loadingPage = true;
      await $appolo
        .query({
          query: CharactersService.GET_LIST_CHARACTERS,
          variables: {
            page: page,
            filter: { name },
          },
        })
        .then(({ data }) => {
          this.listCharacteres = data.characters.results;
          this.pagination = configPagination(data.characters.info);
          console.log(this.pagination);
        })
        .finally(() => {
          this.loadingPage = false;
        });
    },
    async REQUEST_GET_FIND(id: number) {
      this.loadingPage = true;
      await $appolo
        .query({ query: CharactersService.GET_FIND_CHARACTER, variables: { id } })
        .then(({ data }) => {
          this.listDetails = data.character;
        })
        .finally(() => {
          this.loadingPage = false;
        });
    },
  },
});
