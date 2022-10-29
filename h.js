function toArray(obj) {
  let result = [];
  for (let key in obj) {
    let newArray = [key, obj[key]]
    result.push(newArray)
  }
  return result;
}
console.log(toArray({a:1,b:2}))
console.log(toArray({tesla:12,tats:112}))
