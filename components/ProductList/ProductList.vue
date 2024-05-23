<template>
    <div>
      <div v-if="error" class="text-red-500 text-center">
        Error loading products: {{ error }}
      </div>
      <div v-else-if="!products" class="text-center">
        Loading products...
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-6xl m-auto">
        <div v-for="product in products" :key="product.id" class="relative flex flex-col  bg-white z-30 p-4">
            <div class="flex justify-center">
          <img :src="product.image" alt="Product Image" class=" h-36 w-36"/>
        </div>
          <h4 class="my-3 h-12">{{ product.title }}</h4>
          <p class="text-xs my-2 line-clamp-2">{{ product.description }}</p>
          <p class="text-lg font-bold text-blue-600">${{ product.price }}</p>
         <nuxt-link :to="'/products/' + product.id" class="hover:text-blue-600 text-right p-1">
            View More...
            </nuxt-link>
      <button @click= "handleAddToBasket" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add to Basket
      </button>
        </div>
     
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
const { status, data, signOut, signIn } = useAuth()

function handleAddToBasket(){
   status.value === "unauthenticated"  ?   alert("Please login to add items to cart") : alert("Item added to cart")
}

  import { defineProps } from "vue"; 
    interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
}

export type  Products = Product[] | null;

defineProps <{
  products: Products,
  error: string | null
}>()


</script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  