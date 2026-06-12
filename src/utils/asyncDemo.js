/**
 * Asynchronous Programming Demo
 * Examples of callbacks, promises, and async/await patterns
 */

// ============================================
// 1. CALLBACKS
// ============================================

/**
 * Simulates fetching user data with a callback
 * @param {number} userId - User ID to fetch
 * @param {function} callback - Callback function (error, data)
 */

function fetchUserCallback(userId, callback) {
  console.log(`Fetching user ${userId}...`);

  // Simulate network delay with setTimeout
  setTimeout(() => {
    // TODO: Complete this callback example
    // Hint: Call the callback with (null, userData) for success
    // or (error, null) for failure

    if (userId > 0) {
      const userData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      callback(null, userData);
    } else {
      if (userId===null){
        const error = new Error('Please provide a user ID');
        callback(error, null);
        return;
      }
      if (typeof userId !== 'number') {
        const error = new Error('User ID must be only a number');
        callback(error, null);
        return;
      }
      // Call callback with error
    }
  }, 1000);
}

/**
 * Demonstrates callback pattern
 */

function demonstrateCallbacks(userId) {
  console.log('\n=== Callback Demo ===');
  // TODO: Call fetchUserCallback and handle the result
  // Hint: Pass a callback function that logs the result or error
  fetchUserCallback(1, (error, userData) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
     console.log('User Data:', userData);
    }
  });
} 

function CallbacksAdditional(userId, callback) {
  fetchUserCallback(userId, (error, userData) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
     console.log('User Data:', userData);
    }
    callback();
  });
} 

// ============================================
// 2. PROMISES
// ============================================

/**
 * Simulates fetching user data with a Promise
 * @param {number} userId - User ID to fetch
 * @returns {Promise} Promise that resolves with user data
 */
function fetchUserPromise(userId) {
  console.log(`Fetching user ${userId}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Complete this promise example
      // Hint: Use resolve(userData) for success
      // Use reject(error) for failure

      if (userId > 0) {
        const userData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        };
        resolve(userData);
        // Resolve with user data
      } else {
        if (userId===null){
          reject(new Error('Please provide a user ID'));
          return;
        } else {
          reject(new Error('Invalid user ID'));
          return;
        }
      }
    }, 1000);
  });
}

/**
 * Demonstrates promise pattern with .then() and .catch()
 */
function demonstratePromises() {
  console.log('\n=== Promise Demo ===');
  // TODO: Call fetchUserPromise and chain .then() and .catch()
  // Hint: Use .then() to handle success and .catch() to handle errors
  // Log the results to console
  fetchUserPromise(2)
   .then(userData => (
      console.log('User Data:', userData)
   ))
   .catch(error => (
      console.error('Error:', error.message)
   ));
}

function PromisesAdditional(userId) {
  fetchUserPromise(userId)
   .then(userData => (
      console.log('User Data:', userData)
   ))
   .catch(error => (
      console.error('Error:', error.message)
   ));
}

// ============================================
// 3. ASYNC/AWAIT
// ============================================

/**
 * Creates a delay using promises
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside a Promise
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetches multiple users sequentially using async/await
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchMultipleUsers(userIds) {
  // TODO: Implement this using async/await
  // Hint: Use a loop and await fetchUserPromise for each ID
  // Use try/catch to handle errors
  // Return an array of all user data
  const users = [];
  for (const id of userIds) {
    try {
      const userData = await fetchUserPromise(id);
      users.push(userData);
      await delay(500); 
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error.message);
    }
  }
  return users;
}

/**
 * Demonstrates async/await pattern
 */
async function demonstrateAsyncAwait() {
  console.log('\n=== Async/Await Demo ===');
  // TODO: Call fetchMultipleUsers with an array of user IDs
  // Use try/catch to handle any errors
  // Log the results
  try {
    const users = await fetchMultipleUsers([1, 2, -1, null, 'abc']);
    console.log('Fetched Users:', users);
  }
  catch (error) {
    console.error('Error:', error.message);
  }
}

async function AsyncAwaitAdditional(userId) {
  try {
    const users = await fetchMultipleUsers(userId);
    console.log('Fetched Users:', users);
  }
  catch (error) {
    console.error('Error:', error.message);
  }
}

// ============================================
// BONUS: Promise.all()
// ============================================

/**
 * Fetches multiple users in parallel using Promise.all()
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchUsersParallel(userIds) {
  // TODO: Implement this using Promise.all()
  // Hint: Map userIds to promises, then use Promise.all()
  // This is faster than sequential fetching!
  const promises = userIds.map(fetchUserPromise);
  return Promise.all(promises);
}

// Export functions
export {
  fetchUserCallback,
  demonstrateCallbacks,
  fetchUserPromise,
  demonstratePromises,
  delay,
  fetchMultipleUsers,
  demonstrateAsyncAwait,
  fetchUsersParallel,
  CallbacksAdditional,
  PromisesAdditional,
  AsyncAwaitAdditional
};
