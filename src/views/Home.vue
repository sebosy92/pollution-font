<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <h2 class="font-weight-light text-xs-center mt-5">
          Let's check how clean your city is!
        </h2>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <StepperLayout />
    </v-layout>
  </v-container>
</template>

<script>
import StepperLayout from '@/components/checkingStepper/StepperMainLayout';

export default {
  name: 'home',
  components: { StepperLayout }
};
</script>
