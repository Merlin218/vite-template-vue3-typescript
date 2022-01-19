export type responseType = {
	code: string;
	msg: string;
	data: any;
};

export type CustomConfig = {
	repeatRequestCancel?: boolean; // 取消重复请求，默认为true
	loading?: boolean; // 是否开启loading层效果, 默认为true
	dataFormat?: boolean; // 是否开启简洁的数据结构响应, 默认为true
	codeMessageShow?: boolean; // 是否开启respond中code不为0时的信息提示, 默认为false
	loadingTitle?: string;
};
