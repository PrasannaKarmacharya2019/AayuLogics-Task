// Implement a simple cache using Map with expiration time
// Store values with timestamp and retrieve only if not expired

const cache = new Map();
const EXPIRY = 3000;

// save value
function set(key, value) 
{
     cache.set(key, { value, time: Date.now() });
//   cache.set(key, value);
}

set("name", "Prasanna");
console.log(cache);

// get value
function get(key) {
  if (!cache.has(key)) return null;

  const data = cache.get(key);
  console.log("data is",data);
console.log("date now:",Date.now(),"date.time:",data.time)
  if (Date.now() - data.time > EXPIRY) {
    // cache.delete(key);
    return null;
  }

  return data.value;
}
console.log("get value:",get("name")); 

setTimeout(() => {
  console.log(get("name"));
}, 4000);

