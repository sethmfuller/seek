<template>
    <div id="text">
        <br>
        {{apiData.text}}
    <br><br>
    </div>
</template>

<script>
export default {
name: 'bible',

props: ['apiData']
}
</script>

<style>
#text
{
    height: 100%;
    width: 100%;
    margin: 0px;
    color: #2B313C;
    display: flex;
    flex-direction: column;
    text-align: start;
    overflow-y: scroll;
}

</style>
