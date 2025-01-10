// Dữ liệu ban đầu
const oldData = [
    { code: 'ab', name: 'Son mới' },
    { code: 'ac', name: 'Sửa rửa mặt' },
    { code: null, name: null },
    { code: 'ad', name: '' }
];

// Hàm chuyển đổi mảng sang object
const parseArrayToObject = (array = [], keyId = 'code') => {
    return Object.fromEntries(
        array.map(item => [item[keyId] || '', item]).filter(([key]) => key)
    );
};

// Tạo object từ mảng ban đầu
let newData = parseArrayToObject(oldData);
console.log('Object mới:', newData);

// Hàm lọc bỏ các object không hợp lệ
const filterObject = (obj) => {
    Object.keys(obj).forEach(key => {
        if (!obj[key].code || !obj[key].name || obj[key].code === null || obj[key].name === null || obj[key].name === '') {
            delete obj[key];
        }
    });
    return obj;
};

// Lọc dữ liệu mới
newData = filterObject(newData);
console.log('Object sau khi lọc:', newData);
