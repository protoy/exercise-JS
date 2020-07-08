        num=2000
        let count = 0;
    for(let i=0; i<=num; i++){
        let j = Math.pow(i, 2);
        if(j.toString().indexOf(i.toString()) == j.toString().length-i.toString().length){
            count++;
        }
    }
    console.log(count);