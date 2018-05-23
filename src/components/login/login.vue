<template>
  <div id="page">
    <div class="mask"></div>
    <div id="login">
      <div class="user">
        <label>账号：</label>
        <el-input
          class="input"
          size="small"
          placeholder="请输入内容"
          v-model="input10"
          clearable>
        </el-input>

      </div>
      <div class="pass">
        <label>密码：</label>
        <el-input
          class="input"
          size="small"
          placeholder="请输入内容"
          v-model="input11"
          name="user"
          clearable>
        </el-input>
      </div>
      <div id="code">
        <label>验证码：</label>
        <el-input
          class="code"
          size="small"
          placeholder="请输入内容"
          v-model="input12"
          name="pass"
          clearable>
        </el-input>
        <img src="/api/admin/login/code" alt="" class="codepic"
             onclick="this.src='/api/admin/manager/code?'+Math.random()">
      </div>
      <el-button size="mini" type="submit" @click="check">提交</el-button>

    </div>

  </div>

</template>
<script>
  export default {
    data(){
      return {
        input10: '',
        input11: '',
        input12: ''
      }

    },
    methods: {
      check(){
        let obj = {}
        obj.user = this.input10
        obj.pass = this.input11
        obj.code = this.input12
        this.$http.post('/api/admin/login/check', obj, {
          headers: {
            "content-type": 'application/json'
          }
        }).then(res => {
//                console.log(res);
          if (res.body != 'ok') {
            this.$message.error(res.body);
          } else {
            this.$message({
              message: '登陆成功',
              type: 'success',
              center:true
            });
            this.$router.push('/')
          }

        })
      }
    }
  }
</script>

<style scoped lang="scss">
  #page {
    width: 100%;
    height: 645px;
    background: url("../../assets/img/lo5.png") no-repeat center;
    background-size: cover;
    position: relative;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .3);
      z-index: 10;
    }
  }

  #login {
    width: 370px;
    height: 200px;
    z-index: 110;
    padding: 30px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    position: fixed;
    color: #fff;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -200px;
    background: #545c64;
    .user, .pass, #code {
      width: 100%;
      display: flex;
      margin-bottom: 15px;
      label {
        margin-right: 15px;
      }
    }
    .input {
      width: 300px;

    }
    #code {
      label {
        margin-right: 0;

      }
      .code {
        width: 150px;
      }
      .codepic {

        display: block;
        width: 120px;
        height: 40px;
        margin: -5px auto 0;
        border-radius: 10px;

      }
    }

  }
</style>
