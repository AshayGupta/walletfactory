npm i mx-platform-node

Developer - 

API Key- b4525241e0499f529bb7b786aeed9bb25c2bfe56

Client ID - e01697bb-12d4-4c60-ab62-195d879d0111

Basic Auth Value - ZTAxNjk3YmItMTJkNC00YzYwLWFiNjItMTk1ZDg3OWQwMTExOmI0NTI1MjQxZTA0OTlmNTI5YmI3Yjc4NmFlZWQ5YmIyNWMyYmZlNTY=


curl -i -X POST 'https://int-api.mx.com/users/USR-11141024-90b3-1bce-cac9-c06ced52ab4c/widget_urls' \
-u 'e01697bb-12d4-4c60-ab62-195d879d0111:API Key- b4525241e0499f529bb7b786aeed9bb25c2bfe56' \
-H 'Accept: application/vnd.mx.api.v1+json' \
-H 'Content-Type: application/json' \
-d '{
      "widget_url": {
        "widget_type": "connect_widget",
        "ui_message_version": 4,
        "client_redirect_url": "http://cashdrop.v3ainfo.com/api/mx-linkbank-callback",
        "oauth_referral_source": "APP"
      }
    }

--------------------------------------------------------------

curl -i -X POST 'https://int-api.mx.com/users/USR-fa7537f3-48aa-a683-a02a-b18940482f54/widget_urls' \
  -H 'Accept: application/vnd.mx.api.v1+json' \
  -H 'Content-Type: application/json' \
  -H 'Accept-Language: en-US' \
  -u 'client_id:e01697bb-12d4-4c60-ab62-195d879d0111' \
  -d '{      
        "widget_url": {        
          "client_redirect_url": "http://cashdrop.v3ainfo.com/api/mx-linkbank-callback",
          "color_scheme": "light",
          "current_institution_code": "chase",
          "current_institution_guid": "INS-f1a3285d-e855-b61f-6aa7-8ae575c0e0e9",
          "current_member_guid": "MBR-7c6f361b-e582-15b6-60c0-358f12466b4b",
          "disable_background_agg": false,
          "disable_institution_search": false,
          "include_identity": false,
          "include_transactions": true,
          "is_mobile_webview": false,
          "mode": "aggregation",
          "oauth_referral_source": "BROWSER",
          "ui_message_version": 4,
          "ui_message_webview_url_scheme": "mx",
          "update_credentials": false,
          "widget_type": "connect_widget"
        }
      }'
