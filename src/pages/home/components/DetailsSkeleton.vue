<template>
  <q-card dense class="full-width" flat>
    <q-card-section class="flex items-center q-py-xs q-px-md" horizontal>
      <q-skeleton type="QAvatar" size="60px" animation="fade" />
      <q-card-section class="full-width">
        <div class="row items-center flex justify-between">
          <div class="column">
            <q-skeleton type="text" class="text-h5 q-mb-sm" width="200px" />
            <q-skeleton type="text" width="150px" />
          </div>
          <div class="column">
            <q-skeleton type="QBtn" width="0px" />
          </div>
        </div>
      </q-card-section>
    </q-card-section>
    <q-card-section class="q-py-xs">
      <q-separator />
      <q-list separator>
        <q-item v-for="n in 15" :key="n">
          <q-item-section avatar>
            <q-skeleton type="QAvatar" size="28px" />
          </q-item-section>
          <q-item-section>
            <q-skeleton type="text" width="300px" class="q-mb-xs" />
            <q-skeleton type="text" width="150px" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'DetailsSkeleton',
});
</script>
