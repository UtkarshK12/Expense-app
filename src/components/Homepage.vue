<script setup>
import { ref } from 'vue'
import {detailsStore} from './piniaStore/fetchDetails'

const id=detailsStore()
id.fetchDetails()
console.log(id.details)

</script>

<template>

<div class="flex items-center justify-center h-screen">
  <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-4">December expense</h1>
    <p class="text-gray-700">id.details['key']</p>
  </div>
</div>
</template>