function splitTheBill(x) {
      var total = 0
        var length = Object.keys(x).length;  
        for (let prop in x) {
            var a = Math.round(x[prop]*100)/100;
            var b = Math.round(total*100)/100;
            total = Math.round((a+b)*100)/100;
          }
        //var aver = (total/length).toFixed(2);
        var aver = Math.round((total/length)*100)/100;
        //Math.round(num * 100) / 100


        for (let nuovo in x) {
          x[nuovo] = Math.round((x[nuovo]-aver)*100)/100;
         }
       return x;
}

splitTheBill({A: -17.2, B: -32.2, C: -47.2}), {A: 5, B: 0, C: -5}

/* USEFUL */

let obj = { a: 1, b: 2, c: 3 };

for (let prop in obj) {
  console.log("Object Property: " + prop + " " + "Object Property value: "+ obj[prop]);
}

/*
Object Property: a Object Property value: 1
Object Property: b Object Property value: 2
Object Property: c Object Property value: 3
*/