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
        <div style="position:absolute;top:50px;left:250px" class="white">
            <!-- Bootstrap -->
<div class="container list-article">
  <div class="btn-group pull-right" id="switch-view" @click="switch_s()">
    <button class="btn btn-primary">
      <span class="icon-th-large"></span>
    </button>
    <button class="btn btn-primary active">
      <span class="icon-th-list"></span>
    </button>
  </div>
  <div class="clearfix"></div>
  <div class="row">
    <div class="col-xs-12 article-wrapper">
      <article>
        <a href="#" class="more">more</a>
        <h1>Lorem ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus totam quasi nam porro sed.</p>
      </article>
    </div>
    <div class="col-xs-12 article-wrapper">
      <article>
        <a href="#" class="more">more</a>
        <h1>Dignissimos perferendis quae.</h1>
        <p>Numquam dolorem sed quae placeat iusto! Quibusdam doloremque enim assumenda aliquam impedit earum alias labore.</p>
      </article>
    </div>
    <div class="col-xs-12 article-wrapper">
      <article>
        <a href="#" class="more">more</a>
        <h1>Quisquam deserunt cumque!</h1>
        <p>Dolor tempora nihil facere explicabo qui mollitia deleniti quam quia iure nisi voluptate voluptatibus cum.</p>
      </article>
    </div>
    <div class="col-xs-12 article-wrapper">
      <article>
        <a href="#" class="more">more</a>
        <h1>Velit natus possimus.</h1>
        <p>Illum voluptates nisi asperiores temporibus illo maiores qui aliquid corporis exercitationem libero dolor tenetur. Doloremque!</p>
      </article>
    </div>
    <div class="col-xs-12 article-wrapper">
      <article>
        <a href="#" class="more">more</a>
        <h1>Atque quo maxime.</h1>
        <p>Sed eveniet iste magni possimus ipsum dolore ea nesciunt eligendi id. Eum quos voluptatibus ullam.</p>
      </article>
    </div>
  </div>
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
            serverResponse: 'resp',
        verson:1
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
            },
            map(){
            $(document).keypress(function (e) {
                    // 回车键事件  
                    if (e.which == 13) {
                        search();
                    }
                });
                window.onresize = function () {
            
                    myChart.resize();
                }
                $.ajaxSetup({ async: false });
                var myChart = echarts.init(document.getElementById("guanxi"));
                myChart.showLoading();
                
                axios.post('http://127.0.0.1:5000/get_json',{"verson":this.verson})
                .then(res=>{
                    var rela = res.data;
                    
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
                })
                .catch(err=>{
                    this.text = 'error' + err;
                    alert(this.text)
                })
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
            switch_s(){
                $(this).find("button").toggleClass("active");
                $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
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
    
</script >

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

@import url(https://fonts.googleapis.com/css?family=Pacifico);

body {
        font-family: 'Bookman Old Style', serif;
        font-size: 16px;
        }
        body{overflow-y: hidden;overflow-x: hidden;}
h1#header{
  text-align: center;
  padding:40px;
  font-size: 52px;
  font-family: "Pacifico";
  @include text-shadow(0 2px 2px darken(#CDE,40%));
}

.article-wrapper{
  @include transition(width .4s);
}

article{
  position:relative;
  padding-left:150px + 30;
  padding-right: 150px/2;
  height: 150px;
  width:800px;
  margin-bottom: 30px;
  background-color: #FFF;
  @include border-radius(150px);
  cursor:pointer;
  
  .img-wrapper{
    position: absolute;
    top:- 10px;
    left:-10px;
    @include border-radius(100px);
    background-color: #CDE;
    padding:10px;
    z-index: 1000;
    @include transition(all .2s);
    
    img{
      @include border-radius(100px);
      @include transition(all .2s);
      width:150px;
    }
  }
  
  h1{
 
    left: -120px;
    height: 150px/2;
    line-height: 150px/2;
    font-size: 24px;
    border-bottom: 2px solid #CDE;
    color: #428bca;
    position: relative;
    @include transition(all .4s);
  }
  p{
    position: relative;
    left: -120px;
    color: #888;
  }
  a{
    position:absolute;
    display:block;
    top: 0;
    left: 0;
    height: 100%;
    line-height: 150px;
    text-align: center;
    width: 100%;
    background-color: #FFF;
    font-size: 48px;
    font-style:italic;
    opacity:0;
    color: #428bca !important;
    @include transition(all .4s);
    text-decoration: none !important;
    @include border-radius(150px);
    font-family: "Pacifico";
    @include text-shadow(0 1px 1px #AAA);
  }
   &:hover{
    .img-wrapper{
      padding:5px;
      @include transform(rotate(5deg));
      img{
        width: 150px + 10;
      }
    }
    a{
      opacity:1;
    }
  }

}

.bloc{
  article{
    padding:10px;
    height: 150px*1.5;
    @include border-radius(3px);
    margin-top: 150px/2;
    
    .img-wrapper{
      position: relative;
      top:-(150px+20)/2;
      width: 150px+20;
      left:inherit;
      margin: auto;
      margin-bottom: -150px + 50;
    }
    
    h1{
      font-size: 14px;
      height: 150px/4;
      line-height: 150px/4;
    }
    
    p{
      font-size: 12px;
    }
    
    a{
       @include border-radius(3px);
       line-height: 150px*1.5 +30;
    }
  }
}

.white{

  padding: 10px;
  border-radius: 5px;
  width:1290px;
  height: calc(100vh - 51px);
  overflow-x: hidden;
  overflow-y: scroll;

}
.white::-webkit-scrollbar {
  width: 10px;
  /*滚动条宽度*/
  height: 5px
  /*滚动条高度*/
}
/*定义滚动条轨道 内阴影+圆角*/
.white::-webkit-scrollbar-track {
  /*滚动条的背景区域的内阴影*/
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0) inset;

  /*滚动条的背景区域的圆角*/
  opacity: 0;
  /*滚动条的背景颜色*/
  background-color: rgba(0, 1, 0, 0);
}

/*定义滑块 内阴影+圆角*/
.white::-webkit-scrollbar-thumb {
  /*滚动条的内阴影*/
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3) inset;

  /*滚动条的圆角*/
  border-radius: 10px;

  /*滚动条的背景颜色*/
  background-color: #737871;
}
.formSubmit{
  width: 100%;
  padding: 20px;
  text-align: right;

  position: absolute;
  bottom: 50px;
  right: 20px;
}


    </style>