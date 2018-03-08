cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
        "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
        "pluginId": "cordova-plugin-uniquedeviceid",
        "merges": [
            "window.plugins.uniqueDeviceID"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "ionic-plugin-deeplinks.deeplink",
        "file": "plugins/ionic-plugin-deeplinks/www/deeplink.js",
        "pluginId": "ionic-plugin-deeplinks",
        "clobbers": [
            "IonicDeeplink"
        ],
        "runs": true
    },
    {
        "id": "card.io.cordova.mobilesdk.CardIO",
        "file": "plugins/card.io.cordova.mobilesdk/www/cdv-plugin-card-io.js",
        "pluginId": "card.io.cordova.mobilesdk",
        "clobbers": [
            "CardIO"
        ]
    },
    {
        "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
        "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
        "pluginId": "com.paypal.cordova.mobilesdk",
        "clobbers": [
            "PayPalMobile"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-uniquedeviceid": "1.3.2",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-splashscreen": "4.0.3",
    "ionic-plugin-deeplinks": "1.0.15",
    "card.io.cordova.mobilesdk": "2.1.0",
    "com.paypal.cordova.mobilesdk": "3.5.0"
};
// BOTTOM OF METADATA
});