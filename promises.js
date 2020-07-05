
const findWifi = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finding a wifi...')
            // Resolve is executed upon successful execution of the function.
            resolve('Found wifi...')
            // If there is some error in the function then reject is executed...
            // reject('No wifi found....')
        }, 20)
    })
    return promise;

}


const scanWifi = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Scanning the wifi...')
            resolve('Scanned the wifi...')
        }, 30)
    });
    return promise;
}


const findVulnerability = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finding a vulnerability....')
            // resolve('Found a severe vulnerability...')
            reject('Wifi not vulnerable..')
        }, 30)
    });
    return promise;
}

let scanWifiPromise = findWifi();
scanWifiPromise.then((msg) => {
    console.log(msg)
    return scanWifi();
})
    .then((msg) => {
        // If scanWifiPromise calls the resove then this function is called as resolve..
        console.log(msg)
        // Then it calls another function fundVulnerability in the chain...
        return findVulnerability();
    }).then((msg) => {
        // If findVulnerability executes resolve inside then this is the function executed..
        console.log(msg)
        console.log('Done all the processes.')
    })
    .catch((error) => {
        // IF any of then function in the chain executes reject then the chain is broken and
        // the control comes directly to this block where errors are handled...
        console.log(error)
    })