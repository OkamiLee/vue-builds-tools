<!-- 输入框配置参数 -->
<template>
  <el-form  label-width="110px" v-if="parent.contentType==='dateTime'&&parent.contentStatus&&!parent.selectTabStatus&&parent.navObj.dateTime.status&&parent.parmes.dateTimeList.length>0" ref="inputForm" :model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex]" class="form_box">
    <el-form-item label="类型">
      <el-select v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].type" placeholder="请选择">
        <el-option
          v-for="item in dateType"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="绑定值">
      <el-input v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].value" ></el-input>
    </el-form-item>
    <el-form-item label="	输入框占位文本">
      <el-input v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].placeholder" placeholder="	输入框占位文本"></el-input>
    </el-form-item>

    <el-form-item label="尺寸">
      <el-select v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].size" placeholder="请选择">
        <el-option
          v-for="item in inputSize"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="top">
      <el-input type="number" v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].top" ></el-input>
    </el-form-item>
    <el-form-item label="left">
      <el-input type="number" v-model="parent.parmes.dateTimeList[parent.navObj.dateTime.nowIndex].left" ></el-input>
    </el-form-item>
    <el-form-item class="tac">
      <el-button @click="parent.del">删除</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "inputParme.vue",
      props:['parent'],
      data(){
        return {
          inputSize:[
            {value:"medium",label:"medium"},
            {value:"small",label:"small"},
            {value:"mini",label:"mini"}
          ],dateType:[
            {value:"date",label:"日期选择器"},
            {value:"datetime ",label:"日期时间选择器"},
          ],
        }
      }
    }
</script>

