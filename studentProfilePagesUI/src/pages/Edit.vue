<script setup>

import {ref } from "vue";

/**
 * Props
 */
 const props = defineProps({
  studentId: { type:String, required: true, default: () => "0" }
});
const save = (model) => {
  //TODO
  console.log("model saved");
};

</script>
<template>
   <h1 class="green" > Student Info</h1>
   <br/>
<form>
    <h2 > Student </h2>
    <div class="row g-4 align-items-center">
  <div class="col-auto">
    <label for="inputFirstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputFirstName" >
   
  </div>
  <div class="col-auto">
    <label for="inputLastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputLastName" >
   
  </div>
  <div class="col-auto">
    <label for="inputDateOfBirth" class="form-label">Date Of Birth</label>
    <input type="text" class="form-control" id="inputDateOfBirth" >   
  </div>
  <div class="col-auto">
    <label for="inputGrade" class="form-label">Grade</label>
    <input type="text" class="form-control" id="inputGrade" >   
  </div>
</div>
<hr/>
<h2 > Address </h2>
<div class="row g-4 align-items-center">
  <div class="col-auto">
    <label for="inputAddress1" class="form-label">Address Line 1</label>
    <input type="text" class="form-control" id="inputAddress1" >
   
  </div>
  <div class="col-auto">
    <label for="inputAddress2" class="form-label">Address Line 2</label>
    <input type="text" class="form-control" id="inputAddress2" >   
  </div>
</div>
<div class="row g-4 align-items-center">
  <div class="col-auto">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" >
   
  </div>
  <div class="col-auto">
    <label for="inputState" class="form-label">State</label>
    <input type="text" class="form-control" id="inputLastName" >   
  </div>
  <div class="col-auto">
    <label for="inputZip" class="form-label">Zip Code</label>
    <input type="text" class="form-control" id="inputZip" >   
  </div>
</div>
<hr/>
<h2 > Phone </h2>
<div class="row g-4 align-items-center">
  <div class="col-auto">
    <label for="inputNumber" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputNumber" >
   
  </div>
  <div class="col-auto">
    <label for="inputType" class="form-label">Phone Type</label>
    <input type="text" class="form-control" id="inputType" >   
  </div>
</div>
<br/>
<div class="row align-items-center">
  <div class="col-auto">
<router-link to="/"><button type="submit" class="btn btn-secondary" >Cancel</button></router-link>
</div><div class="col-auto">
  <button type="submit" class="btn btn-primary" @click="save(model)">Submit</button>
  </div>
  </div>
</form>
</template>