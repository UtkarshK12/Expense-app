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
    borderRadius: 15,
    borderSkipped:false,
    backgroundColor: [
    'teal',
      'rgb(255, 70, 100)',
    ],
    borderColor: [
      'teal',
      'rgb(255, 70, 100)'
    ],
    borderWidth: 1,
    
  }]
};

    chartRef.value=new Chart(document.getElementById('targeted-expense'),{
  type: 'bar',
  data: data,
  options: {
    label:{
      
    },
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
    legend: {
      display: false
    }
  },
  
    scales: {
        
      y: {
        border: {
      display: false,
    },
       
        ticks:{color:'black',
        font:{
          size: 16
        }},
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

<div class= "flex items-start bg-gradient-to-r from-green-300 to-blue-400 hover:from-green-400 hover:to-yellow-400 hover:bg-green-200 flex justify-evenly rounded-lg shadow-xl ">
    
        <canvas id="targeted-expense" class="p-10"></canvas>

</div>


</template>