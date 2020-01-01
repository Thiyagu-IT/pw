var push=require('web-push');
let vapidkeys=
    {
        publicKey: 'BNKv8KjQUzW-GSm02DTjusBK4dHz3qlcWoFRtQAlp11nWyVbhPaEs8x7wH77SJlHbpXyukT6ZvyGWmkDPQ88jYs',
        privateKey: 'FFLDkOVAdcWHyYeDyF2inqmZGmOEyN3rBJ4S7Xk-7ms'
    }

push.setVapidDetails('mail:totest@code.co.uk',vapidkeys.publicKey,vapidkeys.privateKey)

let sub={};
push.sendNotification(sub,'text message')