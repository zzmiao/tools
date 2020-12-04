/**
 * 邮箱
 */
function isEmail(s) {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
/**
 * 姓名只能输入中文
 */
function isChinese(s) {
	return !(/[^\u4E00-\u9FA5]/g.test(s));
}
/**
 * 手机号码
 */
function isMobile(s) {
	return /^1[0-9]{10}$/.test(s)
}
/**
 * 电话号码
 */
function isPhone(s) {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}
/**
 * 是否url地址
 */
function isURL(s) {
	return /^http[s]?:\/\/.*/.test(s)
}
/**
 * 是否字符串
 */
function isString(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}
/**
 * 是否数字
 */
function isNumber(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}
/**
 * 是否boolean
 */
function isBoolean(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}
/**
 * 是否函数
 */
function isFunction(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}
/**
 * 是否为null
 */
function isNull(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}
/**
 * 是否undefined
 */
function isUndefined(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}
/**
 * 是否对象
 */
function isObj(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}
/**
 * 是否数组
 */
function isArray(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
/**
 * 是否时间
 */
function isDate(o) {
	return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}
/**
 * 是否是微信浏览器
 */
function isWeiXin() {
	const ua = navigator.userAgent.toLowerCase();
	return ua.match(/microMessenger/i) == 'micromessenger'
}
/**
 * 是否是移动端
 */
function isDeviceMobile() {
	const ua = navigator.userAgent.toLowerCase();
	return /android|webos|iphone|ipod|balckberry/i.test(ua)
}
/**
 * 是否是QQ浏览器
 */
function isQQBrowser() {
	const ua = navigator.userAgent.toLowerCase();
	return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}
/**
 * 是否是爬虫
 */
function isSpider() {
	return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}
/**
 * 是否ios
 */
function isIos() {
	var u = navigator.userAgent;
	if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
		return false
	} else if(u.indexOf('iPhone') > -1) { //苹果手机
		return true
	} else if(u.indexOf('iPad') > -1) { //iPad
		return false
	} else if(u.indexOf('Windows Phone') > -1) { //winphone手机
		return false
	} else {
		return false
	}
}
/**
 * 是否为PC端
 */
function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
/**
 * 去除html标签
 */
function removeHtmltag(str) {
	return str.replace(/<[^>]+>/g, '')
}
/**
 * 动态引入js
 */
function injectScript(src) {
	const s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = src;
	const t = document.getElementsByTagName('script')[0];
	t.parentNode.insertBefore(s, t);
}
/**
 * 获取滚动的坐标
 */
function getScrollPosition(el = window) {
	return {
		x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
		y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
	}
}
/**
 * 滚动到顶部
 */
function scrollToTop() {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if(c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
}
/**
 * 判断类型集合
 */
function checkStr(str, type) {
	switch(type) {
		case 'phone': //手机号码
			return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
		case 'tel': //座机
			return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
		case 'card': //身份证
			return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
		case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
			return /^[a-zA-Z]\w{5,17}$/.test(str)
		case 'postal': //邮政编码
			return /[1-9]\d{5}(?!\d)/.test(str);
		case 'QQ': //QQ号
			return /^[1-9][0-9]{4,9}$/.test(str);
		case 'email': //邮箱
			return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
		case 'money': //金额(小数点2位)
			return /^\d*(?:\.\d{0,2})?$/.test(str);
		case 'URL': //网址
			return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
		case 'IP': //IP
			return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
		case 'date': //日期时间
			return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
		case 'number': //数字
			return /^[0-9]$/.test(str);
		case 'english': //英文
			return /^[a-zA-Z]+$/.test(str);
		case 'chinese': //中文
			return /^[\\u4E00-\\u9FA5]+$/.test(str);
		case 'lower': //小写
			return /^[a-z]+$/.test(str);
		case 'upper': //大写
			return /^[A-Z]+$/.test(str);
		case 'HTML': //HTML标记
			return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
		default:
			return true;
	}
}
/**
 * 严格的身份证校验
 */
function isCardID(sId) {
	if(!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		console.log('你输入的身份证长度或格式错误')
		return false
	}
	//身份证城市
	var aCity = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外"
	};
	if(!aCity[parseInt(sId.substr(0, 2))]) {
		console.log('你的身份证地区非法')
		return false
	}

	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
		d = new Date(sBirthday)
	if(sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
		console.log('身份证上的出生日期非法')
		return false
	}

	// 身份证号码校验
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for(var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i];
	}
	var last = codes[sum % 11]; //计算出来的最后一位身份证号码
	if(sId[sId.length - 1] != last) {
		console.log('你输入的身份证号非法')
		return false
	}

	return true
}
/**
 * 将阿拉伯数字翻译成中文的大写数字
 */
function numberToChinese(num) {
	var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
	var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
	var a = ("" + num).replace(/(^0*)/g, "").split("."),
		k = 0,
		re = "";
	for(var i = a[0].length - 1; i >= 0; i--) {
		switch(k) {
			case 0:
				re = BB[7] + re;
				break;
			case 4:
				if(!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
					.test(a[0]))
					re = BB[4] + re;
				break;
			case 8:
				re = BB[5] + re;
				BB[7] = BB[5];
				k = 0;
				break;
		}
		if(k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
			re = AA[0] + re;
		if(a[0].charAt(i) != 0)
			re = AA[a[0].charAt(i)] + BB[k % 4] + re;
		k++;
	}

	if(a.length > 1) // 加上小数部分(如果有小数部分)
	{
		re += BB[6];
		for(var i = 0; i < a[1].length; i++)
			re += AA[a[1].charAt(i)];
	}
	if(re == '一十')
		re = "十";
	if(re.match(/^一/) && re.length == 3)
		re = re.replace("一", "");
	return re;
}
/**
 * 将数字转换为大写金额
 */
function changeToChinese(Num) {
	//判断如果传递进来的不是字符的话转换为字符
	if(typeof Num == "number") {
		Num = new String(Num);
	};
	Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
	Num = Num.replace(/ /g, "") //替换tomoney()中的空格
	Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
	if(isNaN(Num)) { //验证输入的字符是否为数字
		//alert("请检查小写金额是否正确");
		return "";
	};
	//字符处理完毕后开始转换，采用前后两部分分别转换
	var part = String(Num).split(".");
	var newchar = "";
	//小数点前进行转化
	for(var i = part[0].length - 1; i >= 0; i--) {
		if(part[0].length > 10) {
			return "";
			//若数量超过拾亿单位，提示
		}
		var tmpnewchar = ""
		var perchar = part[0].charAt(i);
		switch(perchar) {
			case "0":
				tmpnewchar = "零" + tmpnewchar;
				break;
			case "1":
				tmpnewchar = "壹" + tmpnewchar;
				break;
			case "2":
				tmpnewchar = "贰" + tmpnewchar;
				break;
			case "3":
				tmpnewchar = "叁" + tmpnewchar;
				break;
			case "4":
				tmpnewchar = "肆" + tmpnewchar;
				break;
			case "5":
				tmpnewchar = "伍" + tmpnewchar;
				break;
			case "6":
				tmpnewchar = "陆" + tmpnewchar;
				break;
			case "7":
				tmpnewchar = "柒" + tmpnewchar;
				break;
			case "8":
				tmpnewchar = "捌" + tmpnewchar;
				break;
			case "9":
				tmpnewchar = "玖" + tmpnewchar;
				break;
		}
		switch(part[0].length - i - 1) {
			case 0:
				tmpnewchar = tmpnewchar + "元";
				break;
			case 1:
				if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
				break;
			case 2:
				if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
				break;
			case 3:
				if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
				break;
			case 4:
				tmpnewchar = tmpnewchar + "万";
				break;
			case 5:
				if(perchar != 0) tmpnewchar = tmpnewchar + "拾";
				break;
			case 6:
				if(perchar != 0) tmpnewchar = tmpnewchar + "佰";
				break;
			case 7:
				if(perchar != 0) tmpnewchar = tmpnewchar + "仟";
				break;
			case 8:
				tmpnewchar = tmpnewchar + "亿";
				break;
			case 9:
				tmpnewchar = tmpnewchar + "拾";
				break;
		}
		var newchar = tmpnewchar + newchar;
	}
	//小数点之后进行转化
	if(Num.indexOf(".") != -1) {
		if(part[1].length > 2) {
			// alert("小数点之后只能保留两位,系统将自动截断");
			part[1] = part[1].substr(0, 2)
		}
		for(i = 0; i < part[1].length; i++) {
			tmpnewchar = ""
			perchar = part[1].charAt(i)
			switch(perchar) {
				case "0":
					tmpnewchar = "零" + tmpnewchar;
					break;
				case "1":
					tmpnewchar = "壹" + tmpnewchar;
					break;
				case "2":
					tmpnewchar = "贰" + tmpnewchar;
					break;
				case "3":
					tmpnewchar = "叁" + tmpnewchar;
					break;
				case "4":
					tmpnewchar = "肆" + tmpnewchar;
					break;
				case "5":
					tmpnewchar = "伍" + tmpnewchar;
					break;
				case "6":
					tmpnewchar = "陆" + tmpnewchar;
					break;
				case "7":
					tmpnewchar = "柒" + tmpnewchar;
					break;
				case "8":
					tmpnewchar = "捌" + tmpnewchar;
					break;
				case "9":
					tmpnewchar = "玖" + tmpnewchar;
					break;
			}
			if(i == 0) tmpnewchar = tmpnewchar + "角";
			if(i == 1) tmpnewchar = tmpnewchar + "分";
			newchar = newchar + tmpnewchar;
		}
	}
	//替换所有无用汉字
	while(newchar.search("零零") != -1)
		newchar = newchar.replace("零零", "零");
	newchar = newchar.replace("零亿", "亿");
	newchar = newchar.replace("亿万", "亿");
	newchar = newchar.replace("零万", "万");
	newchar = newchar.replace("零元", "元");
	newchar = newchar.replace("零角", "");
	newchar = newchar.replace("零分", "");
	if(newchar.charAt(newchar.length - 1) == "元") {
		newchar = newchar + "整"
	}
	return newchar;
}
/**
 * 判断一个元素是否在数组中
 */
function contains(arr, val) {
	return arr.indexOf(val) != -1 ? true : false;
}
/**
 * 去重
 */
function unique(arr) {
	if(Array.hasOwnProperty('from')) {
		return Array.from(new Set(arr));
	} else {
		var n = {},
			r = [];
		for(var i = 0; i < arr.length; i++) {
			if(!n[arr[i]]) {
				n[arr[i]] = true;
				r.push(arr[i]);
			}
		}
		return r;
	}
}
/**
 * 求两个集合的并集
 */
function union(a, b) {
	var newArr = a.concat(b);
	return this.unique(newArr);
}
/**
 * 删除其中一个元素
 */
function remove(arr, ele) {
	var index = arr.indexOf(ele);
	if(index > -1) {
		arr.splice(index, 1);
	}
	return arr;
}
/**
 * 最大值
 */
function max(arr) {
	return Math.max.apply(null, arr);
}
/**
 * 最小值
 */
function min(arr) {
	return Math.min.apply(null, arr);
}
/**
 * 求和
 */
function sum(arr) {
	return arr.reduce((pre, cur) => {
		return pre + cur
	})
}
/**
 * 平均值
 */
function average(arr) {
	return this.sum(arr) / arr.length
}
/**
 * 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
 */
function trim(str, type) {
	type = type || 1
	switch(type) {
		case 1:
			return str.replace(/\s+/g, "");
		case 2:
			return str.replace(/(^\s*)|(\s*$)/g, "");
		case 3:
			return str.replace(/(^\s*)/g, "");
		case 4:
			return str.replace(/(\s*$)/g, "");
		default:
			return str;
	}
}
/**
 * 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 */
function changeCase(str, type) {
	type = type || 4
	switch(type) {
		case 1:
			return str.replace(/\b\w+\b/g, function(word) {
				return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

			});
		case 2:
			return str.replace(/\b\w+\b/g, function(word) {
				return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
			});
		case 3:
			return str.split('').map(function(word) {
				if(/[a-z]/.test(word)) {
					return word.toUpperCase();
				} else {
					return word.toLowerCase()
				}
			}).join('')
		case 4:
			return str.toUpperCase();
		case 5:
			return str.toLowerCase();
		default:
			return str;
	}
}
/**
 * 检测密码强度
 */
function checkPwd(str) {
	var Lv = 0;
	if(str.length < 6) {
		return Lv
	}
	if(/[0-9]/.test(str)) {
		Lv++
	}
	if(/[a-z]/.test(str)) {
		Lv++
	}
	if(/[A-Z]/.test(str)) {
		Lv++
	}
	if(/[\.|-|_|@]/.test(str)) {
		Lv++
	}
	return Lv;
}
/**
 * 判断两个对象是否键值相同
 */
function isObjectEqual(a, b) {
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);

	if(aProps.length !== bProps.length) {
		return false;
	}

	for(var i = 0; i < aProps.length; i++) {
		var propName = aProps[i];

		if(a[propName] !== b[propName]) {
			return false;
		}
	}
	return true;
}
/**
 * 16进制颜色转RGBRGBA字符串 
 * @param{String} val 16进制颜色值 如：#ff0000
 * @param{String} opa 透明度 如：0.5
 * return rgba(255,0,0,0.5)
 */
function colorToRGB(val, opa) {

	var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
	var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

	if(!pattern.test(val)) { //如果值不符合规则返回空字符
		return '';
	}

	var v = val.replace(/#/, ''); //如果有#号先去除#号
	var rgbArr = [];
	var rgbStr = '';

	for(var i = 0; i < 3; i++) {
		var item = v.substring(i * 2, i * 2 + 2);
		var num = parseInt(item, 16);
		rgbArr.push(num);
	}

	rgbStr = rgbArr.join();
	rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
	return rgbStr;
}
/**
 * 追加url参数
 * @param{String} url 路径
 * @param{String} key 键
 * @param{String} value 值
 */
function appendQuery(url, key, value) {
	var options = key;
	if(typeof options == 'string') {
		options = {};
		options[key] = value;
	}
	options = $.param(options);
	if(url.includes('?')) {
		url += '&' + options
	} else {
		url += '?' + options
	}
	return url;
}
/**
 * 将 字符串 转换成 银行卡 格式
 * @param card 银行卡号
 * @param secret 是否对中间部分使用*代替 默认false
 */
function toCard(card, secret) {
	if(null == card) {
		return ''
	}
	card = card.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ")
	if(secret) {
		card = card.replace(/(\d{4})[\d ]*(\d{3,4})/, "$1 **** **** $2")
	}
	return card
}

function px2rpx(px, windowWidth) {
	return Math.round(px * 750 / windowWidth);
}

function rpx2px(rpx, windowWidth) {
	return Math.round(rpx / 750 * windowWidth);
}
/**
 * 将 日期对象/日期time数值 格式化为 字符串 形式
 * @param date 要格式化的 日期对象/日期time数值 如1575126782000|new Date()
 * @param fmt 格式化形式 默认 年-月-日 时:分:秒 如yyyyMMdd|yyyy-MM-dd HH:mm:ss|y|M|d|q|w|H|h|m|s
 * return yyyyMMdd|yyyy-MM-dd HH:mm:ss|y|M|d|q|w|H|h|m|s
 */
function formatDate(date, fmt) {
	date = +date;
	if(isNaN(date)) {
		return
	}
	date = date == undefined ? new Date() : date;
	date = typeof date == 'number' ? new Date(date) : date;
	fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
	var obj = {
		'y': date.getFullYear(), // 年份，注意必须用getFullYear
		'M': date.getMonth() + 1, // 月份，注意是从0-11
		'd': date.getDate(), // 日期
		'q': Math.floor((date.getMonth() + 3) / 3), // 季度
		'w': date.getDay(), // 星期，注意是0-6
		'H': date.getHours(), // 24小时制
		'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
		'm': date.getMinutes(), // 分钟
		's': date.getSeconds(), // 秒
		'S': date.getMilliseconds() // 毫秒
	};
	var week = ['天', '一', '二', '三', '四', '五', '六'];
	for(var i in obj) {
		fmt = fmt.replace(new RegExp(i + '+', 'g'), function(m) {
			var val = obj[i] + '';
			if(i == 'w') return(m.length > 2 ? '星期' : '周') + week[val];
			for(var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
			return m.length == 1 ? val : val.substring(val.length - m.length);
		});
	}
	return fmt;
}
/**
 * 将字符串解析成日期
 * @param str 输入的日期字符串，如'2014-09-13'
 * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y（年）M（月）d（日）H（24小时制的小时）h（12小时制的小时）m（分）s（秒）S（毫秒）不支持w和q
 * @returns 解析后的Date类型日期
 */
function parseDate(str, fmt) {
	fmt = fmt || 'yyyy-MM-dd';
	var obj = {
		y: 0,
		M: 1,
		d: 0,
		H: 0,
		h: 0,
		m: 0,
		s: 0,
		S: 0
	};
	fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function(m, $1, $2, $3, $4, idx, old) {
		str = str.replace(new RegExp($1 + '(\\d{' + $2.length + '})' + $4), function(_m, _$1) {
			obj[$3] = parseInt(_$1);
			return '';
		});
		return '';
	});
	obj.M--; // 月份是从0开始的，所以要减去1
	var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
	if(obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
	return date;
}
/**
 * 是否是闰年
 * @param{String/Number} year 年份 如：2020
 */
function isRUNYear(year) {
	if((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}
/**
 * 返回两个日期相差的月数
 * @param {String} date1 开始日期
 * @param {String} date2 结束日期
 */
function getIntervalMonth(date1, date2) {
	//用-分成数组
	date1 = date1.split("-");
	date2 = date2.split("-");
	//获取年,月数
	var year1 = parseInt(date1[0]),
		month1 = parseInt(date1[1]),
		day1 = parseInt(date1[2]),
		year2 = parseInt(date2[0]),
		month2 = parseInt(date2[1]),
		day2 = parseInt(date2[2]),
		//通过年,月差计算月份差
		months = (day2 >= day1 ? (year2 - year1) * 12 + (month2 - month1) + 1 : (year2 - year1) * 12 + (month2 - month1));
	return months;
}
/*
 * 获取一个人的年龄:精确到月日
 * @param {String} startTimes 出生日期
 * @param {String} endTimes 当前日期
 */
function getAges(startTimes, endTimes) {
	if((startTimes == undefined || startTimes == "") || (endTimes == undefined || endTimes == "")) {
		return false;
	}
	var startTimesArr = startTimes.split("-");
	var endTimesArr = endTimes.split("-");
	var years = endTimesArr[0] - startTimesArr[0];
	var months = endTimesArr[1] - startTimesArr[1];
	var days = endTimesArr[2] - startTimesArr[2];
	console.log(years, months, days);
	var ages = 0;
	if(months > 0) {
		ages = years + 1;
	} else if(months == 0 && days > 0) {
		ages = years + 1;
	} else if(months == 0 && days == 0) {
		ages = years;
	} else {
		ages = years - 1;
	}
	return ages;
}
/**
 * 获取当前时间
 * @param{String} type 时间格式 如：yyyy-MM-dd
 */
function getCurTimes(type) {
	var myDate = new Date();
	var y = myDate.getFullYear();
	var mon = myDate.getMonth() + 1;
	var d = myDate.getDate();
	var h = myDate.getHours();
	var m = myDate.getMinutes();
	var s = myDate.getSeconds();
	switch(type) {
		case "yyyy/MM/dd":
			var yyyyMMdd = y + "/" + (mon < 10 ? "0" + mon : mon) + "/" + (d < 10 ? "0" + d : d);
			return yyyyMMdd;
			break;
		case "yyyy/MM/dd HH:mm:ss":
			var yyyyMMdd = y + "/" + (mon < 10 ? "0" + mon : mon) + "/" + (d < 10 ? "0" + d : d);
			var HHmmss = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
			return yyyyMMdd + " " + HHmmss;
			break;
		case "yyyy-MM-dd":
			var yyyyMMdd = y + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (d < 10 ? "0" + d : d);
			return yyyyMMdd;
			break;
		case "yyyy-MM-dd HH:mm":
			var yyyyMMdd = y + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (d < 10 ? "0" + d : d);
			var HHmmss = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? "0" + m : m);
			return yyyyMMdd + " " + HHmmss;
			break;
		case "yyyy-MM-dd HH:mm:ss":
			var yyyyMMdd = y + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (d < 10 ? "0" + d : d);
			var HHmmss = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
			return yyyyMMdd + " " + HHmmss;
			break;
		case "yyyy年MM月dd日":
			var yyyyMMdd = y + "年" + (mon < 10 ? "0" + mon : mon) + "月" + (d < 10 ? "0" + d : d) + "日";
			return yyyyMMdd;
			break;
		case "yyyy年MM月dd日 HH时mm分":
			var yyyyMMdd = y + "年" + (mon < 10 ? "0" + mon : mon) + "月" + (d < 10 ? "0" + d : d) + "日";
			var HHmmss = (h < 10 ? '0' + h : h) + "时" + (m < 10 ? "0" + m : m) + "分";
			return yyyyMMdd + " " + HHmmss;
			break;
		case "yyyy年MM月dd日 HH时mm分ss秒":
			var yyyyMMdd = y + "年" + (mon < 10 ? "0" + mon : mon) + "月" + (d < 10 ? "0" + d : d) + "日";
			var HHmmss = (h < 10 ? '0' + h : h) + "时" + (m < 10 ? "0" + m : m) + "分" + (s < 10 ? "0" + s : s) + "秒";
			return yyyyMMdd + " " + HHmmss;
			break;
		default:
			var yyyyMMdd = y + "-" + (mon < 10 ? "0" + mon : mon) + "-" + (d < 10 ? "0" + d : d);
			return yyyyMMdd;
			break;
	}
}
/**
 * 时间戳转换成时间
 * @param {Number/String} timeStamp 时间戳
 * @param {String} type 输出时间格式 如：yyyy-MM-dd HH:mm:ss
 */
function timeStampToDate(timeStamp, type) {
	//小于10，补0操作
	var getzf = function(num) {
		if(parseInt(num) < 10) {
			num = '0' + num;
		}
		return num;
	}
	if(typeof timeStamp !== "number") {
		timeStamp = new Number(timeStamp);
	}
	var oDate = new Date(timeStamp);
	var oYear = oDate.getFullYear();
	var oMonth = oDate.getMonth() + 1;
	var oDay = oDate.getDate();
	var oHour = oDate.getHours();
	var oMin = oDate.getMinutes();
	var oSen = oDate.getSeconds();
	var oTime = "";
	switch(type) {
		case "yyyy/MM/dd":
			oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay);
			break;
		case "yyyy/MM/dd HH:mm:ss":
			oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay) + " " + getzf(oHour) + ":" + getzf(oMin) + ":" + getzf(oSen);
			break;
		case "yyyy-MM-dd":
			oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay);
			break;
		case "yyyy-MM-dd HH:mm":
			oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + " " + getzf(oHour) + ":" + getzf(oMin);
			break;
		case "yyyy-MM-dd HH:mm:ss":
			oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + " " + getzf(oHour) + ":" + getzf(oMin) + ":" + getzf(oSen);
			break;
		case "yyyy年MM月dd日":
			oTime = oYear + '年' + getzf(oMonth) + '月' + getzf(oDay) + "日";
			break;
		case "yyyy年MM月dd日 HH时mm分":
			oTime = oYear + '年' + getzf(oMonth) + '月' + getzf(oDay) + "日" + " " + getzf(oHour) + "时" + getzf(oMin) + "分";
			break;
		case "yyyy年MM月dd日 HH时mm分ss秒":
			oTime = oYear + '年' + getzf(oMonth) + '月' + getzf(oDay) + "日" + " " + getzf(oHour) + "时" + getzf(oMin) + "分" + getzf(oSen) + "秒";
			break;
		default:
			oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay);
			break;
	}

	return oTime;
};
/**
 * 日期转换成时间戳
 * @param {String} date 日期 格式：yyyy-MM-dd HH:mm:ss 精确到秒|yyyy-MM-dd 精确到日
 */
function DateToUnix(date) {
	var f = date.split(' ', 2);
	var d = (f[0] ? f[0] : '').split('-', 3);
	var t = (f[1] ? f[1] : '').split(':', 3);
	return(new Date(
		parseInt(d[0], 10) || null,
		(parseInt(d[1], 10) || 1) - 1,
		parseInt(d[2], 10) || null,
		parseInt(t[0], 10) || null,
		parseInt(t[1], 10) || null,
		parseInt(t[2], 10) || null
	)).getTime();

}
/**
 * 获取两个时间点之间相差多少天
 * @param {String} beginDT 开始日期
 * @param {String} endDT   结束日期
 * return 天数
 */
function intervalDays(beginDT, endDT) {
	var beginDT = DateToUnix(beginDT);
	var endDT = DateToUnix(endDT);
	var date3 = endDT - beginDT;
	//计算出相差天数
	var days = Math.floor(date3 / (24 * 3600 * 1000))
	//计算出小时数
	var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000))
	//计算相差分钟数
	var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000))
	//计算相差秒数
	var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
	var seconds = Math.round(leave3 / 1000)
	return days;
}
/***
 * 获取一个月多少天
 * @param{String} year 年数
 * @param{String} month 月数
 */
function getDays(year, month) {
	//判断是否时闰年:平年28天、闰年29天
	var days = ""; //一个月最大天数
	var isRUNYear = function(year) {
		if((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}
	//闰年并且是二月份
	if(isRUNYear(year) && month == "2") {
		days = 29;
	} else {
		if(month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
			days = 31;
		} else if(month == "2") {
			days = 28;
		} else {
			days = 30;
		}
	}

	return days;
}
/**
 * 获取具体时间后几个月的时间：如：2020-11-30==》3月==》2020-02-28
 * @param{String} date 日期：如2020-11-30
 * @param{String} months 月数 ：如：3个月
 * return 2020-02-28
 */
function getDateMonthsToDate(date, months) {
	var dateArr = date.split("-");
	var y = parseInt(dateArr[0]); //年
	var m = parseInt(dateArr[1]); //年
	var d = parseInt(dateArr[2]); //年
	months = parseInt(months)
	//判断是否时闰年:平年28天、闰年29天

	var isRUNYear = function(year) {
		if((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}
	var getMaxDays = function(year, month) {
		var maxDay = ""; //一个月最大天数
		//闰年并且是二月份
		if(isRUNYear(year) && month == "2") {
			maxDay = 29;
		} else {
			if(month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
				maxDay = 31;
			} else if(month == "2") {
				maxDay = 28;
			} else {
				maxDay = 30;
			}
		}
		return maxDay;
	}
	m = m + months;
	y = y + Math.floor(m / 12);
	m = (m % 12) == 0 ? 12 : (m % 12);
	y = (m % 12) == 0 ? (y - 1) : y;
	var maxDay = getMaxDays(y, m);
	d = (d > maxDay ? maxDay : d);
	return y + "-" + (m >= 10 ? m : "0" + m) + "-" + (d >= 10 ? d : "0" + d);
}
/**
 * 根据传值获取对应的下标
 * @param {Array} array 数组
 * @param {String} name 对应检查的键值名
 * @param {String} value 需要检查的值
 */
function getArray(arrays, name, value) {
	var getArrayIndex = function(arr, obj) {
		var i = arr.length;
		while(i--) {
			if(arr[i][name] === obj) {
				return i;
			}
		}
		return -1;
	}
	//采用prototype原型实现方式，查找元素在数组中的索引值
	Array.prototype.getArrayIndex = function(obj) {
		for(var i = 0; i < this.length; i++) {
			if(this[i][name] === obj) {
				return i;
			}
		}
		return -1;
	}
	return arrays.getArrayIndex(value)
}
module.exports = {
	isEmail, //邮箱
	isChinese,//是否中文
	isMobile, //手机号码
	isPhone, //电话号码
	isURL,
	isString, //是否字符串
	isNumber, //是否数字
	isBoolean, //是否boolean
	isFunction, //是否函数
	isNull, //是否为null
	isUndefined, //是否undefined
	isObj, //是否对象
	isArray, //是否数组
	isDate, //是否时间
	isWeiXin, //是否是微信浏览器
	isDeviceMobile, //是否是移动端
	isQQBrowser, //是否是QQ浏览器
	isSpider, //是否是爬虫
	isIos, //是否ios
	isPC, //是否为PC端
	removeHtmltag, //去除html标签
	injectScript, //动态引入js
	getScrollPosition, //获取滚动的坐标
	scrollToTop, //滚动到顶部
	checkStr, //判断类型集合
	isCardID, //严格的身份证校验
	numberToChinese, //将阿拉伯数字翻译成中文的大写数字
	changeToChinese, //将数字转换为大写金额
	contains, //判断一个元素是否在数组中
	unique, //去重
	union, //求两个集合的并集
	remove, //删除其中一个元素
	max, //最大值
	min, //最小值
	sum, //求和
	average, //平均值
	trim, //去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
	changeCase, //字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
	checkPwd, //检测密码强度
	isObjectEqual, //判断两个对象是否键值相同
	colorToRGB, //16进制颜色转RGBRGBA字符串
	appendQuery, //追加url参数
	toCard, //将 字符串 转换成 银行卡 格式
	formatDate, //将 日期对象/日期time数值 格式化为 字符串 形式
	parseDate, //将字符串解析成日期
	isRUNYear, //是否是闰年
	getIntervalMonth, //返回两个日期相差的月数
	getAges, //获取一个人的年龄:精确到月日
	getCurTimes, //获取当前时间
	timeStampToDate, //时间戳转换成时间
	DateToUnix, //时间转换成时间戳
	intervalDays, //获取两个时间点之间相差多少天
	getDays, //获取一个月多少天
	getDateMonthsToDate, //获取具体时间后几个月的时间
	getArray, //根据传值获取对应的下标
}