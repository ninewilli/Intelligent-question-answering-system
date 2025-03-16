<template>
<body>
    
    <div id="container" class="effect aside-float aside-bright mainnav-lg">

        <!--NAVBAR-->
        <!--===================================================-->
        <header id="navbar">
            <div id="navbar-container" class="boxed">

                <!--Brand logo & name-->
                <!--================================-->
                <div class="navbar-header">
                    <a @click="to_login()" class="navbar-brand">
                        <img src="../assets/logo.jpg" alt="Nifty Logo" class="brand-icon">
                        <div class="brand-title">
                            <span class="brand-text">实推问答</span>
                        </div>
                    </a>
                </div>
                <!--================================-->
                <!--End brand logo & name-->


                <!--Navbar Dropdown-->
                <!--================================-->
                <div class="navbar-content clearfix">
                    <ul class="nav navbar-top-links pull-left">

                        <!--Navigation toogle button-->
                        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
                        <li class="tgl-menu-btn">
                            <a class="mainnav-toggle" href="#">
                                <i class="demo-pli-view-list"></i>
                            </a>
                        </li>
                        
                    </ul>
                    <ul class="nav navbar-top-links pull-left">

                        <h4>基于课程教学数据的实时内容推荐和个性化智能问答系统</h4>



                    

                        
                    </ul>
                </div>
                <!--================================-->
                <!--End Navbar Dropdown-->

            </div>
        </header>
        <!--===================================================-->
        <!--END NAVBAR-->

        <div class="boxed">

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">

                <!--Page content-->
                <!--===================================================-->
                <div id="page-content">
                    
					<h4 class="text-main pad-btm bord-btm" style="position:absolute;">推荐内容搜索</h4>
          <h4 class="text-main pad-btm bord-btm"></h4>
              <div class="row">
                <div id="particles-js"></div>
                <div class="col-lg-8">
                    <div class="input-group" >
                        <div class="container" @click="search()" style="position:absolute;top:-1250px;left:690px">
                                <a data-animation="ripple"> <span style="font-weight: bold;">搜索</span></a>
                            </div>
                            <input type="text" id="search" v-model="page" class="form-control input-lg" style="position:absolute;top:-650px;width: 700px;height:50px" placeholder="请输入你要搜索的内容...">
                            
                    </div>
                </div>
                
                <div id = "border2" class="form-control input-lg">
                    <div>相关名词百科解释:</div>
                    <div id = "name_bai"></div>
                    <div id = "baidu"></div>
                </div>
                <div class="col-lg-8" style="position:absolute;top:1.1875rem;">
                    <h4 style="position:absolute;">推荐内容</h4>
                </div>
                <div class="col-lg-8" id = "border" style="position:absolute;top:1.4375rem;">
                    <div class="col-lg-8">
                        <a id = "recom" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8">
                        <a id = "recom1" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8"></div>
                    <div class="col-lg-8">
                        <a id = "recom2" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8"></div>
                    <div class="col-lg-8">
                        <a id = "recom3" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8"></div>
                    <div class="col-lg-8">
                        <a id = "recom4" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8"></div>
                    <div class="col-lg-8">
                        <a id = "recom5" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                    <div class="col-lg-8"></div>
                    <div class="col-lg-8">
                        <a id = "recom6" href="" style="text-decoration: underline;font-size:.1125rem;color:rgb(9, 95, 62)"> </a>
                    </div>
                </div>
                <div class="col-lg-8" style="position:absolute;top:2.6875rem;">
                  
                    <h4 style="position:absolute;">推荐图片</h4>
                    <h1> </h1>
                        <div id="border1" style="position:absolute;left:.0625rem;">
                        <img :src="picurl" id="pic">
                        <img :src="picurl1" id="pic1">
                        <img :src="picurl2" id="pic2">
                        <img :src="picurl3" id="pic3">
                    </div>
                </div>
                <!--===================================================-->
                <!--End page content-->


            </div>
        </div>
    </div>
            <!--===================================================-->
            <!--END CONTENT CONTAINER-->

            
            <!--MAIN NAVIGATION-->
            <!--===================================================-->
            <nav id="mainnav-container">
                <div id="mainnav">

                    <!--Menu-->
                    <!--================================-->
                    <div id="mainnav-menu-wrap">
                        <div class="nano">
                            <div class="nano-content">

                                <ul id="mainnav-menu" class="list-group">
						
                                    <li class="list-header"> 课程内容推荐分析</li>
                                <li>
                                    <a @click="to_main_lis()">
                                        <i class="fa fa-spinner" style="width:.1569rem"></i>
                                        <span class="menu-title">
                                            <strong>课程实时内容推荐</strong>
                                        </span>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a @click="to_recommended()">
                                        <i class="fa fa-area-chart" style="width:.1569rem"></i>
                                        <span class="menu-title">
                                            <strong>课程内容推荐</strong>
                                        </span>
                                        
                                    </a>
                    
                                    
                                </li>
                                <li class="list-divider"></li>
                                <!--Category name-->
                                <li class="list-header"> 课程接受关系可视化</li>
                    
                                <!--Menu list item-->
                                
                    
                                <!--Menu list item-->
                               <li>
                                    <a @click="to_search()">
                                        <i class="fa fa-search" style="width:.1569rem"></i>
                                        <span class="menu-title">
                                            <strong>检索课程内容与推荐</strong>
                                        </span>
                                        
                                    </a>
                    
                                    
                                </li>
                                <li>
                                    <a @click="to_all_relation()">
                                        <i class="fa fa-pie-chart" style="width:.1569rem"></i>
                                        <span class="menu-title">
                                            <strong>课程内容关系全貌</strong>
                                        </span>
                                        
                                    </a>
                    
                                </li>

                                <li>
                                    <a @click="to_append()">
                                        <i class="fa fa-envelope" style="width:.1569rem"></i>
                                        <span class="menu-title">
                                            <strong>知识图谱添加</strong>
                                        </span>
                                        
                                    </a>
                    
                                </li>
                                <li>
                                    <a @click="to_book_re()">
                                        <i class="fa fa-folder" style="width:.15rem"></i>
                                        <span class="menu-title">
                                            <strong>教材图谱添加</strong>
                                        </span>
                                        
                                    </a>
                    
                                    
                                </li>
                                <!--Menu list item-->
                               
                              
                               
                                <li class="list-divider"></li>
                    
                                <!--Category name-->
                                <li class="list-header">问答系统</li>
                    
                                <!--Menu list item-->
                                <li >
                                    <a @click="to_KGQA()">
                                        <i class="fa fa-question-circle" style="width:.1569rem"></i>
                                        <span class="menu-title"><strong>课程信息问答</strong></span>
                                        
                                    </a>
                    
                                    
                                </li>
                                <li >
                                    <a @click="to_DXQA()">
                                        <i class="fa fa-briefcase" style="width:.1569rem"></i>
                                        <span class="menu-title"><strong>课程信息选择问答</strong></span>
                                        
                                    </a>
                    
                                    
                                </li>
                                <li >
                                    <a @click="to_TSQA()">
                                        <i class="fa fa-balance-scale" style="width:24px"></i>
                                        <span class="menu-title"><strong>专项信息问答</strong></span>
                                        
                                    </a>
                    
                                    
                                </li>
                                
                                <li style="position:absolute;top:635px;width:220px">
                                    <a @click="to_user()" style="background-image: linear-gradient(to right,#64e6e6, #6ea5e8);">
                                        <i class="fa fa-male" style="width:24px;"></i>
                                        <span class="menu-title"><strong>个人中心</strong></span>
                                    </a>
                    
                                    
                                </li>
                            
						        </ul>


                                
                            </div>
                        </div>
                    </div>
                    <!--================================-->
                    <!--End menu-->

                </div>
            </nav>
            
        </div>
        <footer id="footer">

        </footer>
        <button class="scroll-top btn">
            <i class="pci-chevron chevron-up"></i>
        </button>
        </div>

<form id="app-cover" style="position: absolute;left:1200px;top:-40px;width:250px;">
    <div id="select-box" >
      <input type="checkbox" id="options-view-button">
      <div id="select-button" style="height: 36px;">
        <div id="selected-value" >
          <span>选择(默认为first)</span>
        </div>
        <div id="chevrons">
          <i></i>
          <i></i>
        </div>
      </div>
      <div id="options">
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="codepen"  @click="submit1()">
          <input class="s-c bottom" type="radio" name="platform" value="codepen"  @click="submit1()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">first</span>
          <span class="opt-val">first</span>
        </div>
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="dribbble" @click="submit2()">
          <input class="s-c bottom" type="radio" name="platform" value="dribbble" @click="submit2()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">second</span>
          <span class="opt-val">second</span>
        </div>
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="behance" @click="submit3()">
          <input class="s-c bottom" type="radio" name="platform" value="behance" @click="submit3()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">third</span>
          <span class="opt-val">third</span>
        </div>
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="hackerrank" @click="submit4()">
          <input class="s-c bottom" type="radio" name="platform" value="hackerrank" @click="submit4()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">forth</span>
          <span class="opt-val">forth</span>
        </div>
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="stackoverflow" @click="submit5()">
          <input class="s-c bottom" type="radio" name="platform" value="stackoverflow" @click="submit5()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">fifth</span>
          <span class="opt-val">fifth</span>
        </div>
        <div class="option">
          <input class="s-c top" type="radio" name="platform" value="freecodecamp" @click="submit6()">
          <input class="s-c bottom" type="radio" name="platform" value="freecodecamp" @click="submit6()">
          <i class="fa fa-window-maximize"></i>
          <span class="label">six</span>
          <span class="opt-val">six</span>
        </div>
        <div id="option-bg"></div>
      </div>
    </div>
  </form>

</body>
</template>

<script>
import axios from 'axios';
export default {
    
    watch: {
    '$route' () {
      location.reload();
    }
  },
    mounted:function(){
        if (location.href.indexOf("#reloaded") == -1) {
            location.href = location.href + "#reloaded";
            location.reload();
        }
        this.map_s();
    },
    data: function() {
      return {
        serverResponse: 'resp',
        verson:1,
        picurl: "",
        picurl1: "",
        picurl2: "",
        picurl3: "",
      }
  },
    methods:{
        map_s(){
            particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 380,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });},
        search() {
        axios.post('http://127.0.0.1:5000/recommended',{"name":this.page,"verson":this.verson})
            .then(res=>{
                var json = res.data;  //返回数据显示到text
                var jsonLength=0;
            for (var i in json) {
                jsonLength++;
            }
            document.getElementById("recom").textContent = json[0];
            document.getElementById("recom").href = json[1];
            document.getElementById("recom1").textContent = json[2];
            document.getElementById("recom1").href = json[3];
            document.getElementById("recom2").textContent = json[4];
            document.getElementById("recom2").href = json[5];
            document.getElementById("recom3").textContent = json[6];
            document.getElementById("recom3").href = json[7];
            document.getElementById("recom4").textContent = json[8];
            document.getElementById("recom4").href = json[9];
            document.getElementById("recom5").textContent = json[8];
            document.getElementById("recom5").href = json[9];
            document.getElementById("recom6").textContent = json[10];
            document.getElementById("recom6").href = json[11];

            this.getPic(1);
            this.getPic(2);
            this.getPic(3);
            this.getPic(4);

            document.getElementById("name_bai").textContent = json[jsonLength - 2]
            document.getElementById("baidu").textContent = json[jsonLength - 1]
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        getPic(nums) {
          const that = this
      axios({
        method: "get",
        url: "http://127.0.0.1:5000/getPic",
        responseType: "arraybuffer", // 最为关键
      }).then(function (response) {
        if(nums == 1){
          that.picurl = "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
        }
        else if(nums == 2){
          that.picurl1 = "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
        }
        else if(nums == 3){
          that.picurl2 = "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
        }
        else{
          that.picurl3 = "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
        }
      });
    },
    // ArrayBuffer转为base64字符串
    arrayBufferToBase64(buffer) {
      //第一步，将ArrayBuffer转为二进制字符串
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //将二进制字符串转为base64字符串
      return window.btoa(binary);
    },
        to_append() {
            this.$router.push('/append')
        },
        to_all_relation(){
            this.$router.push('/all_relation')
        },
        to_book_re(){
            this.$router.push('/book_re')
        },
        to_DXQA(){ 
            this.$router.push('/DXQA')
        },
        to_KGQA(){
            this.$router.push('/KGQA')
        },
        to_login(){
            this.$router.push('/login')
        },
        to_main_lis(){
            this.$router.push('/main_lis')
        },
        to_user(){
            this.$router.push('/user')
        },
        to_search(){
            this.$router.push('/search')
        },
        to_recommended(){
            this.$router.push('/recommended')  
        },
        to_TSQA(){
            this.$router.push('/TSQA')  
        },
        submit1(){
            this.verson = 1;
            this.map();
        },
        submit2(){
            this.verson = 2;
            this.map();
        },
        submit3(){
            this.verson = 3;
            this.map();
        },
        submit4(){
            this.verson = 4;
            this.map();
        },
        submit5(){
            this.verson = 5;
            this.map();
        },
        submit6(){
            this.verson = 6;
            this.map();
        }
    }
}

</script>

<style>
@import '../css/bootstrap.min.css';
@import '../css/nifty.min.css';
@import '../css/nifty-demo-icons.min.css';
@import '../css/nifty-demo.min.css';
@import '../css/pace.min.css';
@import '../css/wiki.css';
@import '../css/font-awesome.min.css';
@import '../css/select.css';
@import '../css/buttonsty.css';
@import '../css/litewebchat.min.css';
@import '../css/litewebchat_input.min.css';
body{overflow-y: hidden;overflow-x: hidden;}
        #border1{width: 5.25rem;height: 1.25rem;background-color: #f6f6f6;margin: .0625rem auto;border: .0063rem solid #aaaaaa;border-radius: .1rem;}
        #border{width: 5.35rem;height: 1.1625rem;background-color: #f6f6f6;margin: .0625rem auto;border: .0063rem solid #aaaaaa;border-radius: .1rem;}
        #border2{position: absolute;right: .0625rem;top: 110px;width: 2.225rem;height: 70%;background-color: #f6f6f6;margin: .0625rem auto;border: .0063rem solid #aaaaaa;border-radius: .1rem;}
        #pic{border:.0187rem green dashed;width: 1.25rem;height: 1.25rem;}
        #pic1{border:.0187rem green dashed;width: 1.25rem;height: 1.25rem;}
        #pic2{border:.0187rem green dashed;width: 1.25rem;height: 1.25rem;}
        #pic3{border:.0187rem green dashed;width: 1.25rem;height: 1.25rem;}
        #tagsList {position:relative; width:1.5625rem; height:1.5625rem; }
        #tagsList a {position:absolute; top:0rem; left:0rem; font-family: Microsoft YaHei; color:gray; font-weight:bold; text-decoration:none; padding: .0187rem .0375rem; }
        #tagsList a:hover { color:#249e92; letter-spacing:.0125rem;}
        #search:focus{
        border: .0063rem solid #249e92;
    }
    body {
        font-family: 'Bookman Old Style', serif;
        font-size: 16px;
      }
    .container {
        position: absolute;
        top: -0.0313rem;
        left: 4.2813rem;
        right: 0;
        bottom: 0;
        height: .3125rem;
        width: 1.25rem;
        margin: auto;
    }
    *[data-animation="ripple"] {
        height: 100%;
        width: 100%;
        display: block;
        outline: none;
        padding: .125rem;
        color: #fff;
        text-transform: uppercase;
        background: linear-gradient(135deg, #e570e7 0%,#79f1fc 100%);
        box-sizing: border-box;
        text-align: center;
        line-height: .0875rem;
        font-family: roboto, helvetica;
        font-weight: 200;
        letter-spacing: .0063rem;
        text-decoration: none;
        box-shadow: 0 .0313rem .0187rem rgba(0, 0, 0, 0.3);
        cursor: pointer;
      /*border-radius: .3125rem;*/
        -webkit-tap-highlight-color: transparent;
        border-radius: .0313rem;
    }
    
    *[data-animation="ripple"]:focus {
        outline: none;
    }
    
    *[data-animation="ripple"]::selection {
        background: transparent;
        pointer-events: none;
    }
</style>