<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Cronograma Hora Atividade</h3>
    <p>
      Sistema Desenvolvido para Geração de um Cronograma de Hora Atividade de uma Escola
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
