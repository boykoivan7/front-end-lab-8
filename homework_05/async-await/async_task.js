const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerFail) {
            reject(false);
            return;
        }
  
        resolve(true);
      }, msec);
    });
};

const asyncFn = async () => {
    const result = await waitFewSec(1000);
    return result;
};


const doAsyncMagic = async () => {
    var i = 0;
    var arr = [];
    while (i < 4) {
        try {
            var value = await asyncFn();
            arr.push(value);
            i++;
        }
        catch(error) {
            return console.error(error);
        }
    }
    console.log(arr);
};

doAsyncMagic();
  
async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
        yield i;
    }
}

const iterateRange = async () => {
    var sum = 0;
    try {
        for await(var value of rangeGen()){
			sum += value;
		}
		return sum;
    }
    catch(error) {
        return console.error(error);
    }
};
  
iterateRange();