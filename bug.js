```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity: -1}});
//The above code will fail if quantity field is not present
```