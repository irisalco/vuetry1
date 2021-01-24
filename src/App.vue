<template>
  <div id="app">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong></strong> 文字是最真實的一切
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

    </div>
    

    <!-- vue logo -->
    <img src="./assets/popo.jpeg" id="logo" class="mt-5">
    <nav class="mb-5">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/a1" class="nav-link">top1</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/a2" class="nav-link">top2</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/a3" class="nav-link">top3</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/a4" class="nav-link">top4</router-link>
        </li>
      </ul>
    </nav> 

   
    <router-view/>
   
  </div>
</template>
<script>

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  padding-bottom: 60px;
  position: relative;
}
#logo{
  max-width: 60px;
}
</style>
