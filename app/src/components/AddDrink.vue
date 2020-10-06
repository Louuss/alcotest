<template>
  <div>
    <label for="alcohol">Alcohol:</label>
    <input type="text" id="alcohol" v-model="alcohol" />

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />

    <label for="ABV" step="0.1">ABV:</label>
    <input type="number" id="ABV" v-model="ABV" />

    <label for="volume">Volume (cl):</label>
    <input type="number" id="volume" v-model="volume" />

    <label for="price" step="0.01">Price:</label>
    <input type="number" id="price" v-model="price" />

    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" v-model="quantity" />

    <input type="submit" value="add one" @click.prevent="handleSubmit" />
  </div>
</template>
<script>
let i = 0;
export default {
  data() {
    return {
      name: null,
      ABV: null,
      volume: null,
      price: null,
      quantity: null,
      alcohol: null,
      date: null
    };
  },
  methods: {
    handleSubmit() {
      let drink = {
        id: i,
        name: this.name,
        alcohol: this.alcohol,
        ABV: this.ABV * 10,
        volume: this.volume,
        price: this.price * 100,
        quantity: this.quantity,
        date: this.date
      };
      this.$emit("drinkAdded", drink);
      i++;
      this.name = null;
      this.alcohol = null;
      this.ABV = null;
      this.volume = null;
      this.price = null;
      this.quantity = null;
      this.date = null;
    }
  }
};
</script>
<style scoped>
</style>

