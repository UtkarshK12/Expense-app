<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import {targetedExpenseDetailStore} from '../piniaStore/targeted_expenses';


let targetedDetails = targetedExpenseDetailStore()

onMounted(async()=>{
 await targetedDetails.fetchDetails
})
</script>
<template>

<div class="bg-gray-100 p-8 rounded-lg shadow-lg">

{{ targetedDetails.targetedExpense['participants'] }}
</div>


</template>