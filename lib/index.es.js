import { jsxs, jsx } from 'react/jsx-runtime';
import ButtonMui from '@mui/material/Button';
import clsx from 'clsx';
import { memo, useRef, useState, useEffect, useLayoutEffect } from 'react';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import SelectMui from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AppBarMui from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

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

var CssInput = styled(FormControl, {
    shouldForwardProp: function (props) {
        return [
            'message'
        ].indexOf(props) === -1;
    }
})(function (_a) {
    var message = _a.message;
    var isValidateError = (message !== null && message !== void 0 ? message : '').length ? true : false;
    var colorText = isValidateError ? 'red' : '#333';
    var colorBorder = isValidateError ? 'red' : '#333';
    return {
        width: '25ch',
        "& .core-label": {
            fontSize: "16px",
            fontWeight: 'bold',
            color: colorText + '!important'
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: "2px",
            "& .Mui-focused": {
                border: 'unset',
                outline: 'unset !important'
            },
            "& input": {
                border: "1px solid ".concat(colorBorder, " !important"),
                padding: "6px 17px",
                outline: 'unset !important'
            },
            "& input:focus": {
                border: "1px solid ".concat(colorBorder, " !important"),
                outline: 'unset !important'
            },
            "& input:hover": {
                border: "1px solid ".concat(colorBorder, " !important"),
                outline: 'unset !important'
            }
        },
        "& .MuiFormHelperText-root": {
            marginLeft: "0px",
            marginRight: "0px",
            color: colorText + '!important'
        }
    };
});

var Input = function (props) {
    var className = props.className, id = props.id, _a = props.message, message = _a === void 0 ? '' : _a, label = props.label, _b = props.type, type = _b === void 0 ? 'text' : _b, value = props.value, onChangeTimeOut = props.onChangeTimeOut, onChange = props.onChange, fullWidth = props.fullWidth, placeholder = props.placeholder, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.sx, sx = _d === void 0 ? {} : _d;
    var timeOutCurrent = 500;
    var inputClassName = clsx("core-input", id ? "core-input-".concat(id) : "", className);
    var timer = useRef();
    var _e = useState({
        messageError: message,
        valueData: value
    }), objectDefaultData = _e[0], setObjectDefaultData = _e[1];
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
    return (jsxs(CssInput, __assign({ fullWidth: fullWidth, className: inputClassName, id: id, disabled: disabled, sx: sx, message: objectDefaultData.messageError }, { children: [!!label &&
                jsx(FormLabel, __assign({ className: "core-label" }, { children: label })), jsx(OutlinedInput, { placeholder: placeholder, onChange: onHandleChangeInput, value: objectDefaultData.valueData, type: type }), jsx(FormHelperText, { children: message, className: 'core-helper-text' })] })));
};
var Input$1 = memo(Input);

var CssSelect = styled(FormControl)({
    width: '25ch',
    '& .MuiOutlinedInput-root': {
        height: "2em"
    },
    "& .core-label-select": {
        fontSize: "16px",
        fontWeight: 'bold',
    },
    "& .core-helper-select-text": {
        color: "#d32f2f",
        marginLeft: "0",
        marginRight: "0"
    },
    "& .core-select-error-validate": {
        color: "#d32f2f"
    }
});

var Select = function (props) {
    var _a;
    var label = props.label, _b = props.message, message = _b === void 0 ? '' : _b, value = props.value, _c = props.options, options = _c === void 0 ? [] : _c, id = props.id, _d = props.disabled, disabled = _d === void 0 ? false : _d, onChange = props.onChange, _e = props.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = props.sx, sx = _f === void 0 ? {} : _f;
    var timeOutCurrent = 500;
    var timer = useRef();
    var _g = useState(options), defaultOption = _g[0], setDefaultOption = _g[1];
    var _h = useState({
        messageError: message,
        valueData: value
    }), objectDefaultData = _h[0], setObjectDefaultData = _h[1];
    useLayoutEffect(function () {
        setDefaultOption(options);
    }, []);
    useEffect(function () {
        // Change reload message error
        if (message.length === 0) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { messageError: "" }));
        }
        else if (message !== objectDefaultData.messageError) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { messageError: message !== null && message !== void 0 ? message : "" }));
        }
        // Change reload select data 
        if (objectDefaultData.valueData !== value) {
            setObjectDefaultData(__assign(__assign({}, objectDefaultData), { valueData: value }));
            timer.current && clearTimeout(timer.current);
            timer.current = setTimeout(function () {
                var _a;
                onChange && onChange((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
            }, timeOutCurrent);
        }
    }, [value, message]);
    var onHandleChanceSelect = function (e) {
        onChange && onChange(e.target.value.toString());
    };
    // Config style option select
    var MenuProps = {
        PaperProps: {
            sx: {
                top: "70px!important",
            },
        },
    };
    return (jsxs(CssSelect, __assign({ disabled: disabled, fullWidth: fullWidth, id: id, className: id ? "core-select-outline-".concat(id) : 'core-select-outline', sx: sx }, { children: [!!label &&
                jsx(FormLabel, __assign({ color: (objectDefaultData && objectDefaultData.messageError && objectDefaultData.messageError.length !== 0) ? "error" : undefined, className: clsx("core-label-select", (objectDefaultData && objectDefaultData.messageError && ((_a = objectDefaultData.messageError) === null || _a === void 0 ? void 0 : _a.length)) > 0 ? 'core-select-error-validate' : "") }, { children: label })), jsx(SelectMui, __assign({ id: clsx("core-select", id ? "core-select-".concat(id) : ""), value: objectDefaultData.valueData, onChange: onHandleChanceSelect, MenuProps: MenuProps }, { children: defaultOption.length === 0 ?
                    jsx(MenuItem, __assign({ disabled: true }, { children: " No data " }))
                    :
                        defaultOption.map(function (op) {
                            return jsxs(MenuItem, __assign({ value: op.value }, { children: [" ", op.label, " "] }), op.value);
                        }) })), jsx(FormHelperText, { children: objectDefaultData.messageError, className: 'core-helper-select-text' })] })));
};

var AppBar = function (props) {
    var childrenLeft = props.childrenLeft, childrenRight = props.childrenRight, _a = props.sxChildrenRight, sxChildrenRight = _a === void 0 ? {} : _a, _b = props.sxAppBar, sxAppBar = _b === void 0 ? {} : _b;
    return (jsx(AppBarMui, __assign({ className: 'core-app-bar', sx: sxAppBar }, { children: jsxs(Toolbar, { children: [childrenLeft, jsx(Box, { sx: { flexGrow: 1 } }), jsx(Box, __assign({ sx: __assign({ display: "flex" }, sxChildrenRight) }, { children: childrenRight }))] }) })));
};

export { AppBar, Button, Input$1 as Input, Select };
//# sourceMappingURL=index.es.js.map
