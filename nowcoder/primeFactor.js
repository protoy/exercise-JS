        var num = 180;
        var res = '';
        for(var i=2; i<Math.sqrt(num); i++){
            while(!(num%i)){
                num = num/i;
                console.log(num+' '+i);
                res += i + ' ';
            }
        }
        if(num>1){
            res += num + ' ';
        }
        console.log(res);
