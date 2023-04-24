import axios from "axios";
import { defineStore } from "pinia";

export const targetedExpenseDetailStore = defineStore('targetedExpenseDetailStore', {

    state: () => {
       return { targetedExpense: {} }
    },

    actions: {
        async fetchDetails() {
            try {
                const response = await axios.get("https://www.boredapi.com/api/activity");
                this.targetedExpense = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }

});