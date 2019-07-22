<template>
    <ul>
        <li> <router-link :to="{name:'helloworld',params:{worldmsg:'恁好世界'}}">HELLOWORLD</router-link></li>
        <li> <router-link :to="{name:'hellozqq',params:{zqqmsg:'恁好zqq'}}">HELLOZQQ</router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'list'
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
