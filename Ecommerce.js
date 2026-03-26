
const form = document.getElementById('orderForm');
const API_URL = "https://3nyp794ss6.execute-api.us-east-1.amazonaws.com/order"; //  API endpoint

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    product: form.product.value,
    quantity: form.quantity.value,
    notes: form.notes.value
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
      console.log("Data sent to AWS:", response);
      alert("Order submitted successfully!");
      form.reset();
  })
  .catch(err => {
      console.error("Error sending data:", err);
      alert("Failed to submit order.");
  });
});
