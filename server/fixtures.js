if (Listings.find().count() === 0) {
  Listings.insert({
    address: '100 Apple Street',
    price: '100',
    message: 'This is a default fixture',
    userId: 'default'
  });
  
  Listings.insert({
    address: '200 Banana Ave',
    price: '123',
    message: 'This is a default fixture',
    userId: 'default'
  });
  
  Listings.insert({
    address: '300 Cat Drive',
    price: '89',
    message: 'This is a default fixture',
    userId: 'default'
  });
}