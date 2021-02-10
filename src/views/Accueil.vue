<template>
  <div class="accueil" v-show="store">
    <h1>{{ txt }}</h1>
    <h2>{{ config.ville }}</h2>

    <p>Météo : {{ meteo }}</p>
    <p>Risque de précipitations : {{ risquePluie }}</p>
    <!-- TODO - A complèter -->
    <img src="icone" alt="Icone" />
  </div>
</template>

<script>
export default {
  name: "Accueil",
  data() {
    return {
      store: false,
      txt: "MétéoVue",
      config: null,
    };
  },
  mounted: function () {
    if (localStorage.getItem("configuration")) {
      // récup config
      // TODO - appel API Météo
    } else {
      // redirection vers la page de config
      this.$router.push("/config");
    }
  },
};
</script>
