import { jsxs, jsx } from 'react/jsx-runtime';
import ButtonMui from '@mui/material/Button';
import clsx from 'clsx';
import TextField from '@mui/material/TextField';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Button = function (props) {
    var children = props.children, className = props.className, _a = props.disabled, disabled = _a === void 0 ? false : _a, sx = props.sx, onClick = props.onClick, _b = props.variant, variant = _b === void 0 ? 'contained' : _b, endIcon = props.endIcon, startIcon = props.startIcon;
    var ButtonMuiClassed = clsx("core-button", className);
    var handleClick = function () {
        onClick && onClick();
    };
    return jsxs(ButtonMui, __assign({ className: ButtonMuiClassed, disabled: disabled, sx: sx, onClick: handleClick, variant: variant, endIcon: endIcon }, { children: [startIcon ? jsx("span", __assign({ className: "core-button-icon-start" }, { children: startIcon })) : null, " ", children] }));
};

var Input = function (props) {
    var className = props.className, id = props.id, message = props.message, label = props.label, type = props.type, value = props.value, onChange = props.onChange;
    var inputClassName = clsx("core-input", id ? "core-input-".concat(id) : "", className);
    var onHandleChange = function () {
        onChange && onChange();
    };
    return (jsx(TextField, { id: id, className: inputClassName, helperText: message, label: label, type: type, value: value, onChange: onHandleChange }));
};

export { Button, Input };
//# sourceMappingURL=index.es.js.map
