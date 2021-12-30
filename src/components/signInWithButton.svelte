<script lang="ts" context="module">
   import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';




    async function loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebase.auth().signInWithPopup(provider);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<button on:click={loginWithGoogle} class="border-solid border-2 p-2  text-black rounded-md  flex flex-row">
    <img src="./static/googleLogoLight.svg" class="h-5 w-5 mr-2 mt-0.5">  Sign in with Google 

</button>