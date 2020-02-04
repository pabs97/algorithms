class C1 {
  constructor() {
    this.a = 1;
    this.b = 2;
  }
}

class C2 extends C1 {
  constructor() {
    super();
    this.c = 3;
  }
  fireSuccess() {
    successHandler({
      success1: () => console.log(3, this.c),
      success2() {
        console.log(3, this.c);
      }
    });
  }
}

// let cc = new C2();
// cc.fireSuccess();

function successHandler(obj) {
  obj.success1();
}

var f1 = function f2() {
  console.log(f2);
}
// f1();
// console.log(f2);

// named function expression - 100% you should prefer this
// 1. reliable self reference, unbind itself
// 2. more debuggable stack traces
// 3. more self-documenting
// anonymous function - 



// for (let i = 1; i <= 2; i++) {
//   setTimeout(function() { console.log(i) }, 100);
// }

// for (var i = 1; i <= 2; i++) {
//   setTimeout(function() { console.log(i) }, 100);
// }

// for (var i = 1; i <= 4; i++) {
//   setTimeout((function(num) { 
//     return function () {
//       console.log(num);
//     }
//   })(i)
//   , 100);
// }

// for (var i = 1; i <= 4; i++) {
//   (function (num) {
//     setTimeout(function() {
//       console.log(num);
//     }, 100)
//   })(i);
// }







var defaults = {
  topic: "JavaScript",
  format: "Live",
  slides: {
    start: 0,
    end: 100
  }
};

fakeAjax("http://get-the-workshop.tld/" ,handleResponse);



function handleResponse(/* destructuring here */ {
  topic ="JavaScript", 
  format = "Live",
  slides: {
    start = 4,
    end = 5
  } = {
    start: 400,
    end: 500
  }
}) {

  slides = { start, end };

  console.log(topic);
  console.log(format);
  console.log(slides);
  TestCase({
    /* restructuring here */
    topic, format, slides
  });
}

function TestCase(data) {
  console.log(
    data.topic == "JS Recent Parts" &&
    data.format == "Live" &&
    data.slides.start === 0 &&
    data.slides.end == 77
  );
}

function fakeAjax(url,cb) {
  // fake ajax response:
  cb({
    topic: "JS Recent Parts",
    // slides: {
    //     // start: 4000,
    //     // end: 5000
    // }
  });
}


