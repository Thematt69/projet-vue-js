<template>
  <div class="accueil">
    <h1>{{ txt }}</h1>
    <h2>{{ config.ville }}</h2>

    <p>
      Météo : {{ meteo }}
    </p>
    <p>
      Risque de précipitations : {{ risquePluie }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Accueil",
  components: {
    HelloWorld,
  },
};
</script>
