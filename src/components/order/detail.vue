<template>
  <div id="order">
    <div id="title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/order' }">订单列表</el-breadcrumb-item>
        <el-breadcrumb-item>订单详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-table
      :data="arr"
      style="width: 74%">

      <el-table-column
        label="用户名"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.goods }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="价格"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.price }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="数量"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.count }}</span>
        </template>
      </el-table-column>


    </el-table>
  </div>


</template>
<script>
  export default {
    data(){
      return {
        name: "",
        arr: [],
      }
    },
    created(){
      let dingdanid = this.$route.query.dingdanid;
      let pid = this.$route.query.pid;
      this.$http.get('/api/admin/order/detail?pid=' + pid).then(res => {
        this.name = (res.body[0].name);
      })


      this.$http.get('/api/admin/order/goods?dingdanid=1').then(res => {

        this.$nextTick(function () {
          let that = this
          res.body.forEach(function (val, index) {
            fetch('/api/admin/order/find?id=' + val.goodsid).then(res => res.json()).then(res => {
              let obj = {
                name: that.name,
                price: res[0].price,
                goods: res[0].name,
                count: val.count,
              };
              that.arr.push(obj);
            })
          })
        })
      })
    },
  }
</script>

<style scoped lang="scss">
  #order {
    #title {
      padding: 0 10px 15px;
      margin-top: 0;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
