<template>
<div id="dropdown">

    <!-- Sub Heading -->
    <h2 class="testament">Old Testament</h2><div></div>
    <div class="box-containers">
    <div class="button"
        v-for='box in oldTestament'>
        {{box}}
    </div>
    </div>
    
    <!-- Sub Heading -->
    <h2 class="testament">New Testament</h2>
    
    <div class="box-containers">
    <div class="button"
        v-for='box in newTestament'>
        {{box}}
    </div>
    </div>

</div>
</template>

<script>
import {chapters, abrevOldTestament, abrevNewTestament} from '../assets/Bible.js'
export default {
    name: 'drop-down',

    props: ['dropdownDataType'],

    computed: {
        oldTestament: function() {
            return abrevOldTestament;
        },

        newTestament: function() {
            return abrevNewTestament;
        }
    }
}
</script>

<style>
#dropdown
{
    width: 100%;
    height: 130px;
    background-color: white;
    overflow-y: scroll;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0.0001px 5px 0.5pc rgba(0, 0, 0, 0.25);
    position: static;
    z-index: 1;
}

.box-containers {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
}

.button
{
    width: 45px;
    height: 40px;
    margin-bottom: 5px;
    margin-right: 5px;
    background-color: rgba(102, 58, 184, 0.774);
    cursor: pointer;
    border-radius: 2px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button:hover {
    box-shadow: 0 0 5px rgba(0,0,0,.5); 
}

.testament {
    font-size: 15px;
    font-weight: normal;
    color: #2B313C;
    text-align: left;
    margin-left: 10px;
}
</style>
