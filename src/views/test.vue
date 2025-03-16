// 封装成组件
<template>
<div id="main_pie"></div>
</template>
<style>

a:link, a:visited {
	color: #4682b4;
}

a:hover {
	color: #4169e1;
}

#main_pie	{
	width: 1000px;
	height: 800px;
}
</style>
<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
// import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  data() {
  },
  mounted() {
    this.initchart_pie();
  },
  methods: {
    initchart_pie() {
		var myChart = echarts.init(document.getElementById('main'));

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
                {value:335, name:'Direct Interview'},
                {value:310, name:'E-Mail Marketing'},
                {value:274, name:'Advertising Alliance'},
                {value:235, name:'Video Ads'},
                {value:400, name:'Search Engine'}
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
  },
};
</script>


    <wordcloud />
