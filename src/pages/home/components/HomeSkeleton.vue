<template>
  <q-card class="full-width">
    <q-card-section>
      <div class="row q-col-gutter-x-md q-col-gutter-y-md q-px-md">
        <div class="text-h6 q-mb-md">
          <q-skeleton type="text" width="250px" />
        </div>
      </div>

      <div class="row q-col-gutter-x-md q-col-gutter-y-md q-px-md">
        <!-- Repetir o skeleton card para simular múltiplos personagens -->
        <div v-for="n in 20" :key="n" class="col-md-3 col-sm-3 col-xs-12 col-lg-3">
          <q-card class="skeleton-card">
            <q-skeleton height="200px" square />
            <q-card-section>
              <q-skeleton type="text" class="text-subtitle1" />
              <q-skeleton type="text" width="60%" class="q-mt-sm" />
              <q-skeleton type="text" width="40%" class="q-mt-sm" />
              <q-skeleton type="text" width="80%" class="q-mt-sm" />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Skeleton para paginação -->
      <div class="flex justify-center q-mt-md">
        <q-skeleton type="QBtn" width="40px" class="q-mx-xs" />
        <q-skeleton type="QBtn" width="40px" class="q-mx-xs" />
        <q-skeleton type="QBtn" width="40px" class="q-mx-xs" />
        <q-skeleton type="QBtn" width="40px" class="q-mx-xs" />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'HomeSkeleton',
});
</script>

<style scoped>
.skeleton-card {
  height: 100%;
  transition: all 0.3s;
}
</style>
