<!--单个组件编辑完成保存时参数-->
<template>
  <el-form ref="form"  label-width="80px">
		<el-form-item label="导航标识">
			<el-input v-model="parent.componentParme.label" placeholder="请输入导航标识"></el-input>
		</el-form-item>
    <el-form-item label="组件名称">
      <el-input v-model="parent.componentParme.name" placeholder="请输入组件名称"></el-input>
    </el-form-item>
    <el-form-item label="路由名称">
      <el-input v-model="parent.componentParme.path" placeholder="请输入组件名称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="parent.conponentStatus = false">取 消</el-button>
      <el-button type="primary" @click="saveComponent()">创建组件</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: "componentParmes",
      props:['parent'],
      data(){
        return {
          dialogVisible:false,
        }
      },
      methods:{
        saveComponent(){//保存当前组件数据
          var _this = this;
          if(this.parent.componentParme.name===""){
            this.$message('组件名称为必填项');
            return ;
          };
          var comstatus = true,obj = {},nowindex = 0;
          this.parent.resultData.pageData.forEach((v,i)=>{
            if(v.label===this.parent.componentParme.name&&v.path===this.parent.componentParme.path){//如果当前保存的组件名称重复 缓存当前组件数据（用于后续内容覆盖）
              obj = JSON.parse(JSON.stringify(v));//comstatus 当前组件名称是否重复
              nowindex = i;//nowindex当前组件名称重复的索引
              comstatus = false;//obj 当前组件重复缓存的数据，
            }
          });
          if(!comstatus){//组件名称重复时是否覆盖
            this.$confirm('组件名称相同，组件内容是否覆盖', '警告',{
              distinguishCancelAndClose: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            }).then(() => {
              _this.parent.resultData.pageData[nowindex] = obj;//覆盖原始数据
              _this.parent.parmes = obj.data;//内容区域组件数据赋值
              _this.parent.init();
              _this.parent.conponentStatus = false;
              _this.parent.contentStatus = false;
            }).catch(action => {
              this.$message('已取消');
            });
          }else{//组件名称未重复直接新增一条组件数据
            this.parent.resultData.pageData.push({
              id:this.parent.resultData.pageData.length,
              label:this.parent.componentParme.name,
              active:false,
							name:this.parent.componentParme.label,
              path:this.parent.componentParme.path,
              data:JSON.parse(JSON.stringify(this.parent.parmes)),
              children:[]
            });
            this.$message({
              message:"创建成功",
              type:"success",
              duration:800,
              onClose(){
                _this.parent.init();
                _this.parent.conponentStatus = false;
                _this.parent.contentStatus = false;
              }
            });
          }
          /**/
        }
      }
    }
</script>

<style scoped>

</style>
