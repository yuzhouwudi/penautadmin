<template>
  <div id="nutmod">
    <div id="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>产品管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/travel' }">旅行专供</el-breadcrumb-item>
        <el-breadcrumb-item>产品详情修改</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="产品名称" prop="name">
        <el-col :span="11">
          <el-input v-model="ruleForm.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品单价" prop="price">
        <el-col :span="11">
          <el-input v-model="ruleForm.price"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="产品数量" prop="count">
        <el-col :span="11">
          <el-input v-model="ruleForm.count"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="产品分类" prop="fid">
        <el-select v-model="ruleForm.fid" placeholder="请选择产品分类">
          <el-option :label="item.name" :value="item.id" v-for="item in fenlei" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架时间" required>
        <el-col :span="11">
          <el-form-item prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="产品分组" prop="rid">
        <el-checkbox-group v-model="ruleForm.rid">
          <el-checkbox :label="item.id" name="type" v-for="item in recom" :key="item.id">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否包邮" prop="contfree">
        <el-radio-group v-model="ruleForm.contfree">
          <el-radio label="1">包邮</el-radio>
          <el-radio label="0">不包邮</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品描述" prop="des">
        <el-input type="textarea" v-model="ruleForm.des"></el-input>
      </el-form-item>

      <el-form-item label="图片上传" prop="img">
        <el-upload
          class="upload-demo"
          action="/api/admin/goods/upload"
          multiple
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          :file-list="ruleForm.img"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
          fid: '',
          time: '',
          rid: [],
          contfree: '',
          des: '',
          img: [],
        },

        fenlei: [],
        recom: []
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
          fid: [
            {required: true, message: '请选择产品分类', trigger: 'change'}
          ],
          time: [
            {required: true, message: '请选择日期', trigger: 'change'}
          ],
          rid: [
            {type: 'array', trigger: 'change'}
          ],
          contfree: [
            {required: true, message: '请选择是否包邮', trigger: 'change'}
          ],
          des: [
            {required: true, message: '请填写产品描述', trigger: 'blur'}
          ]
        }
      }
    }
    ,
    methods: {
      validate(bool, obj)
      {
        console.log(bool, obj)
      },
      submitForm(formName)
      {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let id = this.$route.query.id
            let obj = Object.assign({}, this.ruleForm)
            obj.img = JSON.stringify(obj.img)
            obj.rid=JSON.stringify(obj.rid)
            obj.time = JSON.stringify(obj.time).slice(1,11)
            this.$http.post('/api/admin/goods/upd?id='+id, obj, {
              headers: {
                "content-type": "application/json"
              }
            }).then((res) =>{
              if(res.body=='ok'){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else{
                this.$message.error('系统错误');
              }
            })
          } else {
            this.$message({
              message: '数据不全，请补充完整',
              type: 'warning'
            });
            return false;
          }
        });

      }
      ,
      resetForm(formName)
      {
        this.$refs[formName].resetFields();
      },

      handleRemove(file, filelist) {
        this.ruleForm.img = filelist;
      },
      handleSuccess(res, file, filelist) {
//        console.log(filelist);
        this.ruleForm.img = filelist;
      }
    }
    ,
    created()
    {
      let id = this.$route.query.id
      this.$http.get('/api/admin/goods/nutmod?id=' + id).then(res => {
//        console.log(res);
        let body = res.body[0]
        if(body.rid) {
          body.rid = JSON.parse(body.rid)
          if (body.img) {
            body.img = JSON.parse(body.img)
          }
        }

        this.ruleForm = body
//        console.log(this.ruleForm);
      })
      this.$http.get('/api/admin/goods/nutfenlei').then(res => {
//        console.log(res);
        this.fenlei = res.body


      })
      this.$http.get('/api/admin/goods/nutrecom').then(res => {
//        console.log(res);
        this.recom = res.body

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
    .upload-demo {
      width: 400px;
      overflow: hidden;
    }
  }
</style>
