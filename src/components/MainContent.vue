<template>
  <div>
      <bible 
        v-if="this.display=='bible'">
      </bible>

      <verse
        v-if="this.display=='verse'">
      </verse>

      <search
        v-if="this.display=='search'">
      </search>
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
},

props: ['display'],

computed: {
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
