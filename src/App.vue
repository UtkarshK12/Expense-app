<script setup>
import Homepage from './components/Homepage.vue';
import FoodExpenseChart from './components/graphWidgets/FoodExpenseChart.vue';
import FixedExpenseChart from './components/graphWidgets/FixedExpenseChart.vue';
import GroceryExpenseChart from './components/graphWidgets/GroceryExpenseChart.vue';
import NeededExpenseChart from './components/graphWidgets/NeededExpenseChart.vue'
import WantExpenseChart from './components/graphWidgets/WantExpenseChart.vue'
import TotalExpenseChart from './components/graphWidgets/TotalExpenseChart.vue'
</script>


<template>

<div class="grid sm:grid-cols-1 md:grid-cols-3 ">

  <div class="p-4"><FoodExpenseChart></FoodExpenseChart></div>
  <div class="p-4"><FixedExpenseChart></FixedExpenseChart></div>
  <div class="p-4"><GroceryExpenseChart></GroceryExpenseChart></div>
  <div class="p-4"><NeededExpenseChart></NeededExpenseChart></div>
  <div class="p-4"><WantExpenseChart></WantExpenseChart></div>
  <div class="p-4"><TotalExpenseChart></TotalExpenseChart></div>

</div>
</template>