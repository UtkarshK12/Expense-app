<script setup>
import {ref} from 'vue'
import Multiselect from 'vue-multiselect'

let nameList = ref(["Utkarsh","Natsuki"])
let totalamount = ref(0)
let nachiamount = ref(0)
let utoamount = ref(0)

let name=ref()

let category =ref()
let categoryList = ref(["Food","Maintenance","Grocery","Need","Want"])

const onSubmit = () =>{
    console.log(String(name.value+" "+totalamount.value+" "+category.value+" "+utoamount.value+" "+nachiamount.value))
}

function updatenachiamount() {
  console.log(nachiamount.value)
  nachiamount.value= totalamount.value-utoamount.value
}

function updateutoamount() {
  utoamount.value= totalamount.value-nachiamount.value
}


</script>

<template>
<div class="lex md:p-6 flex-col  w-full mx-auto min-h-screen bg-gray-700">
 
  <div class="flex p-8 items-center w-full min-w-max">
    <div class="sm:h-10 sm:w-10 lg:h-10 lg:w-10"><img src="../assets/finance-48.svg"></div> 
    <h1 class="  sm:text-3xl md:text-4xl text-white font-bold w-full p-4 ">Finaco</h1>

  </div>

  <div class="p-16 md:p-10"></div>

  <div class="flex flex-col items-center justify-center">
      <form @submit.prevent="onSubmit">
        
        <div class="p-4 flex items-center gap-3 rounded-md">
           <div>
            <font-awesome-icon icon="fa-solid fa-user" style="color: #fde047;" size="2x" />
           </div> 
            <multiselect class="bg-yellow-200 text-gray-900 p-4 rounded-md " v-model="name" :options="nameList"></multiselect>
        </div>
        <div class="p-4 flex items-center gap-3">
          <div>
            <font-awesome-icon icon="fa-solid fa-yen-sign" style="color: #fde047;" size="2x"/>
           </div> 
            <input class="bg-yellow-200 text-gray-900　rounded-md p-4" v-model="totalamount" type="number">
        </div>
        
        <div class="p-4 flex items-center gap-3">
          <div>
            <font-awesome-icon icon="fa-solid fa-yen-sign" style="color: #d68fbc;" size="2x"/>
           </div> 
            <input class="bg-pink-200 text-gray-900　rounded-md p-4" @change="updateutoamount" v-model="nachiamount" type="number">
        </div>

        <div class="p-4 flex items-center gap-3">
          <div>
            <font-awesome-icon icon="fa-solid fa-yen-sign" style="color: #6eadd4;" size="2x"/>
           </div> 
            <input class="bg-blue-300 text-gray-900　rounded-md p-4"  @change="updatenachiamount" v-model="utoamount" type="number">
        </div>

        <div class="p-4 flex items-center gap-3" >
          <div>
           <font-awesome-icon icon="fa-solid fa-folder" style="color: #fde047;" size="2x" />
           </div> 
            <multiselect class="bg-yellow-200 text-gray-900 p-4 rounded-md " v-model="category" :options="categoryList"></multiselect>
        </div>
        <div class="flex items-center justify-center py-20 "> 
            <button class="shadow-xl bg-yellow-300 hover:bg-white text-gray-800 hover:text-blue-500 font-bold py-2 px-4 rounded" type="submit">Add Expense!</button>
        </div>
      </form>
  </div>


  </div>

</template>