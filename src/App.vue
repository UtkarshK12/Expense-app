<script setup>
import Homepage from './components/Homepage.vue';
import FixedExpenseChart from './components/graphWidgets/FixedExpenseChart.vue';
import FoodExpenseChart from './components/graphWidgets/FoodExpenseChart.vue';
import GroceryExpenseChart from './components/graphWidgets/GroceryExpenseChart.vue';
import NeededExpenseChart from './components/graphWidgets/NeededExpenseChart.vue';
import TotalExpenseChart from './components/graphWidgets/TotalExpenseChart.vue';
import WantExpenseChart from './components/graphWidgets/WantExpenseChart.vue';
import Savings from './components/topStatsWidgets/Savings.vue';
import TargetedExpense from './components/topStatsWidgets/targetedExpense.vue';

</script>

<template>
<div class="flex flex-col justify-center w-full mx-auto min-h-screen bg-gradient-to-b from-teal-700 to-teal-950 ">

<div class="grid sm:grid-cols-1  md:grid-cols-4 w-full">

  <div class="p-3"><Savings></Savings></div>
  <div class="p-3"><TargetedExpense></TargetedExpense></div>
  <div class="p-3"><Savings></Savings></div>
  <div class="p-3"><Savings></Savings></div>
  
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