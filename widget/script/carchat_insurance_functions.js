
	
	function calculateShiyongshui(capacity_index){
		// 计算车船使用税，以北京为例，
		
		var shuis = [300, 420, 480, 900, 1920, 3480, 5280]
		
		var shui = shuis[capacity_index];
		/*
		if(capacity_index == 0){ shui = 300; }
		else if(capacity_index == 1){ shui = 420; }
		else if(capacity_index == 2){ shui = 480; }
		else if(capacity_index == 3){ shui = 900; }
		else if(capacity_index == 4){ shui = 1920; }
		else if(capacity_index == 5){ shui = 3480; }
		else if(capacity_index == 6){ shui = 5280; }
		*/
		return shui;
	}
	
	function calculateQiangzhibaoxiang(seat_count){
		// 计算强制保险费，
		var cost = 0;
		if(seat_count == 0){cost = 950;} // 六座以下
		else if(seat_count == 1){cost = 1100;}
		
		return cost;
	}
	
	function getSanzheBaofei(seat_count, peifu_index){
		// 获取第三者责任险的保费
		// seat_count: 0: 6座以下，1：6座及以上
		// peifu_index: 赔付额度： 0 - 4， 5万，10万，20万，50万，100万
		
		var baofeis =  [[710, 1026, 1270, 1721, 2242], 
		                [659, 928, 1131, 1507, 1963]];
				
		var baofei = baofeis[seat_count][peifu_index];
		
		return baofei;
	}
	
	function getSunshiBaofei(seat_count, car_cost){
		// 获取车辆损失险保费
		// 座位数量， 裸车价格
		
		var jichu_baofei_feilv = [[285, 0.0095], [342, 0.0090]];
		var baofei = jichu_baofei_feilv[seat_count][0] + jichu_baofei_feilv[seat_count][1] * car_cost;
		return baofei;
	}
	
	
	function getDaoqiangBaofei(seat_count, car_cost){
		// 获取全车盗抢险保费
		var daoqiang_baofei_feilv = [[120, 0.0049], [140, 0.0044]];
		var baofei = daoqiang_baofei_feilv[seat_count][0] + daoqiang_baofei_feilv[seat_count][1] * car_cost;
		return baofei;
	}
	
	function getCheshangRenyuanBaofei(person_count_index){
		// 获取车上人员险保费
		var baofeis = [50, 100, 150, 200, 250];
		var baofei = baofeis[person_count_index];
		return baofei;
	}
	
	function getBoliPosuiBaofei(chandi_index, car_cost){
		// 获取玻璃破碎险保费
		// chandi_index: 车辆产地, 0: 国产， 1: 进口
		var feilv = [0.0019, 0.0030];
		var baofei = feilv[chandi_index] * car_cost;
		return baofei;
	}	
	
	function getHuahenBaofei(peifu_index){
		// 获取车辆划痕保费,
		// peifu_index: 赔付额度: 0, 1, 2, 3
		var baofeis = [400, 570, 760, 1140];
		var baofei = baofeis[peifu_index];
		return baofei;
	}
	
	function getShoufuJinE(bili_index, car_cost){
		// 获取首付金额
		// bili_index: 0 - 3: 30%, 40%, 50%, 60%
		var bili = [0.3, 0.4, 0.5, 0.6];
		var jine = car_cost * bili[bili_index];
		return jine;
	}
	
	function getDaikuanQixian(nianxian_index){
		// 获取贷款期限
		var qixians = [12, 24, 36, 48, 60];
		var qixian = qixians[nianxian_index];
		return qixian;
	}
	
	function getDaikuanLilv(nianxian_index){
		// 获取贷款利率
		var lilvs = [0.0656, 0.0665, 0.0665, 0.0690, 0.0690];
		var lilv = lilvs[nianxian_index];
		return lilv;
	}
	
	
	function calYueGongValue(loan_cost, yearly_rate, month_count){
		// 计算月供值，本金，年利率，贷款月数
		var monthly_rate = yearly_rate / 12;
		return (loan_cost * monthly_rate * Math.pow(1 + monthly_rate, month_count))/(Math.pow(1 + monthly_rate, month_count) - 1);
	}
	
