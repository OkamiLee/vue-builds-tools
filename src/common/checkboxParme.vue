<!-- 多选框配置参数 -->
<template>
  <el-form  label-width="130px" v-if="parent.contentType==='checkbox'&&parent.contentStatus&&!parent.selectTabStatus&&parent.navObj.checkbox.status&&parent.parmes.checkboxList.length>0" ref="inputForm" :model="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex]" class="form_box">
    <el-form-item label="是否显示边框">
      <el-switch v-model="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex].border"  inactive-color="#999"></el-switch>
    </el-form-item>
    <el-form-item v-if="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex].border" label="尺寸">
      <el-select v-model="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex].size" placeholder="请选择">
        <el-option
          v-for="item in tableSize"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="top">
      <el-input type="number" v-model="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex].top" ></el-input>
    </el-form-item>
    <el-form-item label="left">
      <el-input type="number" v-model="parent.parmes.checkboxList[parent.navObj.checkbox.nowIndex].left" ></el-input>
    </el-form-item>
    <el-form-item class="tac">
      <el-button @click="parent.del">删除</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "checkboxParme",
    props:['parent'],
    data(){
      return {
        tableSize:[
          {value:"medium",label:"medium"},
          {value:"small",label:"small"},
          {value:"mini",label:"mini"}
        ]
      }
    }
  }
</script>

