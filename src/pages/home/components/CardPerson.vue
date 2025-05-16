<template>
  <q-card bordered class="no-shadow">
    <q-card-section class="row q-pa-none items-center">
      <q-img :src="image" />
    </q-card-section>
    <q-separator inset />
    <q-card-section class="row q-py-sm items-center">
      <div class="col-12">
        <div class="flex column">
          <b class="text-bold text-grey-8 text-subtitle1">{{ name }}</b>
          <small class="text-grey-8"> <q-icon name="location_on" /> {{ props.location }} </small>
        </div>
        <q-list flat>
          <q-item
            v-for="(item, index) in profile"
            :key="index"
            dense
            class="flex q-py-none q-px-none items-center justify-between"
          >
            <small class="text-grey-6">{{ item.label }}</small>
            <q-btn
              size="xs"
              rounded
              unelevated
              outline
              class="cursor-inherit"
              :color="item.color"
              :label="item.value"
            />
          </q-item>
        </q-list>
      </div>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="q-py-sm flex items-center justify-center">
      <q-btn
        @click="$emit('redirect', id)"
        unelevated
        glossy
        rounded
        color="blue"
        no-caps
        label="Detalhes"
      />
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { GenderColor, GenderName, SpeciesName, StatusColor, StatusName } from '../models';

const props = defineProps({
  id: {
    type: [Number, String],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    default: '',
  },
  species: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
});

const profile = computed(() => {
  return [
    {
      label: 'Gênero',
      value: GenderName[props.gender.toLocaleLowerCase() as keyof typeof GenderName],
      color: GenderColor[props.gender.toLocaleLowerCase() as keyof typeof GenderColor],
    },
    {
      label: 'Espécies',
      value: SpeciesName[props.species.toLocaleLowerCase() as keyof typeof SpeciesName],
      color: GenderColor[props.gender.toLocaleLowerCase() as keyof typeof GenderColor],
    },
    {
      label: 'Status',
      value: StatusName[props.status.toLocaleLowerCase() as keyof typeof StatusName],
      color: StatusColor[props.status.toLocaleLowerCase() as keyof typeof StatusColor],
    },
  ];
});
</script>
