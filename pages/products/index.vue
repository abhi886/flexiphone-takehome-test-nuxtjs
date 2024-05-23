<template>
    <div class="p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Products</h1>
      <ProductList :products="products" :error="error" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import ProductList from '@/components/ProductList/ProductList.vue'
  
  const products = ref(null)
  const error = ref(null)
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      products.value = await response.json()
    }  catch (error: unknown) {
    if (error instanceof Error && 'message' in error) {
      throw new Error(error.message);
    }
    throw new Error('Some network error occurred');
  }
  }
  
  onMounted(fetchProducts)
  </script>
  
  <style scoped>
  </style>
  