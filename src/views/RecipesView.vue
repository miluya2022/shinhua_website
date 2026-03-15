<template>
  <div class="space-y-6 animate-in fade-in duration-500">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">食譜牆</h2>
      <div class="flex gap-2">
        <span class="text-xs bg-slate-200 px-2 py-1 rounded-md">全部</span>
        <span class="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-md font-bold">今日特餐</span>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <div v-for="(recipe, i) in mockRecipes" :key="i" class="glass-card overflow-hidden">
        <div class="h-40 bg-slate-200"></div>
        <div class="p-4 space-y-3">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">{{ recipe.title }}</h3>
            <span class="text-xs text-brand-600 font-bold bg-brand-50 px-2 py-1 rounded">{{ recipe.difficulty }}</span>
          </div>
          <div class="flex gap-4 text-xs text-slate-500">
            <span class="flex items-center gap-1"><ClockIcon :size="14" /> {{ recipe.time }}</span>
            <span class="flex items-center gap-1 text-blue-600 font-bold">✨ {{ recipe.highlight }}</span>
          </div>
          <router-link to="/recipes" class="block w-full text-center py-2 border-2 border-brand-100 text-brand-600 rounded-xl font-bold hover:bg-brand-50 transition-colors">
            查看食譜內容
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock as ClockIcon } from 'lucide-vue-next'

const mockRecipes = [
  { title: '快手蒜炒空心菜', difficulty: '簡單', time: '10 分鐘', highlight: '富含膳食纖維' },
  { title: '涼拌麻油菠菜', difficulty: '簡單', time: '15 分鐘', highlight: '對眼睛好' },
  { title: '紅蘿蔔炒蛋', difficulty: '中等', time: '20 分鐘', highlight: '增強免疫力' }
]
</script>
