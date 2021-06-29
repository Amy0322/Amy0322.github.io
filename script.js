Types =['音樂','攝影','出版','時尚','設計','表演','藝術','科技','教育','遊戲','飲食','空間','社會','在地','公共','影視','休閒','運動','旅行','插畫漫畫','電影動畫','地方創生'];
new Vue({
  el:"#app",
  data :{
        name: null,
        amount: null,
        type: null,
        content: null,
        projects: [],
        errors: []
    },
  methods:{
        checkForm:function(e) {
          if(this.name && this.amount && this.type && this.content) return true;
      this.errors = [];
      if(!this.name) this.errors.push("募資專案名稱");
      if(!this.amount) this.errors.push("募資金額");
      if(!this.type) this.errors.push("類別");
      if(!this.content) this.errors.push("內容簡介");

      e.preventDefault();
    },
    projectSubmit:function(e){
      let project_data = {
        name: this.name,
        amount: this.amount,
        type: this.type,
        content: this.content
      }
      this.projects.push(project_data)
    }
//     onSubmit() {
//       let projectData = {
//         name: this.name,
//         amount: this.amount,
//         type: this.type,
//         content: this.content

//       }
//       this.$emit('project-submitted', projectData)
//       this.name = null
//       this.amount = null
//       this.type = null
//       this.content = null

//         },
//     addReview(projectData) {
//       this.project.push(projectData)
//     }
  }
})