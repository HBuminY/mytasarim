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
		addDiv2List:(ID, compRef)=>update(n=>{
			n.divlist.push({"id":ID, "compRef":compRef})
			//
			return n
		}),
		removeDiv2List:(ID)=>update(n=>{
			let index2remove;
			n.divlist.forEach((item,index)=>{if(item.id==ID){index2remove=index; return false;}}) //this line of code scares me [WARNING: it might break!!!]
			console.log(index2remove);
			n.divlist.splice(index2remove,1);
			//
			return n;
		})
	};
};


export const mousePos = mousePosStore();
export const layoutObjects = layoutObjectsStore();
export const toolOptions = toolOptionsStore();
export const conDivStruct = conDivStructStore();
export const panzoomInstance = writable(null);