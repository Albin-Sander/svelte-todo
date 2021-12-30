<script lang="ts" context="module">
      import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

    const signOut = () => {
        firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  console.log(error)
});
    }
</script>


<button on:click={signOut} class="border-solid border-2 p-2 bg-blue-600 text-white rounded-md">Sign out</button>