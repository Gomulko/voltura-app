<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import Hero from '$lib/components/layout/Hero.svelte';
  import FilterBar from '$lib/components/filters/FilterBar.svelte';
  import CarGrid from '$lib/components/car/CarGrid.svelte';
  import CtaSection from '$lib/components/layout/CtaSection.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import Accordion from '$lib/components/ui/Accordion.svelte';
  import AccordionItem from '$lib/components/ui/AccordionItem.svelte';
  import CarModal from '$lib/components/modal/CarModal.svelte';
</script>

<Header />
<Hero />
<FilterBar />
<CarGrid />
<CtaSection />

<section class="container my-5">
  <h2 class="text-center mb-4">Najczęściej zadawane pytania</h2>
  <Accordion>
    <AccordionItem id="faq1" title="Jaki jest rzeczywisty zasięg samochodów Voltura?" expanded={true}>
      Zasięg naszych samochodów elektrycznych zależy od modelu i warunków jazdy. W testach WLTP nasze
      modele osiągają zasięg od 280 km do 500 km na jednym ładowaniu.
    </AccordionItem>
    <AccordionItem id="faq2" title="Ile czasu zajmuje ładowanie?">
      Czas ładowania zależy od mocy ładowarki. Przy szybkim ładowaniu DC (150 kW) bateria naładuje
      się od 10% do 80% w około 25-40 minut. Standardowe ładowanie AC zajmuje 6-8 godzin.
    </AccordionItem>
    <AccordionItem id="faq3" title="Jaka jest gwarancja na baterię?">
      Wszystkie nasze samochody objęte są 5-letnią gwarancją lub do przejechania 150 000 km.
      Bateria jest chroniona dodatkową gwarancją na 8 lat lub 160 000 km.
    </AccordionItem>
  </Accordion>
</section>

<Footer />
<CarModal />
