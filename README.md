# tools
前端常用js工具方法
#
module.exports = {
	isEmail, //邮箱
	
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
}
