function LogGamma(Z) {
    var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
    var LG= (Z-.5)*Math.log(Z+4.5)-(Z+4.5)+Math.log(S*2.50662827465);
    return LG
}

function Betinc(X,A,B) {
    var A0=0;
    var B0=1;
    var A1=1;
    var B1=1;
    var M9=0;
    var A2=0;
    var C9;
    while (Math.abs((A1-A2)/A1)>.00001) {
        A2=A1;
        C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
        A0=A1+C9*A0;
        B0=B1+C9*B0;
        M9=M9+1;
        C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
        A1=A0+C9*A1;
        B1=B0+C9*B1;
        A0=A0/B1;
        B0=B0/B1;
        A1=A1/B1;
        B1=1;
    }
    return A1/A;
}

function cdf(X,N,P) {
    var bincdf;
        if (N<=0) {
            return .5;
        } else if ((P<0)||(P>1)) {
            alert("probability must be between 0 and 1")
        } else if (X<0) {
            bincdf=0
        } else if (X>=N) {
            bincdf=1
        } else {
            X=Math.floor(X);
            var Z=P;
            var A=X+1;
            var B=N-X;
            var S=A+B;
            var BT=Math.exp(LogGamma(S)-LogGamma(B)-LogGamma(A)+A*Math.log(Z)+B*Math.log(1-Z));
            if (Z<(A+1)/(S+2)) {
                var Betacdf=BT*Betinc(Z,A,B)
            } else {
                Betacdf=1-BT*Betinc(1-Z,B,A)
            }
            bincdf=1-Betacdf;
        }
        bincdf=Math.round(bincdf*100000)/100000;
    return bincdf;
}

function jam(hits, dice) {
    return (cdf(hits,dice,1/3)+cdf(hits-1,dice,1/3))/2;
}
