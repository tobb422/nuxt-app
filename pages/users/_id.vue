<template lang="pug">
  div: p User ID: {{ userId }}
</template>

<script>
  export default {
    data() {
      return {
        userId: this.$route.params.id
      };
    }
  }
</script>