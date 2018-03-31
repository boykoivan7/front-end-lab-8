function askFoo () {
    return new Promise(function (resolve, reject) {
      resolve('foo');
    });
}

function run (generator) {
    var it = generator();
    go(it.next());

    function go(result) {
      if (result.done) return;
      else {
        return result.value.then(function (value) {
          return go(it.next(value));
        }, function (error) {
          it.throw(error);
        });
      }
    }
}

run(function* () {
    try {
        var foo = yield askFoo();
        console.log(foo);
    }
    catch(error) {
        console.log(error);
    }
});