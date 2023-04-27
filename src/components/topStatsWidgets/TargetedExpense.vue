<script setup>

import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import {targetedDetailStore} from '../piniaStore/targeted_expenses';
let chartRef = ref(null)
let targetedDetails = targetedDetailStore()
onMounted(
    async()=>{
    await targetedDetails.fetchDetails()
    const labels = ["target","spent"];
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: [targetedDetails.details['participants'], targetedDetails.details['participants']/2],
    backgroundColor: [
    ' ',
      'teal',
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
    
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
    legend: {
      display: false
    }
  },
  
    scales: {
        
      y: {
        grid:{
            display: false
        },
        beginAtZero: true
      },
      x: {
        display: false,
        grid:{
            display: false
        },
      },
    },
    indexAxis: 'y'
  },
})


    }


)
</script>
<template>

<div class= "bg-blue-200 hover:bg-green-200 flex justify-evenly rounded-lg shadow-sm ">
    
        <canvas id="targeted-expense" class="p-10"></canvas>

</div>


</template>