# API Builder Amplify Subscription Handler using MS Teams

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
            "kind": "ConsumerInstance",
            "name": "comprehend",
            "tags": [],
            "group": "management",
            "metadata": {
                "id": "8a2e9653818c55c101818d0f0ad1030d",
                "audit": {
                    "createUserId": "DOSA_ced1f1cf6c8048e89eb591065a6c7813",
                    "modifyUserId": "DOSA_ced1f1cf6c8048e89eb591065a6c7813",
                    "createTimestamp": "2022-06-22T20:16:22.225+0000",
                    "modifyTimestamp": "2022-06-22T20:16:22.225+0000"
                },
                "scope": {
                    "id": "8a2e92f577a98b2b0177b6a2603b0aa2",
                    "kind": "Environment",
                    "name": "v7a",
                    "title": "v7a",
                    "selfLink": "/management/v1alpha1/environments/v7a"
                },
                "selfLink": "/management/v1alpha1/environments/v7a/consumerinstances/comprehend",
                "references": [
                    {
                        "id": "8a2e9653818c55c101818d0f04dd0305",
                        "kind": "APIServiceRevision",
                        "name": "comprehend.1",
                        "type": "soft",
                        "selfLink": "/management/v1alpha1/environments/v7a/apiservicerevisions/comprehend.1",
                        "scopeKind": "Environment",
                        "scopeName": "v7a"
                    },
                    {
                        "id": "8a2e904c7cc80011017ccc8df3b6249c",
                        "kind": "ConsumerSubscriptionDefinition",
                        "name": "dfbb8b24-23b0-4b5b-844c-e41bdafeeb69",
                        "type": "soft",
                        "selfLink": "/management/v1alpha1/environments/v7a/consumersubscriptiondefs/dfbb8b24-23b0-4b5b-844c-e41bdafeeb69",
                        "scopeKind": "Environment",
                        "scopeName": "v7a"
                    },
                    {
                        "id": "8a2e9653818c55c101818d0f07ba0309",
                        "kind": "APIServiceInstance",
                        "name": "comprehend.1",
                        "type": "hard",
                        "selfLink": "/management/v1alpha1/environments/v7a/apiserviceinstances/comprehend.1",
                        "scopeKind": "Environment",
                        "scopeName": "v7a"
                    },
                    {
                        "id": "8a2e9653818c55c101818d0f01c50302",
                        "kind": "APIService",
                        "name": "comprehend",
                        "type": "soft",
                        "selfLink": "/management/v1alpha1/environments/v7a/apiservices/comprehend",
                        "scopeKind": "Environment",
                        "scopeName": "v7a"
                    }
                ],
                "resourceVersion": "0"
            },
            "apiVersion": "v1alpha1",
            "attributes": {}
        },
        "subscription": {
            "id": "8a2e8807816176b20181cfd9184b4ce9",
            "name": "Mobile App",
            "metadata": {
                "createUserId": "f2c669af-d7a3-46fb-b327-8c60249bc4c9"
            },
            "properties": {
                "profile": {
                    "appName": "Mission2020Tester (API Development)"
                }
            },
            "currentState": "REQUESTED",
            "owningTeamId": "e4ec6c1a69fd0b8e016a22c82fc9170c",
            "relationships": [
                {
                    "key": "apiServerInfo",
                    "path": "$['\''revision'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_REVISION_NAME",
                    "value": "comprehend.1"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''environment'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_ENVIRONMENT_ID",
                    "value": "8a2e92f577a98b2b0177b6a2603b0aa2"
                },
                {
                    "key": "additionalDataAccessInfo",
                    "path": "$['\''type'\'']",
                    "spec": "catalogItem",
                    "type": "UNSTRUCTURED_DATA_TYPE",
                    "value": ""
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''consumerInstance'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_CONSUMER_INSTANCE_NAME",
                    "value": "comprehend"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''consumerInstance'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_CONSUMER_INSTANCE_ID",
                    "value": "8a2e9653818c55c101818d0f0ad1030d"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''environment'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_ENVIRONMENT_NAME",
                    "value": "v7a"
                },
                {
                    "key": "accessInfo",
                    "path": "$['\''url'\'']",
                    "spec": "catalogItem",
                    "type": "TARGET_ENDPOINT_URL",
                    "value": "https://208.67.129.35:8065/comprehend"
                },
                {
                    "key": "additionalDataAccessInfo",
                    "path": "$['\''contentType'\'']",
                    "spec": "catalogItem",
                    "type": "UNSTRUCTURED_DATA_CONTENT_TYPE",
                    "value": ""
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''service'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_ID",
                    "value": "8a2e9653818c55c101818d0f01c50302"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''revision'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_REVISION_ID",
                    "value": "8a2e9653818c55c101818d0f04dd0305"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''serviceInstance'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_INSTANCE_NAME",
                    "value": "comprehend.1"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''service'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_NAME",
                    "value": "comprehend"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''serviceInstance'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_INSTANCE_ID",
                    "value": "8a2e9653818c55c101818d0f07ba0309"
                }
            ],
            "nextPossibleStates": [
                "APPROVED",
                "REJECTED"
            ],
            "currentStateDescription": ""
        },
        "catalogItem": {
            "id": "8a2e820781617ccf01818d0f0ce32fe0",
            "name": "comprehend (v7a)",
            "owningTeamId": "e4ec6c1a69fd0b8e016a22c82fc9170c",
            "relationships": [
                {
                    "key": "apiServerInfo",
                    "path": "$['\''revision'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_REVISION_ID",
                    "value": "8a2e9653818c55c101818d0f04dd0305"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''serviceInstance'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_INSTANCE_ID",
                    "value": "8a2e9653818c55c101818d0f07ba0309"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''serviceInstance'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_INSTANCE_NAME",
                    "value": "comprehend.1"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''revision'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_REVISION_NAME",
                    "value": "comprehend.1"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''service'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_NAME",
                    "value": "comprehend"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''service'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_SERVICE_ID",
                    "value": "8a2e9653818c55c101818d0f01c50302"
                },
                {
                    "key": "additionalDataAccessInfo",
                    "path": "$['\''contentType'\'']",
                    "spec": "catalogItem",
                    "type": "UNSTRUCTURED_DATA_CONTENT_TYPE",
                    "value": ""
                },
                {
                    "key": "additionalDataAccessInfo",
                    "path": "$['\''type'\'']",
                    "spec": "catalogItem",
                    "type": "UNSTRUCTURED_DATA_TYPE",
                    "value": ""
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''consumerInstance'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_CONSUMER_INSTANCE_ID",
                    "value": "8a2e9653818c55c101818d0f0ad1030d"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''environment'\'']['\''id'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_ENVIRONMENT_ID",
                    "value": "8a2e92f577a98b2b0177b6a2603b0aa2"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''consumerInstance'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_CONSUMER_INSTANCE_NAME",
                    "value": "comprehend"
                },
                {
                    "key": "accessInfo",
                    "path": "$['\''url'\'']",
                    "spec": "catalogItem",
                    "type": "TARGET_ENDPOINT_URL",
                    "value": "https://208.67.129.35:8065/comprehend"
                },
                {
                    "key": "apiServerInfo",
                    "path": "$['\''environment'\'']['\''name'\'']",
                    "spec": "catalogItem",
                    "type": "API_SERVER_ENVIRONMENT_NAME",
                    "value": "v7a"
                }
            ]
        }
    },
    "metadata": {}
}'
```
