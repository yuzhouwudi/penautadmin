<template>

  <el-table
    :data="arr"
    style="width: 100%">

    <el-table-column
      label="昵称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="用户"
      width="180">
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{scope.row.account}}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="订单状态"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px" v-if="scope.row.status==0">{{ a }}</span>
        <span style="margin-left: 10px" v-if="scope.row.status==1">{{ b }}</span>
        <span style="margin-left: 10px" v-if="scope.row.status==2">{{ c }}</span>
      </template>
    </el-table-column>


    <el-table-column label="查看">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看订单详情
        </el-button>

      </template>
    </el-table-column>


    <el-table-column label="修改">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="Edit(scope.row)">修改订单状态
        </el-button>

      </template>
    </el-table-column>


  </el-table>

</template>


<script>
  export default {
    data(){
      return {
        arr: [],
        name: "",
        a: '未完成',
        b: "已发货",
        c: "已完成"
      }
    },
    created(){
      this.$http.get('/api/admin/order/display').then(res => {
        let brr = res.body;
//        console.log(brr)
        this.$nextTick(function () {
            let that=this
            brr.forEach(function (val,index) {
                that.$http.get('/api/admin/order/detail?pid=' + val.pid).then(res => {
//                    console.log(res);
                    let obj={
                        name:res.body[0].name,
                        account:res.body[0].account,
                        status:brr[index].status,
                        id:brr[index].id,
                        pid:brr[index].pid
                    }
                    that.arr.push(obj)
//                    console.log(that.arr);
                })
            })
        })
      })
    },


    methods: {
      handleEdit(index, val){
        let dingdanid = val.id;
        let pid = val.pid;
        let count = val.count;
        this.$router.push(`/ordeatil?dingdanid=${dingdanid}&pid=${pid}`)
  },
      Edit(a){
        if (a.status == 2) {
          a.status = 0;
        } else {
          a.status++;
        }
        let id = a.id;
        let status = a.status;
        this.$http.get('/api/admin/order/alter?id=' + id + '&status=' + status).then(res => {
//                console.log(res);
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
