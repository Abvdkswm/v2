"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
var httpRequest_1 = require("./httpRequest");
var Keys = /** @class */ (function () {
    function Keys(_credentials, _apiUrl) {
        this._credentials = _credentials;
        this._apiUrl = _apiUrl;
        this.apiPath = "/v1/projects";
    }
    /**
     * Retrieves all keys associated with the provided projectId
     * @param projectId Unique identifier of the project containing API keys
     */
    Keys.prototype.list = function (projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/keys"))];
                    case 1:
                        response = _a.sent();
                        output = response.api_keys.map(function (apiKey) {
                            return __assign(__assign({}, apiKey), apiKey.api_key);
                        });
                        return [2 /*return*/, { api_keys: output }];
                }
            });
        });
    };
    /**
     * Retrieves a specific key associated with the provided projectId
     * @param projectId Unique identifier of the project containing API keys
     * @param keyId Unique identifier for the key to retrieve
     */
    Keys.prototype.get = function (projectId, keyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/keys/").concat(keyId))];
            });
        });
    };
    /**
     * Creates an API key with the provided scopes
     * @param projectId Unique identifier of the project to create an API key under
     * @param comment Comment to describe the key
     * @param scopes Permission scopes associated with the API key
     * @param options Optional options used when creating API keys
     */
    Keys.prototype.create = function (projectId, comment, scopes, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                /** Throw an error if the user provided both expirationDate and timeToLive */
                if (options &&
                    options.expirationDate !== undefined &&
                    options.timeToLive !== undefined) {
                    throw new Error("Please provide expirationDate or timeToLive or neither. Providing both is not allowed.");
                }
                return [2 /*return*/, (0, httpRequest_1._request)("POST", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/keys"), JSON.stringify({
                        comment: comment,
                        scopes: scopes,
                        expiration_date: options && options.expirationDate
                            ? options.expirationDate
                            : undefined,
                        time_to_live_in_seconds: options && options.timeToLive ? options.timeToLive : undefined,
                    }))];
            });
        });
    };
    /**
     * Deletes an API key
     * @param projectId Unique identifier of the project to create an API key under
     * @param keyId Unique identifier for the key to delete
     */
    Keys.prototype.delete = function (projectId, keyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, httpRequest_1._request)("DELETE", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/keys/").concat(keyId))];
            });
        });
    };
    return Keys;
}());
exports.Keys = Keys;
//# sourceMappingURL=keys.js.map