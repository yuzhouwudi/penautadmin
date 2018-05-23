
<template>
  <div>

    <el-table
      :data="arr"
      style="width: 100%">

      <el-table-column
        label="用户id"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.pid }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="数量"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.count }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="价格"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.price }}</span>
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
    <el-table
      :data="brr"
      style="width: 100%">


      <el-table-column
        label="订单id"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.dingdanid }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品id"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.goodsid }}</span>
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
  </div>
</template>


<script>
  export default {
    data(){
      return {
        arr:[],
        brr:[]
      }
    },
    created(){
      this.$http.get('/api/admin/order/display').then(res=>{
        this.arr=res.body
      })
      this.$http.get('/api/admin/order/displaytwo').then(res=>{
        this.brr=res.body
      })
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">

</style>
