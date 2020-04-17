<!-- 按钮配置参数 -->
<template>
  <el-form  label-width="100px"   class="form_box">
    <el-form-item label="文本">
      <el-input v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].value" ></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].type" placeholder="请选择">
        <el-option
          v-for="item in buttonType"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="尺寸">
      <el-select v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].size" placeholder="请选择">
        <el-option
          v-for="item in buttonSize"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图标">
      <el-select v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].icon" placeholder="请选择">
        <el-option
          v-for="item in buttonIcon"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否圆角">
      <el-radio-group v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].roundStatus">
        <el-radio label="1">是</el-radio>
        <el-radio label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否圆形">
      <el-radio-group v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].circleStatus">
        <el-radio label="1">是</el-radio>
        <el-radio label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否填充">
      <el-radio-group v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].plainStatus">
        <el-radio label="1">是</el-radio>
        <el-radio label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="top">
      <el-input type="number" v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].top" ></el-input>
    </el-form-item>
    <el-form-item label="left">
      <el-input type="number" v-model="parent.nowComponData.layout[parent.nowSelected.layIndex].children[parent.nowSelected.type][parent.nowSelected.index].left" ></el-input>
    </el-form-item>
    <el-form-item class="tac">
      <el-button @click="parent.componDel">删除</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: "buttonParme",
      props:['parent'],
      data(){
        return{

          buttonType:[
            {value:"el-button--primary",label:"primary"},
            {value:"el-button--success",label:"success"},
            {value:"el-button--info",label:"info"},
            {value:"el-button--warning",label:"warning"},
            {value:"el-button--danger",label:"danger"},
            {value:"el-button--text",label:"text"},
          ],
          buttonSize:[
            {value:"el-button--medium",label:"medium"},
            {value:"el-button--small",label:"small"},
            {value:"el-button--mini",label:"mini"}
          ],
          buttonIcon:[
            {value:" ",label:"none"},
            {value:"el-icon-edit",label:"edit"},
            {value:"el-icon-delete",label:"delete"},
            {value:"el-icon-setting",label:"setting"},
            {value:"el-icon-plus",label:"plus"},
            {value:"el-icon-download",label:"download"},
            {value:"el-icon-upload",label:"upload"},
            {value:"el-icon-bell",label:"bell"},
            {value:"el-icon-share",label:"share"},
            {value:"el-icon-connection",label:"connection"},
          ]
        }
      }
    }
</script>

