// You are given an array consisting of n integers which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. You are given the task of assigning stalls to k cows such that the minimum distance between any two of them is the maximum possible.

//Binary Search Space


function isPossibleSolution(stall, m, mid){

    let totalCows = 1;
    stall.sort((a,b)=> a-b)
    let lastPos = stall[0];

    for(let i =0; i< stall.length; i++){
        if(stall[i]  - lastPos >= mid){
            ++totalCows;
            if(totalCows === m){
                return true;
            }
            lastPos = stall[i]
        }
    }

    return false;
}

function aggressiveCow(stall, m){

    let min = stall.reduce((acc, item)=>{ return Math.min(item, acc)}, Number.POSITIVE_INFINITY)
    let max = stall.reduce((acc, item)=>{ return Math.max(item, acc)},0)

    let start = 0
    let end = max - min;
    let mid = Math.floor(start + (end - start)/2);

    let ans = -1;

    while(start <= end){
        console.log(mid,start,end);

        if(isPossibleSolution(stall, m, mid)){
            ans = mid;
            start = mid +1;  // To find the largest possible solution
        }
        else{
            end = mid - 1;
        }

     mid = Math.floor(start + (end - start)/2);
    }

    return ans;
}


console.log(aggressiveCow([4,2,3,1,6],2));