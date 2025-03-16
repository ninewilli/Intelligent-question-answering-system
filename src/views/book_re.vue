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
                        
                        <div class="row" style="position:absolute;width: 500px;height: 300px;top:-700px;left:1000px" id="guanxi">
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

        <div id="app" style="position: absolute;top:100px;left:300px">
  <v-app id="inspire">
    <div id="input-usage">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="dropzone" id="dropzone" ref="dropzone" ondrop="dropHandler(event)" ondragover="dragOverHandler(event)">
              <div class="text-container">
                <span @click="clickHandler">{{ text }}</span>
                <input id="inp"  ref="fileInput" v-show="false" type="file"/>
              </div>    
            </div>
          </v-flex>
          <v-flex xs12>
            <v-layout row>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <button @click="" class="button">Clear</button>
                <button small color="primary" @click="onSubmit" class="button">Upload</button>
              </v-flex>
            </v-layout>
          </v-flex>
          <div></div>
          <v-flex xs12 style="text-align: center;">
            <span>{{ files.length }} files</span>
            <span>{{ message }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</div>
<h1 style="position: absolute;left:270px;top:500px;">可以添加wps，ofd，word，pdf后缀文件</h1>
<div id="main" style="position:absolute;width: 500px; height: 300px;top:400px;left:1000px;"></div>
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
            this.initchart_bar();
            this.map();
            const events = ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
    events.forEach( function( evt ) {
      this.$refs.dropzone.addEventListener(evt, function(e){ 
        e.preventDefault();
        e.stopPropagation();
      }.bind(this), false);
    }.bind(this));
    
    this.$refs.dropzone.addEventListener('drop', function(e){
      for( let i = 0; i < e.dataTransfer.files.length; i++ ){
        this.files.push( e.dataTransfer.files[i] );
      }
    }.bind(this));
        },
        data: () => ({
    text: 'Drag and drop images files to upload, or click to open the file selector',
    files: [],
    message: '',
        verson:1,
        data_set:[0,0,0,0,0,0,0]
  }),
        methods:{
          initchart_bar() {
        var myChart = echarts.init(document.getElementById('main'), 'macarons'); 
		// dark, macarons, infographic, green, blue, roma, shine, sakura, macarons2, helianthus, default
        myChart.setOption({

    legend: {
        orient: 'horizontal', // 'vertical'
        x: 'right', // 'center' | 'left' | {number},
        y: 'top', // 'center' | 'bottom' | {number}
        backgroundColor: '#eee',
        borderColor: 'rgba(178,34,34,0.8)',
        borderWidth: 4,
        padding: 10,    // [5, 10, 15, 20]
        itemGap: 20,
        textStyle: {color: 'red'},
        selected: {
            'Precipitation' : false
        },
        data: [
            {
                name:'Evaporation',
                icon : 'image://http://www.webcodepro.net/demos/echarts2/asset/ico/favicon.png',
                textStyle:{fontWeight:'bold', color:'green'}
            },
            'Precipitation','Highest Temperature','Lowest Temperature'
        ]
    },
    xAxis :{
        data : ['专业名词','地点','人物','名词缩写','时间','其他','事件']
    },
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 个'
            }
        },
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 个'
            },
            splitLine : {show : false}
        }
    ],
    series : [
        {
            name:'nums',
            type:'bar',
            data:this.data_set
        },
        {
            name:'The num',
            type:'line',
            yAxisIndex: 1,
            data:this.data_set
        },
        /*{
            name:'Lowest Temperature',
            type:'line',
            yAxisIndex: 1,
            data:[9, 9, 12, 9, 10, 10, 8]
        },*/
        {
            name:'Precipitation',
            type:'bar',
            data:this.data_set
        }
    ]
});
// 动态添加默认不显示的数据  // Need to fix this
    },
            clickHandler() {
      this.$refs.fileInput.click()
    },
    async onSubmit() {
      const formData = new FormData();
      const fileI = document.querySelector('#inp');
      let fi = fileI.files[0]


      formData.append("file", fi);
			var config = { 
				headers: {
					'Content-Type': 'multipart/form-data',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST'
				}
			}

      try {
        await axios.post("http://127.0.0.1:5000/uploads", formData, config)
          .then(res =>{
            this.message = "accept"

          })
          axios.post('http://127.0.0.1:5000/get_dataset',{"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                this.data_set = json;
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
      } catch (err) {
        this.message = err
      }

    },
            map_s(){
                axios.post('http://127.0.0.1:5000/get_dataset',{"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                this.data_set = json;
                this.initchart_bar();
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
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
          .outer-container {
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 4px;
}

.dropzone {
  border-style: dashed;
  border-width: 4px;
  border-color: #eeeeee;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #9e9e9e;
}
.dropzone:hover {
  border-color: #bbdefb;
  color: #424242;
}
.text-container {
  width: 60%;
}
a:link, a:visited {
	color: #4682b4;
}

a:hover {
	color: #4169e1;
}

#main	{
	width: 1000px;
	height: 800px;
	border: 1px solid #ccc;
	padding: 10px;
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