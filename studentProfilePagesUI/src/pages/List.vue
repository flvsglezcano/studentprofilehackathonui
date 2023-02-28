<script setup >
import StudentView from '../components/StudentView.vue';

/**
 * Props
 */
 const newStudentId = { type:String, required: true, default: () => "0" };
</script>
<template>
  <h1 class="green">Students</h1>
  <div  id="divStudents">    
     <p class="text-right"><router-link to="/edit" :studentId="newStudentId"><button class="btn btn-success" id="btnCreate">Create</button></router-link></p>
  
    <hr/>
    <div class="row" id="divListHeader">
      <div class="col-1">Id</div>
      <div class="col-2">Name</div>
      <div class="col-2">Date of Birth</div>
      <div class="col-1">Grade</div>
      <div class="col-2 ">Address</div>
      <div class="col-2">Phone</div>
      <div class="col-2"></div>      
    </div>
    <hr/>
    <div class="row" id="divListBody">
        <StudentView/>
    </div>

  </div>
  
</template>

<style scope>
p{
    width: 100% important!;
    text-align: end;
}
#divListHeader
{
    font-weight: bold;
}
</style>