var arr = ['5.5.1', '4.21.0', '4.22.0', '6.1.0', '5.1.0', '4.5.0'];
arr = arr.map( a => a.replace(/\d+/g, n => +n+100000 ) )
// arr = arr.map( a => a.replace(/\d+/g, n => +n+100000 ) ).sort()
//          .map( a => a.replace(/\d+/g, n => +n-100000 ) );

         console.log(arr);
         let a ='100005.100005.100001'
         let b ='100004.100021.100000'
         console.log(a.codePointAt());
         console.log(b.codePointAt());
        //  console.log(arr[2].codePointAt());
        //  console.log(arr[3].codePointAt());
// [ '4.5.0', '4.21.0', '4.22.0', '5.1.0', '5.5.1', '6.1.0' ]