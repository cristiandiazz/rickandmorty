import { defineStore } from 'pinia';
import { fetchCharacters, fetchFirstEpisodeName } from '../services/characterList';
import { Character } from './CharacterInterface';

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [] as Character[],
  }),
  getters: {
    allCharacters: (state) => state.characters,
  },
  actions: {
    async fetchCharacters() {
      try {
        const response = await fetchCharacters(this.characters.length / 20 + 1);
        this.characters.push(...response.results);
      } catch (error) {
        console.error('Error fetching Rick and Morty characters:', error);
        throw error;
      }
    },
    async updateCharacterEpisodeNames(character: Character) {
      if (character.episode && character.episode.length > 0) {
        const firstEpisodeUrl = character.episode[0];
        const episodeName = await fetchFirstEpisodeName(firstEpisodeUrl);
        character.firstSeenIn = episodeName;
      }
    },
  },
});

