const data = [4, 3, 2, 1];

data.sort(); //[1,2,3,4];

const data2 = [1, 2, 3, 4, 10];

data2.sort(); // [1,10,2,3,4]

//
//comparator 함수
data2.sort((a, b) => a - b);
//오름차순

const data3 = ["a", "b", "A", "B", "t"];
data3.sort();
// A B a b t
// ASCII  순서

data3.sort((a, b) => a.localeCompare(b));
