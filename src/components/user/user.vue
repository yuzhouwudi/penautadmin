
<template>
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

        <span style="margin-left: 10px">{{ scope.row.password }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
  export default {
    data(){
      return {
        arr:[],
      }
    },
    created(){

      this.$http.get('/api/admin/user/display').then(res=>{
        this.arr=res.body;
//                console.log(this.arr)
      })

    }
  }
</script>

<style scoped lang="scss">

</style>
