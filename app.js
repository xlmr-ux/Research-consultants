new Vue({
  el: '#app',
  data: {
    logoLoaded: false,
    slides: [
      { title: "Welcome to Research Consultancy", description: "Expert academic and business writing services." },
      { title: "We Make Writing Simple", description: "Providing clarity and professionalism in every word." },
      { title: "Partner With Us Today", description: "Customized solutions tailored to your needs." }
    ],
    services: [
      { id: 1, title: "Academic Research", description: "High-quality research papers and theses." },
      { id: 2, title: "Business Plans", description: "Professional plans to grow your business." },
      { id: 3, title: "Proofreading & Editing", description: "Error-free and polished documents." }
    ],
    contact: { name: "", email: "", message: "" },
    order: { service: "", details: "" }
  },
  methods: {
    submitContact() {
      alert(`Thank you, ${this.contact.name}! Your message has been sent.`);
      this.contact = { name: "", email: "", message: "" };
    },
    placeOrder() {
      alert(`Order for "${this.order.service}" has been placed.`);
      this.order = { service: "", details: "" };
    }
  },
  mounted() {
    setTimeout(() => {
      this.logoLoaded = true;
    }, 3000); // Logo fades out after 3 seconds
  }
});
