<template>
  <div class="space-y-6 animate-in fade-in duration-500 flex flex-col items-center">
    <div class="text-center space-y-2">
      <h2 class="text-2xl font-bold">每週簽到領券</h2>
      <p class="text-brand-600 font-medium italic">每週一次，帶走一株驚喜</p>
    </div>

    <!-- 簽到卡片 -->
    <div class="w-full max-w-sm glass-card aspect-[3/4] p-8 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden">
      <div v-if="!claimed" class="space-y-6">
        <div class="w-32 h-32 bg-brand-100 rounded-full flex items-center justify-center animate-bounce">
          <TicketIcon :size="64" class="text-brand-500" />
        </div>
        <div>
          <h3 class="text-xl font-bold">點擊按鈕抽取優惠</h3>
          <p class="text-slate-500 text-sm mt-2">將隨機獲得今日有庫存蔬菜的折扣！</p>
        </div>
        <button @click="handleClaim" class="btn-primary px-12 py-3 text-lg">
          立即簽到
        </button>
      </div>

      <!-- 獲得結果 -->
      <div v-else class="animate-in zoom-in duration-500 space-y-6">
        <h4 class="text-2xl font-black text-brand-600">🎉 恭喜獲得！</h4>
        <div class="p-6 bg-brand-600 rounded-2xl text-white shadow-lg space-y-2">
          <p class="text-sm opacity-80">幸運蔬菜：空心菜</p>
          <p class="text-4xl font-black">15% OFF</p>
          <div class="h-px bg-white/20 my-2"></div>
          <p class="text-xs">有效期限：今天 18:00 前</p>
        </div>
        <div class="p-4 border-2 border-dashed border-slate-200 rounded-xl space-y-1">
          <p class="text-xs text-slate-400">兌換代碼</p>
          <p class="font-mono font-bold text-lg select-all">SHINHUA-{{ new Date().getDate() }}-WIN</p>
        </div>
        <p class="text-xs text-slate-500">結帳時向農友出示此代碼即可使用</p>
      </div>

      <!-- 裝飾效果 -->
      <div class="absolute -top-12 -left-12 w-24 h-24 bg-brand-200/50 rounded-full blur-2xl"></div>
      <div class="absolute -bottom-12 -right-12 w-24 h-24 bg-brand-300/50 rounded-full blur-2xl"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Ticket as TicketIcon } from 'lucide-vue-next'

const claimed = ref(false)

const handleClaim = () => {
  claimed.value = true
}
</script>
