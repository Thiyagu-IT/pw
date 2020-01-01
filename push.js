var push=require('web-push');
let vapidkeys=
    {
        publicKey: 'BNKv8KjQUzW-GSm02DTjusBK4dHz3qlcWoFRtQAlp11nWyVbhPaEs8x7wH77SJlHbpXyukT6ZvyGWmkDPQ88jYs',
        privateKey: 'FFLDkOVAdcWHyYeDyF2inqmZGmOEyN3rBJ4S7Xk-7ms'
    }

push.setVapidDetails('mail:totest@code.co.uk',vapidkeys.publicKey,vapidkeys.privateKey)

let sub={
    endpoint:"https://fcm.googleapis.com/fcm/send/cVbz2JknGBs:APA91bF0IuO7QrzzGP-Ccgb_jMxFug5ZbN5Szv2KSnasaQ71uV3uHeM3zRrUJ4iGX2TmnNDpTuTrbIvZSYzgzb_vo-YpvOTzahyqLMX8b7mMluJUOV4uMZIIFX6EP9r29YEebIQSW27q","expirationTime":null,"keys":{"p256dh":"BL63HzjnRb_hlEW6jrQFm1kU32SJ-0ZLCJ-T_V5t3Q02w9Tm94G_GbHizDc2kTmdtrjmOUCR4oyS3ALKaqSppsU",
    auth:"2egvxmiGzHgzyU63LYt8tQ"
}
};
push.sendNotification(sub,'text message')