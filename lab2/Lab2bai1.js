// Dữ liệu sinh viên
const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'pass',
    },
];

const class2 = [
    {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'failed',
    },
    {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTraningPoint: 10,
        status: 'pass',
    },
    {
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTraningPoint: 2,
        status: 'pass',
    },
];

// Gộp danh sách sinh viên của nhiều lớp
const allStudents = [...class1, ...class2];

// Lọc ra danh sách sinh viên có status "pass"
const eligibleStudents = allStudents.filter(student => student.status === 'pass');

// Sắp xếp danh sách sinh viên theo điểm số từ cao xuống thấp (sao chép danh sách trước khi sắp xếp)
const sortedByAvgPoint = eligibleStudents.slice().sort((a, b) => b.avgPoint - a.avgPoint);

// Sắp xếp danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp (sao chép danh sách trước khi sắp xếp)
const sortedByTrainingPoint = eligibleStudents.slice().sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

// Lấy thông tin Ong vàng (sinh viên có điểm số cao nhất)
const goldenBee = sortedByAvgPoint[0];

// Xuất kết quả
console.log('Danh sách sinh viên có điểm số từ cao xuống thấp:', sortedByAvgPoint);
console.log('Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp:', sortedByTrainingPoint);
console.log('Thông tin Ong vàng:', goldenBee);
