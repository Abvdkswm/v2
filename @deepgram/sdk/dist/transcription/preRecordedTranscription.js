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
exports.preRecordedTranscription = void 0;
var querystring_1 = __importDefault(require("querystring"));
var types_1 = require("../types");
var httpRequest_1 = require("../httpRequest");
function isUrlSource(providedSource) {
    if (providedSource.url)
        return true;
    return false;
}
function isBufferSource(providedSource) {
    if (providedSource.buffer)
        return true;
    return false;
}
function isReadStreamSource(providedSource) {
    if (providedSource.stream)
        return true;
    return false;
}
/**
 * Transcribes audio from a file or buffer
 * @param credentials Base64 encoded API key & secret
 * @param source Url or Buffer of file to transcribe
 * @param options Options to modify transcriptions
 */
var preRecordedTranscription = function (apiKey, apiUrl, source, options) { return __awaiter(void 0, void 0, void 0, function () {
    var transcriptionOptions, body, requestOptions, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                transcriptionOptions = __assign({}, options);
                if (!isUrlSource(source) &&
                    (source.mimetype === undefined || source.mimetype.length === 0)) {
                    throw new Error("DG: Mimetype must be provided if the source is a Buffer or a ReadStream");
                }
                if (isUrlSource(source)) {
                    body = JSON.stringify(source);
                }
                else if (isBufferSource(source)) {
                    body = source.buffer;
                }
                else if (isReadStreamSource(source)) {
                    body = source.stream;
                }
                else {
                    throw new Error("Unknown TranscriptionSource type");
                }
                requestOptions = {};
                if (!isUrlSource(source)) {
                    requestOptions.headers = {
                        "Content-Type": source.mimetype,
                    };
                }
                return [4 /*yield*/, (0, httpRequest_1._request)("POST", apiKey, apiUrl, "/v1/listen?".concat(querystring_1.default.stringify(transcriptionOptions)), body, requestOptions)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, Object.assign(new types_1.PrerecordedTranscriptionResponse(), response)];
        }
    });
}); };
exports.preRecordedTranscription = preRecordedTranscription;
//# sourceMappingURL=preRecordedTranscription.js.map