<template>
  <div class="login-page">
    <section class="login-container">
      <h1>elm后台管理系统</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示：</p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </section>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login({
              user_name: this.loginForm.username,
              password: this.loginForm.password
            }).then(res => {
              if (res.data.status === 1) {
                this.$message({
                  message: res.data.success,
                  type: 'success'
                })
                this.$router.push('/')
              } else {
                this.$message({
                  message: res.data.message,
                  type: 'error'
                })
              }
            }).catch(err => {
              this.$message({
                message: err,
                type: 'error'
              })
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login-page {
    background-color: #324057;
    width: 100%;
    height: 100%;

    .login-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 200px;
      background-color: #fff;
      padding: 20px;
      margin: 0 auto;
      width: 380px;
      height: 260px;
      border-radius: 10px;

      h1 {
        text-align: center;
        margin-top: -90px;
        color: #fff;
        font-weight: 100;
      }

      .tip {
        color: #FF0000;
        font-size: 12px;
        text-align: center;
      }

      .login-form {
        margin-top: 60px;

        .submit {
          width: 100%;
        }
      }
    }
  }
</style>
