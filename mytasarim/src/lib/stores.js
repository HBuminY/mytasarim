import { writable } from 'svelte/store';

function mousePosition() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		mouseEvent:(event)=>{set([event.x, event.y])},
	};
}

export const mousePos = mousePosition();