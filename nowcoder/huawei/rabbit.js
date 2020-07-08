        month = 9;
        function count(month){
            if(month<3){
                return 1;
            }else{
                return count(month-1) + count(month-2);
            }
        }
        console.log(count(month));
