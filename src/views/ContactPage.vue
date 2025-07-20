<template>
  <section>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Your Name" required />
      <input v-model="mobile" placeholder="Your Mobile Number" type="tel" required />
      <input v-model="email" placeholder="Your Email" type="email" />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>

    <div v-if="toastMessage" class="toast" :class="{ success: toastSuccess, error: !toastSuccess }">
      {{ toastMessage }}
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.166164520456!2d80.04579601482356!3d12.831072690939596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f628c0e014b%3A0xb4de02b8cf907c1e!2sZoho%20Corporation!5e0!3m2!1sen!2sin!4v1651838824839!5m2!1sen!2sin"
        width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const mobile = ref('')
const email = ref('')
const message = ref('')
const toastMessage = ref('')
const toastSuccess = ref(true)

const submitForm = async () => {
  if (!name.value || !mobile.value) {
    toastSuccess.value = false
    toastMessage.value = "Please fill out both name and mobile number."
    setTimeout(() => toastMessage.value = '', 5000)
    return
  }
  try {
    const res = await fetch("https://formspree.io/f/xrbleled", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        mobile: mobile.value,
        email: email.value,
        message: message.value
      })
    })

    if (res.ok) {
      toastSuccess.value = true
      toastMessage.value = "Message sent successfully!"
      name.value = ''
      mobile.value = ''
      email.value = ''
      message.value = ''
    } else {
      toastSuccess.value = false
      toastMessage.value = "Failed to send message."
    }
  } catch (error: unknown) {
    toastSuccess.value = false
    if (error instanceof Error) {
      toastMessage.value = "Error: " + error.message
    } else {
      toastMessage.value = "An unknown error occurred while sending message."
    }
  }

  setTimeout(() => toastMessage.value = '', 5000)
}
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
input, textarea {
  display: block;
  margin: 1rem auto;
  width: 90%;
  max-width: 500px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.map {
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.toast {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.toast.success {
  background-color: #4caf50;
  color: white;
}
.toast.error {
  background-color: #f44336;
  color: white;
}
</style>
