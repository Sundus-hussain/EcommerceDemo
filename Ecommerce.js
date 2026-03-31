
const form = document.getElementById('orderForm');
const API_URL = "https://3nyp794ss6.execute-api.us-east-1.amazonaws.com/order"; // 

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default form submission

  const data = {
    name: form.name.value,
    email: form.email.value,
    product: form.product.value,
    quantity: form.quantity.value,
    notes: form.notes.value
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();
    console.log("Data sent to AWS:", result);
    alert(result.message); // shows Lambda return message
    form.reset();
  } catch (err) {
    console.error("Error sending data:", err);
    alert("Failed to submit order. Check console for details.");
  }
});
