<template>
  <q-layout view="lHh Lpr lFf">
    <app-banner />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppBanner from 'src/components/AppBanner.vue';
</script>
