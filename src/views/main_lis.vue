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
                <div id="particles-js"></div>
                <!--Page content-->
                <!--===================================================-->
                <div id="page-content" style="position:absolute;top:40px;">
                    
					<h4 class="text-main pad-btm bord-btm" style="position:absolute;">课程推荐系统</h4>
                    <h4 class="text-main pad-btm bord-btm"></h4>
                    <div class="tabs" style="position:absolute;top:20px;left:-670px">
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
                                    <div class="container__content" style="left:210px;top:50px">
                                        对相关课程进行录音
                                       </div>
                                  </div>
                             </div>
                        </div>
                        <h4 style="position:absolute;left:1260px;">进行录音</h4>
                        <h4 style="position:absolute;left:1720px;">分析相关课程</h4>
                           <!-- 未激活的书签设置 -->
                        <div id="mid_tab" class="tabs__tab--inactive" style="width: 13%" onclick="change_tabs(this)">
                               <!-- 书签内容 -->
                               <div class="container">
                                  <div class="container__trigger">
                                <!-- 书签内容 -->
                                     <div>中</div>
                                      <!-- 弹窗内容 -->
                                    <div class="container__content" style="left:210px;top:50px">
                                        通过录音得到相关课程
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
                
            <div class = "hide_d">
              <div class="row1">
                <div class="col-lg-8">
                    <div class="input-group">
                        
                    </div>
                    <div class="col-lg-7"><h4 class="text-main pad-btm bord-btm">接受电脑内声音</h4></div>
                    <div class="col-lg-7">
                        <a class="btn" id="recorder" @click="speechRecorder()">开始录音</a> 
                        <a class="btn" id="stop_recorder" @click="stopRecorder()">停止录音</a> 
                    </div>
                    <div class="col-lg-7"><h4 class="text-main pad-btm bord-btm">接受电脑外声音</h4></div>
                    <div class="col-lg-7">
                        <a class="btn" id="recorder" @click="speechRecorder_out()">开始录音</a> 
                        <a class="btn" id="stop_recorder" @click="stopRecorder_out()">停止录音</a> 
                    </div>
                    <div class="col-lg-7"><h4 class="text-main pad-btm bord-btm">识别语音</h4></div>
                    <div class="col-lg-7">
                        <a class="btn" @click="recognizespeech()">进行识别</a> 
                    </div>

					<div class="col-lg-8" id = "border">
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
					</div>
                    </div>

                    <div class="row" >
                    


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

        <!--===================================================-->
    </div>
    <!--===================================================-->
    <!-- END OF CONTAINER -->

<div id="tts">
    <div id="main_pie" style="position:absolute;width: 500px; height: 300px;top:400px;left:800px;"></div>

    <div id="main" style="position:absolute;width: 500px; height: 300px;top:400px;left:200px;"></div>
    <div>
    <div id="chart" style="position:absolute;width: 500px; height: 400px;top:100px;left:200px;"></div>
  </div>
    <div class="container" style="position:absolute;">
        <table>
            <thead>
                <tr>
                    <th>{{ dataname[0] }}</th>
                    <th>{{ dataname[1] }}</th>
                    <th>{{ dataname[2] }}</th>
                    <th>{{ dataname[3] }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ dataname[4] }}</td>
                    <td>{{ dataname[5] }}</td>
                    <td>{{ dataname[6] }}</td>
                    <td>{{ dataname[7] }}</td>
                </tr>
                <tr>
                    <td>{{ dataname[8] }}</td>
                    <td>{{ dataname[9] }}</td>
                    <td>{{ dataname[10] }}</td>
                    <td>{{ dataname[11] }}</td>
                </tr>
                <tr>
                    <td>{{ dataname[12] }}</td>
                    <td>{{ dataname[13] }}</td>
                    <td>{{ dataname[14] }}</td>
                    <td>{{ dataname[15] }}</td>
                </tr>
                <tr>
                    <td>{{ dataname[16] }}</td>
                    <td>{{ dataname[17] }}</td>
                    <td>{{ dataname[18] }}</td>
                    <td>{{ dataname[19] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

    <form id="app-cover" style="position: absolute;left:-600px;top:-40px;width:250px;">
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

<div id="ardess" style="position:absolute;left:75%;top:18%;height:73%;width:22%;"></div>


<a id = "recomw"  target="blank" href="" style="width:20%;text-decoration:underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:20%;left:76%"> </a>

<a id = "recomw1"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:28%;left:76%"> </a>

<a id = "recomw2" target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:36%;left:76%"> </a>


<a id = "recomw3"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:44%;left:76%"> </a>

<a id = "recomw4"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:52%;left:76%"> </a>

<a id = "recomw5"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:60%;left:76%"> </a>

<a id = "recomw6"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:68%;left:76%"> </a>

<a id = "recomw7"  target="blank" href="" style="width:20%;text-decoration: underline;font-size:16px;color:rgb(29, 148, 252);position: absolute;top:76%;left:76%"> </a>

</body>
</template>

<script>
import axios from 'axios';
import * as echarts from "echarts";
import "echarts-wordcloud";

export default {
    
    watch: {
    '$route' () {
      location.reload();
    }
  },
  created:function() {
    setInterval(this.recognizeSpeech, 15000);
  },
    mounted:function(){
        if (location.href.indexOf("#reloaded") == -1) {
            location.href = location.href + "#reloaded";
            location.reload();
        }
        this.map_s();
        this.initchart();
        this.initchart_bar();
        this.initchart_pie();
        this.charm();
        this.data_num();
        this.web_search();
    },
    data: function() {
        return {
      wordList: [
        {
          name: "",
          value: 15000,
        },
        {
          name: "",
          value: 10081,
        },
        {
          name: "",
          value: 9386,
        },
        {
          name: "",
          value: 7500,
        },
        {
          name: "",
          value: 7500,
        },
        {
          name: "",
          value: 6500,
        },
        {
          name: "",
          value: 6500,
        },
        {
          name: "",
          value: 6000,
        },
        {
          name: "",
          value: 4500,
        },
        {
          name: "",
          value: 3800,
        },
        {
          name: "",
          value: 3000,
        },
        {
          name: "",
          value: 2500,
        },
        {
          name: "",
          value: 2300,
        },
        {
          name: "",
          value: 2000,
        },
        {
          name: "",
          value: 1900,
        },
        {
          name: "",
          value: 1800,
        },
        {
          name: "",
          value: 1700,
        },
        {
          name: "",
          value: 1600,
        },
        {
          name: "",
          value: 1500,
        },
        {
          name: "",
          value: 1200,
        },
      ],
        verson:1,
        data_set:[0,0,0,0,0,0,0],
        dataname:["","","","","","","","","","","","","","","","","","","","","","","","",""]
    };
  },
    methods:{
        initchart_pie() {
		var myChart = echarts.init(document.getElementById('main_pie'));

        // Specify configurations and data graphs 
        var option = {

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'Access Sources',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:this.data_set[0], name:'专业名词'},
                {value:this.data_set[1], name:'地点'},
                {value:this.data_set[2], name:'人物'},
                {value:this.data_set[3], name:'名词缩写'},
                {value:this.data_set[4], name:'时间'},
                {value:this.data_set[5], name:'其他'},
                {value:this.data_set[6], name:'事件'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

		// Use just the specified configurations and data charts. 
		myChart.setOption(option);
// 动态添加默认不显示的数据  // Need to fix this
    },
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
            'Precipitation','Highest','Lowest'
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
            name:'Evaporation',
            type:'bar',
            data:this.data_set
        },
        {
            name:'Highest',
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
    data_num(){
        axios.post('http://127.0.0.1:5000/get_datanum',{"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                                
                for (var i = 0; i < json.length; i++) {
                    if(i >= 24){
                        break;
                    }
                    this.dataname[i] = json[i]['name']
                }

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
    },
    charm(){
        axios.post('http://127.0.0.1:5000/get_dataset',{"verson":this.verson})
            .then(res=>{
                this,this.data_num();
                var json = res.data; 
                this.data_set = json;
                this.initchart_bar();
                this.initchart_pie();
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
    },
        initchart() {
      let myChart = echarts.init(document.querySelector("#chart"));
      myChart.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              color: function () {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              },
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.wordList,
          },
        ],
      });
    },
        speechRecorder(){
            $(".text-white").css('display','none');
            $("#ASR-Reslut").css('display','none');
            layer.msg('录音中……', {
                icon: 16,
                shade: 0.01
            });
            setTimeout(function(){
                layer.closeAll('loading');
            }, 1000);

        
        axios.post('http://127.0.0.1:5000/speech',{"verson":1})
            .then(res=>{

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        stopRecorder(){

            layer.msg('正在停止……!');
            setTimeout(function(){
                layer.closeAll('loading');
            }, 1000);
            layer.msg('录音结束!');


            axios.post('http://127.0.0.1:5000/stopSpeech',{"verson":1})
            .then(res=>{

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        speechRecorder_out(){

            $(".text-white").css('display','none');
            $("#ASR-Reslut").css('display','none');
            layer.msg('录音中……', {
                icon: 16,
                shade: 0.01
            });
            setTimeout(function(){
                layer.closeAll('loading');
            }, 1000);

            axios.post('http://127.0.0.1:5000/speech_out"',{"verson":this.verson})
            .then(res=>{

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        stopRecorder_out(){
            layer.msg('正在停止……!');
            setTimeout(function(){
                layer.closeAll('loading');
            }, 1000);
            layer.msg('录音结束!');

            

            axios.post('http://127.0.0.1:5000/stopSpeech_out',{"verson":this.verson})
            .then(res=>{

            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        recognizespeech(){
            axios.post('http://127.0.0.1:5000/get_relax',{"verson":this.verson})
            .then(res=>{
                var json = res.data; 
                document.getElementById("entity_guan").textContent = json;
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        recognizeSpeech(){

            axios.post('http://127.0.0.1:5000/recognize',{"verson":1})
            .then(res=>{
                var json = res.data; 
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
            })
            .catch(err=>{
              this.text = 'error' + err;
              alert(this.text)
            })
        },
        map_s(){
            $('#tts').removeClass('show').addClass('style');
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
        web_search() {
		        axios.post('http://10.121.7.226:5000/recommend_kehu',{})
		            .then(res=>{
		                var json = res.data;  //返回数据显示到text
                        console.log(json)
		                var jsonLength=0;
		            for (var i in json) {
		                jsonLength++;
		            }
		            document.getElementById("recomw").textContent = json[0];
		            document.getElementById("recomw").href = json[1];
		            document.getElementById("recomw1").textContent = json[2];
		            document.getElementById("recomw1").href = json[3];
		            document.getElementById("recomw2").textContent = json[4];
		            document.getElementById("recomw2").href = json[5];
		            document.getElementById("recomw3").textContent = json[6];
		            document.getElementById("recomw3").href = json[7];
		            document.getElementById("recomw4").textContent = json[8];
		            document.getElementById("recomw4").href = json[9];
		            document.getElementById("recomw5").textContent = json[8];
		            document.getElementById("recomw5").href = json[9];
		            document.getElementById("recomw6").textContent = json[10];
		            document.getElementById("recomw6").href = json[11];
					document.getElementById("recomw7").textContent = json[12];
					document.getElementById("recomw7").href = json[13];
						
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
body {
    font-family: 'Bookman Old Style', serif;
    font-size: 16px;
  }
body{overflow-y: hidden;overflow-x: hidden;}
        #border1{width: 5.25rem;height: 1.25rem;background-color: #f6f6f6;margin: .0625rem auto;border: .0063rem solid #aaaaaa;border-radius: .1rem;}
        #border{width: 5.35rem;height: 1.1625rem;background-color: #f6f6f6;margin: .0625rem auto;border: .0063rem solid #aaaaaa;border-radius: .1rem;}
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

      .btn{
        margin: .0625rem 0;
        display: inline-block;
        width:1.25rem;
        height:.2813rem;
        background: linear-gradient(90deg,#2af598,#009efd);
        text-transform: uppercase;
        color:#fff;
        text-align: center;
        line-height: .2188rem;
        border-radius: .25rem;
        user-select: none;
        position: relative;
        overflow: hidden;
    }

    .btn:nth-child(2){
        background: linear-gradient(90deg,#a18cd1,#fbc2ed);
    }
    .container {
        position: absolute;
        top: 40%;
        left: 82%;
        transform: translate(-50%, -50%);
    }
    
    table {
        width: 5rem;
        overflow: hidden;
        box-shadow: 0 0 .125rem rgba(0,0,0,0.1);
        border:#234841;

    }
    
    th,
    td {
        padding: .0938rem;
        background-color: rgba(255,255,255,0.2);
        color: #234841;
        border-color: red;
        
    }
    
    th {
        text-align: left;
    }
    
    thead th {
            background-color: rgba(194, 198, 255, 0.2);
    }
    tr:hover {
            background-color: rgba(255, 255, 255, 0.5);
        }
    tbody td {
            position: relative;
            &:hover {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -62.4937rem;
                    bottom: -62.4937rem;
                    background-color: rgba(255,255,255,0.3);
                    z-index: -1;
                }
            }
        }
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
#main_pie	{
	width: 1000px;
	height: 800px;
}
#ardess{
	background-color: #fff;
	box-shadow: 2px 2px 2px 2px #a9a9a9;
}
</style>