/*********************************************************************************************
* 左侧组件列表
*********************************************************************************************/
import * as echarts from "echarts";
// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

// 基础组件
export const foundation = [
    {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'icon-jurassic_paste_text',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            position: 'absolute',
            width: 200,
            height: 28,
            borderColor: '',
            borderRadius: 0,
            borderWidth: 0,
            rotate: 0,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
            opacity: 1,
        },
    },
    {
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: 'icon-tupian',
        style: {
            position: 'absolute',
            width: 100,
            height: 34,
            borderColor: '#67C23A',
            borderRadius: 10,
            borderWidth: 2,
            rotate: 0,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            textAlign: '',
            color: 'white',
            backgroundColor: '#67C23A',
            opacity: 1,
        },
    },
    {
        component: 'VPicture',
        label: '图片',
        icon: 'icon-ranqi',
        propValue: {
            // url: '/src/assets/image/03.jpg',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            position: 'absolute',
            width: 300,
            height: 200,
            borderColor: '',
            borderRadius: 0,
            borderWidth: 1,
            rotate: 0,
            opacity: 1,
        },
    },
    {
        component: 'DynamicChart',
        label: '动态图表',
        icon: 'icon-fsux_tubiao_zhuzhuangtu',
        propValue: {
            chart: 'VChart',
            option: {
                //此处为图表的数据
                title: {
                    text: '动态图表'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                legend: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: new Array(10).fill('00:00:00')
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        // name: 'Name',
                        type: 'bar',
                        smooth: false,
                        data: new Array(10).fill(0),
                        itemStyle: {
                            color: ''
                        }
                    }
                ]
            },
        },
        style: {
            position: 'absolute',
            width: 400,
            height: 250,
            borderRadius: 0,
            padding: 0,
            rotate: 0,
            backgroundColor: '',
            opacity: 1,
        },
    },
    {
        component: 'HistoryChart',
        label: '历史数据',
        icon: 'icon-fsux_tubiao_zhuzhuangtu',
        propValue: {
            chart: 'VChart',
            option: {
                //此处为图表的数据
                title: {
                    text: '历史数据'
                },
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            color: ''
                        }
                    }
                ]
            },
        },
        style: {
            position: 'absolute',
            width: 400,
            height: 250,
            borderRadius: 0,
            padding: 0,
            rotate: 0,
            backgroundColor: '',
            opacity: 1,
        },
    },
    {
        component: 'DashboardChart',
        label: '仪表盘',
        icon: 'icon-fsux_tubiao_zhuzhuangtu',
        propValue: {
            chart: 'VChart',
            option: {
                //此处为图表的数据
                title: [
                    {
                        top: 0,
                        left: 0,
                        textStyle: {
                            fontWeight: "normal",
                            fontSize: 16,
                            color: "#fff",
                        },
                    },
                    {
                        text: "{a|" + Math.round(80 * 100 / 100) + "}",
                        show: true,
                        x: "center",
                        y: "35%",
                        textStyle: {
                            rich: {
                                a: {
                                    fontSize: 24,
                                    color: "#FFFFFF",
                                    fontWeight: "bold",
                                },
                            },
                        },
                    },
                    {
                        text: '标题',
                        x: "center",
                        y: "55%",
                        borderColor: "#fff",
                        textStyle: {
                            fontWeight: "normal",
                            fontSize: 16,
                            color: "#fff",
                        },
                    },
                ],
                polar: {
                    center: ["50%", "50%"],
                    radius: ["70%", "75%"],
                },
                angleAxis: {
                    max: 100,
                    show: false,
                },
                radiusAxis: {
                    type: "category",
                    show: true,
                    axisLabel: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        data: [80],
                        name: "",
                        type: "bar",
                        roundCap: true,
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(19, 84, 146, .4)",
                        },
                        coordinateSystem: "polar",
                        itemStyle: {
                            // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            //     {
                            //         offset: 0,
                            //         color: "#005DCF",
                            //     },
                            //     {
                            //         offset: 1,
                            //         color: "#00CCFF",
                            //     },
                            // ]),
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#005DCF' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#00CCFF' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        },
                    },
                ],
            },
        },
        style: {
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: 0,
            padding: 0,
            rotate: 0,
            backgroundColor: '',
            opacity: 1,
        },
    },
]

// 传感组件
export const sensor = [
    {
        component: 'VText',
        label: '温度',
        propValue: '双击编辑文字',
        icon: 'icon-wendu',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VText',
        label: '湿度',
        propValue: '双击编辑文字',
        icon: 'icon-sd',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
]

// 控制组件
export const control = [
    {
        component: 'VText',
        label: '门禁',
        propValue: '双击编辑文字',
        icon: 'icon-menjin-kaimen',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'VButton',
        label: '灯光',
        propValue: '按钮',
        icon: 'icon-dengguang',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },
]

// 安防组件
export const security = [
    {
        component: 'Picture',
        label: '图片',
        icon: 'icon-ranqi',
        propValue: {
            // url: require('@/assets/title.jpg'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
]

// 摄像头组件
export const camera = [
    {
        component: 'VText',
        label: '摄像头',
        propValue: '双击编辑文字',
        icon: 'icon-shexiangtou',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false, // 是否定时发送请求
            time: 1000, // 定时更新时间
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            rotate: 0,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
]

export default [foundation, sensor, control, security, camera]