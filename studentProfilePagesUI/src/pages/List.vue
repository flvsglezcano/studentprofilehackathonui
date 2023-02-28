<script setup >
import StudentView from '../components/StudentView.vue';


</script>
<template>
  <h1 class="green">Students</h1>
  <div  id="divStudents">    
     <p class="text-right"><button class="btn btn-small  btn-success" id="btnCreate" @click= "openEditForm(0)">Create</button></p>
  
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