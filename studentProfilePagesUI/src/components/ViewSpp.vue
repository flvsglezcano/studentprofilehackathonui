<template>
  <div class="greetings">
    <h1 class="green">View your profile</h1>
    <div>
      <h3>
        <span id="firstName">First Name: </span>
        <span>{{ studentProfileDataSet.firstName }}</span>
        <br/>

        <span id="lastName">Last Name: </span>
        <span>{{ studentProfileDataSet.lastName }}</span>
        <br/>

        <span id="grade">Grade: </span>
        <span>{{ studentProfileDataSet.grade }}</span>
        <br/>

        <span id="dob">Date of Birth: </span>
        <span>{{ studentProfileDataSet.dateOfBirth }}</span>
        <br/>

        <span>Phone Number: </span>
        <span>{{ studentProfileDataSet.phoneNumber }}</span>
        <br/>

        <span>Phone Type: </span>
        <span>{{ studentProfileDataSet.phoneType }}</span>
        <br/>

        <span>Address Line 1: </span>
        <span>{{ studentProfileDataSet.addressLine1 }}</span>
        <br/>
        
        <span>Address Line 2: </span>
        <span>{{ studentProfileDataSet.addressLine2 }}</span>
        <br/>
        
        <span>City: </span>
        <span>{{ studentProfileDataSet.city }}</span>
        <br/>
        
        <span>State: </span>
        <span>{{ studentProfileDataSet.state }}</span>
        <br/>
        
        <span>Zip Code: </span>
        <span>{{ studentProfileDataSet.zipCode }}</span>
        <br/>
        
        <span>Country: </span>
        <span>{{ studentProfileDataSet.country }}</span>
        <br/>
        
      </h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  studentProfileDataSet: {

  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
