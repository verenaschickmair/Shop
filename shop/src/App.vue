<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Navbar 
          v-if="$route.path !== '/login'"
        /> <!--Statisch-->

        <router-view></router-view> <!--Dynamischer Inhalt-->
      </div>
    </div>

    
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed:{
    ...mapGetters([
      'token'
    ])
  },
  created(){ //Fall: Token ändert sich nicht - Nutzer ist bereits eingeloggt
    const token = localStorage.getItem('token');

    if(token){
      this.$store.dispatch('getCartItems', token);
      this.$store.dispatch('getProductItems', token);
    }
  },
  watch: { //Fall: Token ändert sich - neuer Nutzer loggt sich ein
    token(){
      if(this.token){ //Nur gesetzt wenn eingeloggt
        this.$store.dispatch('getCartItems', this.token);
        this.$store.dispatch('getProductItems', this.token);
      }
    }
  }
}
</script>

<style>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: white;
  }
  .bg-vue2 {
    background-color: rgb(65, 184, 131);
    color: white;
  }
  .color-vue {
    color: rgb(52, 73, 94);
  }
  .color-vue2 {
    color: rgb(65, 184, 131);
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>