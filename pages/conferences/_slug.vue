<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout
        justify-center
        align-center
      >
        <v-flex text-xs-center>
          <h1>Conference {{ $route.params.slug }}</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params.slug)
  }
}
</script>

<style scoped>
</style>
