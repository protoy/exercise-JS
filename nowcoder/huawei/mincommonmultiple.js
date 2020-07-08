        var numA = 5;
        var numB = 7;
        var big = numA * numB;
        while(numA%numB){
            var temp = numA;
            numA = numB;
            numB = temp%numB;
        }
        var res = big / numB;
        console.log(res);