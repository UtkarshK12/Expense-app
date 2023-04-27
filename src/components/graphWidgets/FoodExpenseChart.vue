<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { foodDetailStore } from '../piniaStore/food_expenses';

let chartInstance = ref(null);
let foodStore = foodDetailStore()



onMounted(async()=>{
  { 
    await foodStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'Food Expense',
    data: [foodStore.details['participants'],foodStore.details['participants']+1,foodStore.details['participants']+2,foodStore.details['participants'],foodStore.details['participants']+1,foodStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('food-chart'),
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

<div class="bg-gray-700 p-8 rounded-lg shadow-lg"><canvas id="food-chart"></canvas></div>


</template>