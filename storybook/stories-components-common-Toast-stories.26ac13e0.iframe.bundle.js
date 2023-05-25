"use strict";(self.webpackChunkreact_shopping_shop=self.webpackChunkreact_shopping_shop||[]).push([[751],{"./src/stories/components/common/Toast.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Components/Common/Toast",component:__webpack_require__("./src/components/@common/Toast.tsx").Z,tags:["autodocs"],args:{isShowToast:!0,message:"Show toasts",dismissToast:function dismissToast(){}},argTypes:{isShowToast:{active:{control:"boolean"},description:"토스트를 사라진 후에도 켜고 끌 수 있습니다."},message:{description:"토스트에 나타날 메시지를 설정할 수 있습니다."},dismissToast:{options:{Whatever:function Whatever(){}}}}};__webpack_exports__.default=meta;var Default={};Default.parameters=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/@common/Toast.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_templateObject4,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toast=function Toast(_ref){var _ref$isShowToast=_ref.isShowToast,isShowToast=void 0!==_ref$isShowToast&&_ref$isShowToast,message=_ref.message,dismissToast=_ref.dismissToast;return isShowToast&&setTimeout((function(){dismissToast()}),1500),(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(S.Toast,{isShowToast:isShowToast,children:message}),document.body)},toastAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.F4)(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)([" \n  0% {\n    opacity: 0;\n  }\n  50%{\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),S={Toast:styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    width: calc(100vw - 70vw);\n    min-width: 130px;\n    height: 50px;\n    left: 35%;\n    bottom: 100px;\n    color: #fff;\n    font-size: 18px;\n    background-color: #04c09e;\n    border-radius: 7px;\n\n    ","\n  "])),(function(_ref2){return _ref2.isShowToast?(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n            display: flex;\n            animation: "," 2s forwards;\n          "])),toastAnimation):(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.iv)(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_prod_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n            display: none;\n          "])))}))};__webpack_exports__.Z=Toast;try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{isShowToast:{defaultValue:{value:"false"},description:"",name:"isShowToast",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},dismissToast:{defaultValue:null,description:"",name:"dismissToast",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/@common/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/@common/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}}}]);