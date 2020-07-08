<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        var height = 1;
        var groundRes = 1;
        function distance(times) {
            if (times == 1) {
                return height;
            } else {
                return distance(times - 1) / 2;
            }
        }
        for(var i=2; i<=5; i++){
            groundRes += 2*distance(i);
        }
        console.log(groundRes);
        console.log(distance(5+1));
    </script>
</head>

<body>

</body>

</html>