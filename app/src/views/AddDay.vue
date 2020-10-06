<template>
  <div class="container">
    <h3>What did you drink last night ?</h3>
    <br />
    <router-link to="/">Return</router-link>
    <br />
    <div class="row">
      <div class="col-sm-6">
        <form class="form-control">
          <label for="date">Date:</label>
          <DatePicker v-model="date" />
          <AddDrink @drinkAdded="handleDrinkAdded" />
          <textarea v-model="comment" placeholder="Any comments ?" />
          <input type="submit" @click.prevent="handleSubmit" value="submit" />
        </form>
      </div>
      <div class="col-sm-6">
        <div v-for="drink in drinks" v-bind:key="drink.id">
          <DrinkCard :drink="drink" @deletedItem="handleDeleted" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddDrink from "../components/AddDrink";
import DayService from "../DayService";
import DrinkCard from "../components/DrinkCard";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  components: {
    AddDrink,
    DrinkCard,
    DatePicker
  },
  data() {
    return {
      comment: null,
      date: null,
      drinks: []
    };
  },
  methods: {
    deleteDrink(id) {
      this.drinks = this.drinks.filter(drink => {
        return drink.id !== id;
      });
      this.hidden = true;
    },
    handleDrinkAdded(drink) {
      this.drinks.push(drink);
    },
    handleDeleted(drink) {
      this.deleteDrink(drink.id);
    },
    handleSubmit() {
      let day = {
        drinks: this.drinks,
        date: Date.parse(this.date),
        comment: this.comment,
        userId: "u1"
      };
      const promise = DayService.addDay(day);
      promise
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          alert("Oops something went wrong !");
          this.$router.push("/");
        });
    }
  }
};
</script>
<style scoped>
</style>

