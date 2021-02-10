<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(elem, i) in tableau" :key="elem + i" @click="emitClick(elem)">
        {{ elem }}
      </li>
    </ul>
    <button @click="direBonjour">Coucou Lyon</button>
    <ctn>
      <template v-slot:header> </template>
      <template v-slot:content>Un nouveau contenu</template>
      <template v-slot:footer> </template>
    </ctn>
    <p>Store: {{ $store.state.X }} - {{ $store.state.Y }}</p>
    <h3>X</h3>
    <button @click="addX">+1</button>
    <button @click="subX">-1</button>
    <h3>Y</h3>
    <button @click="addY">+1</button>
    <button @click="subY">-1</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //Nom du composant
  name: "HelloWorld",
  components: {
    ctn: () => import("./Container"),
  },
  //Propriétés (attributs HTML) passés par le composant parent
  props: {
    msg: String,
    tableau: Array,
  },
  methods: {
    direBonjour() {
      console.log("Coucou Lyon");
    },
    emitClick(elem) {
      // Emission d'un évènement vers le parent
      this.$emit("click", elem);
    },
    addX() {
      this.$store.commit("SET_X", this.$store.state.X + 1);
    },
    subX() {
      this.$store.commit("SET_X", this.$store.state.X - 1);
    },
    addY() {
      this.$store.commit("SET_Y", this.$store.state.Y + 1);
    },
    subY() {
      this.$store.commit("SET_Y", this.$store.state.Y - 1);
    },
  },
  beforeCreate() {
    console.log("Avant création de l'instance");
  },
  created() {
    console.log("instance crée");
  },
  beforeMount() {
    console.log("avant affichage");
  },
  mounted() {
    console.log("composant affiché");
  },
  beforeUpdate() {
    console.log("avant maj affichage");
  },
  updated() {
    console.log("après maj");
  },
  beforeDestroy() {
    console.log("avant destruction");
  },
  destroyed() {
    console.log("instance détruite");
  },
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
