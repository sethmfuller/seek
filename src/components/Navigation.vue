<template>
  <nav>
    <div id="book-selections">
      <div 
        class="selection"
        @click="referenceClick('book')">
        <h2>{{book}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>

      <div 
        class="selection"
        @click="referenceClick('chapter')">
        <h2>{{chapter}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>

      <div 
        class="selection"
        @click="referenceClick('version')">
        <h2>{{version}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>
    </div>

    <div id="site-navigation">
        <i 
          class="material-icons site-navs noselect"
          @click="changeView('bible')"
        >book</i>
        <i 
          class="material-icons site-navs noselect"
          @click="changeView('verse')"
        >today</i>
        <i 
          class="material-icons site-navs noselect"
          @click="changeView('search')"
        >search</i>
    </div>
  </nav>
</template>

<script>
export default {
name: 'navigation',

props: ['view', 'bible', 'verse', 'book', 'chapter', 'version'],

methods: {
  // Change to Verse View
  changeView: function(view) {
    this.$emit('changeView', view);
  },

  referenceClick: function(clickType) {
    this.$emit('referenceClick', clickType);
  }
},

}
</script>

<style scoped>
nav
{
    width: 100%;
    height: 60px;
    background-color: #673AB8;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    z-index: 100;
    display: flex;
    align-items: center;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}

#site-navigation
{
  display: flex;
  float: right;
  margin-right: 20px;
}

.site-navs
{
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
}

h2
{
  margin: 0px;
}

.dropdowns
{
  margin-top: -10px;
}

#book-selections
{
  height: 50px;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  flex: auto;
}

.selection
{
  margin-right: 10px;
}

</style>
