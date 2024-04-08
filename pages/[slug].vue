<script lang="ts" setup>

const route = useRoute()

const burgers = [
    {
        label: "Mario",
        description: "Tomato, lettuce, red onion, pickle & burgr mayo",
        allergies: "(W, M, SO, EG, SEN)",
        price: 176
    },{
        label: "Super Mario",
        description: "Tomato, lettuce, red onion, pickle, fennel salami & truffle mayo",
        allergies: "(W, M, EG, SEN)",
        price: 196
    },{
        label: "WARIO",
        description: "Pickled red onion, lettuce, grilled pineapple, blue cheese & burgr mayo",
        allergies: "(W, M, SO, EG, SEN)",
        price: 206
    },{
        label: "BULLET BILL",
        description: "Smoked cheddar, beer cooked bacon, pickle, crispy onion & BBQ sauce",
        allergies: "(W, M, F, EG, SEL)",
        price: 206
    },
]

const drinks = [
  {
    label: 'COLA /COLA ZERO / FANTA / FANTA ZERO',
    description: '0,33L Glass bottle',
    price: 48
  },{
    label: 'THOMAS HENRY GINGER BEER',
    description: '0,28L Glass bottle',
    price: 56
  },{
    label: 'JUICE',
    description: 'Kuli',
    price: 28
  },
]

const sides = [
  {
    label: 'POTATO FRIES (POMMES FRITES)',
    description: 'Fresh cut potatoes, fried in rapeseed oil. Served with GARLIC MAYO DIP',
    allergies: '(EG, SE)',
    price: 74
  },{
    label: 'ONION RINGS (LØKRINGER)',
    description: 'Fried onion rings in beer better with GARLIC MAYO',
    allergies: '(W, EG, SE)',
    price: 74
  },{
    label: 'CRISPS (POTETGULL)',
    description: 'Potato crisps with GARLIC MAYO',
    allergies: '(EG, SE)',
    price: 48
  },
]

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
    label: 'Drikke',
    key: 'drinks'
  }
]

</script>

<template>
<div class="mx-16">
  <h1 class="font text-8xl text-center pt-24 mx-auto pb-16">
    Meny
  </h1>
  <div class=" rounded-lg bg-slate-200 dark:bg-slate-700 bg-opacity-75 max-w-2xl mx-auto px-8 py-12  border-slate-700 dark:border-slate-200 border-4 shadow-xl space-y-6">
    <UTabs :items="types" class="w-full">
    <template #item="{ item }">
        <div v-if="item.key === 'burgers'" class="space-y-3">
          <MenuList :list="burgers" />
        </div>
        <div v-else-if="item.key === 'sides'" class="space-y-3">
          <MenuList :list="sides" />
        </div>
        <div v-else-if="item.key === 'drinks'" class="space-y-3">
          <MenuList :list="drinks" />
        </div>
    </template>
  </UTabs>
  <RetroLink class="pb-4" label="Tilbake" to="/"/>
    <span class="text-center">
      <h4>Allergies:</h4>
      <p>W - Wheat, M - Milk, SO - Soya, EG - Egg, SE - Mustard, SEL - Celery, F - Fish, SES - Sesamy</p>
    </span>
  </div>
</div>
</template>

<style scoped>
.font { font-family: 'Press Start 2P' }
</style>
