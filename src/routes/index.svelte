<script lang="ts">
import {todo, todos} from '../stores/store'
import SignInWithButton from '../components/signInWithButton.svelte';
import SignOutButton from '../components/signOutButton.svelte'
import authStore from '../stores/authStore';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { onMount } from 'svelte';
import { goto } from '$app/navigation';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

onMount(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyBPnufv66-aulUTV_s28VzHYMZoifPWRd8",
  authDomain: "svelte-todo-auth.firebaseapp.com",
  projectId: "svelte-todo-auth",
  storageBucket: "svelte-todo-auth.appspot.com",
  messagingSenderId: "338670011707",
  appId: "1:338670011707:web:a11b2774dc0db82142231e"
        };

        firebase.initializeApp(firebaseConfig);


        firebase.auth().onAuthStateChanged((user) => {
  authStore.set({
    isLoggedIn: user !== null,
    user,
    firebaseControlled: true,
  });
});
    })



    authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
  if (!isLoggedIn && firebaseControlled) {
    await goto("/login");
  }
});
    
const addTodo = async () => {
    $todos = [...$todos, {
        name: $todo,
        completed: false,
    }];
    $todo = ''
}

const completeTodo = (e) => {
    e.target.completed = true
}

const checkLogin = () => {
   let user = firebase.auth().currentUser;
   console.log(user)
}

</script>


<div>
<h1 class="text-blue-600 text-2xl">Welcome to Svelte-Todo!</h1>

    <form class="mt-10">
    <label for="todo" class="mt-5">Add Todo</label>
    <input type="text" bind:value={$todo} class="border-solid border-2 border-black"/>
    <button class="bg-blue-400 rounded-lg text-white p-1 ml-2" on:click|preventDefault={addTodo}>Submit</button>
</form>




<div class="mt-10">
{#each $todos as todo}
{#if !todo.completed}
<li class="list-none">
{todo.name}
<input type=checkbox bind:checked={todo.completed} on:change={(e) => completeTodo(e)}>

</li>

{/if}
{/each}
</div>


<!-- <button on:click={checkLogin}>Test</button> -->


</div>
