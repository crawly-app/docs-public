# Token Authentication

In order to use GraphQL API endpoint, you need a token. To get your API token follow `Account` > `API Token`.
The token field will be empty as a first time, you need to revoke to get your first token. Once your token created,
it will appear in the field. Similarly, if you have a token already, you can revoke old token and generate new one.

::: tip Info
Once you revoke your token, old token won't be valid.
:::

Once you obtain your token, you can use it on API. For that, go to <https://api.crawly.app/api?token=YOUR_TOKEN>. 
Replace `YOUR_TOKEN` with one that you created. 

You can use [GraphQL Playground](https://app.crawly.app/playground/)
to test your queries before implementation.

![An image](/img/playground.png)