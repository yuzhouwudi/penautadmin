
<template>
  <div id="user">
    <div id="title">用户信息</div>
    <el-table
      :data="arr"
      style="width: 365px"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="phone"
        label="手机号"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        sortable
        width="180">
      </el-table-column>

    </el-table>


  </div>

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
#user{
  #title{
    padding: 0 10px 5px;
    margin-top: -10px;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
