<template>
  <div id="app">
    <img id="logo" src="./assets/Logo_Text.svg" alt="Seek Logo">
    <main-view
      @changeView="changeView"
      :view="view"
      :bible="bible"
      :verse="verse">
    </main-view>
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import {fetchData} from './api/api_calls.js'

export default {

name: 'App',

components: {
  MainView
},

data() {
  return {
    view: 'bible',
    bible: '',
    verse: ''
  }
},

methods: {

  // Make api call
  changeView: function(info) 
  {
    this.view = info;
  }
},

created: function() {
  fetchData('genesis 1').then(data => this.bible = data);
  fetchData('matthew 1:2').then(data => this.verse = data);
}
}
</script>

<style>

/* Elements with this class will not be selectable */
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}

::selection {
  background: rgba(102, 58, 184, 0.774);
  color: white;
  text-shadow: none;
}

::-moz-selection {
  background: rgba(102, 58, 184, 0.774);
  color: white;
  text-shadow: none;
}

body
{
  width: 100vw;
  height: 100vh;
  margin: 0px;
  background-color: #2B313C;
  background-image: url('./assets/Background.png');
  background-size: 150vh;
}
#app 
{
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
}

#logo
{
  position: absolute;
  width: 121px;
  height: 95.22px;
  left: 30px;
}

/* All verse numbers are style by this definition */
sup
{
  color: rgba(43, 49, 60, 0.651);
}
</style>
