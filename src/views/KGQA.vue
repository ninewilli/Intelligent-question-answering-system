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
                    
					<h4 class="text-main pad-btm bord-btm" style="position:absolute;">问答系统</h4>
                    
                    <div class="tabs">
                        <!-- 激活的书签设置 -->
                         <!-- 通常我们只有一个激活的书签 -->
                          <!-- 根据你的书签数量来设置width的大小 -->
                        <div id="left_tab" class="tabs__tab--active" style="width: 13%" onclick="change_tabs(this)">
                            <!-- 书签内容 -->
                            <div class="container">
                                <div class="container__trigger">
                                    <!-- 书签内容 -->
                                    <div>左</div>
                                    
                                     <!-- 弹窗内容 -->
                                    <div class="container__content">
                                        通过问答得到相关答案
                                       </div>
                                  </div>
                             </div>
                        </div>
                        <h4 style="position:absolute;left:1260px;">问答系统</h4>
                        <h4 style="position:absolute;left:1680px;">相关百度知识及知识图谱</h4>
                           <!-- 未激活的书签设置 -->
                        <div id="mid_tab" class="tabs__tab--inactive" style="width: 13%" onclick="change_tabs(this)">
                               <!-- 书签内容 -->
                               <div class="container">
                                  <div class="container__trigger">
                                <!-- 书签内容 -->
                                     <div>中</div>
                                      <!-- 弹窗内容 -->
                                    <div class="container__content">
                                        通过相关问答结果搜索得到百度知识同时搜索知识图谱
                                       </div>
                                </div>
                            </div>
                        </div>
                        <!-- 未激活的书签设置 -->
                        <div id="right_tab" class="tabs__tab--inactive" style="width: 13%" onclick="change_tabs(this)">
                               <!-- 书签内容 -->
                               <div class="container">
                                  <div class="container__trigger">
                                <!-- 书签内容 -->
                                     <div>右</div>
                                    <div class="container__content">
                                        右边栏
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
              <div class="row">
                
                <div class="col-lg-8">
                    <div class="input-group">
                        
                        
                    </div>
                    
                    </div>
                    </div>
                    <div id="particles-js"></div>
                    <div class="row" style="height: 40px;"></div>

                    <div id="ts" style="position:absolute;left:600px;top:0px;">
                        <nav id="mainnav-container" style="left:600px;top:58px;">
                            <div id="mainnav" style="height:1000px;width:350px">
                                
                                <!--Menu-->
                                <!--================================-->
                                <div id="mainnav-menu-wrap">
                                    <div class="nano" >
                                        <div class="nano-content">
                    
                                            <ul id="mainnav-menu" class="list-group">
                                    
                                                <li>
                    
                                                </li>
                                                <li>
                    
                                    
                                                    
                                                </li>
                    
                                                <!--Category name-->
                    
                                    
                                                <!--Menu list item-->
                                                
                                    
                                                <!--Menu list item-->
                                               <li>
                    
                                                    
                                                </li>
                                    
                                                <!--Category name-->
                    
                                    
                                                <!--Menu list item-->
                                                <li >
                    
                                                    
                                                </li>
                                                <li >
                    
                                    
                                                    
                                                </li>
                                            </ul>
                    
                    
                                            
                                        </div>
                                    </div>
                                </div>
                                <!--================================-->
                                <!--End menu-->
                    
                            </div>
                            <div class="col-lg-8" id = "border">
                                <div class="col-lg-12">
                                    <a id = "recom" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom1" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom2" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom3" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom4" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom5" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                                <div class="col-lg-8"></div>
                                <div class="col-lg-12">
                                    <a id = "recom6" href="" style="text-decoration: underline;font-size:.09rem;color:rgb(9, 95, 62)"> </a>
                                </div>
                            </div>
                            <h4 style="position: absolute;top:330px;left:120px;">提取知识图谱</h4>
                            <div class="roww" style="position:absolute;width: 350px;height: 280px;top:360px;left:10px;" id="guanxi1">

                            </div>
                        </nav>
                        
                    </div>
                    <div id="speak">
                        
                        <div class="lite-chatmaster"><div class="lite-chatbox"></div><div class="lite-chattools"><div class="lite-chatbox-tool" id="emojiMart" style="display:none"></div><div id="toolMusk" style="display:none"></div></div></div></div>
                        
                    </div>
                    <div class="lite-chatinput"><input type="text" id="search" v-model="page" class="form-control input-lg"  placeholder="请输入你的问题(例如1+1等于几)" style="top: 750px;left:10px;height: 28%;width: 63%;margin: 0;padding: 0;overflow: hidden;position:absolute;"><button class="send" @click="search()" style="top:750px;right:555px;height: 28%;width: 15%;margin: 0;padding: 0;overflow: hidden;position:absolute;display:block;">提问</button></div>

                    
                    <div class="row" style="display:none;">
                        
                        <h4 style="position:absolute;left:580px;top: 120px;">相关百科知识</h4>
                        <h4 style="position:absolute;left:1180px;top: 120px;">相关本地知识图谱</h4>
                        <h4 style="position:absolute;left:1180px;top: 360px;">相关提取知识图谱</h4>

                        <div id="border2" style="position:absolute;top:150px;height:10%;width:660px;left:300px">
                            <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:0px;">
                                    <div class="container__content_1" id="fill_1">
                                        ...
                                       </div>
                                </div>
                                <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:108px;">
                                    <div class="container__content_2" id="pulse_1">
                                        ...
                                       </div>
                                </div>
                                <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:216px;">
                                    <div class="container__content_3" id="raise_1">
                                        ...
                                       </div>
                                </div>
                                <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:324px;">
                                    <div class="container__content_4" id="up_1">
                                        ...
                                       </div>
                                </div>
                                <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:432px;">
                                    <div class="container__content_5" id="slide_1">
                                        ...
                                       </div>
                                </div>
                                <div class="container__trigger" style="position:absolute;height:50px;width:100px;top:40px;left:540px;">
                                    <div class="container__content_6" id="offset_1">
                                        ...
                                       </div>
                                </div>
                            <div id="baidu" style="font-family: 'Bookman Old Style', serif;"></div>
                            <div id="shujv" style = "font-family: 'Bookman Old Style', serif;"></div>
                        </div>
                        <div class="rows" style="position:absolute;width: 350px;height: 280px;top:410px;left:1050px;" id="guanxi2">
                                

                        
                        </div>
                        <div class="col-lg-6" style="position:absolute;top:150px;left:1050px;height: 200px;width: 350px;" id="guanxi">


                    </div>
					<div class="buttons" style="position:absolute;top:175px;left:300px">
                        <button class="fill" id="fill" onclick=search_1()>...</button>
                        <button class="pulse" id="pulse" onclick=search_2()>...</button>
                        <button class="raise" id="raise" onclick=search_3()>...</button>
                        <button class="up" id="up" onclick=search_4()>...</button>
                        <button class="slide" id="slide" onclick=search_5()>...</button>
                        <button class="offset" id="offset" onclick=search_6()>...</button>
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


<div class="container1" style="position: absolute;top:100px;left:750px;height:100px;width:100px;">
<a class="btn btn-2" style="position: absolute;top:0px;left:330px;height:30px;width:105px" @click="delete_f()">删除当前对话</a>
</div>
<form id="app-cover" style="position: absolute;left:-600px;top:-40px;width:250px;">
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
      this.begin_m();//需要触发的函数
      this.map_s();
      this.map();
      this.map1();
      this.map2();
      this.question_ans();
      if (location.href.indexOf("#reloaded") == -1) {
        location.href = location.href + "#reloaded";
        location.reload();
    }
    },
    data: function() {
      return {
        serverResponse: 'resp',
        verson:1,
        nums:0
      }
  },
    methods:{
        mounted() {
            console.log("页面加载完成");
        },
        begin_m(){
        const htmls = [{
        messageType: 'raw',
        headIcon: '../assets/A.png',
        name: 'robot',
        position: 'right',
        html: '请从对话框输入选择问题需要ABCD序号<br\/><br\/><style><\/style><button class="fa fa-thumbs-o-up" onclick="chick_down_w()" style="width:50%;height:10px;border:none;" id="zhan"><\/button><button class="fa fa-thumbs-o-down" onclick="chick_up_w()" style="width:50%;height:10px;border:none;left:200px" id="chai"><\/button>'
        },{
        messageType: 'raw',
        htitleType: 'owner',
        headIcon: '../assets/B.png',
        name: 'user',
        position: 'right',
        html: '切换输入框模式, 快来试试吧:<br\/><br\/><style>.theme-switch{background: none;border: solid 1px;border-radius: 2em;font: inherit;cursor: pointer;color: #fff;}<\/style><button class="theme-switch" style="width:130px;height:50px;">切换配色 <\/button>',
        },];
    
      beforeRenderingHTML(htmls, ".lite-chatbox");
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
        map2(){
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
                var myChart = echarts.init(document.getElementById("guanxi2"));
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
         map1(){
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
                var myChart = echarts.init(document.getElementById("guanxi1"));
                myChart.showLoading();
                
                axios.post('http://127.0.0.1:5000/get_json',{"verson":7})
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
        search() {
            var htmls = []

htmls.push({
    messageType: 'raw',
    htitleType: 'owner',
    headIcon: '../assets/B.png',
    name: 'user',
    position: 'right',
    html: this.page  + '<br\/><br\/><style><\/style><button class="fa fa-thumbs-o-up" onclick="chick_down('+ this.nums +')" style="width:50%;height:10px;border:none;" id="zhan'+ this.nums +'"><\/button><button class="fa fa-thumbs-o-down" onclick="chick_up('+ this.nums +')" style="width:50%;height:10px;border:none;left:200px" id="chai'+ this.nums +'"><\/button>'
    })
    beforeRenderingHTML(htmls, '.lite-chatbox');
        axios.post('http://127.0.0.1:5000/KGQA_answer',{"name":this.page,"verson":this.verson})
            .then(res=>{
                window.onresize = function () {
            
            myChart.resize();
        }
        $.ajaxSetup({ async: false });
        var myChart = echarts.init(document.getElementById("guanxi1"));
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
                    symbolSize: 45,
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
                                fontSize: 12
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
                var json = res.data;  //返回数据显示到text

                    htmls.push({
                    messageType: 'raw',
                    headIcon: '../assets/A.png',
                    name: 'robot',
                    position: 'left',
                    html: json[4],
                    })
                    beforeRenderingHTML(htmls, '.lite-chatbox');
                document.getElementById('fill').textContent = json[2];
                document.getElementById('fill_1').textContent = json[3];
                if(json[6].indexOf(0)){
                    document.getElementById('pulse').textContent = json[6][0];
                    document.getElementById('pulse_1').textContent = json[6][1];
                }
                if(json[6].indexOf(2)){
                    document.getElementById('raise').textContent = json[6][2];
                    document.getElementById('raise_1').textContent = json[6][3];
                }
                if(json[6].indexOf(4)){
                    document.getElementById('up').textContent = json[6][4];
                    document.getElementById('up_1').textContent = json[6][5];
                }
                if(json[6].indexOf(6)){
                    document.getElementById('slide').textContent = json[6][6];
                    document.getElementById('slide_1').textContent = json[6][7];
                }
                if(json[6].indexOf(8)){
                    document.getElementById('offset').textContent = json[6][8];
                    document.getElementById('offset_1').textContent = json[6][9];
                }
                


                document.getElementById("recom").textContent = json[5][0];
                document.getElementById("recom").href = json[5][1];
                document.getElementById("recom1").textContent = json[5][2];
                document.getElementById("recom1").href = json[5][3];
                document.getElementById("recom2").textContent = json[5][4];
                document.getElementById("recom2").href = json[5][5];
                document.getElementById("recom3").textContent = json[5][6];
                document.getElementById("recom3").href = json[5][7];
                document.getElementById("recom4").textContent = json[5][8];
                document.getElementById("recom4").href = json[5][9];
                document.getElementById("recom5").textContent = json[5][8];
                document.getElementById("recom5").href = json[5][9];
                document.getElementById("recom6").textContent = json[5][10];
                document.getElementById("recom6").href = json[5][11];
                option.series[0].nodes = json[0].data && json[0].data.map(function (node, idx) {
                    node.id = idx;
                    return node;
                });
                option.series[0].links = json[0].links;
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
            this.question_ans();
        },
        submit2(){
            this.verson = 2;
            this.map();
            this.question_ans();
        },
        submit3(){
            this.verson = 3;
            this.map();
            this.question_ans();
        },
        submit4(){
            this.verson = 4;
            this.map();
            this.question_ans();
        },
        submit5(){
            this.verson = 5;
            this.map();
            this.question_ans();
        },
        submit6(){
            this.verson = 6;
            this.map();
            this.question_ans();
        },
        question_ans(){
            this.nums = 0;
        var f = document.querySelector(".lite-chatbox");
        var childs = f.childNodes; 
        for(var i = childs.length - 1; i >= 0; i--) { 
            f.removeChild(childs[i]); 
        } 
        const htmls = [{
        messageType: 'raw',
        headIcon: '../assets/A.png',
        name: 'robot',
        position: 'right',
        html: '请从对话框输入选择问题需要ABCD序号<br\/><br\/><style><\/style><button class="fa fa-thumbs-o-up" onclick="chick_down_w()" style="width:50%;height:10px;border:none;" id="zhan"><\/button><button class="fa fa-thumbs-o-down" onclick="chick_up_w()" style="width:50%;height:10px;border:none;left:200px" id="chai"><\/button>'
        },{
        messageType: 'raw',
        htitleType: 'owner',
        headIcon: '../assets/B.png',
        name: 'user',
        position: 'right',
        html: '切换输入框模式, 快来试试吧:<br\/><br\/><style>.theme-switch{background: none;border: solid 1px;border-radius: 2em;font: inherit;cursor: pointer;color: #fff;}<\/style><button class="theme-switch" style="width:130px;height:50px;">切换配色 <\/button>',
        },];
            beforeRenderingHTML(htmls, '.lite-chatbox');
            axios.post('http://127.0.0.1:5000/submit_archive',{"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                let len = json[0].length;
                for (let i = 0; i < len; i++) {
                    const htmls = [{
                        messageType: 'raw',
                        htitleType: 'owner',
                        headIcon: 'static/images/B.png',
                        name: 'user',
                        position: 'right',
                        html: json[0][i] + '<br\/><br\/><style><\/style><button class="fa fa-thumbs-o-up" onclick="chick_down('+ this.nums +')" style="width:50%;height:10px;border:none;" id="zhan'+ this.nums +'"><\/button><button class="fa fa-thumbs-o-down" onclick="chick_up('+ this.nums +')" style="width:50%;height:10px;border:none;left:200px" id="chai'+ this.nums +'"><\/button>',
                        },{
                        messageType: 'raw',
                        headIcon: 'static/images/A.png',
                        name: 'robot',
                        position: 'left',
                        html: json[1][i]
                        },];
                        this.nums += 1;
                        beforeRenderingHTML(htmls, '.lite-chatbox');
                  }
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })


        },
        delete_f(){
            axios.post('http://127.0.0.1:5000/delete_file',{"verson":this.verson})
            .then(res=>{

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
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
#body {
            font-family: 'Bookman Old Style', serif;
            font-size: 16px;
          }
#speak{top:100px;height: 1700px;width: 62.7%;margin: 0;padding: 0;overflow: hidden;position:absolute;} 
        .lite-chatmaster {height: 40%;width: 100%;}
        #border2{position: absolute;right: 670px;top: 180px;width: 556px;height: 70%;background-color: rgba(206, 206, 206, 0.3);margin: 10px auto;border: 1px solid #aaaaaa;border-radius: 16px;}
        ::-webkit-scrollbar {width: 3px;height: 1px;}
        .button {
            background: #2B2D2F;
            height: 80px;
            width: 200px;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            right: 0;
            margin: 0 auto;
            cursor: pointer;
            border-radius: 4px;
          }
          
          .text {
            font: bold 1.25rem/1 poppins;
            color: #71DFBE;
            position: absolute;
            top: 50%;
            transform: translateY(-52%);
            left: 0;
            right: 0;
          }
          
          .progress-bar {
            position: absolute;
            height: 10px;
            width: 0;
            right: 0;
            top: 50%;
            left: 50%;
            border-radius: 200px;
            transform: translateY(-50%) translateX(-50%);
            background: lighten(#2B2D2F, 15%);
          }
          
          svg {
            width: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            left: 50%;
            right: 0;
          }
          
          .check {
            fill: none;
            stroke: #FFFFFF;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          
        body {
            font-family: 'Bookman Old Style', serif;
          }
          body{overflow-y: hidden;overflow-x: hidden;}
        .tab-menu ul{
            padding: 0;
            margin: 0;
        }
        .tab-menu ul li{
            display: inline-block;
            width: 200px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
        }
        .tab-menu ul li.active{
            background: #749dcf;
        }
        .tab-con div{
            width: 600px;
            height: 300px;
            background: #F2F2F2;
            border: 1px solid #749dcf;;
            display: none;
            padding: 15px;
            
        }
        .tab-con div:first-child{
            display: block;
        }
        /* 标签栏的样式 */
        .tabs {
            /* 标签栏的主体内容布局设置 */
            padding: 5px 0px 5px 0px;
            align-items: center;
            display: flex;
            justify-content: center;
            text-align: right;
            position: absolute;
            top: 63px;
            left: -450px;
        }
        /* 激活的标签栏的设置 */
        .tabs__tab--active {
            /* 边框制造半透明阴影 */
            border-left: 1px solid;
            border-right: 5px solid;
            border-top: 1px solid;
            border-color: rgba(0, 0, 0, 0.2);
            /* 隐藏底部边框 */
            border-bottom-color: transparent;
            /* 圆角 */
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        /* 标签栏的主体内容解释弹窗功能设计 */
        /* 标签栏的主体内容样式 */
        .container {
            /* 设置主体内容的位置 */
            position: relative;
            padding: 5px 0px 5px 0px;
            }
        #show_dis {
            display: block;
        }
        #show_mis {
            display: none;
        }
        .container__trigger:hover .container__content {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_1 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_2 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_3 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_4 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_5 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        .container__trigger:hover .container__content_6 {
            /* 鼠标位于标签主体上时显示弹窗 */
            display: block;
        }
        /* 标签栏的主体内容解释弹窗样式 */
        .style {
            display: none;
        }
        .show {
            display: block;
        }
        .container1 {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex-wrap: wrap;
            width: 80vw;
            margin: 0 auto;
            min-height: 100vh;
          }
          .btn {
            flex: 1 1 auto;
            margin: 1px;
            padding: 5px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
           /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
           }
          
          /* Demo Stuff End -> */
          
          /* <- Magic Stuff Start */
          
          .btn:hover {
            background-position: right center; /* change the direction of the change here */
          }    
          .btn-2 {
            background-image: linear-gradient(to right, #76cfff 0%, #a6e8ee 51%, #35ed88 100%);
          }   

        .container__content {
            padding: 5px 0px 5px 0px;
            text-align: center;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: 0px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:39%;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_1 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: 0px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_2 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: -108px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_3 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: -216px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_4 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: -324px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_5 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: -432px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        .container__content_6 {
            padding: 5px 0px 5px 0px;
            text-align: left;
            /* 弹窗的边框 */
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-top: 0px;
            margin-top: -1px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            /* 弹窗默认隐藏 */
            display: none;

            /* 使用绝对位置来显示弹窗 */
            left: -540px;
            position: absolute;
            top: 100%;

            /* 使弹窗宽度与主体宽度一致（美观） */
            width:660px;
            height: 460px;

            /* 使弹窗位于元素上方，不被遮挡 */
            background: #ffffff8c;
            z-index: 9999;

        }
        #border{position:absolute;top:30px;right:-120px;width: 340px;height: 300px;background-color: rgba(124, 108, 241, 0.3);margin: 10px auto;border: 1.008px solid #aaaaaa;border-radius: 16px;}
 
</style>