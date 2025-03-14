export const data = {
  "users": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password_hash": "5f4dcc3b5aa765d61d8327deb882cf99",
      "profile_picture": "https://example.com/images/johndoe.jpg",
      "phone_number": "+11234567890",
      "address": "123 Elm Street, Springfield, USA",
      "user_type": "donor",
      "created_at": "2023-01-15T10:00:00Z",
      "updated_at": "2023-01-15T10:00:00Z"
    },
    {
      "id": "660e8400-e29b-41d4-a716-446655440001",
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "password_hash": "e99a18c428cb38d5f260853678922e03",
      "profile_picture": "https://example.com/images/janesmith.jpg",
      "phone_number": "+11234567891",
      "address": "456 Oak Avenue, Springfield, USA",
      "user_type": "fundraiser",
      "created_at": "2023-01-16T11:00:00Z",
      "updated_at": "2023-01-16T11:00:00Z"
    },
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "name": "Alice Johnson",
      "email": "alicejohnson@example.com",
      "password_hash": "d8578edf8458ce06fbc5bb76a58c5ca4",
      "profile_picture": "https://example.com/images/alicejohnson.jpg",
      "phone_number": "+11234567892",
      "address": "789 Maple Lane, Springfield, USA",
      "user_type": "admin",
      "created_at": "2023-01-17T12:00:00Z",
      "updated_at": "2023-01-17T12:00:00Z"
    }
  ],
  "fundraisers": [
    {
      "id": "780e8400-e29b-41d4-a716-446655440003",
      "title": "Help Build a School",
      "description": "Raising funds to construct a school in a remote village.",
      "goalAmount": 50000.0,
      "raisedAmount": 15000.0,
      "imageUrl": "https://example.com/images/school.jpg",
      "category": "Education",
      "start_date": "2023-02-01T09:00:00Z",
      "end_date": "2023-12-31T23:59:59Z",
      "created_by": "550e8400-e29b-41d4-a716-446655440000",
      "status": "active",
      "created_at": "2023-01-10T10:00:00Z",
      "updated_at": "2023-01-20T12:00:00Z"
    },
    {
      "id": "880e8400-e29b-41d4-a716-446655440004",
      "title": "Medical Aid for Disaster Victims",
      "description": "Providing essential medical supplies to victims of a natural disaster.",
      "goalAmount": 100000.0,
      "raisedAmount": 60000.0,
      "imageUrl": "https://example.com/images/medical_aid.jpg",
      "category": "Health",
      "start_date": "2023-03-01T10:00:00Z",
      "end_date": "2023-08-31T23:59:59Z",
      "created_by": "660e8400-e29b-41d4-a716-446655440001",
      "status": "pending",
      "created_at": "2023-02-01T11:00:00Z",
      "updated_at": "2023-02-15T15:00:00Z"
    },
    {
      "id": "990e8400-e29b-41d4-a716-446655440005",
      "title": "Food Drive for the Homeless",
      "description": "Collecting donations to provide meals for homeless individuals in the city.",
      "goalAmount": 20000.0,
      "raisedAmount": 20000.0,
      "imageUrl": "https://example.com/images/food_drive.jpg",
      "category": "Community",
      "start_date": "2023-04-01T09:00:00Z",
      "end_date": "2023-10-01T23:59:59Z",
      "created_by": "770e8400-e29b-41d4-a716-446655440002",
      "status": "closed",
      "created_at": "2023-03-01T10:00:00Z",
      "updated_at": "2023-09-01T16:00:00Z"
    },
    {
      "id": "780e8400-e29b-41d4-a716-4466554400031",
      "title": "Help Build a School",
      "description": "Raising funds to construct a school in a remote village.",
      "goalAmount": 50000.0,
      "raisedAmount": 15000.0,
      "imageUrl": "https://example.com/images/school.jpg",
      "category": "Education",
      "start_date": "2023-02-01T09:00:00Z",
      "end_date": "2023-12-31T23:59:59Z",
      "created_by": "550e8400-e29b-41d4-a716-446655440000",
      "status": "active",
      "created_at": "2023-01-10T10:00:00Z",
      "updated_at": "2023-01-20T12:00:00Z"
    },
    {
      "id": "880e8400-e29b-41d4-a716-4466554400041",
      "title": "Medical Aid for Disaster Victims",
      "description": "Providing essential medical supplies to victims of a natural disaster.",
      "goalAmount": 100000.0,
      "raisedAmount": 60000.0,
      "imageUrl": "https://example.com/images/medical_aid.jpg",
      "category": "Health",
      "start_date": "2023-03-01T10:00:00Z",
      "end_date": "2023-08-31T23:59:59Z",
      "created_by": "660e8400-e29b-41d4-a716-446655440001",
      "status": "pending",
      "created_at": "2023-02-01T11:00:00Z",
      "updated_at": "2023-02-15T15:00:00Z"
    },
    {
      "id": "990e8400-e29b-41d4-a716-4466554400051",
      "title": "Food Drive for the Homeless",
      "description": "Collecting donations to provide meals for homeless individuals in the city.",
      "goalAmount": 20000.0,
      "raisedAmount": 20000.0,
      "imageUrl": "https://example.com/images/food_drive.jpg",
      "category": "Community",
      "start_date": "2023-04-01T09:00:00Z",
      "end_date": "2023-10-01T23:59:59Z",
      "created_by": "770e8400-e29b-41d4-a716-446655440002",
      "status": "closed",
      "created_at": "2023-03-01T10:00:00Z",
      "updated_at": "2023-09-01T16:00:00Z"
    },

  ],
  "donations":[
    {
        "id": "a10e8400-e29b-41d4-a716-446655440006",
        "fundraiser_id": "780e8400-e29b-41d4-a716-446655440003",
        "donor_id": "550e8400-e29b-41d4-a716-446655440000",
        "amount": 100.00,
        "payment_method": "credit_card",
        "transaction_id": "txn_01",
        "donation_date": "2023-05-01T14:00:00Z",
        "status": "completed"
    },
    {
        "id": "b20e8400-e29b-41d4-a716-446655440007",
        "fundraiser_id": "880e8400-e29b-41d4-a716-446655440004",
        "donor_id": "660e8400-e29b-41d4-a716-446655440001",
        "amount": 250.00,
        "payment_method": "paypal",
        "transaction_id": "txn_02",
        "donation_date": "2023-06-01T15:00:00Z",
        "status": "pending"
    },
    {
        "id": "c30e8400-e29b-41d4-a716-446655440008",
        "fundraiser_id": "990e8400-e29b-41d4-a716-446655440005",
        "donor_id": "770e8400-e29b-41d4-a716-446655440002",
        "amount": 75.00,
        "payment_method": "bank_transfer",
        "transaction_id": "txn_03",
        "donation_date": "2023-07-01T16:00:00Z",
        "status": "failed"
    }
]

}
