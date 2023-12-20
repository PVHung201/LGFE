<template>
  <div class="container-fluid" id="container-wrapper">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">{{ $t('Signed out successfully') }}</h1>

    </div>


  </div>
</template>

<script type="text/javascript">

import User from '../../helpers/User'

export default {
  created() {
    localStorage.removeItem('token')


  },

  beforeUpdate(){
    if (!User.loggedIn()) {
      this.$router.push({ name: 'login' });
      return;
    }
  }
}

</script>

<style type="text/css"></style>