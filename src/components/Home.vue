<script setup>
import FixedExpenseChart from '../components/graphWidgets/FixedExpenseChart.vue';
import FoodExpenseChart from '../components/graphWidgets/FoodExpenseChart.vue';
import GroceryExpenseChart from '../components/graphWidgets/GroceryExpenseChart.vue';
import NeededExpenseChart from '../components/graphWidgets/NeededExpenseChart.vue';
import TotalExpenseChart from '../components/graphWidgets/TotalExpenseChart.vue';
import WantExpenseChart from '../components/graphWidgets/WantExpenseChart.vue';
import Savings from './topStatsWidgets/Savings.vue';
import TargetedExpense from './topStatsWidgets/targetedExpense.vue';
import AveragePerDay from './topStatsWidgets/averagePerDay.vue'
import MaintenanceMoney from './topStatsWidgets/maintenanceMoney.vue';
import router from '../index'
</script>

<template>
<div class="flex md:p-6 flex-col justify-center items-center w-full mx-auto min-h-screen bg-gray-700">
  
  <router-link to="/add">
    <button class="md:right-10 md:bottom-10 fixed z-150 py-2 px-4 text-3xl sm:bottom-5 sm:right-5 bottom-10 right-20 mr-4 mb-4 shadow-xl bg-yellow-300 hover:bg-white text-gray-800 hover:text-blue-500 font-bold py-2 px-4 rounded">
      +
</button>
  </router-link>

  <div class="flex p-8 items-center w-full min-w-max">
    <div class=" items-center sm:h-10 sm:w-10 lg:h-10 lg:w-10"><img src="../assets/finance-48.svg"></div> 
    <h1 class="  sm:text-3xl md:text-4xl text-white font-bold w-full p-4 ">Finaco</h1>

  </div>


<div class="grid sm:grid-cols-1  md:grid-cols-4 w-full">

  <div class="p-3"><Savings></Savings></div>
  
  <div class="p-3"><AveragePerDay></AveragePerDay></div>
  <div class="p-3"><MaintenanceMoney></MaintenanceMoney></div>
  <div class="p-3"><TargetedExpense></TargetedExpense></div>
  
</div>


  <div class=" grid sm:grid-cols-1 w-full  md:grid-cols-3 h-full w-full ">

<div class="p-3"><FoodExpenseChart></FoodExpenseChart></div>
<div class="p-3"><FixedExpenseChart></FixedExpenseChart></div>
<div class="p-3"><GroceryExpenseChart></GroceryExpenseChart></div>
<div class="p-3"><NeededExpenseChart></NeededExpenseChart></div>
<div class="p-3"><WantExpenseChart></WantExpenseChart></div>
<div class="p-3"><TotalExpenseChart></TotalExpenseChart></div>
</div>

</div>



</template>