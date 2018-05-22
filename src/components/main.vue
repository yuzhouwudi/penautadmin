<template>


  <el-container id="main">
    <el-header class="header">
      <div class="title">PENAUT</div>
      <div class="text">
        <h3>欢迎来到后台管理系统</h3>
        <div class="head">
          <div class="pic">
            <img src="" alt="">
          </div>
          <el-button type="text" @click="open6" class="name">Box</el-button>
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
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!--<el-submenu index="1" >-->
            <!--<template slot="title">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span>产品管理</span>-->
            <!--</template>-->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item-group>
              <template slot="title">产品分类</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="产品分组">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <!--</el-submenu>-->

            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">修改密码</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>


</template>
<script>

  export default {
    data(){
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      open6() {
        this.$confirm('是否退出本系统', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        })
//          .catch(() => {
//          this.$message({
//            type: 'info',
//            message: '已取消删除'
//          });
//        });
      }
    },
    created(){
//            this.$http.get('/api/main').then(response => {
//                console.log(response);
//            })


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
      .text{
        display: flex;
        justify-content: flex-end;
        .head {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .pic {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-left: 10px;
            img {
              width: 100%;
            }
          }
          .name {
            font-size: 20px;
            color: #fff;
            margin-left: 10px;

          }
        }
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
