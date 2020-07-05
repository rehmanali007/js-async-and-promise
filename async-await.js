const findWifi = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finding the wifi...')
            // resolve('Found wifi.....')
            reject('NO wifi found!')
        }, 30)
    });
    return promise;
}

const scanWifi = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Scanning the wifi...')
            resolve('Scanned wifi.....')
        }, 20)
    });
    return promise;
}

const hackWifi = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hacking the wifi...')
            resolve('Hacked wifi.....')
        }, 10)
    });
    return promise;
}

const setUpDb = () => {
    console.log('Setting up the db...')
}


async function startHacking() {
    try {
        // Below functions returns a promise if any of the function raises an error then execution jumps to catch block..
        let findStatus = await findWifi();
        console.log(findStatus)
        let scanStatus = await scanWifi();
        console.log(scanStatus)
        let hackStatus = await hackWifi();
        console.log(hackStatus)
    }
    catch (error) {
        // Any error in the try block is handled in this block...
        console.log('Caught an error')
        console.log(error)
    }

}

startHacking();
setUpDb();
