<script setup>
import {ref} from 'vue'
import Multiselect from 'vue-multiselect'

let nameList = ref(["Utkarsh","Natsuki"])
let amount = ref()
let name=ref()

let category =ref()
let categoryList = ref(["Food","Maintenance","Grocery","Need","Want"])

const onSubmit = () =>{
    console.log(String(name.value+" "+amount.value+" "+category.value))
}

</script>

<template>
<div class="lex md:p-6 flex-col  w-full mx-auto min-h-screen bg-slate-800">
 
  <div class="flex p-8 items-center w-full min-w-max">
    <div class="sm:h-10 sm:w-10 lg:h-10 lg:w-10"><img src="../assets/finance-48.svg"></div> 
    <h1 class="  sm:text-3xl md:text-4xl text-white font-bold w-full p-4 ">Finaco</h1>

  </div>

  <div class="p-16 md:p-10"></div>

  <div class="flex flex-col items-center justify-center">
      <form @submit.prevent="onSubmit">
        
        <div class="p-4 flex items-center gap-3">
           <div>
            <img src="../assets/person.svg" class="h-12 w-12 bg-gray-200 rounded-md">
           </div> 
            <multiselect class="bg-blue-100 text-gray-900 p-4 rounded-md " v-model="name" :options="nameList"></multiselect>
        </div>
        <div class="p-4 flex items-center gap-3">
          <div>
            <img src="../assets/yen_coin.svg" class="h-12 w-12 bg-gray-200 rounded-md">
           </div> 
            <input class="bg-blue-100 text-gray-900　rounded-md p-4" v-model="amount" type="number">
        </div>
        
        <div class="p-4 flex items-center gap-3" >
          <div>
            <img src="../assets/category.svg" class="h-12 w-12 bg-gray-200 rounded-md">
           </div> 
            <multiselect class="bg-blue-100 text-gray-900 p-4 rounded-md " v-model="category" :options="categoryList"></multiselect>
        </div>
        <div class="flex items-center justify-center py-20 "> 
            <button class="shadow-xl bg-yellow-300 hover:bg-white text-gray-800 hover:text-blue-500 font-bold py-2 px-4 rounded" type="submit">Add Expense!</button>
        </div>
      </form>
  </div>


  </div>

</template>