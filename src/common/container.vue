<!--拖放对象显示组件-->
<template>
	<el-row style="height: 100%;">
		<el-form v-for="(k,i) in parent.nowComponData.layout" class="layoutItem"  :inline="k.inlineFrom" labelWidth="80px" :style="{width:k.width+'px',height:k.height+'px',top:k.top+'px',left:k.left+'px'}" :key="i" :cid="i" >
			<el-row class="posEle layoutSubItem " @click.native.self="changeIndex" kind="layout"  >
				<!--输入框-->
				<el-row v-for="(v,n) in k.children.input" @click.native.self="changeIndex" class="cliEle" :key="v.label+n" type="text" kind="input" :parentIndex="i" :nowIndex="n"  :style="{top:v.top+'px',left:v.left+'px',backgroundColor:(parent.nowSelected.type==='input'&&parent.nowSelected.index==n&&parent.nowSelected.layIndex==i)?'#ddd':'#f6f5f5'}"  >
					<span>{{v.label}}</span>
					<el-input v-model="v.value"  :prefix-icon="v.prefix" :style="{width:v.width+'px'}" :suffix-icon="v.suffix" :size="v.size" :type="v.type" :placeholder="v.placeholder"></el-input>
				</el-row>
				<!--按钮-->
				<el-row v-for="(v,n) in k.children.button" @click.native.self="changeIndex" class="cliEle" :key="v.label+n"  kind="button" :parentIndex="i" :nowIndex="n"  :style="{top:v.top+'px',left:v.left+'px',backgroundColor:(parent.nowSelected.type==='button'&&parent.nowSelected.index==n&&parent.nowSelected.layIndex==i)?'#ddd':'#f6f5f5'}"  >
					<el-button class="el-button" :icon="v.icon" :plain="v.plainStatus==1?true:false" :round="v.roundStatus==1?true:false" :circle="v.circleStatus==1?true:false" :class="[v.type,v.size]"  >{{v.value}}</el-button>
				</el-row>
				<!--下拉框-->
				<el-row v-for="(v,n) in k.children.select" @click.native.self="changeIndex" class="cliEle" :key="v.label+n"  kind="select" :parentIndex="i" :nowIndex="n"  :style="{top:v.top+'px',left:v.left+'px',backgroundColor:(parent.nowSelected.type==='select'&&parent.nowSelected.index==n&&parent.nowSelected.layIndex==i)?'#ddd':'#f6f5f5'}"  >
					<span>{{v.label}}</span>
					<el-select v-model="v.value" :size="v.size" :filterable="v.filterable" >
						<el-option v-for="(m,j) in v.data" :key="j+m.label" :value="m.value">{{m.label}}</el-option>
					</el-select>
				</el-row>
			</el-row>
		</el-form>
	</el-row>
</template>

<script>
	import {componentsType} from '../utils/componentsType'
  export default {
    name: "item",
    props:['parent'],
		data(){
    	return {

			}
		},
    mounted(){
    	var _this = this;
			$('.content').droppable({//内容区域放置
				accept: ".layout",
				drop:function(e,u){
					_this.parent.nowComponData.layout.push({
						type:'layout',
						parmes:{
							fromData:true,//当前布局容器是否为表单
							inlineFrom:true,//是否为行内表单 配合（fromData属性使用）
							labelWidth:80,
						},
						top:u.position.top-1,
						left:u.position.left-200,
						width:500,
						height:100,
						children:{//该容器下所有子级元素集合
							input:[],
							button:[],
							select:[],
							radio:[],
							checkbox:[],
							table:[],
							date:[]
						}
					});
					//_this.subComponent(_this.parent.nowComponData.layout.length-1);
					//_this.parent.nowSelected.layIndex = _this.parent.nowComponData.layout.length-1;//设置布局容器的索引，用于后续元素更改和插入

					_this.$nextTick(()=>{

						$('.layoutItem').draggable({//布局容器拖动
							containment:".content",
							cancel:".posEle",
							start(e,u){
								e.stopPropagation();
							},
							stop(e,u){
								var index = e.target.getAttribute('cid');
								_this.parent.nowComponData.layout[index].top = u.position.top;
								_this.parent.nowComponData.layout[index].left = u.position.left;
							}
						});

						$('.layoutItem').resizable({//布局改变大小
							containment:".content",
							stop(e,u){
								var index = u.element[0].getAttribute('cid');
								_this.parent.nowComponData.layout[index].width = u.size.width;
								_this.parent.nowComponData.layout[index].height = u.size.height;
							}
						});

						$('.layoutItem').droppable({//布局放置
							accept: ".subItem",
							drop(e,u){
								var type = u.draggable[0].getAttribute('type');
								var i = e.target.getAttribute('cid');
								componentsType({
									that:_this,
									index:i,
									type:type,
									top:u.position.top-$('.layoutItem').eq(i).offset().top,
									left:u.position.left-$('.layoutItem').eq(i).offset().left,
								});
								_this.parent.nowSelected.index = _this.parent.nowComponData.layout[i].children[type].length-1;//设置布局容器下子组件的索引（用于配置右侧组件参数）
								_this.parent.nowSelected.layIndex = i;
								_this.parent.nowSelected.type = type;//设置布局容器下子组件的类型（用于配置右侧组件参数）

								_this.$nextTick(()=>{
									_this.subComponent(i);
								})
							}
						})
					})
				}
			});
    },
    methods:{
			changeIndex(e,type){
				if(e.target.getAttribute('type')==='layout'){
					this.subComponent(e.target.getAttribute('cid'));
				}else{
					this.parent.nowSelected.type = e.target.getAttribute('kind');
					this.parent.nowSelected.layIndex = e.target.getAttribute('parentIndex');
					this.parent.nowSelected.index = e.target.getAttribute('nowIndex');
				}
			},
			subComponent(i){
				var _this = this;
				$('.cliEle').draggable({//组件元素拖动
					//snap:true,
					containment:$('.layoutSubItem').eq(i),
					stop(e,u){
						_this.parent.nowSelected.type = e.target.getAttribute('kind');
						_this.parent.nowSelected.layIndex = e.target.getAttribute('parentIndex');
						_this.parent.nowSelected.index = e.target.getAttribute('nowIndex');
						_this.parent.nowComponData.layout[_this.parent.nowSelected.layIndex].children[_this.parent.nowSelected.type][_this.parent.nowSelected.index].top = u.position.top;
						_this.parent.nowComponData.layout[_this.parent.nowSelected.layIndex].children[_this.parent.nowSelected.type][_this.parent.nowSelected.index].left = u.position.left;
					}
				});
			}
    },
  }

</script>
<style scoped>
	.layoutItem{
		border: 1px solid #ddd;
		padding: 15px;
	}
	.layoutSubItem{
		background-color: #fbfbfb;
		height: 100%;
	}
</style>




