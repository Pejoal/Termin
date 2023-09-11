<script setup>
import Navigations from "@/Components/Navigations.vue";
</script>

<template>
  <footer class="bg-gray-900 text-white py-8">
    <main class="container mx-auto flex flex-wrap justify-between">
      <!-- About Us Section -->
      <section class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
        <h2 class="h-20 text-2xl font-semibold mb-4">
          <span class="font-bold text-green-400"> KGV </span>
          papenwinkel e.V.Höxter
        </h2>
        <p>
          Seit 1948 gibt es nun schon den KGV Papenwinkel im Herzen des
          Weserberglandes. Besuchen Sie uns gerne! […]
        </p>
      </section>

      <!-- Contact Us Section -->
      <section class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
        <h2 class="h-20 text-2xl font-semibold mb-4">Links Unsere Web Seite</h2>
        <Navigations :vertical="true" />
      </section>

      <!-- Social Media Section -->
      <section class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
        <h2 class="h-20 text-2xl font-semibold mb-4">Best Of KGV</h2>
        ABC
      </section>

      <!-- Copyright Section -->
      <section class="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
        <h2 class="h-20 text-2xl font-semibold mb-4">Aushang</h2>

        <article class="text-lg space-y-2">
          <p class="text-gray-200"><a href="#">Bürozeiten: </a></p>
          <hr />
          <p class="text-zinc-200">Samstags: 10:00 Uhr - 12:00 Uhr.</p>
          <p class="text-zinc-200">Mittwochs: 16:00 Uhr - 18:00 Uhr.</p>
          <p class="text-zinc-200">Samstags: 10:00 Uhr - 12:00 Uhr.</p>
          <p class="mb-2 text-zinc-200">
            in der Winterpause entfällt die Erreichbarkeit am Samstag.
          </p>

          <hr />

          <p class="mt-2 text-gray-200">
            <a href="#">Mobil-Nr: 0176/40172874 </a>
          </p>
          <p class="text-gray-200">
            <a href="#">E-Mail: kgv1948@web.de </a>
          </p>
        </article>
      </section>
    </main>
  </footer>
</template>
