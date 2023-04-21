<script setup>
import { ref,onMounted } from 'vue'
import {Chart} from 'chart.js/auto'
import { groceryDetailStore } from '../piniaStore/grocery_expenses';

let chartInstance = ref(null);
let groceryStore = groceryDetailStore()



onMounted(async()=>{
  { 
    await groceryStore.fetchDetails()
    const labels = ['a','b','c','d','e','f','g']
    const graphData = {
    labels: labels,
    datasets: [{
    label: 'Grocery Expense',
    data: [groceryStore.details['participants'],groceryStore.details['participants']+1,groceryStore.details['participants']+2,groceryStore.details['participants'],groceryStore.details['participants']+1,groceryStore.details['participants']+2],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

   chartInstance.value = new Chart(
    document.getElementById('grocery-chart'),
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

<div class="bg-gray-100 p-8 rounded-lg shadow-lg"><canvas id="grocery-chart"></canvas></div>


</template>