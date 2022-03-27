<template>
 
 
 
 <div class="login">
 
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form id="login-form">
 <div class="form-group">
 <label for="exampleInputEmail">Email address</label>
 <input type="email" v-model="email" class="form-control"
id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
 <small id="emailHelp" class="form-text text-muted" >We'll
never share your email with anyone else.</small>
 </div>
 <div class="form-group">
 <label for="exampleInputPassword">Password</label>
 <input type="password" v-model="password" class="form-control" placeholder="">
 </div>
 <button type="button"  @click="login()" class="btn btn-primary">Submit</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>


<script>
import firebase from '@/firebase.js';
import store from '@/store.js';
import router from '@/router';


export default {
    name:"login",
    data(){
        return{
        email:'',
        password:'',
        };
    },
    methods:{
        login(){
            console.log("login..."+this.email);
            
            firebase.
            auth().
            signInWithEmailAndPassword(this.email, this.password)
            .then((result)=>{
                console.log("uspjesna prijava", result);
                this.$router.replace({name: 'home' });
            }).catch(function(e){
                console.error("greska"+e);
            });
        }
    }
}
</script>

<style>
html{
  background-image: linear-gradient(to right, white , rgb(243, 165, 165));
}
.login{
    padding-top:3%;
    padding-bottom:3%;
    width:100%;
    height:100%;
    background-image:url('@/assets/bg-for-forms.png');

}
#login-form{
    padding:40px;
    width:400px;
    border:10px solid gray;
    border-style:inset;
    background-image: linear-gradient(to bottom, white,rgb(121, 118, 118));
}
.btn-primary{
    background:red;
    margin-top:30px;
    border-color:red;
}
.btn-primary:hover{
    border-color:rgb(99, 25, 25);
    background:rgb(99, 25, 25);
    color:white;

}
</style>
