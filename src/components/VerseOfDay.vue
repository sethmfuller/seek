<template>
  <div id="verse-of-the-day">
        <div id="title">
            <i class="material-icons noselect" id="today-icon">today</i>
            <h3>Verse of the Day</h3>
        </div>
        <p id="verse"><sup>{{verse.verses['0'].verse}}</sup>{{verse.text}}</p>
    </div>
</template>

<script>
export default {
    name: "verse-of-day",

    props: ['verse']

}
</script>

<style scoped>

#verse-of-the-day
{
    height: 100%;
    width: 100%;
    margin: 0px;
    color: #2B313C;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;
}

#title
{
    display: flex;
    align-items: center;
}

#today-icon
{
    margin-right:10px;
}

#verse
{
    width:50%;
    text-align: start;
}

</style>
