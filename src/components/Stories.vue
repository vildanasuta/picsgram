<template>
    <div class="stories">
        <img class="storyicon" :src="ikona">
        <h5>Click to watch story</h5>
        
    </div>
    
</template>

<script>
export default {
    props:['ikona'],
  name: 'Stories'
}
</script>

<style scoped lang="scss">
.stories{
    display:flex;
    padding:10px;
}
h5{
    padding:10px;
}
.storyicon{
    border: double 4px transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, rgb(255, 42, 42),#4e46b6);
  background-origin: border-box;
  background-clip: content-box, border-box;
    height:40px;
    width:40px;

}
</style>
