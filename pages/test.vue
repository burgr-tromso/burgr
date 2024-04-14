<script lang="ts" setup>
import type { UButton } from '#build/components';

const router = useRouter()



</script>

<template>
  <div class="mx-auto">
    <UButton label="Test" @click="router.push({ path: 'test', query: { plan: 'private' }})" />
  </div>
</template>

<style scoped></style>
