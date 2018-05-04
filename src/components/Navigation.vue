<template>
  <nav>
    <div id="book-selections">
      <div
        @click="bookSelect()"
        class="selection">
        <h2>{{this.response_.get_book_name()}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>

      <div
      @click="chapterSelect()"
        class="selection">
        <h2>{{this.response_.get_chapter_number()}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>

      <div
        @click="versionSelect()"
        class="selection">
        <h2>{{this.response_.get_translation_name()}}</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>
    </div>

    <div id="site-navigation">
        <i
          class="material-icons site-navs noselect"
        >book</i>
        <i 
          class="material-icons site-navs noselect"
        >search</i>
    </div>
  </nav>
</template>

<script>
export default {
name: 'navigation',

props: ['response_'],

methods: {

  bookSelect: function() {
    this.$emit('bookSelect');
  },

  chapterSelect: function() {
    this.$emit('chapterSelect');
  },

  versionSelect: function() {
    this.$emit('versionSelect');
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
