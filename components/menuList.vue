<script lang="ts" setup>

interface item {
  label:string,
  description:string,
  allergies?:string,
  price?:number,
  sizes?:Object,
  icon: string
}

const props = defineProps({
  list: Array<item>
})

</script>

<template>
  <div class="mt-8">
    <ul class="space-y-6" >
        <li v-for="item in props.list" class="flex flex-col text-center space-y-1">
          <h3 class="font text-sm md:text-xl" >{{ item.label }} <UIcon v-if="item.icon" :name="item.icon"/> </h3>
          <h4 class="text-sm md:text-base" >{{ item.description }}</h4>
          <p class="text-xs md:text-sm">{{ item.allergies }}</p>
          <p v-if="item.price">{{ item.price }},-</p>
          <span v-else ><p v-for="size in item.sizes">{{ size.size }} - {{ size.price }},-</p></span>
        </li>
      </ul>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
  }
</style>
