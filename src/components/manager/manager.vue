
<template>
  <div id="manager">
    <div id="title">修改密码</div>
    <el-table
      :data="arr"
      style="width: 100%">

      <el-table-column
        label="昵称/账号"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="密码"
        width="180">
        <template slot-scope="scope">

          <input type="text" style="margin-left: 10px" v-model="scope.row.password" id="input">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="passedit">修改</el-button>
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
      })
    },
    methods:{
        passedit(){

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
