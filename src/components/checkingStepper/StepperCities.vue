<template>
  <v-layout>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="city in allCities" :key="city.name">
        <template v-slot:header>
          <h4>{{ city.name }}</h4>
        </template>
        <v-card>
          <v-card-text>
            <p>{{ city.description }}</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  props: {
    allCities: {
      required: true,
      type: Array
    }
  }
};
</script>
