<template>
  <div class="config">
    <h1>Configuration</h1>
    <!-- formulaire saisie ville + bouton avec fonction de recherche -->
    <input type="text" v-model="ville" />
    <button @click="search">Rechercher</button>
    <!-- liste des villes avec fonction sauve sur click -->
    <ul v-show="accuVilles">
      <li v-for="list in accuVilles" :key="list.Key">
        <input type="radio" @click="save(list.Key)" />
        {{ list.LocalizedName }} -
        {{ list.AdministrativeArea.LocalizedName }}
        ({{ list.AdministrativeArea.ID }})
      </li>
    </ul>
    <p v-show="confirm">Confirmation enregistrée</p>
  </div>
</template>

<script>
export default {
  name: "Configuration",
  data() {
    return {
      accuVilles: [],
      ville: "",
      config: {
        apiKey: "GCIc2Ih7b9BiQQSUbNgmYlhpeyf7VdnC",
        key: null,
        ville: null,
        departement: null,
        departementNumber: null,
        latitude: null,
        longitude: null,
      },
      confirm: false,
      choix: null,
    };
  },
  methods: {
    search: function (e) {
      e.preventDefault();

      fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.config.apiKey}&q=${this.ville}&language=fr&countryCode=fr&details=true`
      ).then(async (res) => {
        let retour = await res.json();
        if (res.status === 200) {
          this.accuVilles = retour;
        }
      });
    },
    save: function (choix) {
      let numVille = this.accuVilles.find((element) => element.Key == choix);

      console.log(numVille);

      this.config.key = choix;
      this.config.ville = numVille.LocalizedName;
      this.config.departement = numVille.AdministrativeArea.LocalizedName;
      this.config.departementNumber = numVille.AdministrativeArea.ID;
      this.config.latitude = numVille.GeoPosition.Latitude;
      this.config.longitude = numVille.GeoPosition.Longitude;

      localStorage.setItem("configuration", JSON.stringify(this.config));

      this.confirm = true;
    },
  },
};
</script>