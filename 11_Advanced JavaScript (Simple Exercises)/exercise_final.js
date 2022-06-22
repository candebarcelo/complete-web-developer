//1
let input1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const answer = input => {
    debugger;
    input.sort((a, b) => a - b);
    let output = [];
    let separator = []
    let duplicated = input.map((item, i) => {
        if ((item[i] === item[i+1]) && item[i+1] == true) {
            console.log('itemi', item[i]);
            console.log('itemi+1', item[i+1]);
            return item[i]
        }
    });
    // const separator = input => {
    //     for (item in input) {
    //         while 
    //     }
    return duplicated;
}

answer(input1);