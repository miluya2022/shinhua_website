import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      signInCount: 0,
      lastSignIn: null
    },
    mockVegetables: [
      { id: 'v1', name: '空心菜', farm: '阿明農場', status: '有庫存', story: '這是在新化社大農場種植的...' },
      { id: 'v2', name: '菠菜', farm: '大成叔叔', status: '有庫存', story: '這些菠菜成長的特別好...' }
    ]
  }),
  actions: {
    signIn() {
      this.user.signInCount++
      this.user.lastSignIn = new Date()
    }
  }
})
