<template>
  <v-layout justify-center align-center>
    <v-flex xs12 md10 lg9 mt-5>
      <v-autocomplete
        v-model="searchQuery"
        :items="allCountries"
        :search-input.sync="search"
        cache-items
        class="mx-3"
        flat
        hide-no-data
        hide-details
        label="Choose your place"
        solo-inverted
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    isPreviousStep: {
      type: Boolean,
      required: true
    }
  },
  
  data() {
    return {
      isLoading: false,
      searchQuery: null,
      search: null,
      allCities: null
    };
  },
  computed: {
    allCountries() {
      return ['Poland', 'Spain', 'Germany', 'France'];
    }
  },
  watch: {
    searchQuery(country) {
      if (country) {
        this.$emit('emitted-data', country);
      }
    },
      isPreviousStep(isPreviuos) {
        if (isPreviuos) {
          this.search = null,
          this.searchQuery = null
      }
    }
  }
};
</script>
