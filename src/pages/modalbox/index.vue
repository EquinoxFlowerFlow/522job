<template>
  <div>
    <el-button type="success"  @click="modaAdd" >添加</el-button>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Name" prop="name">
          <el-input v-model.number="form.name"></el-input>
        </el-form-item>

        <el-form-item label="Age" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>

        <el-form-item label="Gender" prop="gender">
          <el-input v-model.number="form.gender"></el-input>
        </el-form-item>

        <el-form-item label="Msg" prop="msg">
          <el-input v-model.number="form.msg"></el-input>
        </el-form-item>
        
        <el-form-item label="Hospital" prop="hospital">
          <el-input v-model.number="form.hospital"></el-input>
        </el-form-item>

        <el-form-item label="Id" prop="id">
          <el-input v-model.number="form.id"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="quxiao">取 消</el-button>
        <el-button type="primary" @click="add">增加</el-button>
        <el-button type="primary" @click="update">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import { TEACH_ADD, TEACH_UPDATE, TEACH_MU_MODA } from '../../constants'
import { mapState } from 'vuex';
  export default {
    data() {
      return {
        dialogTableVisible: false,
      };
    },
    methods: {
      add () {
        this.$store.commit(TEACH_MU_MODA,false)
        this.$store.dispatch(TEACH_ADD, this.form)
      },
      update () {
        this.$store.commit(TEACH_MU_MODA,false)
        this.$store.dispatch(TEACH_UPDATE, this.form)
      },
      quxiao () {
        this.$store.commit(TEACH_MU_MODA,false)
      },
      modaAdd () {
        this.$store.commit(TEACH_MU_MODA,true)
      }
      
    },
    props:['form','modaa'],
    computed: {
      ...mapState(['status','dialogFormVisible']),
    },
    watch: {
      status (old, nw) {
        console.log(old, nw)
      }
    },
  }
</script>


