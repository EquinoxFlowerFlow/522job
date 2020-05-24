<template>
  <div>
    <el-container>
      <el-aside >
        <Nav/>
      </el-aside>
      <el-main>
        <Tab />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../nav'
  import Tab from '../table'
  export default {
    components: {
      Nav,
      Tab,
    }
  }
</script>



