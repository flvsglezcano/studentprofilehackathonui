<template>
  <div class="greetings">
    <h1 class="green">Create your Profile</h1>
    <form>
      <div>
        <h3>
          <span id="firstName">First Name: </span>
          <input>
          <br />

          <span id="lastName">Last Name: </span>
          <input>
          <br />

          <span id="grade">Grade: </span>
          <input>
          <br />

          <span id="dob">Date of Birth: </span>
          <input type="date">
          <br />

          <span>Phone Number: </span>
          <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
          <br />

          <span>Phone Type: </span>
          <select>
            <option value="mobile">Mobile</option>
            <option value="home">Home</option>
          </select>
          <br />

          <span>Address Line 1: </span>
          <input>
          <br />

          <span>Address Line 2: </span>
          <input>
          <br />

          <span>City: </span>
          <input>
          <br />

          <span>State: </span>
          <input>
          <br />

          <span>Zip Code: </span>
          <input>
          <br />

          <span>Country: </span>
          <input>
          <br />

          <input type="submit" value="Submit">

        </h3>
      </div>
    </form>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
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
