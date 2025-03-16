<template>
<div id="body">
  
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
                    <div id="particles-js"></div>
              <div class="row">
                
                <div class="col-lg-8" style="position:absolute;top:.3268rem;">
                    <h4 class="text-main pad-btm bord-btm" style="position:absolute;">提取实体和关系</h4>
                    <h4 class="text-main pad-btm bord-btm"></h4>
                    <h4 class="text-main pad-btm bord-btm"></h4>
                    <div class="input-group" >
                        <input type="text" id="search" v-model="page" class="form-control input-lg"  placeholder="请输入句子用来提取" style="width:5.2288rem">
                        <a class="button"  @click="search()" style="position:absolute;top:0rem;height: .2614rem;left:5.2288rem;width:1.3072rem">提取</a>
                    </div>
                    
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <h4> 实体：</h4>
                        <a id="entity"></a>
                    </div>
                    
                    <div class="col-lg-7">
                        <h4>  </h4>
                    </div>
                    <div class="col-lg-7">
                        <div class="col-lg-7">
                            <h4>    </h4>
                        </div>
                        <input type="text" v-model="relax1" class="form-control input-lg"  placeholder="请输入主体">
                    </div>
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <input type="text" v-model="relax_obj" class="form-control input-lg"  placeholder="请输入客体">
                    </div>
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <input type="text" v-model="relax_text" class="form-control input-lg"  placeholder="请输入包含主体客体的句子">
                    </div>

                    <div class="col-lg-7">
                        <a class="button"  @click="relax()" style="height: .2614rem;width:3.7059rem">查看关系</a>
                    </div>
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <h4> 关系：</h4>
                        <h4 id="entity_guan"></h4>
                    </div>

                    <div class="col-lg-7"><li class="list-divider"></li></div>
                    <div class="col-lg-7">
                        <div class="col-lg-7">
                            <h4>    </h4>
                        </div>
                        <input type="text" v-model="main_text" class="form-control input-lg"  placeholder="请输入主体" id="message1">
                    </div>
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <input type="text" v-model="obj_text" class="form-control input-lg"  placeholder="请输入客体" id="message2">
                    </div>
                    <div class="col-lg-7">
                        <h4> </h4>
                    </div>
                    <div class="col-lg-7">
                        <input type="text" v-model="text_text" class="form-control input-lg"  placeholder="请输入关系" id="message3">
                    </div>

                    <div class="col-lg-7">
                        <a class="button"  @click="add()" style="height: .2614rem;width:3.7059rem">添加</a>
                    </div>
					</div>
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
    <!--===================================================-->
    <!-- END OF CONTAINER -->
    
    <div class="col-lg-6" style="position:absolute;top:1.2418rem;left:5.2941rem;height: 2.9412rem;width: 3.9216rem;" id="guanxi">

    </div>
    <form id="app-cover" style="position: absolute;left:7.5rem;top:-0.25rem;width:1.5625rem;">
        <div id="select-box" >
          <input type="checkbox" id="options-view-button">
          <div id="select-button" style="height: .225rem;">
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
</div>
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
        this.map();
    },
    data: function() {
      return {
        serverResponse: 'resp',
        verson:1
      }
  },
    methods:{
        search() {
        axios.post('http://127.0.0.1:5000/get_relation',{"name":this.page,"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                document.getElementById("entity").textContent = json;
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        add(){
            $("#message1").val('');
            $("#message3").val('');
            $("#message2").val('');
            axios.post('http://127.0.0.1:5000/get_add',{"name":this.main_text,"name_obj": this.obj_text,"name_text":this.text_text,"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                this.map();
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        relax(){
            axios.post('http://127.0.0.1:5000/get_relax',{"name":this.relax1,"name_obj": this.relax_obj,"name_text":this.relax_text,"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                document.getElementById("entity_guan").textContent = json;
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
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

<style type="text/css">
@import '../css/bootstrap.min.css';
@import '../css/nifty.min.css';
@import '../css/nifty-demo-icons.min.css';
@import '../css/nifty-demo.min.css';
@import '../css/pace.min.css';
@import '../css/wiki.css';
@import '../css/font-awesome.min.css';
@import '../css/select.css';


 #body {
        font-family: 'Bookman Old Style', serif;
        font-size: 16px;
      }
      body{overflow-y: hidden;overflow-x: hidden;}

@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.wrapper {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button {
    padding: 0.45em 2em;
    text-align: center;
    text-decoration: none;
    color:  #2194E0;
    border: .0131rem solid  #2194E0;
    font-size: .1046rem;
    display: inline-block;
    border-radius: 0.3em;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
    &:before {
        content: "";
        background-color: rgba(255,255,255,0.5);
        height: 100%;
        width: 3em;
        display: block;
        position: absolute;
        top: 0;
        left: -4.5em;
        transform: skewX(-45deg) translateX(0);
        transition: none;
    }
    &:hover {
        background-color:  #2194E0;
        color: #fff;
        border-bottom: .0261rem solid darken( #2194E0, 10%);
        &:before {
        transform: skewX(-45deg) translateX(13.5em);
        transition: all 0.5s ease-in-out;
        }
    }
}
  </style>
  