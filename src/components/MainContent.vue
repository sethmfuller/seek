<template>
  <div>
      <bible></bible>
      <verse></verse>
      <search></search>
  </div>
</template>

<script>
import Bible from './Bible.vue'
import Verse from './VerseOfDay.vue'
import Search from './Search.vue'
import DropDown from './DropDown.vue'

export default {
name: 'main-content',

components: {
  Bible,
  Verse,
  Search,
  DropDown
}

}
</script>

<style scoped>
div
{
    width: calc(100% - 55px);
    height: 100%;
}


</style>
