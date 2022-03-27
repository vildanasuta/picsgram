<template>
 <div class="signup">
 
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form id="signup-form">

 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" v-model="email" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
 <small id="emailHelp" class="form-text text-muted" >We'll
never share your email with anyone else.</small>
 </div>
 <div class="form-group">
 <label>Password</label>
 <input type="password" v-model="password" class="form-control"
placeholder="Password" />
 </div>
 <div class="form-group">
 <label>Repeat your password</label>
 <input type="password" v-model="password" class="form-control"
 placeholder="Repeat your password" />
 </div>
 <button type="button" @click="signUp()" class="btn btn-primary">Submit</button>
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


export default{        
    name:'signup',

    data(){
        return{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        };
    },
    methods:{
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                function(){
                    console.log('Uspjesna registracija');
                }
            ).catch(
                function(error){
                    console.error('Doslo je do greske',error);
                }
            );

        },
    },

};
</script>

<style>
html{
  background-image: linear-gradient(to right, white , rgb(243, 165, 165));
}
.signup{
    padding-top:3%;
    padding-bottom:3%;
    width:100%;
    height:100%;
    background-image:url('@/assets/bg-for-forms.png');

}
#signup-form{
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