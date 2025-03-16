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
                <div id="particles-js"></div>
          <div class="row">
            
            <div class="col-lg-8" style="position:absolute;height:600px;width:1200px;top:100px">
            

                  <div class="wrapper">
                  <aside>
                    <section class="address" style="height: 600px;">
                      <img src="//i1284.photobucket.com/albums/a574/meecrobe/location_zps1795527f.jpg" alt="Location">
                      <h3>De Weterkerk</h3>
                      <p>Prinsengracht 281</p>
                      <button>view on maps</button>
                      <h3>个性签名</h3>
                      <input>
                      <h3>选择喜好</h3>
                      <select style="height:40px;width: 200px;">
                        <option>物理</option>
                        <option>化学</option>
                        <option>历史</option>
                    </select>
                    </section>
                    
                  </aside>
                </div>
                </div>
                </div>
                <div class="wrapper">
                    <aside>
                      <section class="address" style="position: absolute;top:5px;left:350px;height: 600px;width:880px">
                        <h3>相关知识图谱管理</h3>
                        <div class="container" style="position: absolute;left:-600px;top:480px">
                            <a data-animation="ripple"> <span style="font-weight: bold;">删除当前图谱</span></a>
                        </div>
                        <div class="container" style="position: absolute;left:-600px;top:300px">
                            <a data-animation="ripple"> <span style="font-weight: bold;">设为喜爱</span></a>
                        </div>
                        <div class="container" style="position: absolute;left:-600px;top:120px">
                            <a data-animation="ripple"> <span style="font-weight: bold;">下一个</span></a>
                        </div>
                        <div class="container" style="position: absolute;left:-600px;top:-60px">
                            <a data-animation="ripple"> <span style="font-weight: bold;">上一个</span></a>
                        </div>
                        <div class="container" style="position: absolute;left:-600px;top:-240px">
                            <a data-animation="ripple"> <span style="font-weight: bold;">进行整理</span></a>
                        </div>
                        <select style="height:50px;width: 230px;">
                            <option>first</option>
                            <option>second</option>
                            <option>third</option>
                        </select>
                      </section>
                      
                    </aside>
                  </div>
                
            </div>
            <!--===================================================-->
            <!--End page content-->


        </div>
        <!--===================================================-->
        <!--END CONTENT CONTAINER-->
        <div class="col-lg-6" style="position:absolute;top:1.2418rem;left:5.2941rem;height: 2.9412rem;width: 3.9216rem;" id="guanxi"></div>
        
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
        this.map();
    },
    data: function() {
      return {
        serverResponse: 'resp',
        verson:1
      }
  },
    methods:{
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
@import '../css/menu.css';
@import '../css/user.css';

    body {
        font-family: 'Bookman Old Style', serif;
        font-size:16px;
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
    background: linear-gradient(135deg, #708ae7 0%,#79f1fc 100%);
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