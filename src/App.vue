<template>
  <div id="app">
    <el-form
      :inline="true"
      :model="data"
      class="demo-form-inline"
      :rules="rules"
      ref="form"
      :validate-on-rule-change="false"
     >
      <el-form-item label="审批人" prop="user">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addRule">Add Rule</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        user: '',
        region: '区域二'
      },
      rules: {
        user: [
          { required: true, trigger: 'change', message: '用户名必须录入' }
          // { validator: userValidator, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    addRule () {
      const userValidator = (rule, value, callback) => {
        if (value.length > 3) {
          callback()
        } else {
          callback(new Error('用户名长度必须大于3'))
        }
      }

      const newRule = [
        ...this.rules.user,
        { validator: userValidator, trigger: 'change' }
      ]
      this.rules = Object.assign({}, this.rules, { user: newRule })
    },

    onSubmit () {
      // console.log(this.data)
      this.$refs.form.validate((isValid, errors) => {
        console.log(isValid)
        console.log(errors)
      })
    }
  }
}
</script>
<style>
</style>
