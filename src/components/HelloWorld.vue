<template>
  
  <div class="hello container">
    
    <div class="middle" :style="backgroundDiv">
    
    <img src="../assets/1.jpg">
    <h1 class="mt-5">{{ msg }}</h1>
</div>
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      
      backgroundDiv: {
            backgroundImage: 'url(' + require('../assets/2.jpg') + ')'
        }
    }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle {
    
    background: no-repeat center top;
    
    background-size: cover;
     background-attachment: fixed;
            background-position: center;
            background-size: cover;
            
            
}
</style>
