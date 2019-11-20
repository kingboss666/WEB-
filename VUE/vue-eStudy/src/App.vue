<template>
    <a-layout id="app">
      <!-- 头部 -->
      <a-layout-header class="header flexrow">
        <h2>蝉壳 eStudy</h2>
        <div class="right flexrow" v-if="loggedIn">
          <!-- 老师头部信息 -->
          <div v-if="isTeacher" class="flexrow">
            <h4>{{info.name}}</h4>
            <a-button icon="file-add" class="vcenter" type="primary" @click="establishWork = true">新建作业</a-button>
            <p></p>
          </div>
          <!-- 学生头部信息 -->
          <div class="flexrow" v-else>
            <h4 class="flexcol">
              <span>{{ info.full_name }}</span>
              <span>学号: {{ info.name }}</span>
            </h4>
            <h5 class="flexcol">
              <span v-for="(org,index) in student.orgs" :key="`${org}_${index}`">{{org}}</span>
            </h5>
            <div>
              <span class="lable">{{student.stats.uncommitted}}个作业待提交</span>
              <span class="lable">{{student.stats.revising}}个作业待批改</span>
              <span class="lable">{{student.stats.improvable}}个作业需完善</span>
              <span class="lable">{{student.stats.finished}}个作业已完成</span>
            </div>
          </div>
          <a href="https://vipgit.chanke.xyz" target="_blank" class="vcenter"> 
            <a-button icon="home">代码仓库</a-button>
          </a>
          <a-button icon="logout" class="vcenter" @click="$store.dispatch('user/logout')">退出</a-button>
        </div>
      </a-layout-header>
      <a-modal 
        :visible="establishWork"
        :footer="null"
        @cancel="establishWork = false">
        <form>
          <a-form-item label="课程">
             <a-select v-model="establishForm.class">
              <a-select-option 
                :key="`status_${index}`"
                v-for="(curriculum_name,index) in teacher.orgs" 
                :value="curriculum_name.id">
                {{curriculum_name.full_name}}
              </a-select-option>
             </a-select>
          </a-form-item>
          <a-form-item label="作业名称">
             <a-input v-model="establishForm.name"></a-input>
          </a-form-item>
          <a-form-item label="开始/结束日期">
             <a-range-picker @change="onChange" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="save">保存</a-button>
          </a-form-item>
        </form>
      </a-modal>
      <!-- 主体内容 -->
      <a-layout-content>
        <app-authrization v-if="!loggedIn"></app-authrization>
        <div v-else>
          <app-teacher v-if="isTeacher" :teacher="teacher"></app-teacher>
          <app-student v-else :student="student"></app-student>
        </div>
      </a-layout-content>
    </a-layout>
</template>

<script>
import {api} from './utils/api'
import {mapState} from 'vuex'
import Authrization from './components/Authrization.vue'
import Teacher from './components/Teacher.vue'
import Student from './components/Student.vue'

export default {
  name: 'app',
  data(){
    return{
      establishWork: false,
      establishForm:{
        class:"4",
        name: "",
        date: ""
      },
      student: {
        orgs: [],
        stats: {},
        assignments: []
      },
      teacher : {
        orgs: [],
        assignments: []
      }
    }
  },
  computed:{
    ...mapState('user',["info","loggedIn"]),
    isTeacher(){
      return this.info.is_admin > 0
    }
  },
  created(){
    if(this.loggedIn){
      this.loadDatails();
    }
  },
  watch: {
    loggedIn(val){
      if(val){
        this.loadDatails();
      }
    }
  },
  methods: {
    loadDatails(){
      if(this.isTeacher){
        api.get('/teacher/detail').then(data => {
          // console.log(data)
          this.teacher.orgs = data.orgs;
          this.teacher.assignments = data.assignments;
        })
      }else{
        api.get('/student/detail').then( data =>{
          // console.log(data)
          this.student.orgs = data.orgs;
          this.student.stats = data.stats;
          this.student.assignments = data.assignments;
        })
      }
    },
    onChange(date, dateString){
      this.establishForm.date = dateString;
    },
    save(){
      const form = {
        org_id: this.establishForm.class,
        name: this.establishForm.name,
        start_time: this.establishForm.date[0],
        end_time: this.establishForm.date[1]
      }
      api.post('/teacher/createAssignment',form).then( () =>{
        this.loadDatails()
      }).finally(()=>{
        this.establishWork = false;
      })
    }
  },
  components:{
    'app-authrization': Authrization,
    'app-teacher': Teacher,
    'app-student': Student,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
.header{
  font-size: 1.1em;
  h2,h4,h5{
    color: white;
  }
  .right > .flexrow > * {
    margin-left: 25px
    
  }
  .lable{
    padding: 0 5px;
    color: white;
  }
}
.flexrow{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.right{
  margin-left: auto;
}
.flexcol{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  height: 100%;
  span{
    flex: 1;
    max-height: 20px;
    line-height: 20px;
  } 
}
.vcenter{
  align-self: center;
}
</style>
