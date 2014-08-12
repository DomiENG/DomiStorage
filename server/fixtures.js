if (Listings.find().count() === 0) {
  Listings.insert({
    address: '100 Apple Street',
    price: '100',
    owner: 'Jeff'
  });
  
  Listings.insert({
    address: '200 Banana Ave',
    price: '123',
    owner: 'Que'
  });
  
  Listings.insert({
    address: '123 Cat Drive',
    price: '89',
    owner: 'Mike'
  });
}