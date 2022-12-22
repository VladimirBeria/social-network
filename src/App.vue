<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'register'}">About</router-link>
  </nav>
  <router-view/>
</template>

<style>

</style>
