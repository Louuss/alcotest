<template>
  <div class="container">
    <h3>Daily View</h3>
    <router-link to="/addDay">Ajouter un jour</router-link>
    <br />
    <router-link to="/stats">Stats</router-link>
    <div v-for="oneDay of drinks" v-bind:key="oneDay.date">
      <Summary v-bind:day="oneDay" v-on:deletedItem="onDeletedItem" />
    </div>
  </div>
</template>

<script>
import DayService from "../DayService";
import Summary from "../components/Summary";
export default {
  name: "DailyView",
  data() {
    return {
      drinks: []
    };
  },
  components: {
    Summary
  },
  async created() {
    const promise = DayService.getDays();
    promise.then(data => {
      this.drinks = data.data;
    });
  },
  methods: {
    onDeletedItem: async function() {
      const promise = DayService.getDays();
      promise.then(data => {
        this.drinks = data.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
