var app = new Vue({
  el: "#app",
  data: {
    user: {
      //name: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
    },
    loader: false,
  },
  methods: {
    async registerUser() {
      this.loader = true;
      try {
        debugger;
        let response = await axios.post(
          "http://localhost:4000/user",
          this.user
        );

        console.log(response);
        alert("Registration Was successful");
        this.loader = false;
      } catch (err) {
        alert("Something Went Wrong");
        this.loader = false;
      }
    },
  },
});
