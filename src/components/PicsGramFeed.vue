<template>
 <div class="card text-center">
  <div class="card-header">
    <img class="iconprofile" src="https://livinglikev.com/wp-content/uploads/2022/03/gray-hoodie-femme-luxe-review-living-like-v-fashion-blogger-livinglikev-femmeluxe-review.jpg">
    <h6 class="username">livinglikev</h6>
    <button class="moreaboutpost"><img id="threedots" src="../../src/assets/three-dots-icon.png"></button>
  </div>
  <div class="card-body p-0">
    <img class="card-img-top" :src="info.url">
  </div>
  <div class="card-footer text-muted">
    <h3>{{info.description}}</h3>
    
    {{info.time}}
  </div>
</div>
</template>

<script>
export default {  
  props:['info'],
  name: 'PicsGramFeed'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.iconprofile{
  height:40px;
  width:40px;
    border-radius: 50%;
    float:left;

}
.username{
  float:left;
  padding:10px;
  font-weight: 700;

}
.moreaboutpost{
  float:right;
  border:none;
  background: #F7F7F7;
}
#threedots{
 height:40px;
  width:52px;
  
}
</style>
