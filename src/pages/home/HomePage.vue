<template>
  <q-page class="row">
    <q-card class="full-width">
      <q-card-section>
        <q-table
          title="Personagens"
          :rows="dataTable"
          :columns="[]"
          grid
          hide-pagination
          card-container-class="q-col-gutter-x-md q-col-gutter-y-md q-px-md"
          hide-header
          :pagination="pagination"
        >
          <template v-slot:top-right>
            <q-input
              @keyup.enter="handleSearch"
              outlined
              rounded
              dense
              debounce="300"
              v-model="search"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-btn
                  round
                  color="blue"
                  @click="handleSearch"
                  size="xs"
                  unelevated
                  icon="search"
                />
              </template>
            </q-input>
          </template>

          <template v-slot:item="{ row }">
            <div class="col-md-3 col-sm-3 col-xs-12 col-lg-3">
              <card-person
                :id="row.id"
                :name="row.name"
                :image="row.image"
                :gender="row.gender"
                :species="row.species"
                :status="row.status"
                :location="row.location.name"
                @redirect="redirect"
              />
            </div>
          </template>

          <template v-slot:bottom>
            <app-pagination
              @request="updatePagination"
              v-model="pagination.page"
              :pagination="pagination"
            />
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useHomeStore } from 'src/pages/home/stores';
import { useRouter } from 'vue-router';
import CardPerson from './components/CardPerson.vue';
import AppPagination from 'src/components/AppPagination.vue';

const router = useRouter();
const homeStore = useHomeStore();
const search = ref('');

onMounted(async () => {
  await requestGetCharacters();
});

const dataTable = computed(() => {
  return homeStore.listCharacteres;
});

const pagination = computed(() => {
  return homeStore.pagination;
});

const handleSearch = async () => {
  await requestGetCharacters(1, search.value);
};

const updatePagination = async ({ page }: { page: number }) => {
  await requestGetCharacters(page, search.value);
};

const requestGetCharacters = async (page: number = 1, search = '') => {
  await homeStore.REQUEST_GET_CHARACTERS(page, search);
};

const redirect = async (id: number) => {
  await router.push({ name: 'details', params: { id } });
};
</script>
