<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var n = 10;
        var count = 0;
        var empty = n;
        var temp = 0;
        while(empty>1){
            temp = Math.floor(empty/3);
            count += temp;
            empty = empty%3 + temp;
            if(empty == 2){
                count++;
                break;
            }
        }
        console.log(count);
    </script>
</head>
<body>
    
</body>
</html>