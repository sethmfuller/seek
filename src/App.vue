<template>
  <div id="app">

    <!-- Seek.com Logo -->
    <img id="logo" src="./assets/Logo_Text.svg" alt="Seek Logo">

    <!-- Main View -->
    <main-view
      :response_="response_"
      :bible_="bible_"
      :spinner_="spinner_"
      :search_="search_">
    </main-view>
    
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import {chapters, books, allBooks} from './assets/Bible.js'
import { Request } from './classes/Request.js'

export default {

name: 'App',

components: {
  MainView
},

data() {
  return {
    bible_: false,
    spinner_: true,
    search_: false,
    dropdown_: false,
    request_: null,
    response_: null,
  }
},

created: function(){
  this.request_ = new Request();
  this.request_.initial_request('Genesis', 1, 'web').then(response => {
    this.response_ = response;
    this.spinner_= false;
    this.bible_ = true;
  });
},

methods: {
  
},

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
