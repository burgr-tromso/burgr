<script lang="ts" setup>

interface item {
  label:string,
  description:string,
  allergies?:string,
  price:number
}

const props = defineProps({
  list: Array<item>
})

</script>

<template>
  <div class="mt-8">
    <ul class="space-y-6" >
        <li v-for="item in props.list" class="flex flex-col text-center">
          <h3 class="font text-xl" >{{ item.label }}</h3>
          <h4>{{ item.description }}</h4>
          <p class=" text-sm">{{ item.allergies }}</p>
          <p>{{ item.price }},-</p>
        </li>
      </ul>
  </div>
</template>

<style scoped>
.font {
  font-family: 'Press Start 2P';
  }
</style>
