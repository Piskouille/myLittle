<script >
  import { getImgUrl } from '../../utils/utils.js'
  // import store from '../../store/index.js'

  export default{
    name: 'Main', 
    methods: {
      handleMinus(){
        this.$store.dispatch('minusAction')
        localStorage.setItem('storedChoice', this.$store.state.count)
      },
      handlePlus(){
        this.$store.dispatch('plusAction')
        localStorage.setItem('storedChoice', this.$store.state.count)
      },
      getImgUrl
    },
    mounted() {
      if (localStorage.storedChoice && localStorage.storedChoice !== 'undefined') {
        this.$store.commit('setCount', localStorage.storedChoice)
      }
    },
}
</script>

<template>
  <div class="main">
    <h1 class="title">Combien d'oreillers dans votre vie ?</h1>

    <div class="oreillers">
      <img alt="oreillers" :src="getImgUrl(this.$store.state.count)" v-if="this.$store.state.count">
    </div>

    <div class='counter unselectable'>
      <div class='minus' :class="this.$store.state.count ? null : 'hide'" @click="handleMinus" ></div>
      <div class='count'>{{this.$store.state.count}}</div>  
      <div class='plus' :class="this.$store.state.count === 10 ? 'hide' : null" @click="handlePlus"></div>
    </div>

   
    <router-link to="/validation" class='next button'>Suivant</router-link>

    
  </div>
  
</template>

<style>
  @import './Main.scss';
  @import '../../styles/Elements.scss';
</style>


