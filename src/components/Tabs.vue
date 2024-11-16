<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

// Props for the tabs component
interface Props {
  defaultTab?: string
  tabs: {
    value: string
    label: string
    content: string
  }[]
}

const props = withDefaults(defineProps<Props>(), {
  defaultTab: 'tab1'
})
</script>

<template>
  <TabsRoot :default-value="defaultTab" class="flex flex-col w-full">
    <TabsList class="flex border-b border-gray-200" aria-label="Manage tabs">
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="px-4 py-2 -mb-px text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="tab in tabs"
      :key="tab.value"
      :value="tab.value"
      class="p-4"
    >
      {{ tab.content }}
    </TabsContent>
  </TabsRoot>
</template> 