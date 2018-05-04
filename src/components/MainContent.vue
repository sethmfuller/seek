<template>
  <div>
      <!-- Bible -->
      <bible
        v-if="this.bible_"
        :response_="response_">
      </bible>

      <!-- Search -->
      <search
        v-if="this.search_">
      </search>

      <hollow-dots-spinner
          v-if="this.spinner_"
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          :color="'#673AB8'"
      />
  </div>
</template>

<script>
import Bible from './Bible.vue'
import Search from './Search.vue'
import {HollowDotsSpinner} from 'epic-spinners'

export default {
name: 'main-content',

components: {
  Bible,
  Search,
  HollowDotsSpinner
},

props: ['response_', 'bible_', 'spinner_', 'search_'],

methods: {
}

}
</script>

<style scoped>
div
{
    width: calc(100% - 55px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
