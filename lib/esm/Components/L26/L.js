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
import { jsx as _jsx } from "react/jsx-runtime";
import { Player } from "@lottiefiles/react-lottie-player";
import LData from "./L.json";
export default (function (_a) {
    var style = _a.style;
    return (_jsx(Player, { autoplay: true, loop: true, src: LData, style: __assign({}, style) }));
});
