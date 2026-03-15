<template>
  <div class="space-y-8 animate-in slide-in-from-bottom duration-500">
    <!-- Hero Section -->
    <section class="relative h-48 rounded-3xl overflow-hidden bg-brand-700 p-8 flex items-center">
      <div class="relative z-10 space-y-2">
        <h2 class="text-3xl font-bold text-white">友善土地，健康選擇</h2>
        <p class="text-brand-100 italic">新化社大農友共同守護的美味</p>
      </div>
      <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-500/30 rounded-full blur-3xl"></div>
    </section>

    <!-- 快速入口 -->
    <div class="grid grid-cols-2 gap-4">
      <router-link to="/story" class="glass-card p-6 flex flex-col items-center gap-3 text-center transition-all hover:scale-105 active:scale-95">
        <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
          <QrCodeIcon :size="24" />
        </div>
        <span class="font-bold">掃碼故事</span>
      </router-link>
      <router-link to="/coupons" class="glass-card p-6 flex flex-col items-center gap-3 text-center transition-all hover:scale-105 active:scale-95">
        <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
          <GiftIcon :size="24" />
        </div>
        <span class="font-bold">簽到領券</span>
      </router-link>
    </div>

    <!-- 今日焦點 -->
    <section class="space-y-4">
      <h3 class="text-lg font-bold flex items-center gap-2">
        <SparklesIcon :size="20" class="text-brand-500" />
        今日好蔬
      </h3>
      <div class="glass-card p-4 flex gap-4 overflow-x-auto no-scrollbar">
        <div v-for="veg in 3" :key="veg" class="min-w-[140px] space-y-2">
          <div class="w-full h-24 bg-brand-100 rounded-xl"></div>
          <p class="font-bold text-sm">鮮採空心菜</p>
          <span class="text-xs bg-brand-200 text-brand-700 px-2 py-0.5 rounded-full">阿明農場</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { QrCode as QrCodeIcon, Gift as GiftIcon, Sparkles as SparklesIcon } from 'lucide-vue-next'
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
