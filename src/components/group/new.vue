<template>
  <div id="nut">
    <div id="title">每周上新</div>
    <el-table
      :data="arr"
      style="width: 100%">
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>单价: {{ scope.row.price }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="库存"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-goods"></i>
          <span style="margin-left: 10px">{{ scope.row.count }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>



  </div>

</template>


<script>
  export default {
    data(){
      return {
        arr: [],
        list: [],

        currentPage1: 1,

      }
    },
    created(){
      this.$http.get('/api/admin/goods/new').then(res => {
        let arr = [];
        res.body.forEach(val=>{
            arr.push(JSON.parse(val))
        })

        this.arr=arr
      })
    },
    methods: {
      handleEdit(id){
        this.$router.push('/nutmod?id=' + id)
      },
      handleDelete(id){
        this.$http.get('/api/admin/goods/del?id=' + id).then(res => {
          if (res.body.affectedRows === 1) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.$http.get('/api/admin/goods/nut').then(res => {
              this.arr = res.body;
            })
          } else {
            this.$message.error('系统错误，请稍后再试');
          }

        })
      },


    }
  }
</script>

<style scoped lang="scss">
  #nut {
    #title {
      padding: 0 10px 5px;
      margin-top: -10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
