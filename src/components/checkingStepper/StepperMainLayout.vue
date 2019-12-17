<template>
  <v-flex xs12 md8 lg6 mt-4>
    <v-stepper v-model="step" class="pa-2">
      <v-stepper-header class="elevation-0">
        <v-stepper-step :complete="step > 1" step="1">
          Location
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">
          Results
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-5" flat color="#f5f5f5" height="200px">
            <LocationInput @emitted-data="setCountry" 
            :isPreviousStep = "isPreviousStep"
            />
            
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5 pa-3 overflow__y--scroll"
            flat
            color="#f5f5f5"
            height="300px"
          >
            <PollutedCities :allCities="allCities" />
          </v-card>
        </v-stepper-content>

        <v-btn color="primary" @click="nextStep()">
          Continue
        </v-btn>

        <v-btn flat @click="previousStep()">
        Back
        </v-btn>
      </v-stepper-items>
    </v-stepper>
  </v-flex>
</template>

<script>
import LocationInput from './StepperLocation';
import PollutedCities from './StepperCities';

export default {
  components: { LocationInput, PollutedCities },
  data() {
    return {
      step: 1,
      country: null,
      allCities: [],
      isPreviousStep: false,
    };
  },
  computed: {
    allCountries() {
      return ['Poland', 'Spain', 'Germany', 'France'];
    },
    stepsItems() {
      return [
        {
          id: 1,
          name: 'Destination'
        },
        {
          id: 2,
          name: 'Destination'
        }
      ];
    }
  },
  methods: {
    setCountry(country) {
      this.country = country;
      this.isPreviousStep = false;
    },
    async nextStep() {
      if (this.step === 1 && this.country) {
        const { data } = await this.$axios.get(
          `/cities?country=${this.country}`
        );

        this.allCities = data;
        this.step = 2;
      }
    },
    previousStep() {
      if (this.step === 2){
        this.step = 1;
        this.isPreviousStep = true;
      }
    }
  }
};
</script>
