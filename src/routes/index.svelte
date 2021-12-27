<script lang="ts">
    import {todo, todos} from '../stores/store'
    
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

</script>


<div>
<h1 class="text-blue-600 text-2xl">Welcome to Svelte-Todo!</h1>

    <form class="mt-5">
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

</div>
