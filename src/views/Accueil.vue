<template>
  <div class="accueil" v-show="store">
    <h1>{{ txt }}</h1>
    <h2>{{ config.ville }} ({{ config.departementNumber }})</h2>

    <h3 v-show="alert">{{ alert }}</h3>

    <p>Météo : {{ meteo }}</p>
    <p>Précipitations 24h : {{ pluie24h }}</p>
    <p>Humidité : {{ humidite }}</p>
    <p>Température : {{ temperature }}</p>
    <p>Température ressentie : {{ feelTemperature }}</p>
    <p>Vent : {{ vent }}</p>
    <p>Index UV : {{ uvIndex }}</p>
    <p>Pression atmosphérique : {{ pression }}</p>

    <a :href="lien">Lien vers le site de météo</a>
  </div>
</template>

<script>
export default {
  name: "Accueil",
  data() {
    return {
      store: false,
      txt: "MétéoVue",
      config: [],
      alert: "",
      meteo: "",
      pluie24h: "",
      humidite : "",
      temperature: "",
      feelTemperature: "",
      vent: "",
      uvIndex: "",
      pression: "",
      lien: "",
    };
  },
  mounted: function () {
    if (localStorage.getItem("configuration")) {
      this.config = JSON.parse(localStorage.getItem("configuration"));

      fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${this.config.key}?apikey=${this.config.apiKey}&language=fr-fr&details=true`
      ).then(async (res) => {
        let retour = await res.json();
        if (res.status === 200) {
          this.meteo = retour[0].WeatherText;
          this.pluie24h = retour[0].PrecipitationSummary.Past24Hours.Metric.Value + " " + retour[0].PrecipitationSummary.Past24Hours.Metric.Unit;
          this.humidite = retour[0].RelativeHumidity + " %"; 
          this.temperature = retour[0].Temperature.Metric.Value + " °" + retour[0].Temperature.Metric.Unit;
          this.feelTemperature = retour[0].RealFeelTemperature.Metric.Value + " °" + retour[0].RealFeelTemperature.Metric.Unit;
          this.vent = retour[0].Wind.Direction.Degrees + " °" + retour[0].Wind.Direction.Localized + " - " + retour[0].Wind.Speed.Metric.Value + " " + retour[0].Wind.Speed.Metric.Unit;
          this.pression = retour[0].Pressure.Metric.Value + " " + retour[0].Pressure.Metric.Unit;
          this.uvIndex = retour[0].UVIndex;
          this.lien = retour[0].Link;
        }else{
          this.alert = "Problème avec l'API (" + res.status + ")";
        }
      });

      this.store = true;
    } else {
      // redirection vers la page de config
      this.$router.push("/config");
    }
  },
};
</script>
