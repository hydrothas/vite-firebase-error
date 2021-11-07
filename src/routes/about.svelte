<script>
    import { signIn } from '$lib/stores/firebase'

    let email = ''
    let password = ''
    let confirmPassword = ''

    function _signIn() {
        signIn(email, password)
    }
</script>

<input bind:value={email} type="text" placeholder="email">
<input bind:value={password} type="password" placeholder="Password">
<input bind:value={email} type="confirmPassword" placeholder="Confirm Password">

<button on:click={() => {signIn()}}>
    Login
</button>