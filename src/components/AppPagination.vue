<template>
  <div class="row full-width relative-position justify-center items-center">
    <q-pagination
      size="sm"
      v-model="model"
      color="blue"
      v-bind="$attrs"
      direction-links
      boundary-links
      :max-pages="maxPages"
      :max="pagination.total"
    />
    <div class="absolute-top-right text-grey-8">
      linha por página: {{ pagination.page }} - {{ pagination.rowsPerPage }} de
      {{ pagination.count }}
    </div>
  </div>
</template>
<script lang="ts">
import type { IPagination } from 'src/@types';
import { configPagination } from 'src/utils';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'AppPagination',
  emits: ['update:modelValue', 'request'],
  props: {
    maxPages: {
      type: Number,
      default: 8,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    pagination: {
      type: Object as () => IPagination,
      default: configPagination(),
    },
  },
  setup(props, { emit }) {
    const options = [10, 20, 50, 100, 200];
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(page: number) {
        emit('update:modelValue', page);
        emit('request', { page });
      },
    });

    const rowsPerPage = computed({
      get() {
        return props.pagination.rowsPerPage;
      },
      set(rowsPerPage: number) {
        emit('request', { page: 1, rowsPerPage });
      },
    });

    return {
      model,
      options,
      rowsPerPage,
    };
  },
});
</script>
