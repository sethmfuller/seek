<template>
  <nav>
    <div id="book-selections">
      <div class="selection">
        <h2>Matthew</h2>
        <i class="material-icons dropdowns">arrow_drop_down</i>
      </div>
      <div class="selection">
        <h2>12</h2>
        <i class="material-icons dropdowns">arrow_drop_down</i>
      </div>
      <div class="selection">
        <h2>NLT</h2>
        <i class="material-icons dropdowns">arrow_drop_down</i>
      </div>
    </div>

    <div id="site-navigation">

      <div class="nav-button">
        <i class="material-icons site-navs">book</i>
      </div>
      <div class="nav-button">
        <i class="fas fa-fire fa-lg"></i>
      </div>
      <div class="nav-button">
        <i class="material-icons site-navs">search</i>
      </div>

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
}

#site-navigation
{
  display: flex;
}

.site-navs
{
  font-size: 24px;
}

.nav-button
{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 55px;
  background-color: white;
  color: #2B313C;
  box-shadow: 0 0 5px rgba(0,0,0,.5);
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
}

.selection
{
  margin-right: 10px;
}

</style>
