const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error: some bug');
    }, 2000);
});

const getList = async () => {
    try {
        const response = await fetch('https://64d88a65cf9bf5b879ce6dd9.mockapi.io/api/v1/moviesNow');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

// Requirement 1: Stop execution if any promise fails
Promise.all([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('All promises succeeded:', results);
    })
    .catch(error => {
        console.log('A promise failed:', error);
    });

// Requirement 2: Handle all promises regardless of their success or failure
Promise.allSettled([firstPromise, secondPromise, getList()])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} succeeded with:`, result.value);
            } else {
                console.log(`Promise ${index + 1} failed with:`, result.reason);
            }
        });
        console.log('All promises have been processed.');
    });
