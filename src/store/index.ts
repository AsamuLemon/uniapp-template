import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			guestId: '',
			userName: '',
			balance: 0
		}
	},
	actions: {
		setGuestId(val: string) {
			this.guestId = val
		}
	}
})