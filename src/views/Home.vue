<script setup lang="ts">
  import { useCharacterStore } from '../store/characters';
  import { ref, onMounted } from 'vue';
  const characterStore = useCharacterStore();

  const characters = characterStore.allCharacters;
  const loading = ref(true);

  onMounted(async () => {
    try {
      await characterStore.fetchCharacters();

      for (const character of characters) {
        await characterStore.updateCharacterEpisodeNames(character);
      }
    } catch (error) {
      console.error('Error fetching characters from Home.vue', error);
      throw error;
    } finally {
      loading.value = false;
    }
  });
</script>

<template>
  <div class="flex flex-wrap -m-4">
    <div
      v-for="character in characters"
      :key="character.id"
      class="w-full md:w-1/2 lg:w-1/3 p-4"
    >
      <article class="bg-gray-700 rounded-lg shadow-lg w-full h-60 flex">
        <div class="w-1/2 p-4">
          <div class="">
            <img
              :src="character.image"
              :alt="character.name"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
        <div class="w-1/2 p-4">
          <div class="">
            <div class="section">
              <h2 class="text-2xl font-semibold text-white">{{ character.name }}</h2>
              <span
                class="status"
                :class="{'text-green-500': character.status === 'Alive', 'text-red-500': character.status === 'Dead'}"
              >
                <span class="status__icon"></span> {{ character.status }} - Human
              </span>
            </div>
            <div class="section">
              <span class="text-gray">Last known location:</span>
              <a
                :href="character.location.url"
                target="_blank"
                class="whitespace-break-spaces text-blue-500 hover:underline "
                >{{ character.location.name }}</a
              >
            </div>
            <div class="section">
              <span class="text-gray">First seen in:</span>
              <a
                v-if="character.firstSeenIn"
                class="text-blue-500 hover:underline"
                :href="character.episode[0]"
              >
                {{ character.firstSeenIn }}
              </a>
              <span v-else class="text-gray">N/A</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
