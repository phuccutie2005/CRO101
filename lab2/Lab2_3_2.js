// Yêu cầu thứ hai: Luôn chạy bất kể tất cả các promise hoàn thành hay thất bại, và log ra thông báo thành công.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 1");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 2");
    }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hoàn thành promise 3");
    }, 4000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log("Tất cả các promise đã hoàn thành:");
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Promise hoàn thành:", result.value);
        } else {
            console.log("Promise thất bại:", result.reason);
        }
    });
});
