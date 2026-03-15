<template>
  <div class="space-y-6 animate-in fade-in duration-500">
    <h2 class="text-2xl font-bold">功能性營養探索</h2>
    <p class="text-slate-500 text-sm">從身體需求出發，找到適合您的在地蔬菜。</p>

    <div class="grid grid-cols-1 gap-4">
      <div v-for="item in nutritionMap" :key="item.id" class="glass-card p-5 group cursor-pointer hover:border-brand-300 transition-all">
        <div class="flex items-center gap-4">
          <div class="text-3xl">{{ item.emoji }}</div>
          <div class="flex-1">
            <h4 class="font-bold text-lg">{{ item.benefit }}</h4>
            <p class="text-xs text-slate-400">對應蔬菜：{{ item.vegs.join('、') }}</p>
          </div>
          <ChevronRightIcon class="text-slate-300 group-hover:text-brand-500 transition-colors" />
        </div>
      </div>
    </div>

    <!-- 底部小提醒 -->
    <div class="bg-brand-50 p-4 rounded-2xl flex gap-3 items-center">
      <InfoIcon class="text-brand-600 shrink-0" :size="20" />
      <p class="text-xs text-brand-700 leading-relaxed">
        這裡的建議是以中醫食療與現代營養學為基礎的白話呈現。如有具體疾病，請諮詢專業醫師。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight as ChevronRightIcon, Info as InfoIcon } from 'lucide-vue-next'

const nutritionMap = [
  { id: 1, emoji: '👀', benefit: '眼睛疲勞', vegs: ['紅蘿蔔', '菠菜', '地瓜'] },
  { id: 2, emoji: '💪', benefit: '提升免疫力', vegs: ['青花菜', '甜椒', '菇類'] },
  { id: 3, emoji: '💩', benefit: '幫助消化', vegs: ['地瓜葉', '竹筍', '黑木耳'] },
  { id: 4, emoji: '😴', benefit: '助眠紓壓', vegs: ['萵苣', '甜椒', '蓮藕'] }
]
</script>
