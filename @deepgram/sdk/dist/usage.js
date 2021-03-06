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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usage = void 0;
var querystring_1 = __importDefault(require("querystring"));
var httpRequest_1 = require("./httpRequest");
var Usage = /** @class */ (function () {
    function Usage(_credentials, _apiUrl) {
        this._credentials = _credentials;
        this._apiUrl = _apiUrl;
        this.apiPath = "/v1/projects";
    }
    /**
     * Retrieves all requests associated with the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Additional filter options
     */
    Usage.prototype.listRequests = function (projectId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOptions;
            return __generator(this, function (_a) {
                requestOptions = __assign({}, options);
                return [2 /*return*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/requests?").concat(querystring_1.default.stringify(requestOptions)))];
            });
        });
    };
    /**
     * Retrieves a specific request associated with the provided projectId
     * @param projectId Unique identifier of the project
     * @param requestId Unique identifier for the request to retrieve
     */
    Usage.prototype.getRequest = function (projectId, requestId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/requests/").concat(requestId))];
            });
        });
    };
    /**
     * Retrieves usage associated with the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Options to filter usage
     */
    Usage.prototype.getUsage = function (projectId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOptions;
            return __generator(this, function (_a) {
                requestOptions = __assign({}, options);
                return [2 /*return*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/usage?").concat(querystring_1.default.stringify(requestOptions)))];
            });
        });
    };
    /**
     * Retrieves features used by the provided projectId based
     * on the provided options
     * @param projectId Unique identifier of the project
     * @param options Options to filter usage
     */
    Usage.prototype.getFields = function (projectId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOptions;
            return __generator(this, function (_a) {
                requestOptions = __assign({}, options);
                return [2 /*return*/, (0, httpRequest_1._request)("GET", this._credentials, this._apiUrl, "".concat(this.apiPath, "/").concat(projectId, "/usage/fields?").concat(querystring_1.default.stringify(requestOptions)))];
            });
        });
    };
    return Usage;
}());
exports.Usage = Usage;
//# sourceMappingURL=usage.js.map