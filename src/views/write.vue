<template>
    <body>
        <div id="container" class="effect aside-float aside-bright mainnav-lg">
            
            <!--NAVBAR-->
            <!--===================================================-->
            <div id="particles-js"></div>
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
                        
                        <div class="row" style="position:absolute;width: 200px;height: 200px;top:-800px" id="guanxi">
                    </div>
                        
                
                        
                        
                        
                    </div>
                    <!--===================================================-->
                    <!--End page content-->
    
    
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
                <!--===================================================-->
                <!--END MAIN NAVIGATION-->
    
            </div>
            <!-- FOOTER -->
            <!--===================================================-->
            <footer id="footer">
            </footer>
            <!--===================================================-->
            <!-- END FOOTER -->
    
            <!-- SCROLL PAGE BUTTON -->
            <!--===================================================-->
            <button class="scroll-top btn">
                <i class="pci-chevron chevron-up"></i>
            </button>
            <!--===================================================-->
        </div>
       
<div class="container" style="top:-20px;left:250px;position: absolute;width:1250px">
  <div class="row header" style="width:1200px">
    <h1>CONTACT US &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div class="row body" style="width:1200px">
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="John" />
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="46" rows="3" name="comments" style="height:200px"></textarea>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="Submit" />
          <small>or press <strong>enter</strong></small>
        </li>
        
      </ul>
    </form>  
  </div>
</div>
    </body>
    </template>
    
    <script>
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
            this.map_s()
        },
        data: function() {
          return {
            serverResponse: 'resp'
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
          });
                $(document).keypress(function (e) {
                        // 回车键事件  
                        if (e.which == 13) {
                            search();
                        }
                    });
                    window.onresize = function () {
                
                        myChart.resize();
                    }
                    var rela = { "data": [], "links": [] };
                
                    $.ajaxSetup({ async: false });
                    var myChart = echarts.init(document.getElementById("guanxi"));
                    myChart.showLoading();
                    var rela = { "data": [], "links": [] };
                    $.getJSON('../json/data.json', function (json) {
                        rela = json;
                    });
                    myChart.hideLoading();
                    var option = {
                        // backgroundColor: "white",
                        title: {
                            textStyle: {
                                // color: "white",
                                fontWeight: "lighter",
                            }
                        },
                        animationDurationUpdate: 1500,
                        animationEasingUpdate: 'quinticInOut',
                        legend: {
                            x: "center",
                            show: true,
                            data: ["专业名词", "人物", "地点", "名词缩写", "事件", "其他", "时间"]
                        },
                        series: [
                            {
                                type: 'graph',
                                layout: 'force',
                                symbolSize: 50,
                                edgeSymbol: ['circle', 'arrow'],
                                edgeSymbolSize: [4, 4],
                                edgeLabel: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 10
                                        },
                                        formatter: "{c}"
                                    }
                                },
                                force: {
                                    repulsion: 2500,
                                    edgeLength: [10, 100]
                                },
                                focusNodeAdjacency: true,
                                draggable: true,
                                roam: true,
                                categories: [{
                                    name: '专业名词',
                                    // itemStyle: {
                                    //     normal: {
                                    //         color: "#009800",
                                    //     }
                                    // }
                                }, {
                                    name: '人物',
                                    // itemStyle: {
                                    //     normal: {
                                    //         color: "#4592FF",
                                    //     }
                                    // }
                                }, {
                                    name: '地点',
                                    // itemStyle: {
                                    //     normal: {
                                    //         color: "#3592F",
                                    //     }
                                    // }
                                },
                                {
                                    name: '名词缩写',
                                }, {
                                    name: '事件',
                                }, {
                                    name: '其他',
                                },
                                {
                                    name: '时间',
                                }
                                ],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 10
                                        },
                                    }
                                },
                                force: {
                                    repulsion: 1000
                                },
                                tooltip: {
                                    formatter: function (node) { // 区分连线和节点，节点上额外显示其他数字
                                        if (!node.value) {
                                            return node.data.name;
                                        } else {
                                            return node.data.name + ":" + node.data.showNum;
                                        }
                                    },
                                },
                                lineStyle: {
                                    normal: {
                                        opacity: 0.9,
                                        width: 1,
                                        curveness: 0.3
                                    }
                                },
                                // progressiveThreshold: 700,
                                nodes: rela.data.map(function (node, idx) {
                                    node.id = idx;
                                    return node;
                                }),
                                links: rela.links,
                
                
                            }
                        ]
                    };
                    myChart.setOption(option, true);
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
            }
        }
    }
    
    </script>
    
    <style  type="text/css" lang="scss">
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
    @import "../../node_modules/compass-mixins/lib/compass";
    body {
            font-family: 'Bookman Old Style', serif;
            font-size: 16px;
          }
          body{overflow-y: hidden;overflow-x: hidden;}
          #feedback-page{
  text-align:center;
}


// Font imports

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

// Color vars

$white: #fff;
$grey: #ccc;
$dark_grey: #555;
$blue: #4f6fad;
$pink: #ee9cb4;

// Mixins

@mixin lato-book { font-family: 'Lato', sans-serif; font-weight: 300; }
@mixin lato-reg { font-family: 'Lato', sans-serif; font-weight: 400; }
@mixin lato-bold { font-family: 'Lato', sans-serif; font-weight: 700; }
@mixin btn($color) {
  background-color: $color;
  border-bottom-color: darken($color, 15%);
  &:hover {
      background-color: lighten($color, 5%);
    }
}

// Functions

@function pxtoem($target, $context){
  @return ($target/$context)+0em;
}

//

div, textarea, input {
  @include box-sizing(border-box); 
}  
.container {  
  min-width: 324px;
  margin: 50px auto 0px;
  background-color: $white;
  border: 1px solid lighten($grey, 1%); 
  border-bottom: 3px solid $grey;
}
.row {
  width: 100%;
  margin: 0 0 1em 0;
  padding: 0 2.5em;
  &.header {
    padding: 1.5em 2.5em;
    border-bottom: 1px solid $grey; 
    background: url(https://images2.imgbox.com/a5/2e/m3lRbCCA_o.jpg) left -80px;
    color: $white;
  }
  &.body {
    padding: .5em 2.5em 1em;
  }
}
.pull-right {
  float: right; 
}
h1 {
  @include lato-book;
  display: inline-block;
  font-weight: 100;
  font-size: pxtoem(45, 16);
  border-bottom: 1px solid hsla(100%, 100%, 100%, 0.3);
  margin: 0 0 0.1em 0;
  padding: 0 0 0.4em 0;
}
h3 {
  @include lato-reg;
  font-size: pxtoem(20, 16);
  margin: 1em 0 0.4em 0;
}
.btn {
  font-size: pxtoem(17, 16);
  display: inline-block;
  padding: 0.74em 1.5em;
  margin: 1.5em 0 0;
  color: $white;
  border-width: 0 0 0 0;
  border-bottom: 5px solid;
  text-transform: uppercase;
  @include btn(darken($grey, 10%));
  @include lato-book;
  &.btn-submit {
    @include btn($blue);
  }
}

form {
  max-width: 100%;
  display: block;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 0 0.25em 0; 
      clear: both;
      display: inline-block;
      width: 100%;
      &:last-child {
          margin: 0;    
        }
        p {
          margin: 0;
          padding: 0;
          float: left;
          &.right {
            float: right;
          }
        }     
        .divider {
          margin: 0.5em 0 0.5em 0;
          border: 0;
          height: 1px;
          width: 100%;
          display: block;
          background-color: $blue;
          background-image: linear-gradient(to right, $pink, $blue);
        }
        .req {
          color: $pink; 
        }
    }
  }
  label {
    display: block;
    margin: 0 0 0.5em 0;
    color: $blue;
    font-size: pxtoem(16, 16);
  }
  input {
    margin: 0 0 0.5em 0;
    border: 1px solid $grey;
    padding: 6px 10px;
    color: $dark_grey;
    font-size: pxtoem(16, 16);
  }
  textarea {
    border: 1px solid $grey;
    padding: 6px 10px;
    width: 100%;
    color: $dark_grey;
  }
  small {
    color: $blue;
    margin: 0 0 0 0.5em;
  }
}

// Media Queries

@media only screen and (max-width:480px) {
  .pull-right {
    float: none; 
  }
  input {
    width: 100%; 
  }
  label {
    width: 100%;
    display: inline-block;
    float: left;
    clear: both;
  }
  li, p {
   width: 100%; 
  }
  input.btn {
   margin: 1.5em 0 0.5em; 
  }
  h1 {
   font-size: pxtoem(36, 16); 
  }
  h3 {
    font-size: pxtoem(18, 16)
  }
  li small {
   display: none; 
  }
}
    </style>