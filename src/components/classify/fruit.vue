<template>
  <div id="nut">
    <div id="title">果脯好牌</div>
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

    <el-pagination
      class="page"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="size"
      layout="total , prev, pager, next, jumper"
      :total="total">
    </el-pagination>

  </div>

</template>


<script>
  export default {
    data(){
      return {
        arr: [],
        total: 0,
        currentPage: 1,
        size:7
      }
    },
    created(){
      this.$http.get('/api/admin/goods/count?id=4').then(res => {
        this.total = res.body[0].total;
//        console.log(res);
      })

      this.$http.get('/api/admin/goods/nut?id=4&nub=1&size='+this.size).then(res => {
        this.arr = res.body;
//        console.log(res);
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
            this.$http.get('/api/admin/goods/nut?id=4&nub=1&size='+this.size).then(res => {
              this.arr = res.body;
//        console.log(res);
            })
          } else {
            this.$message.error('系统错误，请稍后再试');
          }

        })
      },


      handleCurrentChange(val) {
        this.currentPage = val

        this.$http.get('/api/admin/goods/nut?id=4&nub=' + val+'&size='+this.size).then(res => {
          this.arr = res.body;
//          console.log(res,this.arr);
        })

      }
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
    .page {
      position: fixed;
      bottom: 50px;
      right: 50px;
      z-index: 100;
    }
  }
</style>
