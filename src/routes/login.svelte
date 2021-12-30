<script lang="ts">
import authStore from '../stores/authStore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import SignInWithButton from '../components/signInWithButton.svelte'
import { onMount } from 'svelte';
import { goto } from '$app/navigation';



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
  } else if(isLoggedIn) {
      await goto("/")
  }
});
</script>

<div class="flex flex-col content-center">
    <h1 class="mb-5">Please sign in</h1>
    <SignInWithButton/>
</div>