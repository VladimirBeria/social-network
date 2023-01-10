<template>
  <ul class="error-messages">
    <li :key="errorMessage" v-for="errorMessage in errorMessages">
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SnValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      console.log(this.validationErrors);
      return Object.keys(this.validationErrors).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      });
    },
  },
};
</script>

<style scoped>

</style>