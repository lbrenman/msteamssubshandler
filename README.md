# API Builder Amplify Subscription Handler using MS Teams

An API Builder project that handles Amplify Central Unified Catalog [**API subscription**](https://docs.axway.com/bundle/amplify-central/page/docs/manage_unified_catalog/manage_subscriptions/index.html) approval requests as a [**custom workflow**](https://docs.axway.com/bundle/amplify-central/page/docs/connect_manage_environ/connected_agent_common_reference/manage_subscription_workflow/index.html). The project exposes two API's:

* `POST /api/amplifycentralwebhookhandler` - the webhook url that Amplify will call when a subscription approval request is made. This API will send an approval form card to a MS Teams channel
* `POST /api/approver` - API that will be triggered when the approve/reject buttons are pressed in the MS Teams approval form

These API's are created in an API-First fashion with the OpenAPI Specification (OAS) documents created in [**Stoplight**](https://stoplight.io/) in the following two repos:

* [**Amplify Central Webhook Handler API Definition**](https://github.com/lbrenman/amplifycentralwebhookhandlerdefinition)
* [**Amplify Approver API Definition**](https://github.com/lbrenman/sl_apisubsapprover_api_def)

The API's are secured with API Key authentication in a header with key `apikey`. The key is set as an environment variable.

A complete list of environment variables for this project is shown below:

```
CLIENT_ID=<YOUR AMPLIFY SERVICE ACCOUNT CLIENT ID>
CLIENT_SECRET=<YOUR AMPLIFY SERVICE ACCOUNT CLIENT SECRET>
API_KEY=<AN API KEY THAT YOU SET>
MS_TEAMS_WEBHOOK_URL=<MS TEAMS INCOMING WEBHOOK CONNECTOR URL>
API_CENTRAL_URL=<YOUR AMPLIFY CENTRAL URL>
BASEURL=<THE BASE URL OF YOUR API BUILDER API>
```

The following resources may be helpful in understanding the background as well as help you in setting up and configuring your project:

* [**Create Incoming Webhooks for MS Teams**](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
* [**How to create a Service Account in order to make Axway Amplify Platform API calls**](https://blog.axway.com/product-insights/amplify-platform/application-integration/axway-amplify-platform-api-calls)
* [**Amplify Central Custom API Subscription Approval Workflow Example Using API Builder – Hello World**](https://blog.axway.com/product-insights/amplify-platform/central/amplify-central-custom-api-subscription-approval-workflow)

## Set Amplify Central Discovery Agent Environment file:

In order to trigger the flow, configure your Amplify discovery agent accordingly:

```
# APIB MS Teams Subscription Handler
CENTRAL_SUBSCRIPTIONS_APPROVAL_MODE=webhook
CENTRAL_SUBSCRIPTIONS_APPROVAL_WEBHOOK_URL=<BASE URL>/api/amplifycentralwebhookhandler
CENTRAL_SUBSCRIPTIONS_APPROVAL_WEBHOOK_HEADERS=Header=apikey,Value=<API KEY>
```

Triggered by Amplify Subscription Webhook

```
curl --location --request POST 'http://localhost:8080/api/amplifycentralwebhookhandler' \
--header 'apiKey: <API KEY>' \
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

## MS Teams Card

The result of Amplify triggering the `amplifycentralwebhookhandler` with a subscription request webhook is a card in MS Teams as follows:

![](https://i.imgur.com/2fUbM8P.png)

When the user clicks on the Approve/Reject button, API `approver` will be called. This will result in the subscription request being approved or rejected and the following card being sent:

![](https://i.imgur.com/LsxIxTY.png)
