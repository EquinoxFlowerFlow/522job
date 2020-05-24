<template>
  <div>
    <Moda :form="row" />
    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        label="Name"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Age"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Gender"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.gebder }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Msg"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.msg }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Hospital"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.hospital }}</span>
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
  import { mapState } from 'vuex';
  import { TEACH_LIST, TEACH_DELETE, TEACH_UPDATE, TEACH_MU_MODA } from '../../constants'
  import Moda from '../modalbox'

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        row: {},
      }
    },
    computed: {
      ...mapState(['list','status'])
    },
    methods: {
      handleEdit (index, row) {
        this.row = row
        this.$store.commit(TEACH_MU_MODA,true)
        this.$store.dispatch(TEACH_UPDATE,row)
      },
      handleDelete (index, row) {
        this.$store.dispatch(TEACH_DELETE,row)
      }
    },
    components: {
      Moda
    },
    created () {
      this.$store.dispatch(TEACH_LIST)
    },
    watch: {
      status (old, nw) {
        console.log(old, nw)
        this.$store.dispatch(TEACH_LIST)
      }
    },
  }
</script>
