// Implement a simple cache using Map with expiration time
// Store values with timestamp and retrieve only if not expired

const cache = new Map();

// Step 2: Set expiration time (in milliseconds)
const EXPIRATION_TIME = 5000; // 5 seconds

// Step 3: Function to save data
function setCache(key, value) {
  cache.set(key, 
    {
    value: value,
    time: Date.now()
  });
}

// Step 4: Function to get data
function getCache(key) {
  if (!cache.has(key)) {
    return null; 
  }

  const storedData = cache.get(key);
  const currentTime = Date.now();

  // check if expired
  if (currentTime - storedData.time > EXPIRATION_TIME) {
    cache.delete(key);
    return null;
  }

  return storedData.value;
}

setCache("user", "Prasanna");

console.log(getCache("user")); 

// After 5 seconds
setTimeout(() => {
  console.log(getCache("user")); 
}, 4000);



