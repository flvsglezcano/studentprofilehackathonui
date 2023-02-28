<script>
export default {

  data: () => ({
    studentData: {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      grade: undefined,
      dateOfBirth: undefined,
      phone: {
        phoneNumber: undefined,
        phoneType: undefined
      },
      address: {
        addressLine1: undefined,
        addressLine2: undefined,
        city: undefined,
        state: undefined,
        zipCode: undefined,
        country: undefined
      }
    }
  }),
  methods: {
    getStudentData: async function (id) {
      let graphQlResponse;
      try {
        await fetch(this.queryBuilder("GET", "student", id)).then(response => response.json()
          .then(data => ({ data }))
          .then(res => {
            graphQlResponse = res.data.data.student

            this.studentData.id = graphQlResponse.id
            this.studentData.firstName = graphQlResponse.firstName
            this.studentData.lastName = graphQlResponse.lastName
            this.studentData.dateOfBirth = graphQlResponse.dateOfBirth.split("T")[0]
            this.studentData.grade = graphQlResponse.grade
            this.studentData.phone.phoneNumber = graphQlResponse.phone.phoneNumber
            this.studentData.phone.phoneType = graphQlResponse.phone.phoneType
            this.studentData.address.addressLine1 = graphQlResponse.address.addressLine1
            this.studentData.address.addressLine2 = graphQlResponse.address.addressLine2
            this.studentData.address.city = graphQlResponse.address.city
            this.studentData.address.state = graphQlResponse.address.state
            this.studentData.address.zipCode = graphQlResponse.address.zipCode
            this.studentData.address.country = graphQlResponse.address.addressLine1

            console.log(this.studentData)
          }));
      } catch (error) {
        console.log(error);
      }
    },
    queryBuilder: function (methodType, modelType, id) {
      const azureFunctionUri = "https://graphqlspp.azurewebsites.net/api/graphql/?query=";
      let query = "";

      if (methodType == "GET" && modelType == "student") {
        query = "{" + modelType + "(id:" + id + "){id firstName lastName dateOfBirth grade phone{phoneNumber phoneType} address{id addressLine1 addressLine2 city state zipCode country}}}"
      }
      else if (methodType == "GET" && type == "students") {
        query = "{" + modelType + "{id firstName lastName dateOfBirth grade phone{phoneNumber phoneType} address{id addressLine1 addressLine2 city state zipCode country}}}"
      }
      return azureFunctionUri + query;
    }
  },
  mounted() {
    this.getStudentData("1");
  }
}
</script>

<template>
  <!-- <li v-for="{student} in students"> -->
    <div class="col-1">{{ studentData.id }}</div>
    <div class="col-2">{{ studentData.firstName }} {{ studentData.lastName }}</div>
    <div class="col-2">{{ studentData.dateOfBirth }}</div>
    <div class="col-1 text-center">{{ studentData.grade }}</div>
    <div class="col-2">
      <address>
        <span>{{ studentData.address.addressLine1 }}, {{ studentData.address.addressLine2 }}</span><br />
        <span>{{ studentData.address.city }}, {{ studentData.address.state }} {{ studentData.address.zipCode
        }}</span><br />
      </address>
    </div>
    <div class="col-2">
      <abbr title="Phone">{{ studentData.phone.phoneType }}:</abbr><br />
      {{ studentData.phone.phoneNumber }}
    </div>
    <div class="col-2 text-right">
        <router-link to="/edit" :student="studentData"><button class="btn btn-secondary btn-sm" id="btnUpdate">Update</button></router-link>&nbsp;
   
      <button class="btn btn-danger btn-sm" id="btnDelete">Delete</button>
    </div>
  <!-- </li> -->
</template>
