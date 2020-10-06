 <template>
  <div class="panel">
    <div class="panel-head" v-on:click="toggleHidden">
      {{ drink.quantity }}x {{ drink.name }} en {{drink.volume }}cl
      <button
        id="delete-drink"
        @click="handleClick(drink)"
      >
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>
    </div>
    <ul v-if="!isHidden">
      <li>{{ drink.ABV / 10 }}%</li>
      <li>{{ drink.price /100 }}€</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DrinkCard",
  data() {
    return {
      isHidden: true
    };
  },
  props: ["drink"],
  methods: {
    handleClick(drink) {
      this.$emit("deletedItem", drink);
    },
    toggleHidden() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>
<style lang="css">
.delete-drink {
  float: right;
}
.panel {
  margin-left: 1em;
}
div.panel-head {
  margin-bottom: 0;
}
ul {
  margin-top: 15px;
}
</style>