<script lang="ts">
  import { modalStore } from '$lib/stores/modal.svelte';
  import { storage } from '$lib/utils/storage';
  import Gallery from './Gallery.svelte';
  import VersionSelector from './VersionSelector.svelte';
  import ColorPicker from './ColorPicker.svelte';
  import AddonsSection from './AddonsSection.svelte';
  import PriceDisplay from './PriceDisplay.svelte';
  import ActionButtons from './ActionButtons.svelte';
  import CarSpecs from '$lib/components/car/CarSpecs.svelte';
  import type { ColorType, CarConfiguration } from '$lib/types';

  const isOpen = $derived(modalStore.isOpen);
  const car = $derived(modalStore.car);

  let selectedVersion = $state('Podstawowa');
  let selectedColor = $state<ColorType>('black');
  let selectedAddons = $state<string[]>([]);

  $effect(() => {
    if (car) {
      selectedVersion = car.versions[0]?.name || 'Podstawowa';
      selectedColor = car.colors[0] || 'black';
      selectedAddons = [];
    }
  });

  const totalPrice = $derived.by(() => {
    if (!car) return 0;
    const version = car.versions.find((v) => v.name === selectedVersion);
    const versionPrice = version?.priceModifier || 0;
    const addonsPrice = selectedAddons.reduce((sum, addonId) => {
      const addon = car.addons.find((a) => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);
    return car.basePrice + versionPrice + addonsPrice;
  });

  function toggleAddon(addonId: string, checked: boolean): void {
    if (checked) {
      selectedAddons = [...selectedAddons, addonId];
    } else {
      selectedAddons = selectedAddons.filter((id) => id !== addonId);
    }
  }

  function saveConfiguration(): CarConfiguration {
    if (!car) throw new Error('No car selected');
    return {
      carId: car.id,
      carName: car.name,
      version: selectedVersion,
      color: selectedColor,
      addons: selectedAddons,
      totalPrice,
      timestamp: new Date().toISOString()
    };
  }

  function handleFindDealer(): void {
    const config = saveConfiguration();
    storage.save(config);
    modalStore.close();
  }

  function handleFindSalePoint(): void {
    const config = saveConfiguration();
    storage.save(config);
    modalStore.close();
  }

  function handleClose(): void {
    modalStore.close();
  }
</script>

{#if isOpen && car}
  <div
    class="modal d-block"
    tabindex="-1"
    style="background-color: rgba(0, 0, 0, 0.5);"
    onclick={handleClose}
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{car.name} - {car.model}</h5>
          <button type="button" class="btn-close" onclick={handleClose}></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-7">
              <Gallery main={car.images.main} gallery={car.images.gallery} alt={car.name} />
            </div>
            <div class="col-md-5">
              <VersionSelector
                versions={car.versions}
                selected={selectedVersion}
                onselect={(version) => (selectedVersion = version)}
              />
              <ColorPicker
                colors={car.colors}
                selected={selectedColor}
                onselect={(color) => (selectedColor = color)}
              />
              <AddonsSection addons={car.addons} selected={selectedAddons} ontoggle={toggleAddon} />
              <PriceDisplay {totalPrice} />
              <CarSpecs specs={car.specs} />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <ActionButtons onfinddealer={handleFindDealer} onfindsalepoint={handleFindSalePoint} />
        </div>
      </div>
    </div>
  </div>
{/if}
