<script lang="ts" setup>
import type { Item } from '~/types/sanity.types';

const props = defineProps({
  list: Array<Item>,
  allergies: String
})

</script>

<template>
  <div class="pt-8">
    <ul class="space-y-12" >
        <li v-for="item in props.list" class=" grid grid-cols-2">
          <div>
            <h3 class="font text-sm md:text-2xl" >{{ item.label }}<UIcon v-if="item.isVegetarian" class="text-green-500" name="i-ph-leaf-bold"/><UIcon v-if="item.spicelevel ?? 0 > 0" v-for="n in item.spicelevel ?? 0" name="i-ph-fire-bold" class="text-red-500" /></h3>
            <h4 class="text-sm md:text-base" v-if="item.description" >{{ item.description }}</h4>
            <p class="text-xs md:text-sm" v-if="item.allergies" >{{ item.allergies }}</p>
          </div>
          <div class="text-right">
            <!-- If only one item exits in sizes only show the price. Else show a list -->
            <p v-if="item.sizes?.length == 1">
              {{ item.sizes[0].price }},-
            </p>
            <ul v-else class="" >
              <li class="font-semibold" v-for="size in item.sizes">
                {{ size.size }}: {{ size.price }},-
              </li>
            </ul>
          </div>
        </li>
      </ul>

  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
  }
</style>
