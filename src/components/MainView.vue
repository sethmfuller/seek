<template>
  <main>
    <navigation 
      @changeView="changeView"
      @referenceClick="referenceClick"
      :view="view"
      :bible="bible"
      :verse="verse"
      :book="book"
      :chapter="chapter"
      :version="version"
    ></navigation> 
    <drop-down
      v-if="dropdown == true"
      :dropdownDataType="dropdownDataType">
    </drop-down>
    <div id="container">
      <div 
        class="chapter-button noselect" 
        id="left-chapter-button"
        @click="previousChapter()">
        <i class="material-icons">arrow_back</i>
      </div>
      <main-content
        :view="view"
        :bible="bible"
        :verse="verse">
      </main-content>
      <div 
        class="chapter-button noselect" 
        id="right-chapter-button"
        @click="nextChapter()">
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

  props: ['view', 'bible', 'verse', 'book', 'chapter', 'version', 'dropdown', 'dropdownDataType'],

  methods: {
    // Change View
    changeView: function(view){
      this.$emit('changeView', view);
    },

    previousChapter: function() {
      this.$emit('previousChapter');
    },

    nextChapter: function() {
      this.$emit('nextChapter');
    },

    referenceClick: function(clickType) {
      this.$emit('referenceClick', clickType);
    }
  }

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
