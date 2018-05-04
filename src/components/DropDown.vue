<template>
<div id="dropdown">

    <!-- Dropdown for Books of the Bible -->
    <div id="books" v-if="dropdown_ == 'book'">
        <!-- Sub Heading -->
        <h2 class="testament">Old Testament</h2><div></div>
        <div class="box-containers">
            <div
                class="button"
                v-for="(book, index) in this.oldTestament"
                :key="index"
                @click="chooseBook(index)">
                {{book}}
            </div>
        </div>
        
        <!-- Sub Heading -->
        <h2 class="testament">New Testament</h2>
        
        <div 
            class="box-containers">
            <div
                class="button"
                v-for='(book, index) in this.newTestament'
                :key="index"
                @click="chooseBook(index)">
                {{book}}
            </div>
        </div>
    </div>

    <!-- Dropdown for chapters in a book -->
    <div id="books" v-if="dropdown_ == 'chapter'">
        <h2 class="testament">Chapter</h2><div></div>
        <div
            class="box-containers">
            <div
                class="button"
                v-for='index = 1; index <= ; index++'
                :key = "index"
                @click="chooseChapter(index)">
                {{index}}
            </div>
        </div>
    </div>

    <!-- Dropdown for versions of the Bible -->
    <div id="books" v-if="dropdown_ == 'version'">
        <h2 class="testament">Version</h2><div></div>
        <div 
            class="box-containers">
            <div 
                class="version-button"
                style="width=150px"
                v-for='version in bibleVersions'
                v-bind:key="version"
                @click="chooseVersion(version)">
                {{version}}
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { abrevOldTestament, abrevNewTestament, versions, current_book_id} from '../assets/Bible.js'
export default {
    name: 'drop-down',

    props: ['dropdown_', 'response_'],

    data() {
        return {
            
        }
    },

    computed: {

        oldTestament: function() {
            return abrevOldTestament;
        },

        newTestament: function() {
            return abrevOldTestament;
        },

        bibleVersions: function() {
            return versions;
        }
    },

    methods: {
        chooseBook: function(book)
        {
            this.$emit('chooseBook', book);
        },

        chooseChapter: function(chapter)
        {
            this.$emit('chooseChapter', chapter);
        },

        chooseVersion: function(version)
        {
            this.$emit('chooseVersion', version);
        }
    },
}
</script>

<style>
#dropdown
{
    width: 100%;
    height: 180px;
    background-color: white;
    overflow-y: scroll;
    box-shadow: 0.0001px 5px 0.5pc rgba(0, 0, 0, 0.25);
    position: static;
    z-index: 1;
}

.box-containers {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
}

.button
{
    width: 45px;
    height: 40px;
    margin-bottom: 5px;
    margin-right: 5px;
    background-color: rgba(102, 58, 184, 1);
    cursor: pointer;
    border-radius: 2px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.version-button 
{
    width: 150px;
    height: 40px;
    margin-bottom: 5px;
    margin-right: 5px;
    background-color: rgba(102, 58, 184, 1);
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
    margin-left: 20px;
}
</style>
