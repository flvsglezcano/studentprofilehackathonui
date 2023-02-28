<script setup >
import StudentView from '../components/StudentView.vue';

 const studentData = ({    
      id: "",
      firstName: "",
      lastName: "",
      grade: "",
      dateOfBirth: "",
      phone: {
        phoneNumber: "",
        phoneType:"",
      },
      address: {
        addressLine1:"",
        addressLine2:"",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      }  
  });
</script>
<template>
  <h1 class="green">Students</h1>
  <div  id="divStudents">    
     <p class="text-right"><router-link to="/edit" :student="studentData"><button class="btn btn-success" id="btnCreate">Create</button></router-link></p>
  
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