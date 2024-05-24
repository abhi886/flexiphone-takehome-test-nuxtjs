<script>
  import Auth from '@/components/Auth/Auth.vue'

</script>

<template>
    <div class="max-w-6xl m-auto">
        <div class="flex justify-between">
            <div class="pt-3">
                <nuxt-link :to="'/'" class="hover:text-blue-600 text-right">
                    <img src="/img/xxyyzz.jpeg" alt="Product Image" class=" h-12 w-20"/>
            </nuxt-link>
            </div>
            <div>
                <Auth />
            </div>
        </div>
      <slot />
    </div>
  </template>
  