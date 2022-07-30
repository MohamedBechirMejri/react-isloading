import { jsxs } from 'react/jsx-runtime';

var SayHello = function (_a) {
    var name = _a.name;
    return (jsxs("div", { children: ["Hey ", name, ", say hello to TypeScript."] }));
};

export { SayHello };
