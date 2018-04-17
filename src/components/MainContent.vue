<template>
  <div @click="closeDropdown">
      <bible 
        v-if="this.view=='bible'"
        :bible="bible">
      </bible>

      <verse
        v-if="this.view=='verse'"
        :verse="verse">
      </verse>

      <search
        v-if="this.view=='search'">
      </search>
  </div>
</template>

<script>
import Bible from './Bible.vue'
import Verse from './VerseOfDay.vue'
import Search from './Search.vue'

export default {
name: 'main-content',

components: {
  Bible,
  Verse,
  Search,
},

props: ['view', 'bible', 'verse'],

methods: {
  closeDropdown: function() {
    this.$emit('closeDropdown');
  }
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
