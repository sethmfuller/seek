<template>
  <nav>
    <div id="book-selections">
      <div class="selection">
        <h2>Matthew</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>
      <div class="selection">
        <h2>12</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>
      <div class="selection">
        <h2>NLT</h2>
        <i class="material-icons dropdowns noselect">arrow_drop_down</i>
      </div>
    </div>

    <div id="site-navigation">
        <i class="material-icons site-navs noselect">book</i>
        <i class="material-icons site-navs noselect">today</i>
        <i class="material-icons site-navs noselect">search</i>
    </div>
  </nav>
</template>

<script>
export default {
name: 'navigation',

}
</script>

<style scoped>
nav
{
    width: 100%;
    height: 60px;
    background-color: #673AB8;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}

#site-navigation
{
  display: flex;
  float: right;
}

.site-navs
{
  font-size: 32px;
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
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  float: left;
}

.selection
{
  margin-right: 10px;
}

</style>
