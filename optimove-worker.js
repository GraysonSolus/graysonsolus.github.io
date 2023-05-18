/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteDdlBannerConfigFromCache = exports.loadDdlConfig = exports.loadPlatformConfig = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var getCacheKeys = function (key) { return ({
    CONFIG_CACHE_KEY: "".concat(key, "Config"),
    CONFIG_CACHE_KEY_UPDATED: "".concat(key, "ConfigUpdated")
}); };
var MAX_CACHE_AGE_MS = 1 * 60 * 60 * 1000;
var ConfigCacheType;
(function (ConfigCacheType) {
    ConfigCacheType["PLATFORM"] = "platform";
    ConfigCacheType["DDL"] = "ddl";
})(ConfigCacheType || (ConfigCacheType = {}));
function loadConfig(url, cacheKey, ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var cacheKeys, config, lastLoadTime, updatedRemoteConfig, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cacheKeys = getCacheKeys(cacheKey);
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    config = _b.sent();
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY_UPDATED)];
                case 2:
                    lastLoadTime = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : 0;
                    updatedRemoteConfig = false;
                    if (!(Date.now() - lastLoadTime > MAX_CACHE_AGE_MS)) return [3 /*break*/, 6];
                    console.info('Config never synced/stale, syncing now...');
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, (0, utils_1.authedFetchJson)(ctx, url)];
                case 4:
                    config = _b.sent();
                    updatedRemoteConfig = true;
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    console.warn(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    if (!updatedRemoteConfig) return [3 /*break*/, 9];
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY, config)];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY_UPDATED, Date.now())];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [2 /*return*/, config];
            }
        });
    });
}
function loadPlatformConfig(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, loadConfig("".concat(ctx.urlForService(_1.Service.PUSH), "/v1/web/config"), ConfigCacheType.PLATFORM, ctx)];
                case 1: return [2 /*return*/, ((_a = (_b.sent())) !== null && _a !== void 0 ? _a : {})];
            }
        });
    });
}
exports.loadPlatformConfig = loadPlatformConfig;
function loadDdlConfig(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var webInstallId, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, _1.getInstallId)()];
                case 1:
                    webInstallId = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, loadConfig("".concat(ctx.urlForService(_1.Service.DDL), "/v1/banners?webInstallId=").concat(webInstallId), ConfigCacheType.DDL, ctx)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    err_1 = _a.sent();
                    console.warn("loadDdlConfig: failed to load Deferred DeepLink configuration", err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.loadDdlConfig = loadDdlConfig;
function deleteDdlBannerConfigFromCache(bannerUuid) {
    return __awaiter(this, void 0, void 0, function () {
        var cacheKeys, configs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cacheKeys = getCacheKeys(ConfigCacheType.DDL);
                    return [4 /*yield*/, (0, storage_1.get)(cacheKeys.CONFIG_CACHE_KEY)];
                case 1:
                    configs = _a.sent();
                    if (!configs) {
                        return [2 /*return*/];
                    }
                    configs = configs.filter(function (c) { return c.uuid !== bannerUuid; });
                    return [4 /*yield*/, (0, storage_1.set)(cacheKeys.CONFIG_CACHE_KEY, configs)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteDdlBannerConfigFromCache = deleteDdlBannerConfigFromCache;


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getChannelDialogChannels = exports.trackInstallDetails = exports.trackEvent = exports.clearUserAssociation = exports.associateUser = exports.getUserId = exports.setInstallId = exports.getInstallId = exports.assertConfigValid = exports.Context = exports.Service = exports.SDKFeature = exports.PromptPosition = exports.ReminderTimeUnit = exports.UiActionType = exports.PromptTypeName = exports.EventType = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/core/storage/index.ts");
var SDK_TYPE = 104;
// Backwards compatibility with optimove SDK not including version in Optimobile config
var DEFAULT_SDK_VERSION = '2.0.17';
//only system events
var EventType;
(function (EventType) {
    EventType["MESSAGE_DELIVERED"] = "k.message.delivered";
    EventType["MESSAGE_OPENED"] = "k.message.opened";
    EventType["PUSH_REGISTERED"] = "k.push.deviceRegistered";
    EventType["INSTALL_TRACKED"] = "k.stats.installTracked";
    EventType["USER_ASSOCIATED"] = "k.stats.userAssociated";
    EventType["USER_ASSOCIATION_CLEARED"] = "k.stats.userAssociationCleared";
})(EventType = exports.EventType || (exports.EventType = {}));
var PromptTypeName;
(function (PromptTypeName) {
    PromptTypeName["BELL"] = "bell";
    PromptTypeName["ALERT"] = "alert";
    PromptTypeName["BANNER"] = "banner";
    PromptTypeName["DDL_BANNER"] = "ddl_banner";
})(PromptTypeName = exports.PromptTypeName || (exports.PromptTypeName = {}));
var UiActionType;
(function (UiActionType) {
    UiActionType["DECLINE"] = "decline";
    UiActionType["REMIND"] = "remind";
    UiActionType["DDL_OPEN_STORE"] = "openStore";
    UiActionType["DDL_OPEN_DEEPLINK"] = "openDeeplink";
})(UiActionType = exports.UiActionType || (exports.UiActionType = {}));
var ReminderTimeUnit;
(function (ReminderTimeUnit) {
    ReminderTimeUnit["HOURS"] = "hours";
    ReminderTimeUnit["DAYS"] = "days";
})(ReminderTimeUnit = exports.ReminderTimeUnit || (exports.ReminderTimeUnit = {}));
var PromptPosition;
(function (PromptPosition) {
    PromptPosition["TOP_LEFT"] = "top-left";
    PromptPosition["TOP_CENTER"] = "top-center";
    PromptPosition["TOP_RIGHT"] = "top-right";
    PromptPosition["CENTER_LEFT"] = "center-left";
    PromptPosition["CENTER"] = "center";
    PromptPosition["CENTER_RIGHT"] = "center-right";
    PromptPosition["BOTTOM_LEFT"] = "bottom-left";
    PromptPosition["BOTTOM_CENTER"] = "bottom-center";
    PromptPosition["BOTTOM_RIGHT"] = "bottom-right";
    PromptPosition["TOP"] = "top";
    PromptPosition["BOTTOM"] = "bottom";
})(PromptPosition = exports.PromptPosition || (exports.PromptPosition = {}));
var SDKFeature;
(function (SDKFeature) {
    SDKFeature["PUSH"] = "push";
    SDKFeature["DDL"] = "ddl";
})(SDKFeature = exports.SDKFeature || (exports.SDKFeature = {}));
var Service;
(function (Service) {
    Service["PUSH"] = "push";
    Service["DDL"] = "ddl";
    Service["EVENTS"] = "events";
})(Service = exports.Service || (exports.Service = {}));
var Context = /** @class */ (function () {
    function Context(config) {
        var _a;
        var _b, _c, _d, _e;
        this.apiKey = config.apiKey;
        this.secretKey = config.secretKey;
        this.vapidPublicKey = config.vapidPublicKey;
        this.authHeader = "Basic ".concat(btoa("".concat(this.apiKey, ":").concat(this.secretKey)));
        this.serviceWorkerPath = (_b = config.serviceWorkerPath) !== null && _b !== void 0 ? _b : '/worker.js';
        this.pushPrompts = (_c = config.pushPrompts) !== null && _c !== void 0 ? _c : 'auto';
        this.autoResubscribe = (_d = config.autoResubscribe) !== null && _d !== void 0 ? _d : true;
        this.features = (_e = config.features) !== null && _e !== void 0 ? _e : [SDKFeature.PUSH];
        this.subscribers = {};
        this.urlMap = (_a = {},
            _a[Service.PUSH] = "https://push-".concat(config.region, ".kumulos.com"),
            _a[Service.EVENTS] = "https://events-".concat(config.region, ".kumulos.com"),
            _a[Service.DDL] = "https://links-".concat(config.region, ".kumulos.com"),
            _a);
    }
    Context.prototype.subscribe = function (event, handler) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        if (this.subscribers[event].indexOf(handler) > -1) {
            return;
        }
        this.subscribers[event].push(handler);
    };
    Context.prototype.broadcast = function (event, data) {
        if (!this.subscribers[event]) {
            return;
        }
        for (var i = 0; i < this.subscribers[event].length; ++i) {
            this.subscribers[event][i]({
                type: event,
                data: data
            });
        }
    };
    Context.prototype.hasFeature = function (feature) {
        return this.features.includes(feature);
    };
    Context.prototype.urlForService = function (service) {
        return this.urlMap[service];
    };
    return Context;
}());
exports.Context = Context;
function assertConfigValid(config) {
    if (typeof config !== 'object') {
        throw 'Config must be an object';
    }
    var features = Array.isArray(config.features) && config.features.length
        ? config.features
        : undefined;
    if (!features || features.includes(SDKFeature.PUSH)) {
        return assertPushConfigValid(config);
    }
}
exports.assertConfigValid = assertConfigValid;
function assertPushConfigValid(config) {
    var requiredStringProps = [
        'region',
        'apiKey',
        'secretKey',
        'vapidPublicKey'
    ];
    for (var _i = 0, requiredStringProps_1 = requiredStringProps; _i < requiredStringProps_1.length; _i++) {
        var prop = requiredStringProps_1[_i];
        if (typeof config[prop] !== 'string' || config[prop].length === 0) {
            throw "Required configuration key '".concat(prop, "' must be non-empty string");
        }
    }
    if (config.serviceWorkerPath &&
        typeof config.serviceWorkerPath !== 'string' &&
        config.serviceWorkerPath.length === 0) {
        throw "Optional configuration key 'serviceWorkerPath' must be non-empty string (if supplied)";
    }
    if (config.onPushReceived && typeof config.onPushReceived !== 'function') {
        throw "Optional configuration key 'onPushReceived' must be a function";
    }
    if (config.onPushOpened && typeof config.onPushOpened !== 'function') {
        throw "Optional configuration key 'onPushOpened' must be a function";
    }
}
var installIdPromise = undefined;
function getInstallId() {
    if (installIdPromise) {
        return installIdPromise;
    }
    installIdPromise = (0, storage_1.get)('installId').then(function (installId) {
        if (!installId) {
            return setInstallId((0, utils_1.uuidv4)());
        }
        return installId;
    });
    return installIdPromise;
}
exports.getInstallId = getInstallId;
function setInstallId(installId) {
    installIdPromise = (0, storage_1.set)('installId', installId);
    return installIdPromise;
}
exports.setInstallId = setInstallId;
function getUserId() {
    return (0, storage_1.get)('userId').then(function (userId) { return userId !== null && userId !== void 0 ? userId : getInstallId(); });
}
exports.getUserId = getUserId;
function associateUser(ctx, id, attributes) {
    return __awaiter(this, void 0, void 0, function () {
        var props;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, storage_1.set)('userId', id)];
                case 1:
                    _a.sent();
                    props = {
                        id: id,
                        attributes: attributes
                    };
                    return [2 /*return*/, trackEvent(ctx, EventType.USER_ASSOCIATED, props).then(function (_) { })];
            }
        });
    });
}
exports.associateUser = associateUser;
function clearUserAssociation(ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var currentUserId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserId()];
                case 1:
                    currentUserId = _a.sent();
                    trackEvent(ctx, EventType.USER_ASSOCIATION_CLEARED, {
                        oldUserIdentifier: currentUserId
                    });
                    return [2 /*return*/, (0, storage_1.del)('userId')];
            }
        });
    });
}
exports.clearUserAssociation = clearUserAssociation;
function trackEvent(ctx, type, properties) {
    return __awaiter(this, void 0, void 0, function () {
        var installId, userId, events, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallId()];
                case 1:
                    installId = _a.sent();
                    return [4 /*yield*/, getUserId()];
                case 2:
                    userId = _a.sent();
                    events = [
                        {
                            type: type,
                            uuid: (0, utils_1.uuidv4)(),
                            timestamp: Date.now(),
                            data: properties,
                            userId: userId
                        }
                    ];
                    ctx.broadcast('eventTracked', events);
                    if (!isSystemEvent(type)) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    url = "".concat(ctx.urlForService(Service.EVENTS), "/v1/app-installs/").concat(installId, "/events");
                    return [2 /*return*/, (0, utils_1.authedFetch)(ctx, url, {
                            method: 'POST',
                            body: JSON.stringify(events)
                        })];
            }
        });
    });
}
exports.trackEvent = trackEvent;
function isSystemEvent(type) {
    return Object.values(EventType).includes(type);
}
function trackInstallDetails(ctx, optionalSdkVersion) {
    return __awaiter(this, void 0, void 0, function () {
        var sdkVersion, payload, installId, e_1, hashParts, hash, existingHash, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sdkVersion = optionalSdkVersion || DEFAULT_SDK_VERSION;
                    payload = {
                        app: {
                            bundle: location.host,
                            version: '0.0.0',
                            target: 2 // TODO read from context?
                        },
                        sdk: {
                            id: SDK_TYPE,
                            version: sdkVersion
                        },
                        runtime: {
                            id: 8,
                            version: navigator.userAgent
                        },
                        os: {
                            // Detection will be performed server-side from UA data
                            id: 0,
                            version: '0.0.0'
                        },
                        device: {
                            // Will be handled on best-effort basis server-side
                            name: navigator.userAgent,
                            tz: typeof Intl !== 'undefined'
                                ? Intl.DateTimeFormat().resolvedOptions().timeZone || null
                                : null,
                            isSimulator: false,
                            locale: navigator.language
                        }
                    };
                    installId = '';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getInstallId()];
                case 2:
                    installId = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error('Failed to get install ID: ', e_1);
                    return [2 /*return*/, Promise.reject(e_1)];
                case 4:
                    hashParts = [
                        // Include install ID in hash to ensure install tracked events are sent
                        // to the server if install ID (original visitor ID) changes (e.g. if app
                        // clears local storage keys and ID is regenerated)
                        installId,
                        sdkVersion,
                        payload.app.bundle,
                        payload.device.tz,
                        payload.device.locale,
                        payload.device.name
                    ];
                    hash = (0, utils_1.cyrb53)(hashParts.join('|'));
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, (0, storage_1.get)('detailsHash')];
                case 6:
                    existingHash = _a.sent();
                    if (existingHash === hash) {
                        return [2 /*return*/, Promise.resolve()];
                    }
                    return [3 /*break*/, 8];
                case 7:
                    e_2 = _a.sent();
                    return [2 /*return*/, Promise.reject(e_2)];
                case 8: return [2 /*return*/, trackEvent(ctx, EventType.INSTALL_TRACKED, payload)
                        .then(function () { return (0, storage_1.set)('detailsHash', hash); })
                        .then(function () { return void 0; })];
            }
        });
    });
}
exports.trackInstallDetails = trackInstallDetails;
function getChannelDialogChannels(allChannels, selectionConfig) {
    return allChannels
        .filter(function (c) {
        return selectionConfig.presentedUuids === 'all' ||
            selectionConfig.presentedUuids.includes(c.uuid);
    })
        .map(function (c) { return ({
        channel: __assign({}, c),
        checked: c.subscribed.valueOf() ||
            selectionConfig.checkedUuids === 'all' ||
            selectionConfig.checkedUuids.includes(c.uuid)
    }); });
}
exports.getChannelDialogChannels = getChannelDialogChannels;


/***/ }),

/***/ "./src/core/push/index.ts":
/*!********************************!*\
  !*** ./src/core/push/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.notificationFromPayload = exports.registerServiceWorker = exports.trackOpenFromQuery = exports.MessageType = exports.TokenType = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var safari_1 = __importDefault(__webpack_require__(/*! ./safari */ "./src/core/push/safari.ts"));
var w3c_1 = __importDefault(__webpack_require__(/*! ./w3c */ "./src/core/push/w3c.ts"));
var config_1 = __webpack_require__(/*! ../config */ "./src/core/config.ts");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["W3C"] = 3] = "W3C";
    TokenType[TokenType["SAFARI"] = 4] = "SAFARI";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["PUSH"] = 1] = "PUSH";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var manager;
function getPushOpsManager(ctx) {
    if (manager) {
        return manager;
    }
    var browser = (0, utils_1.getBrowserName)();
    if (browser === 'safari') {
        if ('PushManager' in window) {
            console.log('using W3C Push Manager');
            manager = Promise.resolve(new w3c_1["default"]());
        }
        else {
            console.log('using Safari Push Manager');
            manager = (0, config_1.loadPlatformConfig)(ctx).then(function (cfg) { return new safari_1["default"](cfg); });
        }
    }
    else {
        manager = Promise.resolve(new w3c_1["default"]());
    }
    return manager;
}
exports["default"] = getPushOpsManager;
function trackOpenFromQuery(ctx) {
    var browser = (0, utils_1.getBrowserName)();
    if (browser !== 'safari') {
        return;
    }
    var params = (0, utils_1.parseQueryString)();
    if (!(params === null || params === void 0 ? void 0 : params['knid'])) {
        return;
    }
    (0, __1.trackEvent)(ctx, __1.EventType.MESSAGE_OPENED, {
        type: MessageType.PUSH,
        id: Number(params['knid'])
    });
}
exports.trackOpenFromQuery = trackOpenFromQuery;
function registerServiceWorker(workerPath) {
    return __awaiter(this, void 0, void 0, function () {
        var fullWorkerUrl, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('serviceWorker' in navigator)) {
                        console.error('ServiceWorker is not supported in this browser, aborting...');
                        return [2 /*return*/];
                    }
                    fullWorkerUrl = (0, utils_1.getFullUrl)(workerPath);
                    console.log('Full worker URL: ' + fullWorkerUrl);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.serviceWorker.register(fullWorkerUrl)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registerServiceWorker = registerServiceWorker;
function notificationFromPayload(payload) {
    var _a, _b, _c;
    var _d = payload.data, _ = _d["k.message"], userData = __rest(_d, ['k.message']);
    var push = {
        id: payload.data['k.message'].data.id,
        title: payload.title,
        message: payload.msg,
        data: userData,
        url: (_a = payload.url) !== null && _a !== void 0 ? _a : undefined,
        iconUrl: (_b = payload.icon) !== null && _b !== void 0 ? _b : undefined,
        imageUrl: (_c = payload.image) !== null && _c !== void 0 ? _c : undefined
    };
    return push;
}
exports.notificationFromPayload = notificationFromPayload;


/***/ }),

/***/ "./src/core/push/safari.ts":
/*!*********************************!*\
  !*** ./src/core/push/safari.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/core/push/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/core/storage/index.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/core/config.ts");
function hashToken(ctx, token) {
    return (0, utils_1.cyrb53)("".concat(ctx.apiKey, ":").concat(token));
}
var SafariPushManager = /** @class */ (function () {
    function SafariPushManager(cfg) {
        this.cfg = cfg;
    }
    SafariPushManager.prototype.requestNotificationPermission = function (ctx) {
        var _a;
        console.log("Called into notification permission");
        var svcUrl = "".concat(ctx.urlForService(__1.Service.PUSH), "/safari/").concat(ctx.apiKey);
        var deferred = (0, utils_1.defer)();
        (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.requestPermission(svcUrl, this.cfg.safariPushId, {}, function (perm) {
            console.log(perm);
            deferred.resolve(perm.permission);
        });
        return deferred.promise;
    };
    SafariPushManager.prototype.pushRegister = function (ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Called into push register safari');
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || !perm.deviceToken) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
                    case 2:
                        existingTokenHash = _b.sent();
                        tokenHash = hashToken(ctx, perm.deviceToken);
                        if (existingTokenHash === tokenHash) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.EventType.PUSH_REGISTERED, {
                                type: _1.TokenType.SAFARI,
                                token: perm.deviceToken,
                                bundleId: cfg.safariPushId
                            })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushTokenHash', tokenHash)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SafariPushManager.prototype.requestPermissionAndRegisterForPush = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Called requestPermissionAndRegisterForPush");
                        return [4 /*yield*/, this.requestNotificationPermission(ctx)];
                    case 1:
                        perm = _a.sent();
                        switch (perm) {
                            case 'default':
                                return [2 /*return*/, 'unsubscribed'];
                            case 'denied':
                                return [2 /*return*/, 'blocked'];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.pushRegister(ctx)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'subscribed'];
                    case 4:
                        e_1 = _a.sent();
                        return [2 /*return*/, 'unsubscribed'];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SafariPushManager.prototype.getCurrentSubscriptionState = function (ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _c.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || (perm === null || perm === void 0 ? void 0 : perm.permission) === 'denied') {
                            return [2 /*return*/, 'blocked'];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
                    case 2:
                        existingTokenHash = _c.sent();
                        tokenHash = hashToken(ctx, (_b = perm.deviceToken) !== null && _b !== void 0 ? _b : '');
                        if (existingTokenHash === tokenHash && perm.permission === 'granted') {
                            return [2 /*return*/, 'subscribed'];
                        }
                        return [2 /*return*/, 'unsubscribed'];
                }
            });
        });
    };
    SafariPushManager.prototype.handleAutoResubscription = function (ctx) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cfg, perm, existingTokenHash, tokenHash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!ctx.autoResubscribe || !this.cfg.safariPushId) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
                    case 1:
                        cfg = _b.sent();
                        perm = (_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification.permission(cfg.safariPushId);
                        if (!perm || perm.permission !== 'granted' || !perm.deviceToken) {
                            console.info('Auto-resubscription: permission not granted or no token, aborting');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushTokenHash')];
                    case 2:
                        existingTokenHash = _b.sent();
                        tokenHash = hashToken(ctx, perm.deviceToken);
                        if (existingTokenHash === tokenHash) {
                            console.info('Auto-resubscription: already have a token hash for same token, aborting');
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, this.pushRegister(ctx)];
                }
            });
        });
    };
    SafariPushManager.prototype.isNativePromptShown = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(true)];
            });
        });
    };
    return SafariPushManager;
}());
exports["default"] = SafariPushManager;


/***/ }),

/***/ "./src/core/push/w3c.ts":
/*!******************************!*\
  !*** ./src/core/push/w3c.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var __1 = __webpack_require__(/*! .. */ "./src/core/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/core/push/index.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/core/storage/index.ts");
var BLUR_EVENT_TIMEOUT_MILLIS = 1000;
function hasSameKey(vapidKey, subscription) {
    var existingSubKey = subscription.options.applicationServerKey;
    if (!existingSubKey) {
        return false;
    }
    var subKey = (0, utils_1.base64UrlEncode)(existingSubKey);
    return subKey === vapidKey;
}
function getActiveServiceWorkerReg(workerPath) {
    return __awaiter(this, void 0, void 0, function () {
        var fullWorkerUrl, workerReg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fullWorkerUrl = (0, utils_1.getFullUrl)(workerPath);
                    return [4 /*yield*/, navigator.serviceWorker.getRegistration(fullWorkerUrl)];
                case 1:
                    workerReg = _a.sent();
                    if (!workerReg) {
                        return [2 /*return*/, Promise.reject('No service worker registration')];
                    }
                    return [2 /*return*/, workerReg];
            }
        });
    });
}
function hashSubscription(ctx, sub) {
    return (0, utils_1.cyrb53)("".concat(ctx.apiKey, ":").concat(sub.endpoint));
}
var W3cPushManager = /** @class */ (function () {
    function W3cPushManager() {
        this.registerInProgress = false;
    }
    W3cPushManager.prototype.requestNotificationPermission = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof Notification === 'undefined') {
                            return [2 /*return*/, Promise.reject('Notifications are not supported in this browser, aborting...')];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 2:
                        result = _a.sent();
                        console.log('W3C manager permission returned: ' + result);
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, Promise.reject(e_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.pushRegister = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var workerReg, existingSub, sub, endpointHash, existingEndpointHash, existingExpiry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Called into push register W3C');
                        if (!('PushManager' in window)) {
                            return [2 /*return*/, Promise.reject('Push notifications are not supported in this browser')];
                        }
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
                    case 1:
                        workerReg = _a.sent();
                        console.log('Active service worker reg: ' + workerReg);
                        return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                    case 2:
                        existingSub = _a.sent();
                        console.log('Existing sub:  ' + existingSub);
                        if (!(existingSub && !hasSameKey(ctx.vapidPublicKey, existingSub))) return [3 /*break*/, 4];
                        return [4 /*yield*/, (existingSub === null || existingSub === void 0 ? void 0 : existingSub.unsubscribe())];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, workerReg.pushManager.subscribe({
                            applicationServerKey: ctx.vapidPublicKey,
                            userVisibleOnly: true
                        })];
                    case 5:
                        sub = _a.sent();
                        console.log('Subscription: ' + sub);
                        endpointHash = hashSubscription(ctx, sub);
                        return [4 /*yield*/, (0, storage_1.get)('pushEndpointHash')];
                    case 6:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, (0, storage_1.get)('pushExpiresAt')];
                    case 7:
                        existingExpiry = _a.sent();
                        if (existingEndpointHash === endpointHash &&
                            (!existingExpiry || existingExpiry > Date.now())) {
                            console.log('Endpoint Hash: ' + endpointHash);
                            console.log('existing expiry ' + existingExpiry);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.trackEventAndCache(ctx, sub, endpointHash)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.trackEventAndCache = function (ctx, pushSubscription, endpointHash) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.registerInProgress) {
                            return [2 /*return*/];
                        }
                        this.registerInProgress = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, (0, __1.trackEvent)(ctx, __1.EventType.PUSH_REGISTERED, {
                                type: _1.TokenType.W3C,
                                token: pushSubscription
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushEndpointHash', endpointHash)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, storage_1.set)('pushExpiresAt', pushSubscription.expirationTime)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(e_2)];
                    case 6:
                        this.registerInProgress = false;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.requestPermissionAndRegisterForPush = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Called into requestPermissionAndRegisterForPush');
                        return [4 /*yield*/, this.requestNotificationPermission(ctx)];
                    case 1:
                        perm = _a.sent();
                        console.log('Perm: ' + perm);
                        switch (perm) {
                            case 'default':
                                return [2 /*return*/, 'unsubscribed'];
                            case 'denied':
                                return [2 /*return*/, 'blocked'];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.pushRegister(ctx)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, 'subscribed'];
                    case 4:
                        e_3 = _a.sent();
                        return [2 /*return*/, 'unsubscribed'];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.getCurrentSubscriptionState = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, reg, sub;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        perm = Notification.permission;
                        if (perm === 'denied') {
                            return [2 /*return*/, 'blocked'];
                        }
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
                    case 1:
                        reg = _a.sent();
                        return [4 /*yield*/, (reg === null || reg === void 0 ? void 0 : reg.pushManager.getSubscription())];
                    case 2:
                        sub = _a.sent();
                        if (sub && perm === 'granted' && hasSameKey(ctx.vapidPublicKey, sub)) {
                            return [2 /*return*/, 'subscribed'];
                        }
                        return [2 /*return*/, 'unsubscribed'];
                }
            });
        });
    };
    W3cPushManager.prototype.handleAutoResubscription = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var perm, existingEndpointHash, existingExpiry, workerReg, existingSub, existingSubHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ctx.autoResubscribe) {
                            console.info('Auto-resubscribe: not enabled, aborting');
                            return [2 /*return*/];
                        }
                        perm = Notification.permission;
                        if (perm !== 'granted') {
                            console.info("Auto-resubscribe: permission not granted, aborting: ".concat(perm));
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, storage_1.get)('pushEndpointHash')];
                    case 1:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, (0, storage_1.get)('pushExpiresAt')];
                    case 2:
                        existingExpiry = _a.sent();
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
                    case 3:
                        workerReg = _a.sent();
                        return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                    case 4:
                        existingSub = _a.sent();
                        existingSubHash = undefined;
                        if (existingSub) {
                            existingSubHash = hashSubscription(ctx, existingSub);
                        }
                        if (existingEndpointHash !== undefined &&
                            existingEndpointHash === existingSubHash &&
                            existingSub &&
                            hasSameKey(ctx.vapidPublicKey, existingSub) &&
                            (existingExpiry === null ||
                                existingExpiry === undefined ||
                                existingExpiry > Date.now())) {
                            console.info('Auto-resubscribe: already have a non-expired endpoint hash for same sub, aborting');
                            return [2 /*return*/];
                        }
                        console.info('Auto-resubscribe: attempting resubscription');
                        try {
                            return [2 /*return*/, this.pushRegister(ctx)];
                        }
                        catch (e) {
                            console.error(e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    W3cPushManager.prototype.isNativePromptShown = function () {
        var browserName = (0, utils_1.getBrowserName)();
        if ('chrome' !== browserName) {
            return Promise.resolve(true);
        }
        return new Promise(function (resolve) {
            var blurEventFired = false;
            var checkForBlur = function () {
                if (blurEventFired) {
                    return;
                }
                clearTimeout(cancelBlurTimeout);
                window.removeEventListener('blur', checkForBlur);
                blurEventFired = true;
                resolve(true);
            };
            window.addEventListener('blur', checkForBlur);
            var cancelBlurTimeout = setTimeout(function () {
                window.removeEventListener('blur', checkForBlur);
                resolve(false);
            }, BLUR_EVENT_TIMEOUT_MILLIS);
        });
    };
    return W3cPushManager;
}());
exports["default"] = W3cPushManager;


/***/ }),

/***/ "./src/core/storage/idb-keyval.ts":
/*!****************************************!*\
  !*** ./src/core/storage/idb-keyval.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {


// Copyright 2016, Jake Archibald
exports.__esModule = true;
exports.keys = exports.clear = exports.del = exports.set = exports.get = exports.Store = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var Store = /** @class */ (function () {
    function Store(dbName, storeName) {
        if (dbName === void 0) { dbName = 'keyval-store'; }
        if (storeName === void 0) { storeName = 'keyval'; }
        this.storeName = storeName;
        this._dbp = new Promise(function (resolve, reject) {
            var openreq = indexedDB.open(dbName, 1);
            openreq.onerror = function () { return reject(openreq.error); };
            openreq.onsuccess = function () { return resolve(openreq.result); };
            // First time setup: create an empty object store
            openreq.onupgradeneeded = function () {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    Store.prototype._withIDBStore = function (type, callback) {
        var _this = this;
        return this._dbp.then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction(_this.storeName, type);
                transaction.oncomplete = function () { return resolve(); };
                transaction.onabort = transaction.onerror = function () {
                    return reject(transaction.error);
                };
                callback(transaction.objectStore(_this.storeName));
            });
        });
    };
    return Store;
}());
exports.Store = Store;
var store;
function getDefaultStore() {
    if (!store)
        store = new Store();
    return store;
}
function get(key, store) {
    if (store === void 0) { store = getDefaultStore(); }
    var req;
    return store
        ._withIDBStore('readonly', function (store) {
        req = store.get(key);
    })
        .then(function () { return req.result; });
}
exports.get = get;
function set(key, value, store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store.put(value, key);
    });
}
exports.set = set;
function del(key, store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store["delete"](key);
    });
}
exports.del = del;
function clear(store) {
    if (store === void 0) { store = getDefaultStore(); }
    return store._withIDBStore('readwrite', function (store) {
        store.clear();
    });
}
exports.clear = clear;
function keys(store) {
    if (store === void 0) { store = getDefaultStore(); }
    var keys = [];
    return store
        ._withIDBStore('readonly', function (store) {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
            if (!this.result)
                return;
            keys.push(this.result.key);
            this.result["continue"]();
        };
    })
        .then(function () { return keys; });
}
exports.keys = keys;


/***/ }),

/***/ "./src/core/storage/index.ts":
/*!***********************************!*\
  !*** ./src/core/storage/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getMostRecentlyOpenedPushPayload = exports.persistOpenedPushPayload = exports.getContextFromStoredConfig = exports.getPromptReminder = exports.persistPromptReminder = exports.persistDDLConfig = exports.persistConfig = exports.del = exports.set = exports.get = void 0;
var index_1 = __webpack_require__(/*! ../index */ "./src/core/index.ts");
var idb_keyval_1 = __webpack_require__(/*! ./idb-keyval */ "./src/core/storage/idb-keyval.ts");
var store = new idb_keyval_1.Store('kumulos', 'default');
function get(key) {
    return (0, idb_keyval_1.get)(key, store);
}
exports.get = get;
function set(key, value) {
    return (0, idb_keyval_1.set)(key, value, store).then(function () { return value; });
}
exports.set = set;
function del(key) {
    return (0, idb_keyval_1.del)(key, store);
}
exports.del = del;
function persistConfig(config) {
    return set('config', {
        region: config.region,
        apiKey: config.apiKey,
        secretKey: config.secretKey,
        vapidPublicKey: config.vapidPublicKey,
        serviceWorkerPath: config.serviceWorkerPath,
        autoResubscribe: config.autoResubscribe,
        pushPrompts: config.pushPrompts
    });
}
exports.persistConfig = persistConfig;
function persistDDLConfig(config) {
    return set('ddlconfig', config);
}
exports.persistDDLConfig = persistDDLConfig;
function persistPromptReminder(promptUuid, reminder) {
    return set("reminder.".concat(promptUuid), reminder);
}
exports.persistPromptReminder = persistPromptReminder;
function getPromptReminder(promptUuid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get("reminder.".concat(promptUuid))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getPromptReminder = getPromptReminder;
function getContextFromStoredConfig() {
    return get('config').then(function (config) {
        return config ? new index_1.Context(config) : undefined;
    });
}
exports.getContextFromStoredConfig = getContextFromStoredConfig;
function persistOpenedPushPayload(payload) {
    return set('mostRecentOpenedPushPayload', payload);
}
exports.persistOpenedPushPayload = persistOpenedPushPayload;
function getMostRecentlyOpenedPushPayload() {
    return __awaiter(this, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get('mostRecentOpenedPushPayload')];
                case 1:
                    payload = _a.sent();
                    return [4 /*yield*/, del('mostRecentOpenedPushPayload')];
                case 2:
                    _a.sent();
                    return [2 /*return*/, payload !== null && payload !== void 0 ? payload : undefined];
            }
        });
    });
}
exports.getMostRecentlyOpenedPushPayload = getMostRecentlyOpenedPushPayload;


/***/ }),

/***/ "./src/core/utils.ts":
/*!***************************!*\
  !*** ./src/core/utils.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.isMobile = exports.onDOMReady = exports.parseQueryString = exports.defer = exports.getFullUrl = exports.base64UrlEncode = exports.authedFetchJson = exports.AuthedFetchError = exports.authedFetch = exports.escapeRegExp = exports.cyrb53 = exports.isBrowserSupported = exports.getBrowserName = exports.uuidv4 = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./src/core/index.ts");
var CORE_FEATURE_DEPENDENCIES = [
    typeof Promise,
    typeof fetch,
    typeof indexedDB
];
var FEATURE_DEPENDENCY_CHECK = {
    push: isBrowserSupportedForPush,
    ddl: isBrowserSupportedForDdl
};
// See: https://stackoverflow.com/a/2117523
function uuidv4() {
    if (typeof crypto === 'undefined') {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    return ((1e7).toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))).toString(16);
    });
}
exports.uuidv4 = uuidv4;
function getBrowserName() {
    var ua = navigator.userAgent.toLowerCase();
    var browsers = ['edge', 'firefox', 'chrome', 'safari'];
    for (var _i = 0, browsers_1 = browsers; _i < browsers_1.length; _i++) {
        var b = browsers_1[_i];
        if (ua.indexOf(b) > -1) {
            return b;
        }
    }
    return '';
}
exports.getBrowserName = getBrowserName;
function isBrowserSupported(sdkFeatures) {
    sdkFeatures = sdkFeatures !== null && sdkFeatures !== void 0 ? sdkFeatures : [];
    if (!sdkFeatures.length) {
        sdkFeatures.push(index_1.SDKFeature.PUSH);
    }
    return sdkFeatures.filter(function (f) { return FEATURE_DEPENDENCY_CHECK[f](); }).length > 0;
}
exports.isBrowserSupported = isBrowserSupported;
function isBrowserSupportedForPush() {
    var _a;
    var coreDependencies = __spreadArray([], CORE_FEATURE_DEPENDENCIES, true);
    var browser = getBrowserName();
    if ('safari' === browser) {
        if ('PushManager' in window) {
            console.log('using Service Worker and Push Manager');
            coreDependencies.push.apply(coreDependencies, [
                typeof Notification,
                typeof navigator.serviceWorker,
                typeof PushManager
            ]);
        }
        else {
            console.log('using legacy Safari Push Notifications');
            coreDependencies.push(typeof ((_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification));
        }
    }
    else {
        coreDependencies.push.apply(coreDependencies, [
            typeof Notification,
            typeof navigator.serviceWorker,
            typeof PushManager
        ]);
    }
    return checkRequired(coreDependencies);
}
function isBrowserSupportedForDdl() {
    return checkRequired(CORE_FEATURE_DEPENDENCIES);
}
function checkRequired(coreDependencies) {
    return coreDependencies.reduce(function (supported, dependency) {
        return supported && dependency !== 'undefined';
    }, true);
}
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
var imul = Math.imul ||
    function (a, b) {
        b |= 0; // ensure that opB is an integer. opA will automatically be coerced.
        // floating points give us 53 bits of precision to work with plus 1 sign bit
        // automatically handled for our convienence:
        // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
        //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        var result = (a & 0x003fffff) * b;
        // 2. We can remove an integer coersion from the statement above because:
        //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
        //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
        if (a & 0xffc00000 /*!== 0*/)
            result += ((a & 0xffc00000) * b) | 0;
        return result | 0;
    };
// https://stackoverflow.com/a/52171480
function cyrb53(str, seed) {
    if (seed === void 0) { seed = 0; }
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (var i = 0, ch = void 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = imul(h1 ^ ch, 2654435761);
        h2 = imul(h2 ^ ch, 1597334677);
    }
    h1 =
        imul(h1 ^ (h1 >>> 16), 2246822507) ^ imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        imul(h2 ^ (h2 >>> 16), 2246822507) ^ imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}
exports.cyrb53 = cyrb53;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
function authedFetch(ctx, url, options) {
    var _a;
    if (options === void 0) { options = { method: 'GET' }; }
    var existingHeaders = (_a = options.headers) !== null && _a !== void 0 ? _a : {};
    options.headers = __assign({ 'Content-Type': 'application/json', Accept: 'application/json', Authorization: ctx.authHeader }, existingHeaders);
    return fetch(url, options);
}
exports.authedFetch = authedFetch;
var AuthedFetchError = /** @class */ (function (_super) {
    __extends(AuthedFetchError, _super);
    function AuthedFetchError(statusCode, statusText) {
        return _super.call(this, "authed fetch failed: ".concat(statusCode, ", ").concat(statusText)) || this;
    }
    return AuthedFetchError;
}(Error));
exports.AuthedFetchError = AuthedFetchError;
function authedFetchJson(ctx, url, options) {
    return authedFetch(ctx, url, options).then(function (r) {
        if (!r.ok) {
            throw new AuthedFetchError(r.status, r.statusText);
        }
        return r.json();
    });
}
exports.authedFetchJson = authedFetchJson;
// Based on the alphabets in https://tools.ietf.org/html/rfc4648 Tables 1 & 2
function base64UrlEncode(buffer) {
    var ints = new Uint8Array(buffer);
    var base64Encoded = btoa(ints.reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''));
    var urlVariant = base64Encoded
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    return urlVariant;
}
exports.base64UrlEncode = base64UrlEncode;
function getFullUrl(path) {
    return new URL(path, location.origin).href;
}
exports.getFullUrl = getFullUrl;
function defer() {
    var deferred = {
        resolve: null,
        reject: null,
        promise: null
    };
    deferred.promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}
exports.defer = defer;
function parseQueryString(qs, excludedQueryKeys) {
    if (qs === void 0) { qs = location.search; }
    if (excludedQueryKeys === void 0) { excludedQueryKeys = []; }
    var query = undefined;
    if (qs.length > 0) {
        query = qs
            .substring(1)
            .split('&')
            .map(function (vars) { return vars.split('='); })
            .map(function (pairs) { return pairs.map(decodeURIComponent); })
            .filter(function (pairs) { return excludedQueryKeys.indexOf(pairs[0]) === -1; })
            .reduce(function (q, pair) {
            var _a;
            return (__assign(__assign({}, q), (_a = {}, _a[pair[0]] = pair[1], _a)));
        }, {});
    }
    return query;
}
exports.parseQueryString = parseQueryString;
function onDOMReady(fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
exports.onDOMReady = onDOMReady;
function isMobile() {
    return /android|iPhone|iPad|iPod|mobile/i.test(navigator.userAgent);
}
exports.isMobile = isMobile;


/***/ }),

/***/ "./src/worker/index.ts":
/*!*****************************!*\
  !*** ./src/worker/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var messaging_1 = __webpack_require__(/*! ./messaging */ "./src/worker/messaging.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/worker/utils.ts");
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
function withContext(fn) {
    return (0, storage_1.getContextFromStoredConfig)().then(function (ctx) {
        if (ctx) {
            return fn(ctx);
        }
        if (!self.KUMULOS_INIT) {
            return;
        }
        (0, core_1.assertConfigValid)(self.KUMULOS_INIT);
        return (0, storage_1.persistConfig)(self.KUMULOS_INIT).then(function (config) {
            ctx = new core_1.Context(config);
            return fn(ctx);
        });
    });
}
// See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
self.addEventListener('install', function () {
    // MDN: The promise that skipWaiting() returns can be safely ignored
    self.skipWaiting();
});
// See https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function () { return console.log('fetch'); });
self.addEventListener('push', function (event) {
    var workCompleted = withContext(function (ctx) {
        var _a, _b;
        if (!event.data) {
            return;
        }
        var payload = event.data.json();
        if (!payload) {
            return;
        }
        var data = payload.data;
        if (!data || !data['k.message']) {
            return;
        }
        var messageData = data['k.message'];
        var deliveryTracked = (0, core_1.trackEvent)(ctx, core_1.EventType.MESSAGE_DELIVERED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var receivedEventBroadcast = (0, utils_1.broadcastFromWorker)({
            type: messaging_1.WorkerMessageType.KPushReceived,
            data: payload
        });
        var notificationShown = self.registration.showNotification(payload.title, {
            body: payload.msg,
            data: payload,
            icon: (_a = payload.icon) !== null && _a !== void 0 ? _a : undefined,
            image: (_b = payload.image) !== null && _b !== void 0 ? _b : undefined,
            requireInteraction: true
        });
        return Promise.all([
            notificationShown,
            receivedEventBroadcast,
            deliveryTracked
        ]);
    });
    event.waitUntil(workCompleted);
});
self.addEventListener('notificationclick', function (event) {
    var workCompleted = withContext(function (ctx) {
        var _a;
        var notification = event.notification;
        var payload = notification.data;
        if (!payload) {
            return;
        }
        var data = payload.data;
        if (!data || !data['k.message']) {
            return;
        }
        notification.close();
        var messageData = data['k.message'];
        var openTracked = (0, core_1.trackEvent)(ctx, core_1.EventType.MESSAGE_OPENED, {
            type: messageData.type,
            id: messageData.data.id
        });
        var url = (_a = payload.url) !== null && _a !== void 0 ? _a : '/';
        var payloadPersisted = (0, storage_1.persistOpenedPushPayload)(payload);
        return payloadPersisted.then(function () {
            var windowOpened = self.clients.openWindow(url);
            return Promise.all([windowOpened, openTracked]);
        });
    });
    event.waitUntil(workCompleted);
});
self.addEventListener('pushsubscriptionchange', function (event) {
    if (Notification.permission !== 'granted') {
        // TODO mark unsubscribed?
        return;
    }
    var workCompleted = withContext(function (ctx) {
        return (0, push_1["default"])(ctx).then(function (mgr) { return mgr.pushRegister(ctx); });
    });
    event.waitUntil(workCompleted);
});


/***/ }),

/***/ "./src/worker/messaging.ts":
/*!*********************************!*\
  !*** ./src/worker/messaging.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


exports.__esModule = true;
exports.isKumulosWorkerMessage = exports.WorkerMessageType = void 0;
var WorkerMessageType;
(function (WorkerMessageType) {
    WorkerMessageType["KPushReceived"] = "KPushReceived";
})(WorkerMessageType = exports.WorkerMessageType || (exports.WorkerMessageType = {}));
function isKumulosWorkerMessage(data) {
    return (data.type !== undefined &&
        WorkerMessageType[data.type] !== undefined);
}
exports.isKumulosWorkerMessage = isKumulosWorkerMessage;


/***/ }),

/***/ "./src/worker/utils.ts":
/*!*****************************!*\
  !*** ./src/worker/utils.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


exports.__esModule = true;
exports.broadcastFromWorker = exports.postEventToClient = void 0;
function postEventToClient(event, client) {
    client.postMessage(event);
}
exports.postEventToClient = postEventToClient;
function broadcastFromWorker(event) {
    var postEvent = function (client) { return postEventToClient(event, client); };
    return self.clients.matchAll().then(function (clients) {
        clients.forEach(postEvent);
    });
}
exports.broadcastFromWorker = broadcastFromWorker;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/worker/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELGtEQU1DOzs7Ozs7O1VDaEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvcHVzaC9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3NhZmFyaS50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3czYy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9zdG9yYWdlL2lkYi1rZXl2YWwudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvc3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS91dGlscy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvd29ya2VyL2luZGV4LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy93b3JrZXIvbWVzc2FnaW5nLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy93b3JrZXIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbnRleHQsXG4gICAgRGRsUHJvbXB0Q29uZmlnLFxuICAgIFBsYXRmb3JtQ29uZmlnLFxuICAgIFNlcnZpY2UsXG4gICAgZ2V0SW5zdGFsbElkXG59IGZyb20gJy4nO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBhdXRoZWRGZXRjaEpzb24gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZ2V0Q2FjaGVLZXlzID0gKGtleTogc3RyaW5nKSA9PiAoe1xuICAgIENPTkZJR19DQUNIRV9LRVk6IGAke2tleX1Db25maWdgLFxuICAgIENPTkZJR19DQUNIRV9LRVlfVVBEQVRFRDogYCR7a2V5fUNvbmZpZ1VwZGF0ZWRgXG59KTtcblxuY29uc3QgTUFYX0NBQ0hFX0FHRV9NUyA9IDEgKiA2MCAqIDYwICogMTAwMDtcblxuZW51bSBDb25maWdDYWNoZVR5cGUge1xuICAgIFBMQVRGT1JNID0gJ3BsYXRmb3JtJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnPFRDb25maWdUeXBlPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWNoZUtleTogc3RyaW5nLFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxUQ29uZmlnVHlwZT4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhjYWNoZUtleSk7XG4gICAgbGV0IGNvbmZpZyA9IGF3YWl0IGdldDxUQ29uZmlnVHlwZT4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVkpO1xuXG4gICAgY29uc3QgbGFzdExvYWRUaW1lID1cbiAgICAgICAgKGF3YWl0IGdldDxudW1iZXI+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQpKSA/PyAwO1xuICAgIGxldCB1cGRhdGVkUmVtb3RlQ29uZmlnID0gZmFsc2U7XG5cbiAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RMb2FkVGltZSA+IE1BWF9DQUNIRV9BR0VfTVMpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdDb25maWcgbmV2ZXIgc3luY2VkL3N0YWxlLCBzeW5jaW5nIG5vdy4uLicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25maWcgPSBhd2FpdCBhdXRoZWRGZXRjaEpzb248VENvbmZpZ1R5cGU+KGN0eCwgdXJsKTtcbiAgICAgICAgICAgIHVwZGF0ZWRSZW1vdGVDb25maWcgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICAvLyBOb29wIChmYWxsYmFjayB0byBsb2NhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cGRhdGVkUmVtb3RlQ29uZmlnKSB7XG4gICAgICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlnKTtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZX1VQREFURUQsIERhdGUubm93KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGxhdGZvcm1Db25maWcoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFBsYXRmb3JtQ29uZmlnPiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGF3YWl0IGxvYWRDb25maWc8UGxhdGZvcm1Db25maWc+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vdjEvd2ViL2NvbmZpZ2AsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuUExBVEZPUk0sXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgKSkgPz8ge31cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERkbENvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8RGRsUHJvbXB0Q29uZmlnW10gfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBsb2FkQ29uZmlnPERkbFByb21wdENvbmZpZ1tdPihcbiAgICAgICAgICAgIGAke2N0eC51cmxGb3JTZXJ2aWNlKFxuICAgICAgICAgICAgICAgIFNlcnZpY2UuRERMXG4gICAgICAgICAgICApfS92MS9iYW5uZXJzP3dlYkluc3RhbGxJZD0ke3dlYkluc3RhbGxJZH1gLFxuICAgICAgICAgICAgQ29uZmlnQ2FjaGVUeXBlLkRETCxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgbG9hZERkbENvbmZpZzogZmFpbGVkIHRvIGxvYWQgRGVmZXJyZWQgRGVlcExpbmsgY29uZmlndXJhdGlvbmAsXG4gICAgICAgICAgICBlcnJcbiAgICAgICAgKTtcbiAgICAgICAgLy8gdW5kZWZpbmVkIHJldHVybiAvIG5vIGNvbmZpZ1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZURkbEJhbm5lckNvbmZpZ0Zyb21DYWNoZShcbiAgICBiYW5uZXJVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGdldENhY2hlS2V5cyhDb25maWdDYWNoZVR5cGUuRERMKTtcblxuICAgIGxldCBjb25maWdzID0gYXdhaXQgZ2V0PERkbFByb21wdENvbmZpZ1tdPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSk7XG5cbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ3MgPSBjb25maWdzLmZpbHRlcihjID0+IGMudXVpZCAhPT0gYmFubmVyVXVpZCk7XG5cbiAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVksIGNvbmZpZ3MpO1xufVxuIiwiaW1wb3J0IHsgYXV0aGVkRmV0Y2gsIGN5cmI1MywgdXVpZHY0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBkZWwsIGdldCwgc2V0IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4vY2hhbm5lbHMnO1xuXG5jb25zdCBTREtfVFlQRSA9IDEwNDtcbi8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGggb3B0aW1vdmUgU0RLIG5vdCBpbmNsdWRpbmcgdmVyc2lvbiBpbiBPcHRpbW9iaWxlIGNvbmZpZ1xuY29uc3QgREVGQVVMVF9TREtfVkVSU0lPTiA9ICcyLjAuMTcnO1xuXG5leHBvcnQgdHlwZSBJbnN0YWxsSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBVc2VySWQgPSBzdHJpbmc7XG5cbnR5cGUgSnNvbmlzaCA9XG4gICAgfCBzdHJpbmdcbiAgICB8IG51bWJlclxuICAgIHwgYm9vbGVhblxuICAgIHwgbnVsbFxuICAgIHwgeyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH1cbiAgICB8IHsgdG9KU09OOiAoKSA9PiBhbnkgfVxuICAgIHwgSnNvbmlzaFtdXG4gICAgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCB0eXBlIFByb3BzT2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiBKc29uaXNoIH07XG5cbnR5cGUgTmVzdGVkUGljazxULCBLMSBleHRlbmRzIGtleW9mIFQsIEsyIGV4dGVuZHMga2V5b2YgVFtLMV0+ID0ge1xuICAgIFtQMSBpbiBLMV06IHtcbiAgICAgICAgW1AyIGluIEsyXTogVFtLMV1bUDJdO1xuICAgIH07XG59O1xuXG4vL29ubHkgc3lzdGVtIGV2ZW50c1xuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICBNRVNTQUdFX0RFTElWRVJFRCA9ICdrLm1lc3NhZ2UuZGVsaXZlcmVkJyxcbiAgICBNRVNTQUdFX09QRU5FRCA9ICdrLm1lc3NhZ2Uub3BlbmVkJyxcbiAgICBQVVNIX1JFR0lTVEVSRUQgPSAnay5wdXNoLmRldmljZVJlZ2lzdGVyZWQnLFxuICAgIElOU1RBTExfVFJBQ0tFRCA9ICdrLnN0YXRzLmluc3RhbGxUcmFja2VkJyxcbiAgICBVU0VSX0FTU09DSUFURUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRlZCcsXG4gICAgVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVEID0gJ2suc3RhdHMudXNlckFzc29jaWF0aW9uQ2xlYXJlZCdcbn1cblxuZXhwb3J0IGVudW0gUHJvbXB0VHlwZU5hbWUge1xuICAgIEJFTEwgPSAnYmVsbCcsXG4gICAgQUxFUlQgPSAnYWxlcnQnLFxuICAgIEJBTk5FUiA9ICdiYW5uZXInLFxuICAgIERETF9CQU5ORVIgPSAnZGRsX2Jhbm5lcidcbn1cblxuLy8gTm90ZSBkdXBsaWNhdGUgJ2luJyB2cyAnSU4nIGR1ZSB0byBtaXNhbGlnbm1lbnQgaW4gc2VydmVyIGNvbmZpZyBhbmQgcHVibGlzaGVkIGRvY3MgZm9yIG1hbnVhbCBjb25maWdcbmV4cG9ydCB0eXBlIEZpbHRlck9wZXJhdG9yID0gJ2luJyB8ICdJTicgfCAnPScgfCAnPicgfCAnPCcgfCAnPj0nIHwgJzw9JztcbmV4cG9ydCB0eXBlIEZpbHRlclZhbHVlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN0cmluZ1tdO1xuZXhwb3J0IHR5cGUgUHJvcEZpbHRlciA9IFtzdHJpbmcsIEZpbHRlck9wZXJhdG9yLCBGaWx0ZXJWYWx1ZV07XG5cbmludGVyZmFjZSBQcm9tcHRUcmlnZ2VyIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIGFmdGVyU2Vjb25kcz86IG51bWJlcjtcbiAgICBmaWx0ZXJzPzogUHJvcEZpbHRlcltdO1xufVxuXG5pbnRlcmZhY2UgUHJvbXB0T3ZlcmxheUNvbmZpZyB7XG4gICAgaWNvblVybD86IHN0cmluZztcbiAgICBsYWJlbHM6IHtcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBib2R5OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsaW5rcz86IHsgbGFiZWw6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xuICAgIGNvbG9yczoge1xuICAgICAgICBzaGFkZTogc3RyaW5nO1xuICAgICAgICBzdHJpcDogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBQcm9tcHRTaWxlbnRPdmVybGF5Q29uZmlnID0gTmVzdGVkUGljazxcbiAgICBQcm9tcHRPdmVybGF5Q29uZmlnLFxuICAgICdsYWJlbHMnLFxuICAgICdib2R5J1xuPiAmXG4gICAgTmVzdGVkUGljazxQcm9tcHRPdmVybGF5Q29uZmlnLCAnY29sb3JzJywgJ3RleHQnPjtcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nTGFiZWxzQ29uZmlnIHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgY29uZmlybUFjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWcge1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uQmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uRmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsRGlhbG9nQ29uZmlnIHtcbiAgICBsYWJlbHM6IENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWc7XG4gICAgY29sb3JzOiBDaGFubmVsRGlhbG9nQ29sb3JzQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWcge1xuICAgIHByZXNlbnRlZFV1aWRzOiBzdHJpbmdbXSB8ICdhbGwnO1xuICAgIGNoZWNrZWRVdWlkczogc3RyaW5nW10gfCAnbm9uZScgfCAnYWxsJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiB7XG4gICAgdHlwZTogJ3VzZXJDaGFubmVsU2VsZWN0SW5saW5lJztcbiAgICBjaGFubmVsczogTXVsdGlDaGFubmVsU2VsZWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG4gICAgZGlhbG9nQ29uZmlnOiBDaGFubmVsRGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxTdWJBY3Rpb24ge1xuICAgIHR5cGU6ICdzdWJzY3JpYmVUb0NoYW5uZWwnO1xuICAgIGNoYW5uZWxVdWlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVpQWN0aW9uVHlwZSB7XG4gICAgREVDTElORSA9ICdkZWNsaW5lJyxcbiAgICBSRU1JTkQgPSAncmVtaW5kJyxcbiAgICBERExfT1BFTl9TVE9SRSA9ICdvcGVuU3RvcmUnLFxuICAgIERETF9PUEVOX0RFRVBMSU5LID0gJ29wZW5EZWVwbGluaydcbn1cblxuaW50ZXJmYWNlIERlY2xpbmVQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERUNMSU5FO1xufVxuXG5pbnRlcmZhY2UgUmVtaW5kUHJvbXB0QWN0aW9uIHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuUkVNSU5EO1xuICAgIGRlbGF5OiBQcm9tcHRSZW1pbmRlckRlbGF5Q29uZmlnO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRBY3Rpb24gPVxuICAgIHwgQ2hhbm5lbFN1YkFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb25cbiAgICB8IFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uO1xuXG5leHBvcnQgZW51bSBSZW1pbmRlclRpbWVVbml0IHtcbiAgICBIT1VSUyA9ICdob3VycycsXG4gICAgREFZUyA9ICdkYXlzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcge1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdGltZVVuaXQ6IFJlbWluZGVyVGltZVVuaXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgZGVjbGluZTogRGVjbGluZVByb21wdEFjdGlvbiB8IFJlbWluZFByb21wdEFjdGlvbjtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRNYXNrQ29uZmlnIHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgYmc6IHN0cmluZztcbiAgICB9O1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRQb3NpdGlvbiB7XG4gICAgVE9QX0xFRlQgPSAndG9wLWxlZnQnLFxuICAgIFRPUF9DRU5URVIgPSAndG9wLWNlbnRlcicsXG4gICAgVE9QX1JJR0hUID0gJ3RvcC1yaWdodCcsXG4gICAgQ0VOVEVSX0xFRlQgPSAnY2VudGVyLWxlZnQnLFxuICAgIENFTlRFUiA9ICdjZW50ZXInLFxuICAgIENFTlRFUl9SSUdIVCA9ICdjZW50ZXItcmlnaHQnLFxuICAgIEJPVFRPTV9MRUZUID0gJ2JvdHRvbS1sZWZ0JyxcbiAgICBCT1RUT01fQ0VOVEVSID0gJ2JvdHRvbS1jZW50ZXInLFxuICAgIEJPVFRPTV9SSUdIVCA9ICdib3R0b20tcmlnaHQnLFxuICAgIFRPUCA9ICd0b3AnLFxuICAgIEJPVFRPTSA9ICdib3R0b20nXG59XG5cbmludGVyZmFjZSBCYXNlUHJvbXB0Q29uZmlnIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWU7XG4gICAgdHJpZ2dlcjogUHJvbXB0VHJpZ2dlcjtcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb247XG4gICAgb3ZlcmxheT86IFByb21wdE92ZXJsYXlDb25maWc7XG4gICAgc2lsZW50T3ZlcmxheT86IFByb21wdFNpbGVudE92ZXJsYXlDb25maWc7XG4gICAgYWN0aW9ucz86IFByb21wdEFjdGlvbltdO1xufVxuXG5pbnRlcmZhY2UgV2l0aEltYWdlVXJsIHtcbiAgICBpbWFnZVVybD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRvb2x0aXBDb25maWcge1xuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdHJpbmc7XG4gICAgfTtcbn1cblxudHlwZSBEaWFsb2dMYWJlbENvbmZpZyA9IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb246IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb246IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dMYWJlbENvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nTGFiZWxDb25maWdcbj47XG5cbnR5cGUgRGlhbG9nQ29sb3JDb25maWcgPSB7XG4gICAgZmc6IHN0cmluZztcbiAgICBiZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25GZzogc3RyaW5nO1xuICAgIGRlY2xpbmVBY3Rpb25CZzogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbkZnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uQmc6IHN0cmluZztcbn07XG5cbnR5cGUgTmFtZWREaWFsb2dDb2xvckNvbmZpZzxUIGV4dGVuZHMgUHJvbXB0VHlwZU5hbWU+ID0gUmVjb3JkPFxuICAgIFQsXG4gICAgRGlhbG9nQ29sb3JDb25maWdcbj47XG5cbmludGVyZmFjZSBUb2FzdE1lc3NhZ2Uge1xuICAgIHRoYW5rc0ZvclN1YnNjcmliaW5nOiBzdHJpbmc7XG59XG5cbi8vIEJFTExcblxudHlwZSBCZWxsTGFiZWxDb25maWcgPSBUb2FzdE1lc3NhZ2UgJiBUb29sdGlwQ29uZmlnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJlbGxDb2xvckNvbmZpZyB7XG4gICAgYmVsbDoge1xuICAgICAgICBmZzogc3RyaW5nO1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbFByb21wdENvbmZpZyBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJFTEw7XG4gICAgbGFiZWxzPzogQmVsbExhYmVsQ29uZmlnO1xuICAgIGNvbG9ycz86IEJlbGxDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uQk9UVE9NX0xFRlQgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT01fUklHSFQ7XG59XG5cbi8vIEFMRVJUXG5cbnR5cGUgQWxlcnRMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEFsZXJ0Q29sb3JDb25maWcgPSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFByb21wdFR5cGVOYW1lLkFMRVJUPjtcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkFMRVJUO1xuICAgIGxhYmVsczogQWxlcnRMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEFsZXJ0Q29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkNFTlRFUjtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBCQU5ORVJcblxudHlwZSBCYW5uZXJMYWJlbENvbmZpZyA9IE5hbWVkRGlhbG9nTGFiZWxDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPiAmXG4gICAgVG9hc3RNZXNzYWdlO1xudHlwZSBCYW5uZXJDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQkFOTkVSPjtcblxuZXhwb3J0IGludGVyZmFjZSBCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgUHJvbXB0VWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5CQU5ORVI7XG4gICAgbGFiZWxzOiBCYW5uZXJMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IEJhbm5lckNvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5UT1AgfCBQcm9tcHRQb3NpdGlvbi5CT1RUT007XG4gICAgYmFja2dyb3VuZE1hc2s/OiBCYWNrZ3JvdW5kTWFza0NvbmZpZztcbn1cblxuLy8gRERMIEJBTk5FUlxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZyB7XG4gICAgcmF0aW5nOiBudW1iZXI7XG4gICAgcmF0aW5nQ291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBEZGxEaWFsb2dDb2xvckNvbmZpZyA9IERpYWxvZ0NvbG9yQ29uZmlnICYgeyByYXRpbmdGZzogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIE9wZW5TdG9yZVVpQWN0aW9uID0ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTtcbiAgICB1cmw6IHN0cmluZztcbiAgICBkZWVwTGlua1VybDogc3RyaW5nO1xufTtcbnR5cGUgT3BlbkRlZXBMaW5rVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX0RFRVBMSU5LO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZGxVaUFjdGlvbnMgPSBQcm9tcHRVaUFjdGlvbnMgJiB7XG4gICAgdWlBY3Rpb25zOiB7XG4gICAgICAgIGFjY2VwdDogT3BlblN0b3JlVWlBY3Rpb24gfCBPcGVuRGVlcExpbmtVaUFjdGlvbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEZGxCYW5uZXJQcm9tcHRDb25maWdcbiAgICBleHRlbmRzIEJhc2VQcm9tcHRDb25maWcsXG4gICAgICAgIFdpdGhJbWFnZVVybCxcbiAgICAgICAgRGRsVWlBY3Rpb25zIHtcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZS5ERExfQkFOTkVSO1xuICAgIGxhYmVsczogRGlhbG9nTGFiZWxDb25maWc7XG4gICAgY29sb3JzOiBEZGxEaWFsb2dDb2xvckNvbmZpZztcbiAgICBhcHBSYXRpbmc/OiBBcHBSYXRpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFB1c2hQcm9tcHRDb25maWcgPVxuICAgIHwgQmVsbFByb21wdENvbmZpZ1xuICAgIHwgQWxlcnRQcm9tcHRDb25maWdcbiAgICB8IEJhbm5lclByb21wdENvbmZpZztcblxuZXhwb3J0IHR5cGUgRGRsUHJvbXB0Q29uZmlnID0gRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWcgPSBQdXNoUHJvbXB0Q29uZmlnIHwgRGRsUHJvbXB0Q29uZmlnO1xuZXhwb3J0IHR5cGUgUHJvbXB0Q29uZmlnczxUIGV4dGVuZHMgUHJvbXB0Q29uZmlnPiA9IFJlY29yZDxzdHJpbmcsIFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXRmb3JtQ29uZmlnIHtcbiAgICBwdWJsaWNLZXk6IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIHByb21wdHM/OiBQcm9tcHRDb25maWdzPFB1c2hQcm9tcHRDb25maWc+O1xuICAgIHNhZmFyaVB1c2hJZD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBlbnVtIFNES0ZlYXR1cmUge1xuICAgIFBVU0ggPSAncHVzaCcsXG4gICAgRERMID0gJ2RkbCdcbn1cblxuZXhwb3J0IGVudW0gU2VydmljZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJyxcbiAgICBFVkVOVFMgPSAnZXZlbnRzJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHJlZ2lvbjogc3RyaW5nO1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIHNlY3JldEtleTogc3RyaW5nO1xuICAgIHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgc2VydmljZVdvcmtlclBhdGg/OiBzdHJpbmc7XG4gICAgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgYXV0b1Jlc3Vic2NyaWJlPzogYm9vbGVhbjtcbiAgICBmZWF0dXJlcz86IFNES0ZlYXR1cmVbXTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvbXB0UmVtaW5kZXIgPVxuICAgIHwge1xuICAgICAgICAgIGRlY2xpbmVkT246IG51bWJlcjtcbiAgICAgIH1cbiAgICB8ICdzdXBwcmVzc2VkJztcblxudHlwZSBTZGtFdmVudFR5cGUgPSAnZXZlbnRUcmFja2VkJztcbmV4cG9ydCB0eXBlIFNka0V2ZW50PFQgPSBhbnk+ID0geyB0eXBlOiBTZGtFdmVudFR5cGU7IGRhdGE6IFQgfTtcbnR5cGUgU2RrRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBTZGtFdmVudCkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGFwaUtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlY3JldEtleTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHZhcGlkUHVibGljS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXV0aEhlYWRlcjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlcnZpY2VXb3JrZXJQYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcHVzaFByb21wdHM6IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz4gfCAnYXV0byc7XG4gICAgcmVhZG9ubHkgYXV0b1Jlc3Vic2NyaWJlOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGZlYXR1cmVzOiBTREtGZWF0dXJlW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IFNka0V2ZW50SGFuZGxlcltdIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxNYXA6IHsgW2tleSBpbiBTZXJ2aWNlXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICAgICAgICB0aGlzLnNlY3JldEtleSA9IGNvbmZpZy5zZWNyZXRLZXk7XG4gICAgICAgIHRoaXMudmFwaWRQdWJsaWNLZXkgPSBjb25maWcudmFwaWRQdWJsaWNLZXk7XG4gICAgICAgIHRoaXMuYXV0aEhlYWRlciA9IGBCYXNpYyAke2J0b2EoYCR7dGhpcy5hcGlLZXl9OiR7dGhpcy5zZWNyZXRLZXl9YCl9YDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlV29ya2VyUGF0aCA9IGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCA/PyAnL3dvcmtlci5qcyc7XG4gICAgICAgIHRoaXMucHVzaFByb21wdHMgPSBjb25maWcucHVzaFByb21wdHMgPz8gJ2F1dG8nO1xuICAgICAgICB0aGlzLmF1dG9SZXN1YnNjcmliZSA9IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUgPz8gdHJ1ZTtcbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGNvbmZpZy5mZWF0dXJlcyA/PyBbU0RLRmVhdHVyZS5QVVNIXTtcblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0ge307XG5cbiAgICAgICAgdGhpcy51cmxNYXAgPSB7XG4gICAgICAgICAgICBbU2VydmljZS5QVVNIXTogYGh0dHBzOi8vcHVzaC0ke2NvbmZpZy5yZWdpb259Lmt1bXVsb3MuY29tYCxcbiAgICAgICAgICAgIFtTZXJ2aWNlLkVWRU5UU106IGBodHRwczovL2V2ZW50cy0ke2NvbmZpZy5yZWdpb259Lmt1bXVsb3MuY29tYCxcbiAgICAgICAgICAgIFtTZXJ2aWNlLkRETF06IGBodHRwczovL2xpbmtzLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKGV2ZW50OiBTZGtFdmVudFR5cGUsIGhhbmRsZXI6IFNka0V2ZW50SGFuZGxlcikge1xuICAgICAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdLmluZGV4T2YoaGFuZGxlcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3QoZXZlbnQ6IFNka0V2ZW50VHlwZSwgZGF0YTogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVyc1tldmVudF0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdW2ldKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBldmVudCxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0ZlYXR1cmUoZmVhdHVyZTogU0RLRmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mZWF0dXJlcy5pbmNsdWRlcyhmZWF0dXJlKTtcbiAgICB9XG5cbiAgICB1cmxGb3JTZXJ2aWNlKHNlcnZpY2U6IFNlcnZpY2UpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxNYXBbc2VydmljZV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q29uZmlnVmFsaWQoY29uZmlnOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgJ0NvbmZpZyBtdXN0IGJlIGFuIG9iamVjdCc7XG4gICAgfVxuXG4gICAgY29uc3QgZmVhdHVyZXMgPVxuICAgICAgICBBcnJheS5pc0FycmF5KGNvbmZpZy5mZWF0dXJlcykgJiYgY29uZmlnLmZlYXR1cmVzLmxlbmd0aFxuICAgICAgICAgICAgPyBjb25maWcuZmVhdHVyZXNcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5pbmNsdWRlcyhTREtGZWF0dXJlLlBVU0gpKSB7XG4gICAgICAgIHJldHVybiBhc3NlcnRQdXNoQ29uZmlnVmFsaWQoY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RyaW5nUHJvcHMgPSBbXG4gICAgICAgICdyZWdpb24nLFxuICAgICAgICAnYXBpS2V5JyxcbiAgICAgICAgJ3NlY3JldEtleScsXG4gICAgICAgICd2YXBpZFB1YmxpY0tleSdcbiAgICBdO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiByZXF1aXJlZFN0cmluZ1Byb3BzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnW3Byb3BdICE9PSAnc3RyaW5nJyB8fCBjb25maWdbcHJvcF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBgUmVxdWlyZWQgY29uZmlndXJhdGlvbiBrZXkgJyR7cHJvcH0nIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ2A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aCAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICBjb25maWcuc2VydmljZVdvcmtlclBhdGgubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ3NlcnZpY2VXb3JrZXJQYXRoJyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmcgKGlmIHN1cHBsaWVkKVwiO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub25QdXNoUmVjZWl2ZWQgJiYgdHlwZW9mIGNvbmZpZy5vblB1c2hSZWNlaXZlZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hSZWNlaXZlZCcgbXVzdCBiZSBhIGZ1bmN0aW9uXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hPcGVuZWQgJiYgdHlwZW9mIGNvbmZpZy5vblB1c2hPcGVuZWQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnb25QdXNoT3BlbmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG59XG5cbmxldCBpbnN0YWxsSWRQcm9taXNlOiBQcm9taXNlPEluc3RhbGxJZD4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YWxsSWQoKTogUHJvbWlzZTxJbnN0YWxsSWQ+IHtcbiAgICBpZiAoaW5zdGFsbElkUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFsbElkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpbnN0YWxsSWRQcm9taXNlID0gZ2V0PEluc3RhbGxJZCB8IHVuZGVmaW5lZD4oJ2luc3RhbGxJZCcpLnRoZW4oXG4gICAgICAgIGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBpZiAoIWluc3RhbGxJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnN0YWxsSWQodXVpZHY0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFsbElkO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5zdGFsbElkKGluc3RhbGxJZDogSW5zdGFsbElkKTogUHJvbWlzZTxJbnN0YWxsSWQ+IHtcbiAgICBpbnN0YWxsSWRQcm9taXNlID0gc2V0KCdpbnN0YWxsSWQnLCBpbnN0YWxsSWQpO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySWQoKTogUHJvbWlzZTxVc2VySWQ+IHtcbiAgICByZXR1cm4gZ2V0PFVzZXJJZCB8IHVuZGVmaW5lZD4oJ3VzZXJJZCcpLnRoZW4oXG4gICAgICAgIHVzZXJJZCA9PiB1c2VySWQgPz8gZ2V0SW5zdGFsbElkKClcbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNzb2NpYXRlVXNlcihcbiAgICBjdHg6IENvbnRleHQsXG4gICAgaWQ6IFVzZXJJZCxcbiAgICBhdHRyaWJ1dGVzPzogUHJvcHNPYmplY3Rcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHNldCgndXNlcklkJywgaWQpO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBhdHRyaWJ1dGVzXG4gICAgfTtcblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRFRCwgcHJvcHMpLnRoZW4oXyA9PiB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclVzZXJBc3NvY2lhdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKCk7XG5cbiAgICB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlVTRVJfQVNTT0NJQVRJT05fQ0xFQVJFRCwge1xuICAgICAgICBvbGRVc2VySWRlbnRpZmllcjogY3VycmVudFVzZXJJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlbCgndXNlcklkJyk7XG59XG5cbmV4cG9ydCB0eXBlIEt1bXVsb3NFdmVudCA9IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHRpbWVzdGFtcDogbnVtYmVyO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIGRhdGE/OiBQcm9wc09iamVjdDtcbn07XG5cbmV4cG9ydCB0eXBlIEV2ZW50UGF5bG9hZCA9IEt1bXVsb3NFdmVudFtdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tFdmVudChcbiAgICBjdHg6IENvbnRleHQsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCBpbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcbiAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIGNvbnN0IGV2ZW50czogRXZlbnRQYXlsb2FkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgdXVpZDogdXVpZHY0KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgdXNlcklkXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY3R4LmJyb2FkY2FzdCgnZXZlbnRUcmFja2VkJywgZXZlbnRzKTtcblxuICAgIGlmICghaXNTeXN0ZW1FdmVudCh0eXBlKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoXG4gICAgICAgIFNlcnZpY2UuRVZFTlRTXG4gICAgKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9ldmVudHNgO1xuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZXZlbnRzKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc1N5c3RlbUV2ZW50KHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiAoPGFueT5PYmplY3QpLnZhbHVlcyhFdmVudFR5cGUpLmluY2x1ZGVzKHR5cGUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhY2tJbnN0YWxsRGV0YWlscyhcbiAgICBjdHg6IENvbnRleHQsXG4gICAgb3B0aW9uYWxTZGtWZXJzaW9uPzogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZGtWZXJzaW9uID0gb3B0aW9uYWxTZGtWZXJzaW9uIHx8IERFRkFVTFRfU0RLX1ZFUlNJT047XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICBidW5kbGU6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnLCAvLyBUT0RPIHJlYWQgZnJvbSBjb250ZXh0P1xuICAgICAgICAgICAgdGFyZ2V0OiAyIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgIH0sXG4gICAgICAgIHNkazoge1xuICAgICAgICAgICAgaWQ6IFNES19UWVBFLFxuICAgICAgICAgICAgdmVyc2lvbjogc2RrVmVyc2lvblxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHZlcnNpb246IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgfSxcbiAgICAgICAgb3M6IHtcbiAgICAgICAgICAgIC8vIERldGVjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZCBzZXJ2ZXItc2lkZSBmcm9tIFVBIGRhdGFcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4wJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZpY2U6IHtcbiAgICAgICAgICAgIC8vIFdpbGwgYmUgaGFuZGxlZCBvbiBiZXN0LWVmZm9ydCBiYXNpcyBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgbmFtZTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgIHR6OlxuICAgICAgICAgICAgICAgIHR5cGVvZiBJbnRsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgICA/IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGlzU2ltdWxhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2FsZTogbmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGluc3RhbGxJZCA9ICcnO1xuICAgIHRyeSB7XG4gICAgICAgIGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBpbnN0YWxsIElEOiAnLCBlKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hQYXJ0cyA9IFtcbiAgICAgICAgLy8gSW5jbHVkZSBpbnN0YWxsIElEIGluIGhhc2ggdG8gZW5zdXJlIGluc3RhbGwgdHJhY2tlZCBldmVudHMgYXJlIHNlbnRcbiAgICAgICAgLy8gdG8gdGhlIHNlcnZlciBpZiBpbnN0YWxsIElEIChvcmlnaW5hbCB2aXNpdG9yIElEKSBjaGFuZ2VzIChlLmcuIGlmIGFwcFxuICAgICAgICAvLyBjbGVhcnMgbG9jYWwgc3RvcmFnZSBrZXlzIGFuZCBJRCBpcyByZWdlbmVyYXRlZClcbiAgICAgICAgaW5zdGFsbElkLFxuICAgICAgICBzZGtWZXJzaW9uLFxuICAgICAgICBwYXlsb2FkLmFwcC5idW5kbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLnR6LFxuICAgICAgICBwYXlsb2FkLmRldmljZS5sb2NhbGUsXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLm5hbWVcbiAgICBdO1xuXG4gICAgY29uc3QgaGFzaCA9IGN5cmI1MyhoYXNoUGFydHMuam9pbignfCcpKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdkZXRhaWxzSGFzaCcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ0hhc2ggPT09IGhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLklOU1RBTExfVFJBQ0tFRCwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0KCdkZXRhaWxzSGFzaCcsIGhhc2gpKVxuICAgICAgICAudGhlbigoKSA9PiB2b2lkIDApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxMaXN0SXRlbSB7XG4gICAgY2hhbm5lbDogQ2hhbm5lbDtcbiAgICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgIGFsbENoYW5uZWxzOiBDaGFubmVsW10sXG4gICAgc2VsZWN0aW9uQ29uZmlnOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWdcbikge1xuICAgIHJldHVybiBhbGxDaGFubmVsc1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgYyA9PlxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcucHJlc2VudGVkVXVpZHMuaW5jbHVkZXMoYy51dWlkKVxuICAgICAgICApXG4gICAgICAgIC5tYXA8Q2hhbm5lbExpc3RJdGVtPihjID0+ICh7XG4gICAgICAgICAgICBjaGFubmVsOiB7IC4uLmMgfSxcbiAgICAgICAgICAgIGNoZWNrZWQ6XG4gICAgICAgICAgICAgICAgYy5zdWJzY3JpYmVkLnZhbHVlT2YoKSB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5jaGVja2VkVXVpZHMgPT09ICdhbGwnIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIH0pKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgZ2V0QnJvd3Nlck5hbWUsIGdldEZ1bGxVcmwsIHBhcnNlUXVlcnlTdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBTYWZhcmlQdXNoTWFuYWdlciBmcm9tICcuL3NhZmFyaSc7XG5pbXBvcnQgVzNjUHVzaE1hbmFnZXIgZnJvbSAnLi93M2MnO1xuaW1wb3J0IHsgbG9hZFBsYXRmb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IHR5cGUgUHVzaFN1YnNjcmlwdGlvblN0YXRlID0gJ3N1YnNjcmliZWQnIHwgJ3Vuc3Vic2NyaWJlZCcgfCAnYmxvY2tlZCc7XG5cbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7XG4gICAgVzNDID0gMyxcbiAgICBTQUZBUkkgPSA0XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBQVVNIID0gMVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hPcHNNYW5hZ2VyIHtcbiAgICByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPjtcbiAgICBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+O1xuICAgIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShjdHg6IENvbnRleHQpOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD47XG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZztcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGltYWdlVXJsPzogc3RyaW5nO1xuICAgIGRhdGE6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaFBheWxvYWQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICAnay5tZXNzYWdlJzoge1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSDtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgdXJsOiBzdHJpbmcgfCBudWxsO1xuICAgIGltYWdlOiBzdHJpbmcgfCBudWxsO1xuICAgIGljb246IHN0cmluZyB8IG51bGw7XG59XG5cbmxldCBtYW5hZ2VyOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHVzaE9wc01hbmFnZXIoXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFB1c2hPcHNNYW5hZ2VyPiB7XG4gICAgaWYgKG1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciA9PT0gJ3NhZmFyaScpIHtcbiAgICAgICAgaWYgKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNpbmcgVzNDIFB1c2ggTWFuYWdlcicpO1xuICAgICAgICAgICAgbWFuYWdlciA9IFByb21pc2UucmVzb2x2ZShuZXcgVzNjUHVzaE1hbmFnZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNpbmcgU2FmYXJpIFB1c2ggTWFuYWdlcicpO1xuICAgICAgICAgICAgbWFuYWdlciA9IGxvYWRQbGF0Zm9ybUNvbmZpZyhjdHgpLnRoZW4oXG4gICAgICAgICAgICAgICAgY2ZnID0+IG5ldyBTYWZhcmlQdXNoTWFuYWdlcihjZmcpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFuYWdlciA9IFByb21pc2UucmVzb2x2ZShuZXcgVzNjUHVzaE1hbmFnZXIoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFja09wZW5Gcm9tUXVlcnkoY3R4OiBDb250ZXh0KSB7XG4gICAgY29uc3QgYnJvd3NlciA9IGdldEJyb3dzZXJOYW1lKCk7XG5cbiAgICBpZiAoYnJvd3NlciAhPT0gJ3NhZmFyaScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcoKTtcblxuICAgIGlmICghcGFyYW1zPy5bJ2tuaWQnXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5NRVNTQUdFX09QRU5FRCwge1xuICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNILFxuICAgICAgICBpZDogTnVtYmVyKHBhcmFtc1sna25pZCddKVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKHdvcmtlclBhdGg6IHN0cmluZykge1xuICAgIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnU2VydmljZVdvcmtlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsV29ya2VyVXJsID0gZ2V0RnVsbFVybCh3b3JrZXJQYXRoKTtcbiAgICBjb25zb2xlLmxvZygnRnVsbCB3b3JrZXIgVVJMOiAnICsgZnVsbFdvcmtlclVybClcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihmdWxsV29ya2VyVXJsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uIHtcbiAgICBjb25zdCB7ICdrLm1lc3NhZ2UnOiBfLCAuLi51c2VyRGF0YSB9ID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgY29uc3QgcHVzaDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24gPSB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmRhdGFbJ2subWVzc2FnZSddLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlLFxuICAgICAgICBtZXNzYWdlOiBwYXlsb2FkLm1zZyxcbiAgICAgICAgZGF0YTogdXNlckRhdGEsXG4gICAgICAgIHVybDogcGF5bG9hZC51cmwgPz8gdW5kZWZpbmVkLFxuICAgICAgICBpY29uVXJsOiBwYXlsb2FkLmljb24gPz8gdW5kZWZpbmVkLFxuICAgICAgICBpbWFnZVVybDogcGF5bG9hZC5pbWFnZSA/PyB1bmRlZmluZWRcbiAgICB9O1xuICAgIHJldHVybiBwdXNoO1xufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCBQbGF0Zm9ybUNvbmZpZywgU2VydmljZSwgdHJhY2tFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFB1c2hPcHNNYW5hZ2VyLCBUb2tlblR5cGUgfSBmcm9tICcuJztcbmltcG9ydCB7IGN5cmI1MywgZGVmZXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9wdXNoJztcbmltcG9ydCB7IGxvYWRQbGF0Zm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbihjdHg6IENvbnRleHQsIHRva2VuOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBjeXJiNTMoYCR7Y3R4LmFwaUtleX06JHt0b2tlbn1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FmYXJpUHVzaE1hbmFnZXIgaW1wbGVtZW50cyBQdXNoT3BzTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZmc6IFBsYXRmb3JtQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoY2ZnOiBQbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICB0aGlzLmNmZyA9IGNmZztcbiAgICB9XG4gICAgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGxlZCBpbnRvIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uXCIpO1xuICAgICAgICBjb25zdCBzdmNVcmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS9zYWZhcmkvJHtcbiAgICAgICAgICAgIGN0eC5hcGlLZXlcbiAgICAgICAgfWA7XG5cbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBkZWZlcjxOb3RpZmljYXRpb25QZXJtaXNzaW9uPigpO1xuXG4gICAgICAgIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oXG4gICAgICAgICAgICBzdmNVcmwsXG4gICAgICAgICAgICB0aGlzLmNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBwZXJtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwZXJtKTtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHBlcm0ucGVybWlzc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGVkIGludG8gcHVzaCByZWdpc3RlciBzYWZhcmknKTtcblxuICAgICAgICBjb25zdCBjZmcgPSBhd2FpdCBsb2FkUGxhdGZvcm1Db25maWcoY3R4KTtcbiAgICAgICAgY29uc3QgcGVybSA9IHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24ucGVybWlzc2lvbihcbiAgICAgICAgICAgIGNmZy5zYWZhcmlQdXNoSWQgYXMgc3RyaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFwZXJtIHx8ICFwZXJtLmRldmljZVRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlNBRkFSSSxcbiAgICAgICAgICAgIHRva2VuOiBwZXJtLmRldmljZVRva2VuLFxuICAgICAgICAgICAgYnVuZGxlSWQ6IGNmZy5zYWZhcmlQdXNoSWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0KCdwdXNoVG9rZW5IYXNoJywgdG9rZW5IYXNoKTtcbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYWxsZWQgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2hcIik7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cblxuICAgIGFzeW5jIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MywgZ2V0QnJvd3Nlck5hbWUsIGdldEZ1bGxVcmwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5jb25zdCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTID0gMTAwMDtcblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKFxuICAgIHdvcmtlclBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3QgZnVsbFdvcmtlclVybCA9IGdldEZ1bGxVcmwod29ya2VyUGF0aCk7XG5cbiAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oXG4gICAgICAgIGZ1bGxXb3JrZXJVcmxcbiAgICApO1xuXG4gICAgaWYgKCF3b3JrZXJSZWcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29ya2VyUmVnO1xufVxuXG5mdW5jdGlvbiBoYXNoU3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCwgc3ViOiBQdXNoU3Vic2NyaXB0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7c3ViLmVuZHBvaW50fWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXM2NQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgcmVnaXN0ZXJJblByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhc3luYyByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVzNDIG1hbmFnZXIgcGVybWlzc2lvbiByZXR1cm5lZDogJyArIHJlc3VsdCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsZWQgaW50byBwdXNoIHJlZ2lzdGVyIFczQycpO1xuXG4gICAgICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdQdXNoIG5vdGlmaWNhdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoXG4gICAgICAgICAgICBjdHguc2VydmljZVdvcmtlclBhdGhcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQWN0aXZlIHNlcnZpY2Ugd29ya2VyIHJlZzogJyArIHdvcmtlclJlZyk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0V4aXN0aW5nIHN1YjogICcgKyBleGlzdGluZ1N1Yik7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViICYmICFoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnU3Vic2NyaXB0aW9uOiAnICsgc3ViKTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGVuZHBvaW50SGFzaCAmJlxuICAgICAgICAgICAgKCFleGlzdGluZ0V4cGlyeSB8fCBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuZHBvaW50IEhhc2g6ICcgKyBlbmRwb2ludEhhc2gpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0aW5nIGV4cGlyeSAnICsgZXhpc3RpbmdFeHBpcnkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGF3YWl0IHRoaXMudHJhY2tFdmVudEFuZENhY2hlKGN0eCwgc3ViLCBlbmRwb2ludEhhc2gpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdHJhY2tFdmVudEFuZENhY2hlKGN0eDogQ29udGV4dCwgcHVzaFN1YnNjcmlwdGlvbjogUHVzaFN1YnNjcmlwdGlvbiwgZW5kcG9pbnRIYXNoOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJJblByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZ2lzdGVySW5Qcm9ncmVzcyA9IHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuUFVTSF9SRUdJU1RFUkVELCB7XG4gICAgICAgICAgICAgICAgdHlwZTogVG9rZW5UeXBlLlczQyxcbiAgICAgICAgICAgICAgICB0b2tlbjogcHVzaFN1YnNjcmlwdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBhd2FpdCBzZXQoJ3B1c2hFbmRwb2ludEhhc2gnLCBlbmRwb2ludEhhc2gpO1xuICAgICAgICAgICAgYXdhaXQgc2V0KCdwdXNoRXhwaXJlc0F0JywgcHVzaFN1YnNjcmlwdGlvbi5leHBpcmF0aW9uVGltZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbkFuZFJlZ2lzdGVyRm9yUHVzaChcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxpbXBvcnQoJy4nKS5QdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbGxlZCBpbnRvIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoJyk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1Blcm06ICcgKyBwZXJtKTtcblxuICAgICAgICBzd2l0Y2ggKHBlcm0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgICAgIGNhc2UgJ2RlbmllZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT4ge1xuICAgICAgICBjb25zdCBwZXJtID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG5cbiAgICAgICAgaWYgKHBlcm0gPT09ICdkZW5pZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Jsb2NrZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnID0gYXdhaXQgZ2V0QWN0aXZlU2VydmljZVdvcmtlclJlZyhjdHguc2VydmljZVdvcmtlclBhdGgpO1xuICAgICAgICBjb25zdCBzdWIgPSBhd2FpdCByZWc/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmIChzdWIgJiYgcGVybSA9PT0gJ2dyYW50ZWQnICYmIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBzdWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1bnN1YnNjcmliZWQnO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFjdHguYXV0b1Jlc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0F1dG8tcmVzdWJzY3JpYmU6IG5vdCBlbmFibGVkLCBhYm9ydGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICBgQXV0by1yZXN1YnNjcmliZTogcGVybWlzc2lvbiBub3QgZ3JhbnRlZCwgYWJvcnRpbmc6ICR7cGVybX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdFbmRwb2ludEhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaEVuZHBvaW50SGFzaCcpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0V4cGlyeSA9IGF3YWl0IGdldDxudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkPihcbiAgICAgICAgICAgICdwdXNoRXhwaXJlc0F0J1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdvcmtlclJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoXG4gICAgICAgICAgICBjdHguc2VydmljZVdvcmtlclBhdGhcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgbGV0IGV4aXN0aW5nU3ViSGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViKSB7XG4gICAgICAgICAgICBleGlzdGluZ1N1Ykhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgZXhpc3RpbmdTdWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGV4aXN0aW5nU3ViSGFzaCAmJlxuICAgICAgICAgICAgZXhpc3RpbmdTdWIgJiZcbiAgICAgICAgICAgIGhhc1NhbWVLZXkoY3R4LnZhcGlkUHVibGljS2V5LCBleGlzdGluZ1N1YikgJiZcbiAgICAgICAgICAgIChleGlzdGluZ0V4cGlyeSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRXhwaXJ5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaWJlOiBhbHJlYWR5IGhhdmUgYSBub24tZXhwaXJlZCBlbmRwb2ludCBoYXNoIGZvciBzYW1lIHN1YiwgYWJvcnRpbmcnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBhdHRlbXB0aW5nIHJlc3Vic2NyaXB0aW9uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNOYXRpdmVQcm9tcHRTaG93bigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgYnJvd3Nlck5hbWUgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgICAgIGlmICgnY2hyb21lJyAhPT0gYnJvd3Nlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmx1ckV2ZW50RmlyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tGb3JCbHVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChibHVyRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNhbmNlbEJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG4gICAgICAgICAgICAgICAgYmx1ckV2ZW50RmlyZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGNoZWNrRm9yQmx1cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJsdXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfSwgQkxVUl9FVkVOVF9USU1FT1VUX01JTExJUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UmVtaW5kZXJcbn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXG4gICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgc2VjcmV0S2V5OiBjb25maWcuc2VjcmV0S2V5LFxuICAgICAgICB2YXBpZFB1YmxpY0tleTogY29uZmlnLnZhcGlkUHVibGljS2V5LFxuICAgICAgICBzZXJ2aWNlV29ya2VyUGF0aDogY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLFxuICAgICAgICBhdXRvUmVzdWJzY3JpYmU6IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUsXG4gICAgICAgIHB1c2hQcm9tcHRzOiBjb25maWcucHVzaFByb21wdHNcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RERExDb25maWcoXG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWdbXVxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXT4ge1xuICAgIHJldHVybiBzZXQ8RGRsUHJvbXB0Q29uZmlnW10+KCdkZGxjb25maWcnLCBjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZyxcbiAgICByZW1pbmRlcjogUHJvbXB0UmVtaW5kZXJcbikge1xuICAgIHJldHVybiBzZXQoYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gLCByZW1pbmRlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0PFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPihgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKTogUHJvbWlzZTxDb250ZXh0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGdldDxDb25maWd1cmF0aW9uPignY29uZmlnJykudGhlbihjb25maWcgPT5cbiAgICAgICAgY29uZmlnID8gbmV3IENvbnRleHQoY29uZmlnKSA6IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IFByb21pc2U8UHVzaFBheWxvYWQ+IHtcbiAgICByZXR1cm4gc2V0KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk6IFByb21pc2U8XG4gICAgUHVzaFBheWxvYWQgfCB1bmRlZmluZWRcbj4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXQ8UHVzaFBheWxvYWQ+KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIGF3YWl0IGRlbCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICByZXR1cm4gcGF5bG9hZCA/PyB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTREtGZWF0dXJlIH0gZnJvbSAnLi9pbmRleCc7XG5cbnR5cGUgRmVhdHVyZURlcGVuZGVuY3kgPVxuICAgIHwgc3RyaW5nXG4gICAgfCBvYmplY3RcbiAgICB8IElEQkZhY3RvcnlcbiAgICB8IFByb21pc2VDb25zdHJ1Y3RvclxuICAgIHwgTm90aWZpY2F0aW9uXG4gICAgfCBQdXNoTWFuYWdlclxuICAgIHwgU2VydmljZVdvcmtlckNvbnRhaW5lclxuICAgIHwgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uO1xuXG5jb25zdCBDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTOiBGZWF0dXJlRGVwZW5kZW5jeVtdID0gW1xuICAgIHR5cGVvZiBQcm9taXNlLFxuICAgIHR5cGVvZiBmZXRjaCxcbiAgICB0eXBlb2YgaW5kZXhlZERCXG5dO1xuXG5jb25zdCBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0s6IHsgW2tleSBpbiBTREtGZWF0dXJlXTogKCkgPT4gYm9vbGVhbiB9ID0ge1xuICAgIHB1c2g6IGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2gsXG4gICAgZGRsOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGxcbn07XG5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKDFlNykudG9TdHJpbmcoKSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKFxuICAgICAgICAvWzAxOF0vZyxcbiAgICAgICAgYyA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE51bWJlcihjKSBeXG4gICAgICAgICAgICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICZcbiAgICAgICAgICAgICAgICAgICAgKDE1ID4+IChOdW1iZXIoYykgLyA0KSkpXG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJyb3dzZXJzID0gWydlZGdlJywgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaSddO1xuXG4gICAgZm9yIChsZXQgYiBvZiBicm93c2Vycykge1xuICAgICAgICBpZiAodWEuaW5kZXhPZihiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZChzZGtGZWF0dXJlcz86IFNES0ZlYXR1cmVbXSkge1xuICAgIHNka0ZlYXR1cmVzID0gc2RrRmVhdHVyZXMgPz8gW107XG4gICAgaWYgKCFzZGtGZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgc2RrRmVhdHVyZXMucHVzaChTREtGZWF0dXJlLlBVU0gpO1xuICAgIH1cblxuICAgIHJldHVybiBzZGtGZWF0dXJlcy5maWx0ZXIoZiA9PiBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0tbZl0oKSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCgpIHtcbiAgICBjb25zdCBjb3JlRGVwZW5kZW5jaWVzID0gWy4uLkNPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVNdO1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKCdzYWZhcmknID09PSBicm93c2VyKSB7XG4gICAgICAgIGlmICgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzaW5nIFNlcnZpY2UgV29ya2VyIGFuZCBQdXNoIE1hbmFnZXInKTtcblxuICAgICAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKFxuICAgICAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIE5vdGlmaWNhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgUHVzaE1hbmFnZXJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzaW5nIGxlZ2FjeSBTYWZhcmkgUHVzaCBOb3RpZmljYXRpb25zJyk7XG4gICAgICAgICAgICBjb3JlRGVwZW5kZW5jaWVzLnB1c2godHlwZW9mIHdpbmRvdy5zYWZhcmk/LnB1c2hOb3RpZmljYXRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKFxuICAgICAgICAgICAgLi4uW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBOb3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBQdXNoTWFuYWdlclxuICAgICAgICAgICAgXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGwoKSB7XG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llczogRmVhdHVyZURlcGVuZGVuY3lbXSkge1xuICAgIHJldHVybiBjb3JlRGVwZW5kZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKHN1cHBvcnRlZDogYm9vbGVhbiwgZGVwZW5kZW5jeTogRmVhdHVyZURlcGVuZGVuY3kpID0+XG4gICAgICAgICAgICBzdXBwb3J0ZWQgJiYgZGVwZW5kZW5jeSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIHRydWVcbiAgICApO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG5jb25zdCBpbXVsID1cbiAgICBNYXRoLmltdWwgfHxcbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGIgfD0gMDsgLy8gZW5zdXJlIHRoYXQgb3BCIGlzIGFuIGludGVnZXIuIG9wQSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29lcmNlZC5cbiAgICAgICAgLy8gZmxvYXRpbmcgcG9pbnRzIGdpdmUgdXMgNTMgYml0cyBvZiBwcmVjaXNpb24gdG8gd29yayB3aXRoIHBsdXMgMSBzaWduIGJpdFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgZm9yIG91ciBjb252aWVuZW5jZTpcbiAgICAgICAgLy8gMS4gMHgwMDNmZmZmZiAvKm9wQSAmIDB4MDAwZmZmZmYqLyAqIDB4N2ZmZmZmZmYgLypvcEIqLyA9IDB4MWZmZmZmN2ZjMDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIHZhciByZXN1bHQgPSAoYSAmIDB4MDAzZmZmZmYpICogYjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChhICYgMHhmZmMwMDAwMCAvKiE9PSAwKi8pIHJlc3VsdCArPSAoKGEgJiAweGZmYzAwMDAwKSAqIGIpIHwgMDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwXG5leHBvcnQgZnVuY3Rpb24gY3lyYjUzKHN0cjogc3RyaW5nLCBzZWVkID0gMCk6IG51bWJlciB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBpbXVsKGgyIF4gY2gsIDE1OTczMzQ2NzcpO1xuICAgIH1cbiAgICBoMSA9XG4gICAgICAgIGltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID1cbiAgICAgICAgaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgcmV0dXJuIDQyOTQ5NjcyOTYgKiAoMjA5NzE1MSAmIGgyKSArIChoMSA+Pj4gMCk7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2goXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IG1ldGhvZDogJ0dFVCcgfVxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/PyB7fTtcblxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGN0eC5hdXRoSGVhZGVyLFxuICAgICAgICAuLi5leGlzdGluZ0hlYWRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZWRGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU6IG51bWJlciwgc3RhdHVzVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGBhdXRoZWQgZmV0Y2ggZmFpbGVkOiAke3N0YXR1c0NvZGV9LCAke3N0YXR1c1RleHR9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2hKc29uPFQ+KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdFxuKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCBvcHRpb25zKS50aGVuKHIgPT4ge1xuICAgICAgICBpZiAoIXIub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoZWRGZXRjaEVycm9yKHIuc3RhdHVzLCByLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHIuanNvbigpO1xuICAgIH0pO1xufVxuXG4vLyBCYXNlZCBvbiB0aGUgYWxwaGFiZXRzIGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0NjQ4IFRhYmxlcyAxICYgMlxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFVybEVuY29kZShidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbnRzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBiYXNlNjRFbmNvZGVkID0gYnRvYShcbiAgICAgICAgaW50cy5yZWR1Y2UoKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLCAnJylcbiAgICApO1xuICAgIGNvbnN0IHVybFZhcmlhbnQgPSBiYXNlNjRFbmNvZGVkXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgJycpO1xuXG4gICAgcmV0dXJuIHVybFZhcmlhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsVXJsKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgVVJMKHBhdGgsIGxvY2F0aW9uLm9yaWdpbikuaHJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyPFQ+KCkge1xuICAgIGNvbnN0IGRlZmVycmVkID0ge1xuICAgICAgICByZXNvbHZlOiAobnVsbCBhcyB1bmtub3duKSBhcyAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKG51bGwgYXMgdW5rbm93bikgYXMgKHJlYXNvbj86IGFueSkgPT4gdm9pZCxcbiAgICAgICAgcHJvbWlzZTogKG51bGwgYXMgdW5rbm93bikgYXMgUHJvbWlzZTxUPlxuICAgIH07XG5cbiAgICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhcbiAgICBxczogc3RyaW5nID0gbG9jYXRpb24uc2VhcmNoLFxuICAgIGV4Y2x1ZGVkUXVlcnlLZXlzOiBzdHJpbmdbXSA9IFtdXG4pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcXVlcnkgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocXMubGVuZ3RoID4gMCkge1xuICAgICAgICBxdWVyeSA9IHFzXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgLm1hcCh2YXJzID0+IHZhcnMuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgIC5tYXAocGFpcnMgPT4gcGFpcnMubWFwKGRlY29kZVVSSUNvbXBvbmVudCkpXG4gICAgICAgICAgICAuZmlsdGVyKHBhaXJzID0+IGV4Y2x1ZGVkUXVlcnlLZXlzLmluZGV4T2YocGFpcnNbMF0pID09PSAtMSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHEsIHBhaXIpID0+ICh7IC4uLnEsIFtwYWlyWzBdXTogcGFpclsxXSB9KSwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRE9NUmVhZHkoZm46ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL2FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxtb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIENvbnRleHQsXG4gICAgRXZlbnRUeXBlLFxuICAgIGFzc2VydENvbmZpZ1ZhbGlkLFxuICAgIHRyYWNrRXZlbnRcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICAgIGdldENvbnRleHRGcm9tU3RvcmVkQ29uZmlnLFxuICAgIHBlcnNpc3RDb25maWcsXG4gICAgcGVyc2lzdE9wZW5lZFB1c2hQYXlsb2FkXG59IGZyb20gJy4uL2NvcmUvc3RvcmFnZSc7XG5cbmltcG9ydCB7IFdvcmtlck1lc3NhZ2VUeXBlIH0gZnJvbSAnLi9tZXNzYWdpbmcnO1xuaW1wb3J0IHsgYnJvYWRjYXN0RnJvbVdvcmtlciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGdldFB1c2hPcHNNYW5hZ2VyIGZyb20gJy4uL2NvcmUvcHVzaCc7XG5cbi8vIExpdHRsZSBiaXQgb2YgYSBoYWNrLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTQ4NzcjaXNzdWVjb21tZW50LTM0MDI3OTI5M1xuZGVjbGFyZSB2YXIgc2VsZjogU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICYgeyBLVU1VTE9TX0lOSVQ/OiBDb25maWd1cmF0aW9uIH07XG5cbmZ1bmN0aW9uIHdpdGhDb250ZXh0KGZuOiAoY3R4OiBDb250ZXh0KSA9PiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKS50aGVuKGN0eCA9PiB7XG4gICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbihjdHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxmLktVTVVMT1NfSU5JVCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXNzZXJ0Q29uZmlnVmFsaWQoc2VsZi5LVU1VTE9TX0lOSVQpO1xuXG4gICAgICAgIHJldHVybiBwZXJzaXN0Q29uZmlnKHNlbGYuS1VNVUxPU19JTklUKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICBjdHggPSBuZXcgQ29udGV4dChjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuIGZuKGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VXb3JrZXJHbG9iYWxTY29wZS9za2lwV2FpdGluZ1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKCkgPT4ge1xuICAgIC8vIE1ETjogVGhlIHByb21pc2UgdGhhdCBza2lwV2FpdGluZygpIHJldHVybnMgY2FuIGJlIHNhZmVseSBpZ25vcmVkXG4gICAgc2VsZi5za2lwV2FpdGluZygpO1xufSk7XG5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2xpZW50cy9jbGFpbVxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcbiAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLmNsYWltKCkpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKSA9PiBjb25zb2xlLmxvZygnZmV0Y2gnKSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB3b3JrQ29tcGxldGVkID0gd2l0aENvbnRleHQoY3R4ID0+IHtcbiAgICAgICAgaWYgKCFldmVudC5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQuZGF0YS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gcGF5bG9hZC5kYXRhO1xuXG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVsnay5tZXNzYWdlJ10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gZGF0YVsnay5tZXNzYWdlJ107XG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5VHJhY2tlZCA9IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuTUVTU0FHRV9ERUxJVkVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IG1lc3NhZ2VEYXRhLnR5cGUsXG4gICAgICAgICAgICBpZDogbWVzc2FnZURhdGEuZGF0YS5pZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZWNlaXZlZEV2ZW50QnJvYWRjYXN0ID0gYnJvYWRjYXN0RnJvbVdvcmtlcih7XG4gICAgICAgICAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkLFxuICAgICAgICAgICAgZGF0YTogcGF5bG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25TaG93biA9IHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oXG4gICAgICAgICAgICBwYXlsb2FkLnRpdGxlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvZHk6IHBheWxvYWQubXNnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgaWNvbjogcGF5bG9hZC5pY29uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBpbWFnZTogcGF5bG9hZC5pbWFnZSA/PyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblNob3duLFxuICAgICAgICAgICAgcmVjZWl2ZWRFdmVudEJyb2FkY2FzdCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5VHJhY2tlZFxuICAgICAgICBdKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LndhaXRVbnRpbCh3b3JrQ29tcGxldGVkKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT4ge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBldmVudC5ub3RpZmljYXRpb247XG5cbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IG5vdGlmaWNhdGlvbi5kYXRhO1xuXG4gICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHBheWxvYWQuZGF0YTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbJ2subWVzc2FnZSddKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IGRhdGFbJ2subWVzc2FnZSddO1xuICAgICAgICBjb25zdCBvcGVuVHJhY2tlZCA9IHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuTUVTU0FHRV9PUEVORUQsIHtcbiAgICAgICAgICAgIHR5cGU6IG1lc3NhZ2VEYXRhLnR5cGUsXG4gICAgICAgICAgICBpZDogbWVzc2FnZURhdGEuZGF0YS5pZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cmwgPSBwYXlsb2FkLnVybCA/PyAnLyc7XG5cbiAgICAgICAgY29uc3QgcGF5bG9hZFBlcnNpc3RlZCA9IHBlcnNpc3RPcGVuZWRQdXNoUGF5bG9hZChwYXlsb2FkKTtcblxuICAgICAgICByZXR1cm4gcGF5bG9hZFBlcnNpc3RlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd09wZW5lZCA9IHNlbGYuY2xpZW50cy5vcGVuV2luZG93KHVybCk7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbd2luZG93T3BlbmVkLCBvcGVuVHJhY2tlZF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGV2ZW50LndhaXRVbnRpbCh3b3JrQ29tcGxldGVkKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgLy8gVE9ETyBtYXJrIHVuc3Vic2NyaWJlZD9cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdvcmtDb21wbGV0ZWQgPSB3aXRoQ29udGV4dChjdHggPT5cbiAgICAgICAgZ2V0UHVzaE9wc01hbmFnZXIoY3R4KS50aGVuKG1nciA9PiBtZ3IucHVzaFJlZ2lzdGVyKGN0eCkpXG4gICAgKTtcblxuICAgIGV2ZW50LndhaXRVbnRpbCh3b3JrQ29tcGxldGVkKTtcbn0pO1xuIiwiaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG5leHBvcnQgZW51bSBXb3JrZXJNZXNzYWdlVHlwZSB7XG4gICAgS1B1c2hSZWNlaXZlZCA9ICdLUHVzaFJlY2VpdmVkJ1xufVxuZXhwb3J0IHR5cGUgV29ya2VyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkO1xuICAgIGRhdGE6IFB1c2hQYXlsb2FkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZGF0YTogYW55KTogZGF0YSBpcyBXb3JrZXJNZXNzYWdlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgV29ya2VyTWVzc2FnZVR5cGVbKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZV0gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBXb3JrZXJNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdpbmcnO1xuXG4vLyBMaXR0bGUgYml0IG9mIGEgaGFjaywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE0ODc3I2lzc3VlY29tbWVudC0zNDAyNzkyOTNcbmRlY2xhcmUgdmFyIHNlbGY6IFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAmIHsgS1VNVUxPU19JTklUPzogQ29uZmlndXJhdGlvbiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcG9zdEV2ZW50VG9DbGllbnQoZXZlbnQ6IFdvcmtlck1lc3NhZ2UsIGNsaWVudDogQ2xpZW50KTogdm9pZCB7XG4gICAgY2xpZW50LnBvc3RNZXNzYWdlKGV2ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb2FkY2FzdEZyb21Xb3JrZXIoZXZlbnQ6IFdvcmtlck1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwb3N0RXZlbnQgPSAoY2xpZW50OiBDbGllbnQpID0+IHBvc3RFdmVudFRvQ2xpZW50KGV2ZW50LCBjbGllbnQpO1xuXG4gICAgcmV0dXJuIHNlbGYuY2xpZW50cy5tYXRjaEFsbCgpLnRoZW4oY2xpZW50cyA9PiB7XG4gICAgICAgIGNsaWVudHMuZm9yRWFjaChwb3N0RXZlbnQpO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3dvcmtlci9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
