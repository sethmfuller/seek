<template>
  <div id="verse-of-the-day">
        <div id="title">
            <i class="material-icons noselect" id="today-icon">today</i>
            <h3>Verse of the Day</h3>
        </div>
        <p id="verse"><sup>12</sup>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
</template>

<script>
export default {
    name: "verse-of-day"

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
