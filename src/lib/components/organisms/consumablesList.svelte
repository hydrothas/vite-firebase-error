<script>
    import { gql, GraphQLClient } from 'graphql-request'
    import { onMount } from 'svelte'
    let consumablesPromise = fetchConsumables()
  
    async function fetchConsumables () {
      console.log('loading...')
      const graphCmsClient = new GraphQLClient(
        'https://api-eu-central-1.graphcms.com/v2/ckvb0p8x21w7j01we5i07cvln/master',
        { headers: {} }
      )
      const query = gql`
        query GetConsumables {
          consumables {
            name
          }
        }
      `
  
      const { consumables } = await graphCmsClient.request(query)
      console.log('consumables: ' + JSON.stringify(consumables))

      return consumables
    }
  </script>
  

{#await consumablesPromise}
    <!-- promise is pending -->
{:then consumables}
<ul>
    {#each consumables as { name } }
        <li>{name}</li>
    {/each}
</ul>
{/await}

