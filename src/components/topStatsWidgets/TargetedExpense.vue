<script setup>

import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import {targetedDetailStore} from '../piniaStore/targeted_expenses';
let chartRef = ref(null)
let targetedDetails = targetedDetailStore()
onMounted(
    async()=>{
    await targetedDetails.fetchDetails()
    const labels = ["targeted","spent"];
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [targetedDetails.details['participants'], targetedDetails.details['participants']/2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)'
    ],
    borderWidth: 1,
    
  }]
};

    chartRef.value=new Chart(document.getElementById('targeted-expense'),{
  type: 'bar',
  data: data,
  options: {
    plugins: {
    legend: {
      display: false
    }
  },
    scales: {
      y: {
        beginAtZero: true
      },
    },
    indexAxis: 'y'
  },
})


    }


)
</script>
<template>

<div class=" bg-gray-100 p-6 h-full flex items-center rounded-lg shadow-lg">
    
        <canvas id="targeted-expense" class="flex "></canvas>

</div>


</template>