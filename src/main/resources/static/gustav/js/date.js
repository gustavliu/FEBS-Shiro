var xx=[
    {name:"张三",time:"2018-04-30"},
    {name:"张三",time:"2018-05-03"},
    {name:"张三",time:"2018-05-05"},
    {name:"张三",time:"2018-05-10"},
    {name:"张三",time:"2018-05-11"},
    {name:"张三",time:"2018-05-12"},
    {name:"张三",time:"2018-05-22"},
    {name:"张三",time:"2018-06-02"},
    {name:"张三",time:"2018-06-03"},
    {name:"张三",time:"2018-06-02"},
    {name:"张三",time:"2018-06-10"},
];


$("#datetimepicker").datetimepicker({
    language: "zh-CN",//中文
    format: 'yyyy-mm-dd',//显示日期格式
    autoclose: true,//当选择一个日期之后是否立即关闭此日期时间选择器。
    startDate: new Date(),//设置日历开始时间
    todayHighlight: true,//高亮当前日期
    minView: "month", //选择日期后，不会再跳转去选择时分秒
    todayBtn:  1,//在日期底部添加一个跳转到今天的按钮
    initialDate: "2018-05-20",//可以用一个日期来初始化查看器
});

$("#datetimepicker").change(function(){
    $(".datetimepicker").toggle();
});

$("#datetimepicker").click(function(){//点击输入框时触发事件
    if($(".datetimepicker").is(":hidden")){
        $(".datetimepicker").toggle();
    }
    getspan();
});

$(".datetimepicker-days thead .prev").click(function(){
    console.log($(".datetimepicker-days thead .switch").html());
    setTimeout(getspan,500);
});

$(".datetimepicker-days thead .next").click(function(){
    console.log($(".datetimepicker-days thead .switch").html());
    setTimeout(getspan,500);
});

function getspan(){
    var dates = $(".datetimepicker-days thead .switch").html();
    var months=dates.substr(0,dates.length-6);
    var month;//月份
    switch (months){
        case "一":
            month=1;
            break;
        case "二":
            month=2;
            break;
        case "三":
            month=3;
            break;
        case "四":
            month=4;
            break;
        case "五":
            month=5;
            break;
        case "六":
            month=6;
            break;
        case "七":
            month=7;
            break;
        case "八":
            month=8;
            break;
        case "九":
            month=9;
            break;
        case "十":
            month=10;
            break;
        case "十一":
            month=11;
            break;
        case "十二":
            month=12;
            break;
    }
    var year=dates.slice(-4);//年份
    $(".datetimepicker-days tbody td").each(function(){
        if($(this).hasClass("new")){
            var nowmonth=month+1;
            var day=$(this).html();
            if(day<10){
                day="0"+day;
                //console.log(day)
            }
            if(nowmonth<10){
                nowmonth="0"+nowmonth;
            }
            var date=year+"-"+nowmonth+"-"+day;
            for(i=0;i<xx.length;i++){
                if(xx[i].time==date){
                    $(this).css("background","#D8D8D8");
                }
            }

        }else if($(this).hasClass("old")){
            var nowmonth=month-1;
            var day=$(this).html();
            if(day<10){
                day="0"+day;
            }
            if(nowmonth<10){
                nowmonth="0"+nowmonth;
            }

            var date=year+"-"+nowmonth+"-"+day;
            for(i=0;i<xx.length;i++){
                if(xx[i].time==date){
                    $(this).css("background","#D8D8D8");
                }
            }
        }else{
            var day=$(this).html();
            var nowmonth=month;
            if(day<10){
                day="0"+day;
            }
            if(nowmonth<10){
                nowmonth="0"+month;
            }

            var date=year+"-"+nowmonth+"-"+day;
            //console.log(date);

            for(i=0;i<xx.length;i++){
                if(xx[i].time==date){
                    $(this).css("background","#D8D8D8");
                }
            }
        }
    });
}