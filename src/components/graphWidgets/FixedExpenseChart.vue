<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { fixedDetailStore } from '../piniaStore/fixed_expenses';

let chartInstance = ref(null);
let fixedStore = fixedDetailStore()



onMounted(async()=>{
  { 
    await fixedStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'Fixed Expense',
    data: [fixedStore.details['participants'],fixedStore.details['participants']+1,fixedStore.details['participants']+2,fixedStore.details['participants'],fixedStore.details['participants']+1,fixedStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('fixed-chart'),
    {
      type: 'line',
      data: graphData,
      options:{
        plugins:{
        legend:{
          display:false
        }}
      }
    
    }
  );
}
})


</script>

<template>

<div class="bg-gray-700 p-8 rounded-lg shadow-lg"><canvas id="fixed-chart"></canvas></div>


</template>