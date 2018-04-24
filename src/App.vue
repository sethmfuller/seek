<template>
  <div id="app">
    <img id="logo" src="./assets/Logo_Text.svg" alt="Seek Logo">
    <main-view
      @changeView="changeView"
      @previousChapter="previousChapter"
      @nextChapter="nextChapter"
      @referenceClick="referenceClick"
      @closeDropdown="closeDropdown"
      @chooseBook="chooseBook"
      @chooseSpecificChapter="chooseSpecificChapter"
      @chooseVersion="chooseVersion"
      :view="view"
      :bible="bible"
      :book="book"
      :chapter="chapter"
      :version="version"
      :dropdown="dropdown"
      :dropdownDataType="dropdownDataType"
      :bookid="bookid">
    </main-view>
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import {fetchData} from './api/api_calls.js'
import {chapters, books, allBooks} from './assets/Bible.js'

export default {

name: 'App',

components: {
  MainView
},

data() {
  return {
    view: 'bible',
    bible: '',
    book: '',
    chapter: '',
    version: '',
    bookid: '',
    chapterid: '',
    dropdown: false,
    dropdownDataType: ''
  }
},

methods: {

  // Make api call
  changeView: function(info) 
  {
  },

  specificChapter: function(book, chapter) {
    fetchData(`${book} ${chapter}`).then(data => {
      this.bible = data;
      this.book = data.reference.split(' ')[0];
      this.chapter = data.reference.split(' ')[1];
      this.version = data.translation_id.toUpperCase();
    });
  },

  previousChapter: function() {
    
  },

  nextChapter: function() {
    
  },

  referenceClick: function(clickType){
    
    document.getElementById("text").style.opacity = 0.1;
    document.getElementById("text").style.overflowY = "hidden";
  },

  closeDropdown: function() {
    
    document.getElementById("text").style.opacity = 1;
    document.getElementById("text").style.overflowY = "scroll";
  },

  chooseBook: function(book) {
    fetchData(`${book} ${1}?translation=${this.version}`).then(data => {
      
      document.getElementById("text").style.opacity = 1;
      document.getElementById("text").style.overflowY = "scroll";
    });
  },

  chooseSpecificChapter: function(bc_combo) {
      fetchData(`${this.book} ${this.chapter}`).then(data => {
        
        document.getElementById("text").style.opacity = 1;
        document.getElementById("text").style.overflowY = "scroll";
      });
  },

  chooseVersion: function(version) {
    fetchData(`${this.book} ${this.chapter}?translation=${version}`).then(data => {
      
      document.getElementById("text").style.opacity = 1;
      document.getElementById("text").style.overflowY = "scroll";
    });
  }
},

created: function() {
  fetchData('genesis 1').then(data => {
    
  });
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
