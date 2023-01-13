<template>
  <nav>
    <SnTopBar/>
  </nav>
  <router-view/>
</template>

<script>
import SnTopBar from '@/components/SnTopBar';
export default {
  name: 'App',
  components: {
    SnTopBar
  }
}
</script>