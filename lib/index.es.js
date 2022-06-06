import { jsxs, jsx } from 'react/jsx-runtime';
import ButtonMui from '@mui/material/Button';
import clsx from 'clsx';
import { memo, useRef, useState, useEffect } from 'react';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

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

var CssInput = styled(FormControl)({
    width: '25ch',
    "& .core-label": {
        fontSize: "16px",
        fontWeight: 'bold'
    },
    "& .MuiOutlinedInput-root": {
        borderRadius: "2px",
        "& input": {
            border: "unset",
            padding: "6px 17px"
        },
    },
    "& .MuiFormHelperText-root": {
        marginLeft: "0px",
        marginRight: "0px"
    }
});

var Input = function (props) {
    var className = props.className, id = props.id, _a = props.message, message = _a === void 0 ? '' : _a, label = props.label, _b = props.type, type = _b === void 0 ? 'text' : _b, value = props.value, onChangeTimeOut = props.onChangeTimeOut, onChange = props.onChange, fullWidth = props.fullWidth, placeholder = props.placeholder, _c = props.disabled, disabled = _c === void 0 ? false : _c;
    var timeOutCurrent = 500;
    var inputClassName = clsx("core-input", id ? "core-input-".concat(id) : "", className);
    var timer = useRef();
    var _d = useState({
        messageError: message,
        valueData: value
    }), objectDefaultData = _d[0], setObjectDefaultData = _d[1];
    useEffect(function () {
        if (message.length === 0) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { messageError: "" }));
        }
        else if (message !== objectDefaultData.messageError) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { messageError: message !== null && message !== void 0 ? message : "" }));
        }
        if (objectDefaultData.valueData !== value) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { valueData: value }));
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(function () {
                var _a;
                onChangeTimeOut && onChangeTimeOut((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
            }, timeOutCurrent);
        }
    }, [value, message]);
    var onHandleChangeInput = function (event) {
        var val = event.target.value;
        if (type === 'number' && isNaN(+val)) {
            val = "0";
        }
        onChange && onChange(val.toString());
    };
    return (jsxs(CssInput, __assign({ fullWidth: fullWidth, className: inputClassName, id: id, disabled: disabled }, { children: [!!label &&
                jsx(FormLabel, __assign({ color: (objectDefaultData && objectDefaultData.messageError && objectDefaultData.messageError.length !== 0) ? "error" : undefined, className: "core-label" }, { children: label })), jsx(OutlinedInput, { placeholder: placeholder, onChange: onHandleChangeInput, value: objectDefaultData.valueData, type: type }), jsx(FormHelperText, { children: message, className: 'core-helper-text' })] })));
};
var Input$1 = memo(Input);

export { Button, Input$1 as Input };
//# sourceMappingURL=index.es.js.map
