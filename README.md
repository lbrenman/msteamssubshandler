# API Builder Amplify Subscription Handler using MS Teams

Set DA Env file:

```
# APIB MS Teams Subscription Handler
CENTRAL_SUBSCRIPTIONS_APPROVAL_WEBHOOK_URL=<BASE URL>/api/amplifycentralwebhookhandler
CENTRAL_SUBSCRIPTIONS_APPROVAL_WEBHOOK_HEADERS=Header=apikey,Value=<API KEY>
```

Triggered by Amplify Subscription Webhook

```
curl --location --request POST 'http://localhost:8080/api/amplifycentralwebhookhandler' \
--header 'apiKey: gK6/xGFbqFul5oQcI16waevmPrnt1CHD' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "382a0c4b-312a-4dce-bb4f-0d7d8caa1da7",
    "time": "2022-07-05T19:32:00.523+0000",
    "version": "v1",
    "product": "AmplifyCentral",
    "correlationId": "13f1364a-b0f4-47ca-b225-4a4b38bfdcc5",
    "organization": {
        "id": "100000142"
    },
    "type": "SubscriptionUpdatedEvent",
    "payload": {
        "consumerInstance": {
            .
            .
            .
            ]
        }
    },
    "metadata": {}
}'
```
