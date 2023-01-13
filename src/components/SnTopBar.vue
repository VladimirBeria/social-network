<template>
  <div class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        Social Network
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}" active-class="active">
            Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}" active-class="active">
              <i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}" active-class="active">
              <i class="ion-gear-a"></i> &nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}" active-class="active">
              <img class="user-pic" :src="currentUser.image" alt="">&nbsp; {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'login'}" active-class="active">
             Sing in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'register'}" active-class="active">
              Sing up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnTopBar',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
};
</script>

<style scoped>

</style>