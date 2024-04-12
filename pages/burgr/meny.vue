<script lang="ts" setup>

const types = [
  {
    label: 'Burgere',
    key: 'burgers'
  },
  {
    label: 'Sides',
    key: 'sides'
  },
  {
    label: 'Drikke',
    key: 'drinks'
  }
]

const {data, error } = await useFetch('https://09r4q6pe.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_id+%3D%3D+%27fee4228d-eee8-4911-a53f-7a9e5dab63a2%27%5D%5B0%5D%7B%0A++burgers%2C%0A++sides%2C%0A++drinks%0A%7D')

</script>

<template>
  <div class="mx-8">
    <PageTitle title="Meny" />
    <div
      class=" rounded-sm bg-slate-200 dark:bg-slate-700 bg-opacity-95 max-w-2xl mx-auto px-8 py-12  border-slate-700 dark:border-slate-200 border-4 shadow-xl space-y-6">
      <UTabs :items="types" class="w-full">
        <template #item="{ item }">
          <div v-if="item.key === 'burgers'" class="space-y-3">
            <MenuList :list="data.result.burgers" />
          </div>
          <div v-else-if="item.key === 'sides'" class="space-y-3">
            <MenuList :list="data.result.sides" />
          </div>
          <div v-else-if="item.key === 'drinks'" class="space-y-3">
            <MenuList :list="data.result.drinks" />
          </div>
        </template>
      </UTabs>
      <RetroLink class="pb-4" label="TILBAKE" to="/burgr" />
      <span class="text-center">
        <h4>Allergies:</h4>
        <p>W - Wheat, M - Milk, SO - Soya, EG - Egg, SE - Mustard, SEL - Celery, F - Fish, SES - Sesamy</p>
      </span>
    </div>
  </div>
</template>

<style scoped>
</style>
