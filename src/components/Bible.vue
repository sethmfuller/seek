<template>
    <div id="text">
        <h3>{{bible.reference}}</h3>
        {{bible.text}}
    <br><br>
    </div>
</template>

<script>
export default {
name: 'bible',

props: ['bible'],

computed: {
    
}

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

h3 
{
    text-align: center;
    font-size: 30px;
}

</style>
