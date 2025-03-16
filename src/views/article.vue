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
                            
                                        <li class="list-header" style="position:absolute;"> 课程内容推荐分析</li>
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
            this.map_s();
            this.map();
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
    
    <style  type="text/css">
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
    body {
            font-family: 'Bookman Old Style', serif;
            font-size: 16px;
          }
          body{overflow-y: hidden;overflow-x: hidden;}
    </style>