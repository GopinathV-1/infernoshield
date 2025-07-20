<template>
  <section class="hero">
    <h1 class="brand-name">🔥 InfernoShield</h1>
    <h2 class="tagline">Comprehensive Fire Protection for Modern Infrastructure</h2>
    <p class="intro">
      We provide cutting-edge fire safety solutions for buildings of all types: apartments, corporate spaces, schools, and factories.
    </p>
    <p class="quote">
      Your safety is our mission. From early detection to expert guidance — we’ve got you covered.
    </p>
    <p class="subquote">
      Secure your buildings, safeguard your people. Trusted by hundreds across sectors.
    </p>
  </section>

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
</template>

<script setup lang="ts">
import OIP_1 from '@/assets/OIP_1.jpg'
import OIP_2 from '@/assets/OIP_2.jpg'
import OIP_3 from '@/assets/OIP_3.jpg'
import OIP_4 from '@/assets/OIP_4.jpg'
import OIP_5 from '@/assets/OIP_5.jpg'
</script>

<style scoped>
/* Hero / Banner Section */
.hero {
  background: linear-gradient(to right, #ffe0b2, #ffccbc);
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
.brand-name {
  font-size: 3rem;
  font-weight: bold;
  color: #d84315;
  margin-bottom: 0.5rem;
}
.tagline {
  font-size: 1.6rem;
  color: #333;
}
.intro {
  margin-top: 1rem;
  font-size: 1.1rem;
}
.quote {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #b71c1c;
}
.subquote {
  color: #bf360c;
  font-size: 1rem;
  margin-bottom: 2rem;
}

/* Features Grid */
.features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1200px;
  padding: 0 1rem;
}
.features div {
  flex: 1 1 250px;
  background: #fff8e1;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(255, 87, 34, 0.1);
  transition: transform 0.3s ease;
}
.features div:hover {
  transform: translateY(-5px);
}

/* Media Gallery */
.media {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 1rem;
}
.media img {
  width: 280px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.media img:hover {
  transform: scale(1.05);
}

/* Precaution Section */
.precautions {
  margin: 3rem auto;
  max-width: 800px;
  background: #fff3e0;
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.precautions h2 {
  text-align: center;
  color: #d84315;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}
.precautions ul {
  list-style-type: none;
  padding: 0;
}
.precautions li {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.precautions li span {
  margin-right: 0.75rem;
  font-size: 1.4rem;
}
</style>
