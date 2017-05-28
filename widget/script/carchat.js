
//var _server_ip = "http://172.16.17.192:8099";
//var _server_ip = "http://172.16.21.127:8099";
var _server_ip = "http://192.168.1.101:8099";
//var _server_ip = "http://192.168.0.106:8099";
//var _server_ip = "http://47.92.93.44:8099";

//var _selected_brand_series_str = null;
var _brand_model_string = null;


var _province_info = null; // 省份名称及简称数组 [{id, name, abbr, code}, ....]

// 支持违章查询的省份信息，[{省份名称， 省份简称，交通局名称, 需要输入的车架号位数， 需要输入的发动机号位数}, ]
var _illegal_query_support_province_info = null;

function getAbsoluteLeft(o) {
	//o = $api.byId(objectId); //document.getElementById(objectId)
	oLeft = o.offsetLeft;
	while(o.offsetParent!=null) {
		oParent = o.offsetParent;
		oLeft += oParent.offsetLeft ;
		o = oParent;
	}
	return oLeft;
}
//获取控件上绝对位置
function getAbsoluteTop(o) {
	//o = document.getElementById(objectId);
	//o = $api.byId(objectId);
	oTop = o.offsetTop;
	while(o.offsetParent!=null)
	{
		oParent = o.offsetParent ;
		oTop += oParent.offsetTop ; // Add parent top position
		o = oParent;
	}
	return oTop;
}



//获取控件宽度

function getElementWidth(o) {
	//x = document.getElementById(objectId);
	//o = $api.byId(objectId);
	return o.offsetWidth;
}


function getUserCommonInfo(user_id){
	// 获取用户数据
	var appId = $api.getStorage("appId");
    var appKey = $api.getStorage("appKey");

    var user_info = null; // JSON{


	api.ajax({
	        "url":'https://d.apicloud.com/mcm/api/user/' + user_id,
	        "method": "GET",
      		"cache": false,
      		"headers": {
        		"X-APICloud-AppId": appId,
        		"X-APICloud-AppKey": appKey
      		}
        },function(ret,err){


        	if(ret){
        		user_info = ret;

        		/*
        		api.alert({
	        		msg: JSON.stringify(user_info)
	            },function(ret,err){
	            	//coding...
	            });*/

	        	}

        });

    api.alert({
	        		msg: JSON.stringify(user_info)
	            },function(ret,err){
	            	//coding...
	            });

    return user_info;
}


	function getInputValue(input_id){
		// 获取一个输入框的数值
		var value = 0;
		var input_b = $api.byId(input_id);
		if(input_b != null){
			input_txt = input_b.value;
			if(input_txt != null) input_txt = $api.trim(input_txt); // 去掉空格

			// 转换为数值
			if(input_txt != ''){
				var v = parseFloat(input_txt);
				if(v != null) value = v;
			}
		}

		return value;
	}

	function setInputValue(input_id, value){
		// 设置一个输入框的值
		var input_b = $api.byId(input_id);
		input_b.value = value.toFixed(2);
	}


	function displayCostValueToLabel(label_id, cost){
		// 显示费用
		var label = $api.byId(label_id);
		label.innerText = cost.toFixed(2) + " 元";
	}

	function arrMaxNum(arr){
	    var maxNum = -Infinity;
	    for (var i = 0; i < arr.length; i++) {
	        arr[i]>maxNum ? maxNum =arr[i] : null;
	    };
	    return maxNum;
	}

	function arrMinNum(arr){
	    var minNum = Infinity;
	    for (var i = 0; i < arr.length; i++) {
	        arr[i]<minNum ? minNum =arr[i] : null;
	    };
	    return minNum;
	}

	function arrAverageNum(arr){
	    var sum = 0;
	    for (var i = 0; i < arr.length; i++) {
	        sum += arr[i];
	    };
	    return ~~(sum/arr.length*100)/100;
	}

	function getJsonLength(jsonData){

		var jsonLength = 0;

		for(var item in jsonData){

		jsonLength++;

		}

		return jsonLength;

	}
