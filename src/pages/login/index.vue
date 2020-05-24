<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      {{username}}
    </el-form>
  </div>
</template>

<script>
  import {TEACH_LOGIN, } from "../../constants";
  import { mapState } from 'vuex'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        console.log(value)
        if (!value) {
          return callback(new Error('账号不能为空'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          ausernamege: [
            { validator: checkAge, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    computed: {
      ...mapState(['username'])
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch(TEACH_LOGIN,this.ruleForm)
            if (this.$store.state.username) {
              this.$router.push('/home')
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    watch: {
      username (old, ne) {
        this.$router.push('/home')
      }
    },
  }
</script>



