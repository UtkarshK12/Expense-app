<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { totalDetailStore } from '../piniaStore/total_expenses';

let chartInstance = ref(null);
let totalStore = totalDetailStore()



onMounted(async()=>{
  { 
    await totalStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'My First Dataset',
    data: [totalStore.details['participants'],totalStore.details['participants']+1,totalStore.details['participants']+2,totalStore.details['participants'],totalStore.details['participants']+1,totalStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('total-chart'),
    {
      type: 'line',
      data: graphData
    }
  );
}
})


</script>

<template>

<div class="bg-gray-100 p-8 rounded-lg shadow-lg"><canvas id="total-chart"></canvas></div>


</template>