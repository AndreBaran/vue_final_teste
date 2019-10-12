<template>
  <div>
    
    
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <router-link class="navbar-brand" to="home">Home</router-link> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">    
      <li class="nav-item active">        
        <router-link class="navbar-brand" to="agenda">Cronograma</router-link>        
      </li>
      <li class="nav-item active">        
        <router-link class="navbar-brand" to="sobre">Sobre</router-link>        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://drive.google.com/open?id=1xw0Hgn80-t3B0XGjeewB2oRS75TT7jsl" target="_blank">Pdf</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
     
  </div>
  </nav>
    <router-view/>
</div>
  

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
