<template>
  <div id="app">
    <!--标签页导航-->
    <!--<bread></bread>-->
	<transition mode="out-in">
		<router-view />
	</transition>
  </div>
</template>
<script>
  import bread from './components/bread'
  export default {
    name: 'App',
    data(){
      return {

      }
    },
    components:{bread}
  }
</script>

<style>
  @import "./assets/css/style.css";
	@import "./styles/public.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
	.v-enter,
	.v-leave-to{
		opacity: 0;
		transform: translateX(150px);
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.3s ease;
	}
</style>
