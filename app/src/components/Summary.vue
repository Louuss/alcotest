<template>
  <div class="panel summary" v-if="!hidden">
    <div class="panel-head">
      <p class="panel-title">{{ formatedDate }}</p>
      <div class="delete-day">
        <button id="delete-day" v-on:click="deleteDay(day._id)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="panel-body">
      <div class="row align-left">
        <div class="col col-sm-6">
          <div v-for="drink in day.drinks" :key="drink.id">
            {{ drink.quantity }} x
            {{ drink.alcohol }}
            {{ drink.name }}
            {{ drink.price / 100 }}€
          </div>
        </div>
        <div class="col col-sm-6 align-right">
          <span>Vous avez dépensé {{ totalE/100 }}€</span>
          <br />
          <br />
          <span
            class="alert"
            v-bind:class="{'alert-danger': isDanger, 'alert-warning': isWarning, 'alert-success': isSucess}"
          >Vous avez consommé l'équivalent de {{ Number(totalUnits / 10).toFixed(1) }} unité d'alcool</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DayService from "../DayService";
import DateHelper from "../helpers/dateHelper";

export default {
  name: "Summary",
  props: ["day"],
  data() {
    return {
      hidden: false,
      totalE: 0,
      totalUnits: 0,
      isDanger: false,
      isWarning: false,
      isSucess: false,
      formatedDate: null
    };
  },
  methods: {
    all() {
      let date = new Date(this.day.date);
      this.formatedDate = date.getDay() + "/" + date.getMonth();
      this.formatedDate = DateHelper.timestampToStringDate(date);
      this.day.drinks.forEach(drink => {
        this.totalE += drink.price * drink.quantity;
        this.totalUnits +=
          drink.quantity * ((((8 * drink.ABV) / 100) * drink.volume) / 10);
      });
      if (this.totalUnits > 40) this.isDanger = true;
      else if (this.totalUnits > 30) this.isWarning = true;
      else this.isSucess = true;
    },
    async deleteDay(id) {
      this.hidden = true;
      const promise = DayService.deleteDay(id);
      promise.then(data => {
        this.$emit("deletedItem");
        console.log(data);
      });
    }
  },
  mounted() {
    this.all();
  },
  beforeRouteUpdate() {
    this.all();
  }
};
</script>
<style scoped>
.panel-head .panel-title {
  font-size: 16px;
}
</style>

