<template>
  <div class="admin-setting">
    <h3>管理员信息</h3>
    <section>
      <ul>
        <li><span>姓名：</span><span>{{adminInfo ? adminInfo.user_name : ''}}</span></li>
        <li><span>注册时间：</span><span>{{adminInfo ? adminInfo.create_time : ''}}</span></li>
        <li><span>管理员权限：</span><span>{{adminInfo ? adminInfo.admin : ''}}</span></li>
        <li><span>管理员 ID：</span><span>{{adminInfo ? adminInfo.id : ''}}</span></li>
        <li>
          <span>更换头像：</span>
          <span>{{adminInfo ? adminInfo.avatar : ''}}</span>
          <el-upload
            class="avatar-uploader"
            :action="adminInfo ? baseUrl + '/admin/update/avatar/' + adminInfo.id : ''"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="adminInfo && adminInfo.avatar" :src="adminInfo ? baseImgPath + adminInfo.avatar : ''" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { baseUrl, baseImgPath } from '@/config/env'

  export default {
    data () {
      return {
        baseUrl,
        baseImgPath
      }
    },
    computed: {
      ...mapState({
        adminInfo: ({admin}) => admin.info
      })
    },
    methods: {
      handleAvatarSuccess (res, file) {
        if (res.status === 1) {
          this.adminInfo.avatar = res.image_path
        } else {
          this.$message.error('上传图片失败！')
        }
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .admin-setting {
    text-align: center;
    color: #666;

    h3 {
      font-size: 24px;
      font-weight: 100;
    }

    section {
      width: 50%;
      text-align: left;
      margin: 20px auto 10px;
      padding: 20px;
      background-color: #f9fafc;

      li {
        line-height: 55px;

        span {
          font-size: 16px;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
