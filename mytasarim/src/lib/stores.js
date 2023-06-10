import { writable, readable } from 'svelte/store';
import app from '../main';

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
};

function toolOptionsStore() {
	let toolOptions = { //set the defaults fot tool options here:
		sliceMode:false,
		devmode:true
	}

	const { subscribe, set} = writable(toolOptions);

	return {
		subscribe,
		set
	};
};

function conDivStructStore(){
	const { subscribe, set, update} = writable({divcounter:0,divlist:[]});

	return {
		subscribe,
		newdiv:()=>update(n=>{n.divcounter++; return n}),
		addDiv2List:(ID)=>update(n=>{
			n.divlist.push({"id":ID})
			return n
		}),
	};
};


export const mousePos = mousePosStore();
export const layoutObjects = layoutObjectsStore();
export const toolOptions = toolOptionsStore();
export const conDivStruct = conDivStructStore();
export const panzoomInstance = writable(null);