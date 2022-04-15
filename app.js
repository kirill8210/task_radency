const chooseOptimalDistance = (t, k, ls) =>{

/*  Set() подойдет, если все расстояния разные
    function allArray(ls, k){
        const result = new Set();

        if (k === 0) {
            result.add([]);
        } else {
            for (const arr of allArray(ls, k - 1)){
                for (const el of ls) {
                    if (arr.indexOf(el) !== -1) break;
                    result.add([el, ...arr]);
                }
            }
        }
        return result;
    }
*/
    function allArray(ls, k){
        let arrSet = [];
        let total = Math.pow(2, ls.length);
        for (let i = 0; total > i; i++){
            let arr = [];
            let j = ls.length - 1;
            do {
                if ( (i & (1 << j)) !== 0){
                    arr.push(ls[j]);
                }
            } while(j--);
            if( arr.length === k){
                arrSet.push(arr);
            }
        }
        return arrSet;
    }

    let mySet = [...allArray(ls, k)].map(el => [el.reduce((a, b) => a + b)]);
    //console.log(mySet);

    const maxT = Math.max(...mySet.filter(el => el < t));
    //console.log(maxT);

    if (ls.length < k || maxT === -Infinity){
        return null;
    } else {
        return maxT;
    }

};

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseOptimalDistance(163, 3, [50])); // null
console.log(chooseOptimalDistance(880, 8, [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89])); // 876

