<script lang="ts" setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import type { Item } from '~/types/sanity.types';

const selectedTab = ref('0')

const types = [
  {
    label: 'Burgers',
    key: 'burgers',
    value: '0'
  },
  {
    label: 'Sides',
    key: 'sides',
    value: '1'
  },
  {
    label: 'Extras',
    key: 'extraStuff',
    value: '2'
  },
  {
    label: 'Drinks',
    key: 'drinks',
    value: '3'
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
  <div class="rounded-md bg-slate-200 dark:bg-slate-700 bg-opacity-95 max-w-2xl mx-8 md:mx-auto shadow-xl">
    <TabsRoot v-model="selectedTab" v-if="isMenu">
      <TabsList class="grid grid-flow-col">
        <TabsTrigger 
          v-for="tab in types" 
          :key="tab.key"
          :value="tab.value"
          class="first:rounded-tl-md last:rounded-tr-md h-12"
          :class="{ 
            'bg-slate-500 text-white shadow-2xl border-2 border-slate-600': selectedTab === tab.value,
            'bg-slate-600 text-slate-100 hover:bg-slate-500': selectedTab !== tab.value
          }"
        >
          {{ tab.label }}
        </TabsTrigger>
      </TabsList>
      <div class="border-x-slate-700 dark:border-x-slate-600 border-x-8 border-b-slate-700 dark:border-b-slate-600 border-b-8 rounded-b-md px-4">
        <div class="px-8">
          <TabsContent value="0">
            <MenuList :list="burgers" class="mb-12" />
            <div class="text-center space-y-0" v-if="menyDeal?.active">
              <h2 class="font text-xl">{{ menyDeal.label }}</h2>
              <p>{{ menyDeal.price }},-</p>
              <p v-if="menyDeal.comment">{{ menyDeal.comment }}</p>
            </div>
          </TabsContent>
          <TabsContent value="1">
            <MenuList :list="sides" />
          </TabsContent>
          <TabsContent value="2">
            <MenuList :list="extraStuff" />
          </TabsContent>
          <TabsContent value="3">
            <MenuList :list="drinks" />
          </TabsContent>
        </div>
        <p v-if="allergies"class=" md:px-24 px-8 pt-4 text-sm text-center md:text-base">{{ allergies }}</p>
        <span v-if="isMenu" class="text-center p-16">
          <p class="mt-4"><UIcon name="i-ph-leaf-bold" class="text-green-500" /> - Vegetarian</p>
          <p><Icon v-for="n in 3" name="i-ph-fire-bold" class="text-red-500" />  - Heatlevel</p>
        </span>
        <USeparator color="neutral" size="md"/>
        <RetroLink class="py-8" label="BACK" :return="true" />
      </div>
    </TabsRoot>
    <div v-else class="border-slate-700 dark:border-slate-400 border-8 rounded-md px-12 py-8">
      <slot />
      <RetroLink class="pt-8" label="BACK" :return="true" />
    </div>
  </div>
</template>

<style scoped>
.font{
  font-family: 'Press Start 2P';
}
</style>
