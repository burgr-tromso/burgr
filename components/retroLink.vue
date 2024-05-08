<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

defineProps({
  label:String,
  to: String,
  return: Boolean,
  external: Boolean,
  prefetch: Boolean
})

function goUp(){
    var upperPath = route.path.split("/")
    if (upperPath.length > 2) {
        upperPath.splice(upperPath.length - 1)
        router.push(upperPath.join("/"))
    } else {
        router.push('/');
    }
}

</script>

<template>
  <div class="font text-center md:text-3xl ">
    <button v-if="return"  class="group opacity-85 hover:opacity-100 hover:text-white" @click="goUp" >
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-right" />
        {{label}}
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-left" />
    </button>
    <NuxtLink v-else class="group opacity-85 hover:opacity-100 hover:text-white" :prefetch="prefetch" :external="external" :to="to">
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-right" />
        {{label}}
      <UIcon class=" opacity-0 group-hover:opacity-100 group-aria-selected:opacity-100" name="i-pixelarticons-chevron-left" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.font { font-family: 'Press Start 2P' }
</style>
