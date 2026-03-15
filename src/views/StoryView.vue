<template>
  <div class="space-y-6 animate-in fade-in duration-500">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600">
        <BookOpenIcon :size="32" />
      </div>
      <div>
        <h2 class="text-2xl font-bold">蔬菜故事</h2>
        <p class="text-slate-500">掃描 QR Code 了解產地背景</p>
      </div>
    </div>

    <div class="glass-card p-6 space-y-4">
      <div class="aspect-video bg-slate-100 rounded-xl overflow-hidden relative">
        <div class="absolute inset-0 flex items-center justify-center text-slate-400">
          <ImageIcon :size="48" />
        </div>
      </div>
      
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-xl font-bold">鮮採空心菜</h3>
          <p class="text-brand-600 font-medium">阿明農場</p>
        </div>
        <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">播種後 25 天</span>
      </div>

      <div class="space-y-4 pt-4 border-t">
        <div class="flex items-start gap-3">
          <CalendarIcon class="text-slate-400 shrink-0" :size="20" />
          <div>
            <p class="text-sm font-bold text-slate-700">生長日誌</p>
            <p class="text-sm text-slate-500">「這週新化下了一場大雨，空心菜長得特別快，今天早上五點剛採收，非常嫩。」</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <ShieldCheckIcon class="text-slate-400 shrink-0" :size="20" />
          <div>
            <p class="text-sm font-bold text-slate-700">保存秘訣</p>
            <p class="text-sm text-slate-500">保鮮袋冷藏 3-5 天，烹調前泡水 10 分鐘可恢復脆度。</p>
          </div>
        </div>
      </div>
      
      <button class="btn-primary w-full mt-4 flex items-center justify-center gap-2">
        <QrCodeIcon :size="20" />
        掃描下一個蔬菜
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  BookOpen as BookOpenIcon, 
  Image as ImageIcon, 
  Calendar as CalendarIcon, 
  ShieldCheck as ShieldCheckIcon,
  QrCode as QrCodeIcon
} from 'lucide-vue-next'
</script>
