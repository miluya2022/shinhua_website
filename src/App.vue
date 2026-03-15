<template>
  <div class="min-h-screen pb-20">
    <!-- 頂部導覽 -->
    <header class="sticky top-0 z-50 p-4">
      <nav class="glass-card flex items-center justify-between px-6 py-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold">新</span>
          </div>
          <h1 class="font-bold text-slate-800 text-lg">新化小農攤車</h1>
        </div>
        <button class="text-slate-500">
          <MenuIcon />
        </button>
      </nav>
    </header>

    <!-- 主內容區 -->
    <main class="container mx-auto px-4 py-6">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 底部導覽列 (Mobile Nav) -->
    <footer class="fixed bottom-0 left-0 right-0 p-4">
      <div class="glass-card flex justify-around py-3">
        <router-link to="/" class="nav-item">
          <HomeIcon class="mx-auto" />
          <span class="text-xs">首頁</span>
        </router-link>
        <router-link to="/story" class="nav-item">
          <BookOpenIcon class="mx-auto" />
          <span class="text-xs">故事</span>
        </router-link>
        <router-link to="/recipes" class="nav-item">
          <UtensilsIcon class="mx-auto" />
          <span class="text-xs">食譜</span>
        </router-link>
        <router-link to="/nutrition" class="nav-item">
          <HeartIcon class="mx-auto" />
          <span class="text-xs">營養</span>
        </router-link>
        <router-link to="/coupons" class="nav-item">
          <TicketIcon class="mx-auto" />
          <span class="text-xs">領券</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  Home as HomeIcon, 
  Menu as MenuIcon,
  BookOpen as BookOpenIcon, 
  Utensils as UtensilsIcon, 
  Heart as HeartIcon, 
  Ticket as TicketIcon 
} from 'lucide-vue-next'
</script>

<style scoped>
@reference "./style.css";

.nav-item {
  @apply flex flex-col items-center gap-1 text-slate-400 transition-colors;
}
.nav-item.router-link-active {
  @apply text-brand-600;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
