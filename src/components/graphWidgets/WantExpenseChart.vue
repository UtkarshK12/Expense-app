<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { wantedDetailStore } from '../piniaStore/wanted_expenses';

let chartInstance = ref(null);
let wantedStore = wantedDetailStore()



onMounted(async()=>{
  { 
    await wantedStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'Want Expense',
    data: [wantedStore.details['participants'],wantedStore.details['participants']+1,wantedStore.details['participants']+2,wantedStore.details['participants'],wantedStore.details['participants']+1,wantedStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('wanted-chart'),
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

<div class="bg-gray-600 p-8 rounded-lg shadow-lg flex flex-col items-center shadow-xl">
  <h1 class="p-1 text-gray-400">Want Expenses</h1>
  <canvas id="wanted-chart"></canvas></div>


</template>