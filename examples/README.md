
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Shopee Mall API](#shopee-mall-api)
  - [Get order list](#get-order-list)
  - [Get order detail](#get-order-detail)

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

## Get order detail

Source code [here](get-order-detail.js)

Response

```json
{
 "data": {
  "status": {
   "status_label": {
    "text": "label_order_completed",
    "tl": false
   },
   "header_text": {
    "text": "order_status_text_completed_thank_you_shopping",
    "tl": false
   },
   "header_image": "https://deo.shopeemobile.com/shopee/shopee-orderprocessing-live-id/completed.png",
   "list_view_status_label": {
    "text": "label_completed",
    "tl": false
   }
  },
  "shipping": {
   "masked_carrier": {
    "text": "Reguler",
    "tl": true
   },
   "fulfilment_carrier": {
    "text": "SiCepat REG",
    "tl": true
   },
   "tracking_number": "0041640124",
   "tracking_info": {
    "driver_phone": "",
    "driver_name": "",
    "ctime": 1671000467,
    "description": "Pesanan sudah sampai diterima oleh Anggota Keluarga / Teman: xx",
    "type": 0,
    "pin_code": ""
   },
   "is_multi_parcel": false,
   "num_parcels": 1,
   "parcel_no": 1,
   "can_modify_fulfilment_channel": false,
   "fulfilment_carrier_channel_id": 80015,
   "disable_edit_fulfilment_channel_reason": ""
  },
  "address": {
   "shipping_name": "xxx",
   "shipping_phone": "6281",
   "shipping_address": "...... ID, 123",
   "is_buyer_address_editable": false
  },
  "info_card": {
   "parcel_cards": [{
    "parcel_no": 1,
    "forder_id": "123123",
    "parcel_status_info": {
     "label": {
      "text": "label_forder_delivered",
      "tl": false
     },
     "tooltip": {
      "text": "",
      "tl": false
     },
     "status": 5
    },
    "shop_info": {
     "shop_id": 111,
     "shop_name": "L Official Shop",
     "user_id": 121,
     "username": "l official",
     "portrait": "81234213f4b",
     "shop_tag": 1
    },
    "product_info": {
     "item_groups": [{
      "items": [{
       "item_id": 123213,
       "model_id": 12321,
       "shop_id": 123213,
       "name": "L ES",
       "model_name": "Bfsadfher",
       "image": "f412321b12123213c0adb6fd580",
       "amount": 1,
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
       "item_price": 1212600000000,
       "price_before_discount": 31200000000,
       "order_price": 1121600000000,
       "snapshot_id": 4012178
      }],
      "num_items": 1
     }],
     "total_num_items": 1
    },
    "payment_info": {
     "currency": "IDR",
     "total_price": 14121800000,
     "info_rows": [{
      "info_label": {
       "text": "label_odp_merchandise_subtotal",
       "tl": false
      },
      "info_value": {
       "value": "122600000000",
       "type": 5
      }
     }, {
      "info_label": {
       "text": "label_odp_shipping",
       "tl": false,
       "attributes": [{
        "name": "shipping_carrier",
        "type": 1,
        "label": {
         "text": "Reguler",
         "tl": false
        }
       }]
      },
      "info_value": {
       "value": "121000000000",
       "type": 5
      }
     }, {
      "info_label": {
       "text": "label_odp_shipping_discount_subtotal",
       "tl": false
      },
      "info_value": {
       "value": "-4000000000",
       "type": 5
      },
      "info_tooltip": {
       "tooltip": {
        "text": "label_odp_free_shipping_voucher_applied",
        "tl": false
       }
      }
     }, {
      "info_label": {
       "text": "label_odp_redeemed_number_coins",
       "tl": false,
       "attributes": [{
        "name": "number",
        "value": "888200000",
        "type": 10
       }]
      },
      "info_value": {
       "value": "-888200000",
       "type": 5
      }
     }, {
      "info_label": {
       "text": "label_odp_buyer_service_fee",
       "tl": false
      },
      "info_value": {
       "value": "100000000",
       "type": 5
      }
     }]
    },
    "extra_info": {
     "is_shipment_grouped": false
    }
   }],
   "is_multi_parcel": false,
   "subtotal": 121800000,
   "final_total": 112121800000,
   "vat_amount": 0,
   "amount_paid": 14121120000
  },
  "invoice": {
   "display_invoice": true,
   "shop_id": 51121121
  },
  "payment_method": {
   "payment_method": 1,
   "payment_channel_name": {
    "text": "12125]",
    "tl": true
   },
   "can_change_payment_method": false
  },
  "processing_info": {
   "order_sn": "22121KJG",
   "info_rows": [{
    "info_label": {
     "text": "label_odp_order_time",
     "tl": false
    },
    "info_value": {
     "value": "1121280782",
     "type": 8
    }
   }, {
    "info_label": {
     "text": "label_odp_payment_time",
     "tl": false
    },
    "info_value": {
     "value": "1612180911",
     "type": 8
    }
   }, {
    "info_label": {
     "text": "label_odp_ship_time",
     "tl": false
    },
    "info_value": {
     "value": "112120",
     "type": 8
    }
   }, {
    "info_label": {
     "text": "label_odp_completed_time",
     "tl": false
    },
    "info_value": {
     "value": "11211867302",
     "type": 8
    }
   }]
  },
  "secondary_buttons": [{
   "id": 15
  }, {
   "id": 50,
   "extra": {
    "guarantee_info": {
     "learn_more_url": "https://shopee.co.id/m/garansi-shopee-id"
    }
   }
  }],
  "primary_buttons": [{
   "id": 24
  }],
  "components": [13, 0, 19, 1, 2, 4, 5, 6, 8, 14, 9, 10],
  "list_type": 3
 }
}
```
