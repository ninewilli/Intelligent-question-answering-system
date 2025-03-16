<template>

  <!--<img src="../assets/bk2.jpg" style="height:800px;width:1650px;">-->
	<div id="container" class="cls-container">
		
		<!-- BACKGROUND IMAGE -->
		<!--===================================================-->
		
		
		<!-- LOGIN FORM -->
		<!--===================================================-->
        <div class="login-box">
            <h2>基于课程教学数据的实时内容推荐和个性化智能问答系统</h2>
            <form>
              <div class="user-box">
                <input type="text" name="" required="">
                <label>Username</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required="">
                <label>Password</label>
              </div>
              <a @click="login()" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                开启探索
              </a>
            </form>
          </div>
	</div>
	

</template>
  
<script>
import axios from 'axios';
export default {
    mounted:function(){
    },
    data: function() {
      return {
        serverResponse: 'resp'
      }
  },
    methods:{
      login(){
            this.$router.push('/user')  
        }
    }
}
</script>

<style>
	#container{
		background: url("../assets/bk2.jpg")  center top no-repeat;
		 background-position: 100% 100%;
    background-size: 100% 100%;
    height: 720px;
	}
  body{overflow-y: hidden;overflow-x: hidden;}
	#a{

		font-size: 18px;
    width: 230px;
    display: block;
    margin: 0 auto;
    /*text-decoration: none;*/
    padding: 12px 50px;
    border-radius: 5px;
    border: 1px solid #f2f2f2;
	background-color: transparent;
    text-align: center;
    color: #f2f2f2;
	cursor: pointer;
    
    

	}
	#a:hover {
    background-color:#249e92;
    cursor: pointer;
   
    
}
p{font-size: 40px;
    font-weight: lighter;
    
    margin-bottom: 90px;}
    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 670px;
        padding: 40px;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,.5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,.6);
        border-radius: 10px;
      }
      
      .login-box h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
      }
      
      .login-box .user-box {
        position: relative;
      }
      
      .login-box .user-box input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      .login-box .user-box label {
        position: absolute;
        top:0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
      }
      
      .login-box .user-box input:focus ~ label,
      .login-box .user-box input:valid ~ label {
        top: -20px;
        left: 0;
        color: #03e9f4;
        font-size: 12px;
      }
      
      .login-box form a {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-top: 40px;
        letter-spacing: 4px
      }
      
      .login-box a:hover {
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 100px #03e9f4;
      }
      
      .login-box a span {
        position: absolute;
        display: block;
      }
      
      .login-box a span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #03e9f4);
        animation: btn-anim1 1s linear infinite;
      }
      
      @keyframes btn-anim1 {
        0% {
          left: -100%;
        }
        50%,100% {
          left: 100%;
        }
      }
      
      .login-box a span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #03e9f4);
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s
      }
      
      @keyframes btn-anim2 {
        0% {
          top: -100%;
        }
        50%,100% {
          top: 100%;
        }
      }
      
      .login-box a span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #03e9f4);
        animation: btn-anim3 1s linear infinite;
        animation-delay: .5s
      }
      
      @keyframes btn-anim3 {
        0% {
          right: -100%;
        }
        50%,100% {
          right: 100%;
        }
      }
      
      .login-box a span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #03e9f4);
        animation: btn-anim4 1s linear infinite;
        animation-delay: .75s
      }
      
      @keyframes btn-anim4 {
        0% {
          bottom: -100%;
        }
        50%,100% {
          bottom: 100%;
        }
      }
      
</style>
  