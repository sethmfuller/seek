<template>
    <div id="search">
        <h3>Search</h3>
        <input type="search" placeholder="Search">
        <h3>Results</h3>
        <ul>
            <li>cool coolcool cool cool cool cool</li>
            <li>cool</li>
            <li>cool</li>
            <li>cool</li>
        </ul>
    </div>
</template>

<script>
export default {

    name:'search',

}
</script>

<style scoped>

#search
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

input
{
    width: 60%;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #2B313C;
    border-radius: 2px;
    font-size: 20px;
    margin: 0px;
}

ul
{
    width: 60%;
    text-align: start;
    display: flex;
    flex-direction: column;
}

li 
{
    margin-top: 10px;
}
</style>
