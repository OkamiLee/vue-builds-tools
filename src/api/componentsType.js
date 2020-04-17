/*
* 组件拖拽完成后内容区域组件生成元素类型判断，根据类型生成不同的数据
* */
import store from "../store";
export function componentsType(obj){
	let _this = obj.parent,left=_this.left,top=_this.top;
	let id = _this.layoutIndex;
	if(_this.contentType==='input'){//input拖拽数据变更
		_this.parmes.inputForm.push({
			classify:"input",
			value:"value",
			placeholder:"placeholder",
			size:"medium",
			label:"输入框",
			type:"text",
			prefix:"el-icon-search",
			suffix:"el-icon-close",
			left:left,
			top:top,
			width:200,
			id:id,
		});
	}else if(_this.contentType==='button'){//button拖拽数据变更
		_this.parmes.buttonList.push({
			classify:"button",
			value:"按钮",
			icon:" ",
			size:"el-button--medium",
			type:"el-button--primary",
			roundStatus:"0",
			circleStatus:"0",
			plainStatus:"0",
			left:left,
			top:top,
			id:id,
		});
	}
	else if(_this.contentType==='select'){
		_this.parmes.selectList.push({
			classify:"select",
			value:'请选择',
			filterable:false,//是否可搜索
			left:left,
			size:'medium',
			top:top,
			data:[],
			label:"下拉框",
			id:id,
		});
	}else if(_this.contentType==='table'){
		_this.parmes.tableList.push({
			classify:"table",
			width:800,
			height:200,
			left:left,
			top:top,
			stripe:false,
			border:false,
			size:"medium",
			data:[{id:1,date:"2019-11-07",type:"表格"},{id:2,date:"2019-11-07",type:"表格"}],
			label:[{prop:"id",name:'id'},{prop:"date",name:'日期'},{prop:"type",name:'类型'}],
			id:id,
		});
	}else if(_this.contentType==='radio'){
		_this.parmes.radioList.push({
			classify:"radio",
			left:left,
			top:top,
			size:"medium",
			label:"单选框",
			border:false,
			id:id,
		});
	}else if(_this.contentType==='checkbox'){
		_this.parmes.checkboxList.push({
			classify:"checkbox",
			left:left,
			top:top,
			size:"medium",
			label:"多选框",
			border:false,
			id:id,
		});
	}else if(_this.contentType==='num'){
		_this.parmes.numList.push({
			classify:"num",
			left:left,
			top:top,
			size:"medium",
			min:0,
			max:10,
			num:1,
			id:id,
		});
	}
	else if(_this.contentType==='dateTime'){
		_this.parmes.dateTimeList.push({
			classify:"dateTime",
			left:left,
			top:top,
			size:"medium",
			placeholder:"请选择事件",
			value:"2019-11-08",
			type:"date",
			id:id,
		});
	}
	//_this.parmes.layoutList.length
}
