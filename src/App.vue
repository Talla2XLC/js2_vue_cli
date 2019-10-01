<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view />
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/app-header';
import appFooter from '@/components/app-footer';
import 'reset-css';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="sass">
html
  font-family: 'roboto', sans-serif
  box-sizing: border-box
  *, *:after, *:before
    box-sizing: inherit
    padding: 0
    margin: 0
#app
  display: flex
  align-items: stretch
  flex-direction: column
  min-height: 100vh
  background-color: #fff
main 
  display: flex
  flex: 1 0 auto
  width: 100%
  height: calc(100% - 96px)
</style>