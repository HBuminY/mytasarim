import { writable } from 'svelte/store';

function mousePosStore() {
	const { subscribe, set} = writable([]);

	return {
		subscribe,
		mouseEvent:(event)=>{set([event.x, event.y])},
	};
}

function layoutObjectsStore() {
	const { subscribe, set} = writable({});

	return {
		subscribe,
		set
	};
}

function toolOptionsStore() {
	let toolOptions = {
		sliceMode:true
	}

	const { subscribe, set} = writable(toolOptions);

	return {
		subscribe,
		set
	};
}

export const mousePos = mousePosStore();
export const layoutObjects = layoutObjectsStore();
export const toolOptions = toolOptionsStore();