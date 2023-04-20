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
      data: graphData
    }
  );
}
})


</script>

<template>

<div class="bg-gray-100 p-8 rounded-lg shadow-lg"><canvas id="wanted-chart"></canvas></div>


</template>