<script lang="ts" setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import type { Item } from '~/types/sanity.types';

const route = useRoute()
const router = useRouter()

function replaceQuery(index:number){
  router.replace(`${route.path}?item=${index}`)
}

const selectedTab = ref(0)

const types = [
  {
    label: 'Burgers',
    key: 'burgers',
    index: 0
  },
  {
    label: 'Sides',
    key: 'sides',
    index: 1
  },
  {
    label: 'Extras',
    key: 'extraStuff',
    index: 2
  },
  {
    label: 'Drinks',
    key: 'drinks',
    index: 3
  }
]

const props = defineProps({
  isMenu: Boolean,
  burgers: Array<Item>,
  sides: Array<Item>,
  drinks: Array<Item>,
  extraStuff: Array<Item>,
  allergies: String,
  menyDeal: Object,
})

</script>

<template>
  <div class="divide-slate-600 rounded-md bg-slate-200 dark:bg-slate-700 bg-opacity-95 max-w-2xl mx-8 md:mx-auto shadow-xl">
    <TabGroup :selectedIndex="Number(route.query.item)" v-if="isMenu">
      <TabList class="grid grid-flow-col">
        <Tab as="template" v-slot="{ selected }"v-for="tab in types" class="first:rounded-tl-md last:rounded-tr-md"><button class="h-12" :class=" { 'bg-slate-500 text-white shadow-2xl border-2 border-slate-600':selected, 'bg-slate-600 text-slate-100 hover:bg-slate-600': !selected } " @click="replaceQuery(tab.index)">{{ tab.label }}</button></Tab>
      </TabList>
      <div class="border-x-slate-700 dark:border-x-slate-400 border-x-8 border-b-slate-700 dark:border-b-slate-400 border-b-8 rounded-b-md">
        <TabPanels class="px-8">
          <TabPanel>
            <MenuList :list="burgers" class="mb-12" />
            <div class="text-center space-y-0 " v-if="menyDeal?.active">
              <h2 class="font text-xl">{{ menyDeal.label }}</h2>
              <p>{{ menyDeal.price }},-</p>
              <p v-if="menyDeal.comment" >{{ menyDeal.comment }}</p>
            </div>
          </TabPanel>
          <TabPanel>
            <MenuList :list="sides" />
          </TabPanel>
          <TabPanel>
            <MenuList :list="extraStuff" />
          </TabPanel>
          <TabPanel>
            <MenuList :list="drinks" />
          </TabPanel>
        </TabPanels>
        <p v-if="allergies"class=" md:px-24 px-8 pt-4 text-sm text-center md:text-base">{{ allergies }}</p>
        <span v-if="isMenu" class="text-center">
          <p class="mt-4"><Icon name="i-ph-leaf-bold" class="text-green-500" /> - Vegetarian</p>
          <p><Icon v-for="n in 3" name="i-ph-fire-bold" class="text-red-500" />  - Heatlevel!</p>
        </span>
        <UDivider size="sm" :ui="{ border: {base: 'dark:border-slate-600'} }" />
        <RetroLink class="py-8" label="BACK" :return="true" />
      </div>
    </TabGroup>
    <div v-else class="border-slate-700 dark:border-slate-400 border-8 rounded-md px-12 py-8">
      <slot />
      <RetroLink class="pt-8" label="BACK" :return="true" />
    </div>
  </div>
</template>

<style scoped>
.font{
  font-family: 'Press start 2P';
}
</style>
