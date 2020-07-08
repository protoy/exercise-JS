        line = ")%m$*@inq%acimi%uoureq*qwja#ka^gopp@@*&wbw@%s@&kx(ogv)nkjhvpadso)%yqbtreyug`vsdczb+ezs$itja)yy+z`+z@c(%aweq$@vua(yqbs^)ty&ixn*fgohp^)bt_pl)atcn&ykir#)%fybccmfq!t)b^c)+z_bxrf_(cq&e+dp*litx@qyoljb@ik&gswrcxfpsrt^!tnzu+aa*dbw^lwqbvtems@s&ry_bkn)t)i&$gcs$tgkm(@dae%c`&#&g+oi*^mz^wps!l#eql`pn@if";
        var str = line.split('');
        var count = 0;
        var res = new Array();
        for (var i = 0; i < str.length; i++) {
            var acs = line.charCodeAt(i);
            if (acs >= 0 && acs <= 127) {
                if (!res.includes(str[i])) {
                    res.push(str[i]);
                }
            }
        }
        console.log(res.length);