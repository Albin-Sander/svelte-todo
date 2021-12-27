import { writable } from 'svelte/store';

export const todo = writable('');
export const todos = writable([]);

