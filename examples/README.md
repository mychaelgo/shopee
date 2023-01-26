
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Shopee Mall API](#shopee-mall-api)
  - [Get order list](#get-order-list)

# Shopee Mall API

Requirements:

- Put `SPC_EC` cookie in the header

## Get order list

|List Type   | Status   |
|---|---|
|3   | Completed (Selesai)   |
|4   | Cancelled (Dibatalkan)   |
|5   | In transit (Dikirim)   |
|7   | Accepted (Sedang Dikemas)   |

Source code [here](get-order-list.js)

Response

```json
{
 "error": 0,
 "data": {
  "details_list": [{
   "status": {
    "status_label": {
     "text": "label_order_completed",
     "tl": false
    },
    "list_view_status_label": {
     "text": "label_completed",
     "tl": false
    }
   },
   "shipping": {
    "tracking_info": {
     "driver_phone": "",
     "driver_name": "",
     "ctime": 1674372512,
     "description": "Pesanan sudah sampai diterima oleh Anggota Keluarga / Teman: depan pintu rumah buyer ",
     "type": 0
    },
    "is_multi_parcel": false,
    "num_parcels": 1,
    "parcel_no": 1
   },
   "info_card": {
    "order_id": 1277612338218751,
    "order_list_cards": [{
     "shop_info": {
      "shop_id": 240293500,
      "shop_name": "Shop",
      "user_id": 24121973,
      "username": "official shopname here",
      "portrait": "7be743asdasdasd",
      "shop_tag": 1
     },
     "items": [{
      "item_id": 6212390641,
      "model_id": 721431842220,
      "shop_id": 240141511,
      "name": "Vi13413",
      "model_name": "",
      "image": "260613411e1e71741a45",
      "amount": 2,
      "status": 1,
      "item_price": 12486000000,
      "price_before_discount": 12700000000,
      "order_price": 12486000000,
      "snapshot_id": 1201596196
     }],
     "order_id": 127761238218754,
     "parcel_cards": [{
      "parcel_no": 1,
      "forder_id": "5083037623411240511",
      "product_info": {
       "item_groups": [{
        "items": [{
         "item_id": 6231230641,
         "model_id": 725123842220,
         "shop_id": 2441393511,
         "name": "Vi124",
         "model_name": "",
         "image": "26062343211e1e71741a45",
         "amount": 2,
         "ext_info": {
          "add_on_deal_id": 0,
          "is_add_on_sub_item": false,
          "free_return_day": 7,
          "is_wholesale": false,
          "is_pre_order": false,
          "is_membership_gift": false,
          "is_free_return": false
         },
         "status": 1,
         "item_price": 2431486000000,
         "price_before_discount": 12340000000,
         "order_price": 123400000,
         "snapshot_id": 921346196
        }],
        "num_items": 1
       }],
       "total_num_items": 1
      }
     }]
    }],
    "product_count": 1,
    "subtotal": 234072000000,
    "final_total": 2342000000
   },
   "primary_buttons": [{
    "id": 24
   }],
   "guarantee": {
    "learn_more_url": "https://shopee.co.id/m/garansi-shopee-id",
    "is_extend_enabled": true
   },
   "list_type": 3
  }],
  "next_offset": 1
 }
}
```
