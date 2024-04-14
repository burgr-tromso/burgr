<script lang="ts" setup>

const query = groq`*[_id == '602c9f97-59b6-4089-8611-ea51688e0080'][0]`
const { data } = useSanityQuery(query)

</script>

<template>
  <div>
    <PageTitle title="About Burgr" />
    <Card  class="text-center text-white">
      <UPageBody prose>
        <SanityContent :blocks="data.body" />
      </UPageBody>
    </Card>
  </div>
</template>

<style scoped></style>
