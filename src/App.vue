<template>
  <div id="app">
    <img id="logo" src="./assets/Logo_Text.svg" alt="Seek Logo">
    <main-view
      @changeView="changeView"
      @previousChapter="previousChapter"
      @nextChapter="nextChapter"
      :view="view"
      :bible="bible"
      :verse="verse"
      :book="book"
      :chapter="chapter"
      :version="version">
    </main-view>
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import {fetchData} from './api/api_calls.js'
import {chapters, books} from './assets/Bible.js'

export default {

name: 'App',

components: {
  MainView
},

data() {
  return {
    view: 'bible',
    bible: '',
    verse: '',
    book: '',
    chapter: '',
    version: '',
    bookid: '',
    chapterid: ''
  }
},

methods: {

  // Make api call
  changeView: function(info) 
  {
    this.view = info;
    if (info != 'search') {
      this.book = (info == "verse") ? this.verse.reference.split(' ')[0] : this.bible.reference.split(' ')[0];
      this.chapter = (info == "verse") ? this.verse.verses[0].chapter : this.bible.reference.split(' ')[1];
      this.version = (info == "verse") ? this.verse.translation_id.toUpperCase() : this.bible.translation_id.toUpperCase();
    }
  },

  previousChapter: function() {
    var computed = this.computedPreviousChapter();
    fetchData(`${computed.name} ${computed.number}`).then(data => {
      this.bible = data;
      this.book = data.reference.split(' ')[0];
      this.chapter = data.reference.split(' ')[1];
      this.version = data.translation_id.toUpperCase();
    });
  },

  nextChapter: function() {
    var computed = this.computedNextChapter();
    fetchData(`${computed.name} ${computed.number}`).then(data => {
      this.bible = data;
      this.book = data.reference.split(' ')[0];
      this.chapter = data.reference.split(' ')[1];
      this.version = data.translation_id.toUpperCase();
    });
  },

  computedPreviousChapter: function() {
    if (this.chapterid == 1) {
      this.bookid = (this.bookid == 1) ? 66 : this.bookid - 1;
      this.chapterid = chapters[this.bookid - 1].length;
      return {
        name: books[this.bookid-1],
        number: this.chapterid
      }
    }
    else {
      this.chapterid--;
      return {
        name: books[this.bookid-1],
        number:this.chapterid
      }
    }
  },

  computedNextChapter: function() {
    if (this.chapterid == chapters[this.bookid-1].length) {
      this.bookid = (this.bookid == 66) ? 1 : this.bookid + 1;
      this.chapterid = 1;
      return {
        name: books[this.bookid-1],
        number: this.chapterid
      }
    }
    else {
      this.chapterid++;
      return {
        name: books[this.bookid-1],
        number: this.chapterid
      }
    }
  }
},

created: function() {
  fetchData('genesis 1').then(data => {
    this.bible = data;
    this.book = data.reference.split(' ')[0];
    this.chapter = data.reference.split(' ')[1];
    this.version = data.translation_id.toUpperCase();
    this.bookid = 1;
    this.chapterid = 1;
  });
  fetchData('matthew 12:2').then(data => this.verse = data);
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
