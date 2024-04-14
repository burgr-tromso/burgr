<script lang="ts" setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import type {Item} from '../types/index'

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
    label: 'Extras',
    key: 'extraStuff'
  },
  {
    label: 'Drikke',
    key: 'drinks'
  }
]

const props = defineProps({
  isMenu: Boolean,
  burgers: Array<Item>,
  sides: Array<Item>,
  drinks: Array<Item>,
  extraStuff: Array<Item>
})

</script>

<template>
  <div class="divide-slate-600 rounded-md bg-slate-200 dark:bg-slate-700 bg-opacity-95 max-w-2xl mx-8 md:mx-auto border-slate-700 dark:border-slate-400 border-4 shadow-xl space-y-6">
    <TabGroup v-if="isMenu">
      <TabList class="grid grid-flow-col">
        <Tab as="template" v-slot="{ selected }"v-for="tab in types"><button class="h-12" :class=" { 'bg-slate-500 text-white shadow-2xl border-2 border-slate-800':selected, 'bg-slate-600 text-slate-100 hover:bg-slate-600': !selected } ">{{ tab.label }}</button></Tab>
      </TabList>
      <TabPanels class="px-6">
        <TabPanel>
          <MenuList :list="burgers" />
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
    </TabGroup>
    <div class="px-12">
      <slot />
    </div>
    <UDivider size="sm" :ui="{ border: {base: 'dark:border-slate-600'} }" />
    <RetroLink class="pb-4" label="TILBAKE" to="/burgr" :return="true" />
    
  </div>
</template>

<style scoped></style>
