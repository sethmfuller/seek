<template>
  <main>

    <!-- Navigation Bar -->
    <navigation
      :response_="response_"
      @bookSelect="bookSelect"
      @chapterSelect="chapterSelect"
      @versionSelect="versionSelect">
    </navigation> 

    <!-- Dropdown Menu -->
    <drop-down
      v-if="dropdown_ !='' "
      @chooseBook="chooseBook"
      @chooseChapter="chooseChapter"
      @chooseVersion="chooseVersion"
      :dropdown_="dropdown_"
      :response_="response_">
    </drop-down>

    <!-- Main Content -->
    <div 
      id="container"
      @click="closeDropdown()"
    >

      <!-- Previous Chapter Button -->
      <div 
        class="chapter-button noselect" 
        id="left-chapter-button"
        @click="prevChapter()">
          <i class="material-icons">arrow_back</i>
      </div>

      <!-- Main Content -->
      <main-content
        :response_="response_"
        :bible_="bible_"
        :spinner_="spinner_"
        :search_="search_">
      </main-content>

      <!-- Next Chapter Button -->
      <div
        class="chapter-button noselect"
        id="right-chapter-button"
        @click="nextChapter()"
      >
        <i class="material-icons">arrow_forward</i>
      </div>
    </div>
  </main>
</template>

<script>
import Navigation from './Navigation.vue'
import MainContent from './MainContent.vue'
import DropDown from './DropDown.vue'

export default {

  name: 'MainView',

  components: {
    Navigation,
    MainContent,
    DropDown
  },

  props: ['response_', 'bible_', 'spinner_', 'search_', 'dropdown_'],

  methods: {
    
    nextChapter: function() {
      this.$emit('nextChapter');
    },

    prevChapter: function() {
      this.$emit('prevChapter');
    },

    bookSelect: function() {
      this.$emit('bookSelect');
    },

    chapterSelect: function() {
      this.$emit('chapterSelect');
    },

    versionSelect: function() {
      this.$emit('versionSelect');
    },

    chooseBook: function(book)
    {
      this.$emit('chooseBook', book);
    },

    chooseChapter: function(chapter)
    {
      this.$emit('chooseChapter', chapter);
    },

    chooseVersion: function(version)
    {
      this.$emit('chooseVersion', version);
    },

    closeDropdown: function()
    {
      this.$emit('closeDropdown');
    }
  },

}
</script>

<style scoped>
main 
{
    width: 70vw;
    height: 87vh;
    background-color: white;
    align-self: flex-end;
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2px;
}

#container
{
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.chapter-button
{
  width: 55px;
  height: 51.14px;
  background-color: #673AB8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
  position: relative;
  cursor: pointer;
}

.material-icons {
  font-size: 30px;
}

#left-chapter-button 
{
  right: 27.5px;
}

#right-chapter-button 
{
  left: 27.5px;
}

</style>
