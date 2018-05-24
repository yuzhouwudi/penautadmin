<template>


  <el-container id="main">
    <el-header class="header">
      <div class="title">PENAUT</div>
      <div class="text">
        <h3>欢迎来到后台管理系统</h3>
        <div class="head">
          <div class="pic">
            <img src="../assets/img/a1.png" alt="">
          </div>
          <el-button type="text" @click="open6" class="name">{{name}}</el-button>
        </div>
      </div>

    </el-header>

    <el-container>
      <el-aside class="aside" width="250px">
        <el-col>
          <div class="title">
            <div class="pic">
              <img src="../assets/img/a2.png" alt="">
            </div>
            <div class="text">导航菜单</div>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="2">
              <i class="el-icon-tickets"></i>
              <span slot="title" @click="user">用户信息</span>
            </el-menu-item>

            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="add">产品管理</span>
            </el-menu-item>

            <!--</el-submenu>-->
            <el-submenu index="1-1">
              <template slot="title">产品分类</template>
              <el-menu-item index="1-1-1" @click="relax">轻松好事</el-menu-item>
              <el-menu-item index="1-1-2" @click="nut">酥脆坚果</el-menu-item>
              <el-menu-item index="1-1-3" @click="travel">旅游专供</el-menu-item>
              <el-menu-item index="1-1-4" @click="fruit">果脯好牌</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">产品分组</template>
              <el-menu-item index="1-2-1" @click="news">上新</el-menu-item>
              <el-menu-item index="1-2-2" @click="hot">热门</el-menu-item>
              <el-menu-item index="1-2-3" @click="discount">折扣</el-menu-item>
            </el-submenu>


            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title" @click="list">订单管理</span>
            </el-menu-item>

            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title" @click="passedit">密码修改</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main>

        <router-view></router-view>

      </el-main>
    </el-container>
  </el-container>


</template>
<script>

  export default {
    data(){
      return {
        name: ''
      }
    },
    methods: {
      user(){
        this.$router.push('/user')
      },
      nut(){
        this.$router.push('/nut')
      },
      relax(){
        this.$router.push('/relax')
      },
      fruit(){
        this.$router.push('/fruit')
      },
      travel(){
        this.$router.push('/travel')
      },

      news(){
        this.$router.push('/new')
      },
      hot(){
        this.$router.push('/hot')
      },
      discount(){
        this.$router.push('/discount')
      },
      list(){
        this.$router.push('/order')
      },
      passedit(){
        this.$router.push('/manager')
      },

      add(){
        this.$router.push('/nutadd')
      },

      open6() {
        this.$confirm('是否退出本系统', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$http.get('/api/admin/manager/clear').then(res => {
            if (res.body == 'edit') {
              this.$router.push('/login')
            }
          })

          this.$message({
            type: 'success',
            message: '退出成功!',
            showClose: true
          });
        }).catch(() => {
//          this.$message({
//            type: 'info',
//            message: '已取消删除'
//          });
        });
      }
    },

    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.$http.get('/api/admin/manager/').then(res => {
          if (res.body == 'no') {
            vm.$message.error('请先登录')
            vm.$router.push('/login')
          } else {
            vm.name = res.body
          }
        })
      })
    }
  }
</script>

<style scoped lang="scss">
  #main {
    padding: 0 20px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #545c64;
      color: #ffd04b;
      .title {
        width: 250px;
        height: 100%;
        line-height: 56px;
        font-weight: 600;
        color: #fff;
      }
      .text {
        display: flex;
        justify-content: flex-end;
        .head {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-left: 15px;
          .pic {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 10px;
            background: #fff;
            overflow: hidden;
            img {
              margin-top: 4px;
              width: 100%;
            }
          }
          .name {
            font-size: 20px;
            color: #fff;
            margin-left: 15px;

          }
        }
      }

    }
    .el-main {
      box-sizing: border-box;
      padding-left: 20px;
      .top {
        font-size: 25px;
      }
      .router {
        margin-top: 15px;
      }
    }

    .aside {
      text-align: center;
      /*margin-top: 20px;*/
      .title {
        width: 250px;
        height: 56px;
        line-height: 56px;
        display: flex;
        /*background: #c3beb6;*/
        font-weight: 600;
        .pic {
          width: 90px;
          height: 100%;
          margin-left: 10px;
          img {
            height: 100%;
          }
        }
      }
    }

  }
</style>
