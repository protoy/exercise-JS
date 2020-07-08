<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var line = "ABBA";
        var arr = line.split('');
        var count = 0;
        var res = 0;
        for(var i = 0; i<arr.length;i++){
            if(arr[i] == arr[i+1]){
                var start = i;
                var end = i+1;
                console.log(count);
                while(start>=0 && end<=arr.length && (arr[start] == arr[end])){
                    count += 2;
                    console.log("star is "+ arr[start]);
                    console.log("end is " + arr[end]);
                    start--;
                    end++;
                    console.log(count);
                }
                if(count > res){
                    res = count;
                    console.log("res is "+ res);
                }
            }
            if(arr[i-1] == arr[i+1]){
                start = i-1;
                end = i+1;
                while(start>=0 && end<=arr.length && arr[start] == arr[end]){
                    start--;
                    end++;
                    count += 2;
                }
                if(count > res){
                    res = count;
                }
            }
        }
        console.log(res);
    </script>
</head>
<body>
    
</body>
</html>