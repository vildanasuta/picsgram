<template>
<div>
 <nav class="navbar navbar-expand-lg">
    <div class="divs">
      <router-link to="/"><img src="@/assets/logo.png" height="120" width="120"></router-link>
      <form class="search"><input v-model="store.searchTerm" type="search" placeholder="Search" class="form-control me-2"></form>
      <router-link v-if="!store.currentUser" to="/login" id="login" class="btn btn-primary" >Log In</router-link>
      <router-link  v-if="!store.currentUser" to="/signup"  id="signup" class="btn btn-primary">Sign Up</router-link>
      <a  v-if="store.currentUser"  href="/#" @click="logout()" id="logout" class="btn btn-primary">Log Out</a>
    </div>
  
  
  
 
</nav>
<router-view/>
</div>

</template>

<script>
import store from '@/store.js';
import firebase from '@/firebase.js';
import router from '@/router';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("korisnik ulogiran", user);
    store.currentUser=user.email;

  } else {
    console.log("nije ulogiran");
    store.currentUser=null;
    if(router.name!=="login"){
    router.push({name:'login'});
    };
    

  }
});

export default ({
  name:'app',
  data(){
    return{
    store,
    firebase,
    router
    }
  },
  methods:{
    logout(){
      firebase.
      auth().
      signOut()
      .then(()=>{
      this.$router.push({name:"login"});
      });
  },
 
},

})

</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
   width:100%;
  background-image: linear-gradient(to right, white , rgb(243, 165, 165));
 
  img{
  width:100px;
  height:100px;
  }
  
  .btn-primary{
    margin-top:3%;
    margin-left:2%;
    height: 3%;
    color:red;
    font-weight: 600;
    background:white;
    border-color:red;

  }
  .btn-primary:hover{
    background-color:red;
    color:white;
    border-color:red;
  }
  #login{
    color:white;
    background: red;
    border-color:red;

  }
  #login:hover{
    background:#3e75ec;
    border-color:rgb(0,255,255);
  }
  #login:active, #signup:active, #logout:active{
    background:#3e75ec;

  }

}
.divs{
  display:flex;
  width:100%;
  height:100%;

}
.search{
  margin-left:50%;
  margin-top:3%;
  width:20%;
}

</style>
