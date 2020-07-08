        line=200;
        var arr = line.toString(2).split('');
        var res = 0;
        var temp = 0;
        for(var i = 0;i<arr.length;i++){
            if(arr[i]==1){
                temp++;
                if(temp>res){
                    res = temp;
                }
            }else{
                temp = 0;
            }
        }
        console.log(res);