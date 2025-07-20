<template>
  <section>
    <h1>Welcome to FireSafe Systems 🔥</h1>
    <h2>Comprehensive Fire Protection for Modern Infrastructure</h2>
    <p>We provide cutting-edge fire safety solutions for buildings of all types: apartments, corporate spaces, schools, and factories.</p>

    <div class="features">
      <div>
        <h3>Smart Detection</h3>
        <p>Advanced sensors detect smoke, heat, and gas with accuracy.</p>
      </div>
      <div>
        <h3>24/7 Monitoring</h3>
        <p>Remote surveillance with instant mobile and cloud notifications.</p>
      </div>
      <div>
        <h3>Evacuation Systems</h3>
        <p>Audio-visual alerts and emergency guidance for quick evacuation.</p>
      </div>
      <div>
        <h3>Training & Drills</h3>
        <p>We conduct fire drills and offer fire extinguisher handling training.</p>
      </div>
      <div>
        <h3>Customized Designs</h3>
        <p>We tailor fire safety systems based on your building requirements.</p>
      </div>
      <div>
        <h3>Maintenance & Support</h3>
        <p>Regular inspection and support ensure your system is always ready.</p>
      </div>
    </div>

    <div class="media">
      <img :src="OIP_5" alt="Fire Drill" />
      <img :src="OIP_2" alt="Fire Extinguisher" />
      <img :src="OIP_3" alt="Trained Fire Response Team" />
      <img :src="OIP_4" alt="Fire Alarm System" />
      <img :src="OIP_1" alt="Training Session" />
    </div>

    <section class="precautions">
      <h2>🔥 Precautionary Tips for Fire Safety</h2>
      <ul>
        <li><span>🧯</span> Install smoke alarms on every floor and test them monthly.</li>
        <li><span>🪛</span> Keep fire extinguishers accessible and know how to use them.</li>
        <li><span>⚡</span> Never overload electrical circuits or use damaged wires.</li>
        <li><span>🚪</span> Have an escape plan and practice it regularly with your family or team.</li>
        <li><span>🏷️</span> Store flammable materials in a safe and ventilated area.</li>
        <li><span>👨‍🏫</span> Educate kids and employees about fire hazards and response.</li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import OIP_1 from '@/assets/OIP_1.jpg'
import OIP_2 from '@/assets/OIP_2.jpg'
import OIP_3 from '@/assets/OIP_3.jpg'
import OIP_4 from '@/assets/OIP_4.jpg'
import OIP_5 from '@/assets/OIP_5.jpg'
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
.banner {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}
.features div {
  flex: 1 1 250px;
  background: #fff8e1;
  padding: 1rem;
  border-radius: 8px;
}
.media {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.media img {
  width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.media img:hover {
  transform: scale(1.05);
}
.precautions {
  margin-top: 3rem;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background: #fff3e0;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.precautions h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  color: #d84315;
}
.precautions ul {
  list-style-type: none;
  padding-left: 0;
}
.precautions li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
.precautions li span {
  margin-right: 0.75rem;
  font-size: 1.5rem;
}
.contact-form {
  margin-top: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.contact-form button {
  padding: 0.75rem 2rem;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
