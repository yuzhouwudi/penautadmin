<template>
  <div id="nutmod">
    <div id="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>产品管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/nut' }">酥脆坚果</el-breadcrumb-item>
        <el-breadcrumb-item>产品详情修改</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="产品名称" prop="name">
        <el-col :span="11">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品单价" prop="count">
        <el-col :span="11">
          <el-input v-model="ruleForm.count"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品数量" prop="price">
        <el-col :span="11">
          <el-input v-model="ruleForm.price"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品分类" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择产品分类">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="产品分组" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="每周上新" name="type"></el-checkbox>
          <el-checkbox label="热门推销" name="type"></el-checkbox>
          <el-checkbox label="折扣专区" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否包邮" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="包邮"></el-radio>
          <el-radio label="不包邮"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item label="图片上传" prop="img">
        <el-upload
          class="upload-demo"
          action="/api/admin/goods/upload"
          multiple
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          :file-list="ruleForm.fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
  export default{
    name: 'nutmod',
    data(){
      return {
        ruleForm: {
          name: '',
          price: '',
          count: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: '',
          fileList: []
        }
        ,
        rules: {
          name: [
            {required: true, message: '请输入产品名称', trigger: 'blur'},
            {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
          ],
          price: [
            {required: true, message: '请输入产品价格', trigger: 'blur'},
            {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'}
          ],
          count: [
            {required: true, message: '请输入产品数量', trigger: 'blur'},
            {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择产品分类', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          type: [
            {type: 'array', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择是否包邮', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写产品描述', trigger: 'blur'}
          ]
        }
      }
    }
    ,
    methods: {
      submitForm()
      {
        let obj = Object.assign({}, this.ruleForm)
        obj.fileList = JSON.stringify(obj.fileList)
        this.$http.post('/api/admin/goods/form',obj,{
            headers:{
                "content-type":"application/json"
            }
        }).then(function (res) {
          console.log(res);
        })
      }
      ,
      resetForm(formName)
      {
        this.$refs[formName].resetFields();
      },

      handleRemove(file, filelist) {

        this.ruleForm.fileList=filelist;
      },
      handleSuccess(res, file, filelist) {
//        console.log(filelist);
        this.ruleForm.fileList=filelist;
      }
    }
    ,
    created()
    {
      let id = this.$route.query.id
      this.$http.get('/api/admin/goods/nutmod?id=' + id).then(res => {
//        console.log(res);
      })
    }

  }
</script>
<style scoped lang='scss'>
  #nutmod {
    #title {
      padding: 0 10px 35px;
      margin-top: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
