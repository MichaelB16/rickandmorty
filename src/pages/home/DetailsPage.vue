<template>
  <q-page class="row">
    <q-card dense class="full-width" flat>
      <q-card-section class="flex items-center q-py-xs q-px-md" horizontal>
        <q-img style="width: 60px; height: 60px; border-radius: 100px" :src="details.image" />
        <q-card-section class="full-width">
          <div class="row items-center flex justify-between">
            <div class="column">
              <b class="text-h5 text-grey-8">
                {{ details.name }} <q-icon name="arrow_forward" /> Lista de episódios
              </b>
              <small>
                <q-icon name="location_on" class="q-mr-xs text-grey-8" />
                <span class="text-grey-8">{{ details.location }}</span>
              </small>
            </div>
            <div class="column">
              <q-btn
                @click="backPage"
                size="sm"
                rounded
                unelevated
                no-caps
                icon="arrow_back"
                label="Voltar"
              ></q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section class="q-py-xs">
        <q-separator></q-separator>
        <q-list separator>
          <q-item clickable v-ripple v-for="(episode, index) in details.episodes" :key="index">
            <q-item-section avatar>
              <q-icon color="grey-8" name="smart_display" />
            </q-item-section>
            <q-item-section>
              <b class="text-grey-8">{{ episode.name }}</b>
              <small class="text-grey-6">{{ episode.air_date }}</small>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useHomeStore } from './stores';
import { useRoute, useRouter } from 'vue-router';

defineComponent({
  name: 'DetailsPage',
});

const homeStore = useHomeStore();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
  await homeStore.REQUEST_GET_FIND(id.value);
});

const id = computed(() => {
  return parseInt(route.params.id as string);
});

const details = computed(() => {
  const details = homeStore.listDetails;
  console.log(details);
  return {
    name: details?.name || '',
    image: details?.image || '',
    location: details?.location?.name || '',
    episodes: details.episode,
  };
});

const backPage = async () => {
  await router.push({ name: 'home' });
};
</script>
