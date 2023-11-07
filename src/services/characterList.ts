// rickAndMortyService.ts
import axios from 'axios';

const RICK_AND_MORTY_API_BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page: number) {
  try {
    const response = await axios.get(`${RICK_AND_MORTY_API_BASE_URL}/character/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Rick and Morty characters:', error);
    throw error;
  }
}

export async function fetchFirstEpisodeName(episodeUrl: string) {
  try {
    const response = await axios.get(episodeUrl);
    const episodeData = response.data;
    return episodeData.name;
  } catch (error) {
    console.error('Error fetching episode details:', error);
    return 'Unknown';
  }
}

