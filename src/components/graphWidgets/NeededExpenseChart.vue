<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { neededDetailStore } from '../piniaStore/needed_expenses';

let chartInstance = ref(null);
let neededStore = neededDetailStore()



onMounted(async()=>{
  { 
    await neededStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'Needed Expense',
    data: [neededStore.details['participants'],neededStore.details['participants']+1,neededStore.details['participants']+2,neededStore.details['participants'],neededStore.details['participants']+1,neededStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('needed-chart'),
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
  <h1 class="p-1 text-gray-400">Needed Expenses</h1>
  <canvas id="needed-chart"></canvas></div>


</template>