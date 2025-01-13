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
// Sắp xếp danh sách sinh viên theo avgPoint từ cao xuống thấp
const sortedByAvgPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp:");
console.log(sortedByAvgPoint);

// Sắp xếp danh sách sinh viên theo avgTrainingPoint từ cao xuống thấp
const sortedByAvgTrainingPoint = [...class1, ...class2].sort((a, b) => b.avgTrainingPoint - a.avgTrainingPoint);
console.log("Danh sách sinh viên theo avgTrainingPoint từ cao xuống thấp:");
console.log(sortedByAvgTrainingPoint);

// Tìm sinh viên có avgPoint và avgTrainingPoint cao nhất
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
const maxAvgTrainingPointStudent = allStudents.reduce((max, student) => (student.avgTrainingPoint > max.avgTrainingPoint ? student : max));

console.log("Thông tin sinh viên có avgPoint cao nhất:");
console.log(maxAvgPointStudent);

console.log("Thông tin sinh viên có avgTrainingPoint cao nhất:");
console.log(maxAvgTrainingPointStudent);
