<template>
  <div>
      <!-- Bible -->
      <bible
        v-if="this.bible_"
        :response_="response_">
      </bible>

      <semipolar-spinner
          v-if="this.spinner_"
          :animation-duration="2000"
          :color="'#673AB8'"
      />
  </div>
</template>

<script>
import Bible from './Bible.vue'
import {HollowDotsSpinner, SemipolarSpinner} from 'epic-spinners'

export default {
name: 'main-content',

components: {
  Bible,
  HollowDotsSpinner,
  SemipolarSpinner
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
