<template>
<div id="dropdown">
    <div id="books" v-if="dropdownDataType == 'book'">
        <!-- Sub Heading -->
        <h2 class="testament">Old Testament</h2><div></div>
        <div class="box-containers">
        <div class="button"
            v-for='box in oldTestament'
            @click="chooseBook(box)">
            {{box}}
        </div>
        </div>
        
        <!-- Sub Heading -->
        <h2 class="testament">New Testament</h2>
        
        <div 
            class="box-containers">
            <div 
                class="button"
                v-for='book in newTestament'
                v-bind:key="book"
                @click="chooseBook(book)">
                {{book}}
            </div>
        </div>
    </div>

    <div id="books" v-if="dropdownDataType == 'chapter'">
        <h2 class="testament">Chapter</h2><div></div>
        <div 
            class="box-containers">
            <div 
                class="button"
                v-for='chapter in chapters'
                v-bind:key = "chapter"
                @click="chooseSpecificChapter('', chapter)">
                {{chapter}}
            </div>
        </div>
    </div>

    <div id="books" v-if="dropdownDataType == 'version'">
        <h2 class="testament">Version</h2><div></div>
        <div 
            class="box-containers">
            <div 
                class="version-button"
                style="width=150px"
                v-for='version in versions'
                v-bind:key="version"
                @click="chooseVersion(version)">
                {{version}}
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {chapters, abrevOldTestament, abrevNewTestament, versions} from '../assets/Bible.js'
export default {
    name: 'drop-down',

    props: ['book', 'chapter', 'dropdownDataType', 'bookid'],

    data() {
        return {

        }
    },

    methods: {
        chooseBook: function(book) {
            this.$emit('chooseBook', book);
        },

        chooseSpecificChapter: function(book, chapter) {
            var bc_combo = {
                book: book,
                chapter: chapter
            }
            this.$emit('chooseSpecificChapter', bc_combo);
        },

        chooseVersion: function(version) {
            this.$emit('chooseVersion', version);
        }
    },

    computed: {
        oldTestament: function() {
            return abrevOldTestament;
        },

        newTestament: function() {
            return abrevNewTestament;
        },

        versions: function() {
            return versions;
        },

        chapters: function() {
            return chapters[this.bookid - 1];
        }
    }
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
