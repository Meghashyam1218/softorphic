import { writable } from 'svelte/store';

export const activeTab = writable(1);

// export let tempTabValue = 0;

// activeTab.subscribe((value) => {
// 	tempTabValue = value;
// });

// export function setActiveTabValue(value) {
// 	activeTab.set(value);
// }
