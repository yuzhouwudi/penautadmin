
<template>
  <div id="manager">
    <div id="title">修改密码</div>
    <el-table
      :data="arr"
      style="width: 100%">

      <el-table-column
        label="账号"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>


      <el-table-column
        label="密码"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="passedit(scope.row.id)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>



<script>
  export default {
    data(){
      return {
        arr:[]
      }
    },
    created(){
      this.$http.get('/api/admin/manager/display').then(res=>{
        this.arr=res.body;
//        console.log(this.arr);
      })
    },
    methods: {
      passedit(id){
        this.$prompt('请输入新密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^\d{3,8}$/,
          inputErrorMessage: '密码格式不正确'
        }).then(({value}) => {
          let obj = {}
          obj.pass = value
          obj.id = id
          this.$http.post('/api/admin/manager/pass',obj,{
            headers: {
              "content-type": 'application/json'
            }
          }).then(res => {
//            console.log(res);
            if(res.body.affectedRows===1){
              this.$message({
                type: 'success',
                message: '密码修改成功，请重新登陆',
              });
              this.$router.push('/login')
            }else{
              this.$message({
                type: 'error',
                message: '修改失败',
              });
            }
          })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
#manager{
  width: 100%;
  height: 100%;
}
</style>
