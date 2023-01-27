import Vue from "vue";
import dayjs from "dayjs";
// 中文配置
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
// 相对时间
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// 全局过滤器
Vue.filter("relativeTime", (value) => {
	return dayjs().to(dayjs(value));
})


