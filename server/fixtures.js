if (Listings.find().count() === 0) {
  Listings.insert({
    address: '100 Apple Street',
    price: '100',
    owner: 'Jeff',
    userId: 'default'
  });
  
  Listings.insert({
    address: '200 Banana Ave',
    price: '123',
    owner: 'Que',
    userId: 'default'
  });
  
  Listings.insert({
    address: '300 Cat Drive',
    price: '89',
    owner: 'Mike',
    userId: 'default'
  });
}