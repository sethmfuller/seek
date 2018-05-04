<template>
    <div class="text" id="bible-id">
        <h3>{{response_.get_book_name()}} {{response_.get_chapter_number()}}</h3>
        <p class="text" id="chapter-text">
            <span
                v-for="(verse, index) in response_.get_verse_array()"
                :key="index">
                <sup>{{verse.get_verse_number()}}</sup>
                {{verse.get_text()}}
            </span>
        </p>
    <br><br>
    </div>
</template>

<script>
export default {
name: 'bible',

props: ['response_'],

}
</script>

<style>
.text
{
    height: 100%;
    width: 100%;
    margin: 0px;
    color: #2B313C;
    flex-direction: column;
    text-align: start;
    overflow-y:scroll;
    font-family: "Palatino Linotype";
    font-size: 18px;
}

h3 
{
    text-align: center;
    font-size: 30px;
    font-family: 'Roboto';
    font-weight: normal;
}

</style>
