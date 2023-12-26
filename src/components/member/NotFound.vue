<template>
  <div class="container-fluid" id="container-wrapper">
          <div class="text-center">
            <img src="../../assets/error.svg" style="max-height: 100px;" class="mb-3">
            <h3 class="text-gray-800 font-weight-bold">Oopss!</h3>
            <p class="lead text-gray-800 mx-auto">{{ $t('404 Page Not Found') }}</p>
            <router-link to ="/list" >{{ $t('← Back to List Member') }}</router-link>
          </div>

        </div>
</template>