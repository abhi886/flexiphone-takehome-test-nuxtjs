<template>
    <div class="max-w-6xl pt-20 m-auto">
      <div v-if="product" class="flex flex-col w-2/4">
        <h1 class="text-2xl font-bold text-left">{{ product.title }}</h1>
        <div class="flex items-center justify-center my-4">
          <img :src="product.image" alt="Product Image" class="h-96 w-96">
        </div>
        <p class="mb-4 text-left">{{ product.description }}</p>
        <p class="text-lg font-bold text-blue-600 text-right">${{ product.price }}</p>
        <button @click="handleAddToBasket" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Add to Basket
        </button>
        <nuxt-link to="/products" class="text-sm hover:text-blue-600 pt-2">
          << Back
        </nuxt-link>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  interface Product {
    id?: number
    title?: string
    description?: string
    price: number
    image?: string
  }
  
  const route = useRoute()
  const product = ref<Product | null>(null)  
  const { status } = useAuth()
  
  const handleAddToBasket = () => {
    status.value === "unauthenticated"
      ? alert("Please login to add items to cart")
      : alert("Item added to cart")
  }
  
  const fetchProduct = async () => {
    const productId = route.params.id
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      product.value = await response.json()
    } catch (error) {
      console.error('Error fetching product information:', error)
    }
  }
  
  onMounted(fetchProduct)
  </script>
  