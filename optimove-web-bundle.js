/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/***/ (function(module) {

/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* global DOMException */

module.exports = clipboardCopy

function makeError () {
  return new DOMException('The request is not allowed', 'NotAllowedError')
}

async function copyClipboardApi (text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (!navigator.clipboard) {
    throw makeError()
  }
  return navigator.clipboard.writeText(text)
}

async function copyExecCommand (text) {
  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'
  span.style.webkitUserSelect = 'auto'
  span.style.userSelect = 'all'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } finally {
    // Cleanup
    selection.removeAllRanges()
    window.document.body.removeChild(span)
  }

  if (!success) throw makeError()
}

async function clipboardCopy (text) {
  try {
    await copyClipboardApi(text)
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text)
    } catch (err2) {
      throw (err2 || err || makeError())
    }
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss ***!
  \********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".kumulos-rating {\n  display: flex;\n  height: 20px;\n  font-size: 16px;\n  align-items: center;\n  margin-top: 3px;\n}\n.kumulos-rating .kumulos-rating-star {\n  position: relative;\n}\n.kumulos-rating .kumulos-rating-star .kumulos-rating-halfstar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  overflow: hidden;\n}\n.kumulos-rating .kumulos-rating-count {\n  font-size: 12px;\n  margin-left: 3px;\n}", "",{"version":3,"sources":["webpack://./src/components/app-rating/app-rating.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,YAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;AACJ;AACI;EACI,kBAAA;AACR;AACQ;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;AACZ;AAGI;EACI,eAAA;EACA,gBAAA;AADR","sourcesContent":[".kumulos-rating {\n    display: flex;\n    height: 20px;\n    font-size: 16px;\n    align-items: center;\n    margin-top: 3px;\n\n    .kumulos-rating-star {\n        position: relative;\n\n        .kumulos-rating-halfstar {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 50%;\n            overflow: hidden;\n        }\n    }\n\n    .kumulos-rating-count {\n        font-size: 12px;\n        margin-left: 3px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/prompts/styles/_anims.scss","webpack://./src/styles.scss","webpack://./src/prompts/styles/_tooltip.scss","webpack://./src/prompts/styles/_variables.scss","webpack://./src/prompts/styles/_toast.scss","webpack://./src/prompts/styles/_prompts.scss","webpack://./src/prompts/styles/_buttons.scss","webpack://./src/prompts/styles/_checkbox.scss","webpack://./src/prompts/styles/_banner.scss","webpack://./src/prompts/styles/_banner.compact.scss","webpack://./src/prompts/styles/_safe-area-inset-pad.scss","webpack://./src/prompts/bell/bell.scss","webpack://./src/prompts/dialog/dialog.scss","webpack://./src/prompts/background-mask.scss","webpack://./src/prompts/overlay.scss"],"names":[],"mappings":"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","sourcesContent":["// Based on https://css-tricks.com/snippets/css/shake-css-keyframe-animation/\n@keyframes kumulos-anim-shake {\n    10%,\n    90% {\n        transform: translate3d(-1px, 0, 0);\n    }\n\n    20%,\n    80% {\n        transform: translate3d(2px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translate3d(-2px, 0, 0);\n    }\n\n    40%,\n    60% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes kumulos-anim-fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes kumulos-reveal-left {\n    0% {\n        opacity: 0;\n        transform: translate(10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-reveal-right {\n    0% {\n        opacity: 0;\n        transform: translate(-10px, -50%);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate(0px, -50%);\n    }\n}\n\n@keyframes kumulos-toast-in-out {\n    0% {\n        opacity: 0;\n        transform: translate3d(-50%, 100%, 0);\n    }\n\n    100% {\n        opacity: 1;\n        transform: translate3d(-50%, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-down {\n    0% {\n        transform: translate3d(0, -100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n@keyframes kumulos-slide-up {\n    0% {\n        transform: translate3d(0, 100%, 0);\n    }\n\n    100% {\n        transform: translate3d(0, 0, 0);\n    }\n}\n","@keyframes kumulos-anim-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 0);\n  }\n}\n@keyframes kumulos-anim-fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes kumulos-reveal-left {\n  0% {\n    opacity: 0;\n    transform: translate(10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-reveal-right {\n  0% {\n    opacity: 0;\n    transform: translate(-10px, -50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, -50%);\n  }\n}\n@keyframes kumulos-toast-in-out {\n  0% {\n    opacity: 0;\n    transform: translate3d(-50%, 100%, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes kumulos-slide-down {\n  0% {\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes kumulos-slide-up {\n  0% {\n    transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.kumulos-tooltip-parent .kumulos-tooltip {\n  display: none;\n}\n.kumulos-tooltip-parent:hover .kumulos-tooltip {\n  display: block;\n}\n\n.kumulos-tooltip {\n  background: #222;\n  position: absolute;\n  top: 50%;\n  padding: 8px 12px;\n  font: 14px helvetica, sans-serif;\n  color: #eee;\n  border-radius: 6px;\n  white-space: nowrap;\n  z-index: 1100;\n  pointer-events: none;\n  transform: translateY(-50%);\n  will-change: opacity, transform;\n}\n.kumulos-tooltip:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  border: solid transparent;\n  border-width: 8px;\n  margin-top: -8px;\n}\n.kumulos-tooltip-right {\n  left: calc(100% + 12px);\n  animation: kumulos-reveal-right 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-right:after {\n  border-right-color: #222;\n  right: 100%;\n}\n.kumulos-tooltip-left {\n  right: calc(100% + 12px);\n  animation: kumulos-reveal-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.kumulos-tooltip-left:after {\n  border-left-color: #222;\n  left: 100%;\n}\n\n.kumulos-toast {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #222;\n  z-index: 1100;\n  padding: 12px;\n  font-size: 16px;\n  font-family: helvetica, sans-serif;\n  color: #eee;\n  border-radius: 8px 8px 0 0;\n  animation: kumulos-toast-in-out 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.kumulos-prompt {\n  box-sizing: border-box;\n  z-index: 1000;\n}\n.kumulos-prompt *,\n.kumulos-prompt *:before,\n.kumulos-prompt *:after {\n  box-sizing: inherit;\n}\n\n.kumulos-action-button {\n  border: none;\n  margin-left: 10px;\n  padding: 7px 10px;\n  min-width: 100px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n}\n.kumulos-action-button:hover {\n  cursor: pointer;\n}\n\n.kumulos-action-button-cancel {\n  background: none;\n  color: #555;\n}\n.kumulos-action-button-cancel:hover {\n  background: #eee;\n}\n\n.kumulos-action-button-confirm {\n  border-radius: 3px;\n  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.54);\n  background: #4c88e0;\n  color: #fff;\n}\n.kumulos-action-button-confirm:hover {\n  opacity: 0.8;\n}\n\n.kumulos-checkbox-container {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  user-select: none;\n  line-height: 20px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.kumulos-checkbox {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n  border-color: #aaa;\n  display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #aaa;\n  box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n  border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n  display: block;\n  border-color: #222;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n  left: 10px;\n  top: -7px;\n  width: 8px;\n  height: 20px;\n  border: solid #000;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.kumulos-banner-container {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  font-family: helvetica, sans-serif;\n  backface-visibility: hidden;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-banner-container.kumulos-prompt-position-top {\n  top: 0;\n  animation: kumulos-slide-down 0.4s ease;\n}\n.kumulos-banner-container.kumulos-prompt-position-bottom {\n  bottom: 0;\n  top: unset;\n  animation: kumulos-slide-up 0.4s ease;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-container {\n    flex-flow: initial;\n  }\n}\n.kumulos-banner-icon {\n  width: 65px;\n  height: 65px;\n  margin-right: 10px;\n}\n\n.kumulos-banner-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.kumulos-banner-header {\n  display: flex;\n  font-size: 12px;\n  line-height: 14px;\n}\n.kumulos-banner-header h1 {\n  font-size: inherit;\n  font-weight: bold;\n  margin: 0 0 3px 0;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-header {\n    font-size: 18px;\n  }\n}\n.kumulos-banner-body {\n  display: flex;\n  flex-grow: 2;\n  align-items: flex-start;\n  font-size: 12px;\n  line-height: 14px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-body {\n    font-size: 14px;\n  }\n}\n.kumulos-banner-actions {\n  display: flex;\n  align-self: center;\n  justify-self: flex-end;\n  width: 100%;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-banner-actions {\n    width: auto;\n    margin-top: 0;\n  }\n}\n.kumulos-banner-compact .kumulos-banner-body {\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-actions {\n  width: auto;\n  margin-top: 0;\n}\n.kumulos-banner-compact .kumulos-banner-close {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n@supports (padding: max(0px)) {\n  .kumulos-safe-area-inset-pad-left {\n    padding-left: max(10px, env(safe-area-inset-left));\n  }\n\n  .kumulos-safe-area-inset-pad-right {\n    padding-right: max(10px, env(safe-area-inset-right));\n  }\n\n  .kumulos-safe-area-inset-pad-top {\n    padding-top: max(10px, env(safe-area-inset-top));\n  }\n\n  .kumulos-safe-area-inset-pad-bottom {\n    padding-bottom: max(10px, env(safe-area-inset-bottom));\n  }\n}\n.kumulos-bell-container {\n  position: fixed;\n}\n.kumulos-bell-container-bottom-left {\n  bottom: 15px;\n  left: 15px;\n}\n.kumulos-bell-container-bottom-right {\n  bottom: 15px;\n  right: 15px;\n}\n\n.kumulos-bell {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n  border-radius: 100%;\n  border-color: #fff;\n  background: #4c88e0;\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n  width: 60px;\n  height: 60px;\n  padding: 10px;\n  transform: scale(0.9);\n  cursor: pointer;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n.kumulos-bell:hover {\n  transform: scale(1);\n  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell:active {\n  transform: scale(0.8);\n  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.54);\n}\n.kumulos-bell svg {\n  fill: #fff;\n  animation: kumulos-anim-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation-delay: 0.3s;\n}\n.kumulos-bell:before {\n  content: \"\";\n  display: block;\n  width: 85%;\n  height: 85%;\n  border: solid 1px;\n  border-radius: 100%;\n  border-color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 7.5% 0 0 7.5%;\n}\n\n.kumulos-bell-inner {\n  border-radius: 100%;\n}\n\n.kumulos-channel-dialog-container,\n.kumulos-alert-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: helvetica, sans-serif;\n  animation: kumulos-anim-fade-in 0.2s ease-in;\n  backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n  .kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    left: 50%;\n    width: 500px;\n    min-height: 250px;\n    margin-left: -250px;\n    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);\n    height: auto;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-top-center,\n.kumulos-alert-container.kumulos-prompt-position-top-center {\n    border-radius: 0 0 3px 3px;\n  }\n  .kumulos-channel-dialog-container.kumulos-prompt-position-center,\n.kumulos-alert-container.kumulos-prompt-position-center {\n    border-radius: 3px;\n    top: 120px;\n  }\n}\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n  order: 2;\n  width: 60px;\n  height: 60px;\n  align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n  display: flex;\n  order: 1;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n  display: flex;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n.kumulos-channel-dialog-header h1,\n.kumulos-alert-header h1 {\n  font-size: inherit;\n  font-weight: 400;\n  margin: 0;\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n  flex: 1;\n  white-space: pre-wrap;\n  overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n  order: 3;\n  width: 100%;\n  height: 30px;\n  align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n  margin: 20px 0;\n}\n\nbody.kumulos-background-mask-blur {\n  overflow: hidden;\n}\n\n.kumulos-background-mask-blur > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n  filter: blur(3px);\n}\n\n.kumulos-background-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 900;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: block;\n}\n\n.kumulos-overlay-blur > *:not(.kumulos-overlay) {\n  filter: blur(3px);\n}\n\n.kumulos-overlay {\n  box-sizing: border-box;\n  z-index: 2000;\n}\n.kumulos-overlay *,\n.kumulos-overlay *:before,\n.kumulos-overlay *:after {\n  box-sizing: inherit;\n}\n.kumulos-overlay-strip {\n  display: flex;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n  min-height: 150px;\n}\n.kumulos-overlay-strip:before {\n  display: block;\n  content: \"\";\n  width: calc(500px + 12%);\n  max-width: 660px;\n}\n.kumulos-overlay-content-container {\n  display: flex;\n  max-width: 38%;\n  padding: 1em;\n  font-size: 14px;\n  font-family: helvetica, sans-serif;\n}\n.kumulos-overlay-content-container * {\n  margin: 0;\n}\n.kumulos-overlay-content-container svg {\n  margin: 55px 1.7em 0 0;\n  stroke: none;\n  fill: rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container img {\n  width: 55px;\n  height: 55px;\n  flex-shrink: 0;\n}\n.kumulos-overlay-content-container h3,\n.kumulos-overlay-content-container p,\n.kumulos-overlay-content-container a {\n  color: inherit;\n}\n.kumulos-overlay-content-container h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.kumulos-overlay-content-container a {\n  margin-right: 0.65em;\n  opacity: 0.8;\n  text-decoration: none;\n}\n.kumulos-overlay .kumulos-overlay-content {\n  margin-left: 0.75em;\n}\n.kumulos-overlay .kumulos-overlay-content p {\n  margin: 0.5em 0;\n}\n.kumulos-overlay .kumulos-silent-overlay-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n.kumulos-overlay .kumulos-silent-overlay-content-text {\n  max-width: 500px;\n  text-align: center;\n  font-size: 1.3em;\n  font-family: helvetica, sans-serif;\n}\n\n.kumulos-overlay-chrome .kumulos-overlay-strip:before {\n  width: 440px;\n}\n\n.kumulos-overlay-edge .kumulos-overlay-strip:before {\n  display: none;\n}\n.kumulos-overlay-edge .kumulos-overlay-strip {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  justify-content: center;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container {\n  min-width: 675px;\n}\n.kumulos-overlay-edge .kumulos-overlay-content-container svg {\n  order: 1;\n  transform: rotate(-30deg);\n}\n\n.kumulos-overlay-safari .kumulos-overlay-strip:before {\n  width: calc(50% + 212px);\n  max-width: 100%;\n}\n\n@media (max-width: 900px) {\n  .kumulos-overlay {\n    display: none;\n  }\n}",".kumulos-tooltip-parent {\n    .kumulos-tooltip {\n        display: none;\n    }\n\n    &:hover .kumulos-tooltip {\n        display: block;\n    }\n}\n\n.kumulos-tooltip {\n    background: $tooltip-background;\n    position: absolute;\n    top: 50%;\n    padding: 8px 12px;\n    font: 14px helvetica, sans-serif;\n    color: #eee;\n    border-radius: 6px;\n    white-space: nowrap;\n    z-index: 1100;\n    pointer-events: none;\n    transform: translateY(-50%);\n    will-change: opacity, transform;\n\n    &:after {\n        content: \"\";\n        width: 0;\n        height: 0;\n        position: absolute;\n        top: 50%;\n        right: 100%;\n        border: solid transparent;\n        border-width: 8px;\n        margin-top: -8px;\n    }\n\n    &-right {\n        left: calc(100% + 12px);\n        animation: kumulos-reveal-right 0.2s $quintEasing;\n\n        &:after {\n            border-right-color: $tooltip-background;\n            right: 100%;\n        }\n    }\n\n    &-left {\n        right: calc(100% + 12px);\n        animation: kumulos-reveal-left 0.2s $quintEasing;\n\n        &:after {\n            border-left-color: $tooltip-background;\n            left: 100%;\n        }\n    }\n}\n","$shadow-color: rgba(0, 0, 0, 0.54);\n$tooltip-background: #222;\n// https://easings.net/en#easeOutQuint\n$quintEasing: cubic-bezier(0.23, 1, 0.32, 1);\n\n$defaultFont: helvetica, sans-serif;\n$defaultHeaderFontSize: 18px;\n$defaultBodySize: 14px;\n$defaultButtonSize: 14px;\n\n$maskZIndex: 900;\n$promptZIndex: 1000;\n\n$defaultBannerHeaderFontSizeMobile: 12px;\n$defaultBannerHeaderLineHeightMobile: 14px;\n\n$defaultBannerBodyFontSizeMobile: 12px;\n$defaultBannerBodyLineHeightMobile: 14px;\n\n$defaultBannerPadding: 10px;",".kumulos-toast {\n    display: inline-block;\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: $tooltip-background;\n    z-index: 1100;\n    padding: 12px;\n    font-size: 16px;\n    font-family: $defaultFont;\n    color: #eee;\n    border-radius: 8px 8px 0 0;\n    animation: kumulos-toast-in-out 0.25s $quintEasing;\n}\n",".kumulos-prompt {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: $promptZIndex;\n}\n",".kumulos-action-button {\n    border: none;\n\n    margin-left: 10px;\n    padding: 7px 10px;\n\n    min-width: 100px;\n\n    text-transform: uppercase;\n    font-size: $defaultButtonSize;\n    font-weight: 600;\n\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.kumulos-action-button-cancel {\n    background: none;\n    color: #555;\n\n    &:hover {\n        background: #eee;\n    }\n}\n\n.kumulos-action-button-confirm {\n    border-radius: 3px;\n    box-shadow: 1px 3px 3px $shadow-color;\n\n    background: rgb(76, 136, 224);\n    color: #fff;\n\n    &:hover {\n        opacity: 0.8;\n    }\n}\n",".kumulos-checkbox-container {\n    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    user-select: none;\n    line-height: 20px;\n    font-size: 0.9em;\n    font-weight: bold;\n}\n\n.kumulos-checkbox-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n.kumulos-checkbox {\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-radius: 3px;\n    border: 1px solid #ddd;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox {\n    border-color: #aaa;\n    display: block;\n}\n\n.kumulos-checkbox-container:hover input ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #aaa;\n    box-shadow: none;\n}\n\n.kumulos-checkbox:after {\n    content: '';\n    position: absolute;\n    display: none;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox {\n    border-color: #aaa;\n}\n\n.kumulos-checkbox-container input:checked ~ .kumulos-checkbox:after {\n    display: block;\n    border-color: #222;\n    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.kumulos-checkbox-container .kumulos-checkbox:after {\n    left: 10px;\n    top: -7px;\n    width: 8px;\n    height: 20px;\n    border: solid #000;\n    border-width: 0 3px 3px 0;\n    transform: rotate(45deg);\n}\n",".kumulos-banner-container {\n    display: flex;\n    flex-direction: row;\n    flex-flow: wrap;\n\n    position: fixed;\n    left: 0;\n\n    width: 100%;\n    min-height: 80px;\n\n    padding: $defaultBannerPadding;\n\n    font-family: $defaultFont;\n\n    backface-visibility: hidden;\n\n    box-shadow: 0 0 3px 1px $shadow-color;\n\n    &.kumulos-prompt-position-top {\n        top: 0;\n        animation: kumulos-slide-down 0.4s ease;\n    }\n\n    &.kumulos-prompt-position-bottom {\n        bottom: 0;\n        top: unset;\n        animation: kumulos-slide-up 0.4s ease;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-container {\n        flex-flow: initial;\n    }\n}\n\n.kumulos-banner-icon {\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.kumulos-banner-content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.kumulos-banner-header {\n    display: flex;\n    font-size: $defaultBannerHeaderFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n\n    h1 {\n        font-size: inherit;\n        font-weight: bold;\n        margin: 0 0 3px 0;\n    }\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-header {\n        font-size: $defaultHeaderFontSize;\n    }\n}\n\n.kumulos-banner-body {\n    display: flex;\n    flex-grow: 2;\n    align-items: flex-start;\n    font-size: $defaultBannerBodyFontSizeMobile;\n    line-height: $defaultBannerBodyLineHeightMobile;\n    overflow: hidden;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-body {\n        font-size: $defaultBodySize;\n    }\n}\n\n.kumulos-banner-actions {\n    display: flex;\n    align-self: center;\n    justify-self: flex-end;\n    width: 100%;\n    justify-content: flex-end;\n    margin-top: 10px;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n}\n",".kumulos-banner-compact {\n    .kumulos-banner-body {\n        margin-top: 0;\n    }\n\n    .kumulos-banner-actions {\n        width: auto;\n        margin-top: 0;\n    }\n\n    .kumulos-banner-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin-right: 10px;\n    }\n}\n","@supports(padding: unquote('max(0px)')) {\n    .kumulos-safe-area-inset-pad-left {\n        padding-left: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-left))');\n    }\n    .kumulos-safe-area-inset-pad-right {\n        padding-right: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-right))');\n    }\n    .kumulos-safe-area-inset-pad-top {\n        padding-top: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-top))');\n    }\n    .kumulos-safe-area-inset-pad-bottom {\n        padding-bottom: unquote('max(' + $defaultBannerPadding + ', env(safe-area-inset-bottom))');\n    }\n}\n",".kumulos-bell-container {\n    position: fixed;\n\n    &-bottom-left {\n        bottom: 15px;\n        left: 15px;\n    }\n\n    &-bottom-right {\n        bottom: 15px;\n        right: 15px;\n    }\n}\n\n.kumulos-bell {\n    transition: transform 0.2s $quintEasing,\n        box-shadow 0.2s $quintEasing;\n\n    border-radius: 100%;\n    border-color: #fff;\n    background: rgb(76, 136, 224);\n    box-shadow: 1px 2px 2px 0 $shadow-color;\n\n    width: 60px;\n    height: 60px;\n\n    padding: 10px;\n\n    // Note the scale/width/height in all states have been chosen such that they resolve to whole numbers.\n    // This helps reduce blur of the SVG icon due to resterisation in Webkit.\n    transform: scale(0.9);\n\n    cursor: pointer;\n\n    &:hover {\n        transform: scale(1);\n        box-shadow: 1px 2px 3px 1px $shadow-color;\n    }\n\n    &:active {\n        transform: scale(0.8);\n        box-shadow: 1px 2px 2px 0 $shadow-color;\n    }\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n\n    svg {\n        fill: #fff;\n        animation: kumulos-anim-shake 0.4s cubic-bezier(.36, .07, .19, .97) both;\n        animation-delay: 0.3s;\n    }\n\n    &:before {\n        content: '';\n        display: block;\n        width: 85%;\n        height: 85%;\n        border: solid 1px;\n        border-radius: 100%;\n        ;\n        border-color: inherit;\n        ;\n        position: absolute;\n        top: 0;\n        left: 0;\n        margin: 7.5% 0 0 7.5%;\n    }\n}\n\n.kumulos-bell-inner {\n    border-radius: 100%;\n}\n",".kumulos-channel-dialog-container,\n.kumulos-alert-container {\n    position: fixed;\n\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    font-family: $defaultFont;\n\n    animation: kumulos-anim-fade-in 0.2s ease-in;\n    backface-visibility: hidden;\n}\n\n@media only screen and (min-device-width: 480px) {\n    .kumulos-channel-dialog-container,\n    .kumulos-alert-container {\n        left: 50%;\n\n        width: 500px;\n        min-height: 250px;\n        margin-left: -250px;\n\n        box-shadow: 0 0 3px 1px $shadow-color;\n\n        height: auto;\n\n        &.kumulos-prompt-position-top-center {\n            border-radius: 0 0 3px 3px;\n        }\n\n        &.kumulos-prompt-position-center {\n            border-radius: 3px;\n            top: 120px;\n        }\n    }\n}\n\n.kumulos-channel-dialog-icon,\n.kumulos-alert-icon {\n    order: 2;\n    width: 60px;\n    height: 60px;\n    align-self: flex-start;\n}\n\n.kumulos-channel-dialog-content,\n.kumulos-alert-content {\n    display: flex;\n    order: 1;\n    flex-direction: column;\n    flex: 1;\n    margin-right: 10px;\n}\n\n.kumulos-channel-dialog-header,\n.kumulos-alert-header {\n    display: flex;\n    font-size: $defaultHeaderFontSize;\n    margin-bottom: 20px;\n\n    h1 {\n        font-size: inherit;\n        font-weight: 400;\n        margin: 0;\n    }\n}\n\n.kumulos-channel-dialog-body,\n.kumulos-alert-body {\n    flex: 1;\n    white-space: pre-wrap;\n    overflow-y: auto;\n}\n\n.kumulos-channel-dialog-actions,\n.kumulos-alert-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 20px;\n    order: 3;\n    width: 100%;\n    height: 30px;\n    align-self: flex-end;\n}\n\n.kumulos-channel-list-container {\n    margin: 20px 0;\n}\n","body.kumulos-background-mask-blur {\n    overflow: hidden;\n}\n\n.kumulos-background-mask-blur\n    > *:not(.kumulos-prompt):not(.kumulos-overlay):not(.kumulos-background-mask) {\n    filter: blur(3px);\n}\n\n.kumulos-background-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n\n    z-index: $maskZIndex;\n\n    background-color: rgba(0, 0, 0, 0.3);\n\n    display: block;\n}\n",".kumulos-overlay-blur > *:not(.kumulos-overlay) {\n    filter: blur(3px);\n}\n\n.kumulos-overlay {\n    box-sizing: border-box;\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: inherit;\n    }\n\n    z-index: 2000;\n\n    &-strip {\n        display: flex;\n\n        &:before {\n            display: block;\n            content: '';\n            width: calc(500px + 12%);\n            max-width: 660px;\n        }\n\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.8);\n        min-height: 150px;\n    }\n\n    &-content-container {\n        display: flex;\n        max-width: 38%;\n        padding: 1em;\n        font-size: 14px;\n        font-family: $defaultFont;\n\n        * {\n            margin: 0;\n        }\n\n        svg {\n            margin: 55px 1.7em 0 0;\n            stroke: none;\n            fill: rgba(0, 0, 0, 0.8);\n            flex-shrink: 0;\n        }\n\n        img {\n            width: 55px;\n            height: 55px;\n            flex-shrink: 0;\n        }\n\n        h3,\n        p,\n        a {\n            color: inherit;\n        }\n\n        h3 {\n            font-size: 1.3em;\n            font-weight: bold;\n        }\n\n        a {\n            margin-right: 0.65em;\n            opacity: 0.8;\n            text-decoration: none;\n        }\n    }\n\n    .kumulos-overlay-content {\n        margin-left: 0.75em;\n\n        p {\n            margin: 0.5em 0;\n        }\n    }\n\n    .kumulos-silent-overlay-indicator {\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 1;\n    }\n\n    .kumulos-silent-overlay-content-text {\n        max-width: 500px;\n        text-align: center;\n        font-size: 1.3em;\n        font-family: $defaultFont;\n    }\n}\n\n.kumulos-overlay-chrome {\n    .kumulos-overlay-strip:before {\n        width: 440px;\n    }\n}\n\n.kumulos-overlay-edge {\n    .kumulos-overlay-strip:before {\n        display: none;\n    }\n\n    .kumulos-overlay-strip {\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        padding-bottom: 60px;\n        justify-content: center;\n    }\n\n    .kumulos-overlay-content-container {\n        min-width: 675px;\n\n        svg {\n            order: 1;\n            transform: rotate(-30deg);\n        }\n    }\n}\n\n.kumulos-overlay-safari {\n    .kumulos-overlay-strip:before {\n        width: calc(50% + 212px);\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 900px) {\n    .kumulos-overlay {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Children": function() { return /* binding */ k; },
/* harmony export */   "Component": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component; },
/* harmony export */   "Fragment": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment; },
/* harmony export */   "PureComponent": function() { return /* binding */ E; },
/* harmony export */   "StrictMode": function() { return /* binding */ fn; },
/* harmony export */   "Suspense": function() { return /* binding */ L; },
/* harmony export */   "SuspenseList": function() { return /* binding */ M; },
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": function() { return /* binding */ X; },
/* harmony export */   "cloneElement": function() { return /* binding */ rn; },
/* harmony export */   "createContext": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext; },
/* harmony export */   "createElement": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement; },
/* harmony export */   "createFactory": function() { return /* binding */ tn; },
/* harmony export */   "createPortal": function() { return /* binding */ W; },
/* harmony export */   "createRef": function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef; },
/* harmony export */   "findDOMNode": function() { return /* binding */ on; },
/* harmony export */   "flushSync": function() { return /* binding */ cn; },
/* harmony export */   "forwardRef": function() { return /* binding */ x; },
/* harmony export */   "hydrate": function() { return /* binding */ H; },
/* harmony export */   "isValidElement": function() { return /* binding */ en; },
/* harmony export */   "lazy": function() { return /* binding */ F; },
/* harmony export */   "memo": function() { return /* binding */ g; },
/* harmony export */   "render": function() { return /* binding */ B; },
/* harmony export */   "unmountComponentAtNode": function() { return /* binding */ un; },
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ ln; },
/* harmony export */   "useCallback": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback; },
/* harmony export */   "useContext": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext; },
/* harmony export */   "useDebugValue": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue; },
/* harmony export */   "useEffect": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect; },
/* harmony export */   "useErrorBoundary": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary; },
/* harmony export */   "useImperativeHandle": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle; },
/* harmony export */   "useLayoutEffect": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect; },
/* harmony export */   "useMemo": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo; },
/* harmony export */   "useReducer": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer; },
/* harmony export */   "useRef": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef; },
/* harmony export */   "useState": function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState; },
/* harmony export */   "version": function() { return /* binding */ nn; }
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function H(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var Z=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Y(){}function $(){return this.cancelBubble}function q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return Z&&(n=Z(n)),n.persist=Y,n.isPropagationStopped=$,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J))}n.$$typeof=j,K&&K(n)};var Q=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function en(n){return!!n&&n.$$typeof===j}function rn(n){return en(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function un(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:B,hydrate:H,unmountComponentAtNode:un,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:tn,cloneElement:rn,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:en,findDOMNode:on,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": function() { return /* binding */ _; },
/* harmony export */   "Fragment": function() { return /* binding */ d; },
/* harmony export */   "cloneElement": function() { return /* binding */ B; },
/* harmony export */   "createContext": function() { return /* binding */ D; },
/* harmony export */   "createElement": function() { return /* binding */ v; },
/* harmony export */   "createRef": function() { return /* binding */ p; },
/* harmony export */   "h": function() { return /* binding */ v; },
/* harmony export */   "hydrate": function() { return /* binding */ q; },
/* harmony export */   "isValidElement": function() { return /* binding */ i; },
/* harmony export */   "options": function() { return /* binding */ l; },
/* harmony export */   "render": function() { return /* binding */ S; },
/* harmony export */   "toChildArray": function() { return /* binding */ A; }
/* harmony export */ });
var n,l,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)))})}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,r,o,f=a({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,r||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": function() { return /* binding */ F; },
/* harmony export */   "useContext": function() { return /* binding */ T; },
/* harmony export */   "useDebugValue": function() { return /* binding */ d; },
/* harmony export */   "useEffect": function() { return /* binding */ y; },
/* harmony export */   "useErrorBoundary": function() { return /* binding */ q; },
/* harmony export */   "useImperativeHandle": function() { return /* binding */ _; },
/* harmony export */   "useLayoutEffect": function() { return /* binding */ h; },
/* harmony export */   "useMemo": function() { return /* binding */ A; },
/* harmony export */   "useReducer": function() { return /* binding */ p; },
/* harmony export */   "useRef": function() { return /* binding */ s; },
/* harmony export */   "useState": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,A(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function A(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function F(n,t){return o=8,A(function(){return n},t)}function T(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function d(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./src/components/app-rating/app-rating.scss":
/*!***************************************************!*\
  !*** ./src/components/app-rating/app-rating.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app-rating.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/app-rating/app-rating.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_rating_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/app-rating/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/app-rating/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.AppRating = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
__webpack_require__(/*! ./app-rating.scss */ "./src/components/app-rating/app-rating.scss");
function AppRating(props) {
    var stars = props.stars, ratingCount = props.ratingCount;
    function createStars() {
        var starEls = [];
        for (var i = 1; i <= 5; i++) {
            starEls.push((0, preact_1.h)(AppRatingStar, { state: stars >= i
                    ? 'on'
                    : stars < i && stars > i - 1
                        ? 'half'
                        : 'off' }));
        }
        return starEls;
    }
    var ratingStyle = {
        color: props.color
    };
    return ((0, preact_1.h)("div", { "class": "kumulos-rating", style: ratingStyle },
        createStars(),
        (0, preact_1.h)("span", { "class": "kumulos-rating-count" },
            "(",
            props.ratingCount,
            ")")));
}
exports.AppRating = AppRating;
function AppRatingStar(props) {
    var starEl;
    if (props.state === 'on') {
        starEl = (0, preact_1.h)("span", null, "\u2605");
    }
    else if (props.state === 'half') {
        starEl = ((0, preact_1.h)("div", null,
            (0, preact_1.h)("span", null, "\u2606"),
            (0, preact_1.h)("span", { "class": "kumulos-rating-halfstar" }, "\u2605")));
    }
    else {
        starEl = (0, preact_1.h)("span", null, "\u2606");
    }
    return (0, preact_1.h)("div", { "class": "kumulos-rating-star" }, starEl);
}


/***/ }),

/***/ "./src/components/svg-pointer.tsx":
/*!****************************************!*\
  !*** ./src/components/svg-pointer.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.SvgPointer = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var PI_HALF = Math.PI / 2;
var POINTER_HEAD_FROM_BODY_DIST = 50;
var POINTER_CURVE_CTRL_POINT_DIST = 150;
function calcPointerHeadCurveCoordsFromCtrlAndTarget(ctrlPoint, target) {
    var pointerDirRads = Math.atan2(ctrlPoint.x - ctrlPoint.x, target.y - target.y) + PI_HALF;
    var dirVec = {
        x: Math.cos(pointerDirRads),
        y: -Math.sin(pointerDirRads)
    };
    var curveCtrlPoint = {
        x: dirVec.x * POINTER_CURVE_CTRL_POINT_DIST,
        y: dirVec.y * POINTER_CURVE_CTRL_POINT_DIST
    };
    var pointerOffset = {
        x: -curveCtrlPoint.x * POINTER_HEAD_FROM_BODY_DIST,
        y: -dirVec.y * POINTER_HEAD_FROM_BODY_DIST
    };
    var curveStart = {
        x: Math.cos(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y: -Math.sin(pointerDirRads - PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };
    var curveEnd = {
        x: Math.cos(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.x,
        y: -Math.sin(pointerDirRads + PI_HALF) * POINTER_HEAD_FROM_BODY_DIST +
            pointerOffset.y
    };
    return {
        p1: curveStart,
        p2: curveCtrlPoint,
        p3: curveEnd
    };
}
function SvgPointer(_a) {
    var area = _a.area, quadCurvePoints = _a.quadCurvePoints, color = _a.color;
    var p1 = quadCurvePoints.p1, p2 = quadCurvePoints.p2, p3 = quadCurvePoints.p3;
    var linePath = "M ".concat(p1.x, " ").concat(p1.y, " Q ").concat(p2.x, " ").concat(p2.y, " ").concat(p3.x, " ").concat(p3.y);
    var _b = calcPointerHeadCurveCoordsFromCtrlAndTarget(p2, p3), h1 = _b.p1, h2 = _b.p2, h3 = _b.p3;
    var headPath = "M ".concat(p3.x + h1.x, " ").concat(p3.y + h1.y, " Q ").concat(p3.x + h2.x, " ").concat(p3.y +
        h2.y, " ").concat(p3.x + h3.x, " ").concat(p3.y + h3.y);
    var strokeStyle = {
        stroke: color,
        fill: 'none'
    };
    return ((0, preact_1.h)("svg", { viewBox: "0 0 ".concat(area.width, " ").concat(area.height), width: "".concat(area.width, "px"), height: "".concat(area.height, "px"), xmlns: "http://www.w3.org/2000/svg" },
        (0, preact_1.h)("g", { "stroke-width": "3", "stroke-linecap": "round", fill: "none", "fill-rule": "evenodd" },
            (0, preact_1.h)("path", { style: strokeStyle, d: linePath }),
            (0, preact_1.h)("path", { style: strokeStyle, d: headPath }))));
}
exports.SvgPointer = SvgPointer;


/***/ }),

/***/ "./src/core/channels.ts":
/*!******************************!*\
  !*** ./src/core/channels.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ChannelSubscriptionManager = void 0;
var _1 = __webpack_require__(/*! . */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var ChannelSubscriptionManager = /** @class */ (function () {
    function ChannelSubscriptionManager(ctx) {
        this.context = ctx;
    }
    ChannelSubscriptionManager.prototype.makeSubscriptionRequest = function (method, uuids) {
        var _this = this;
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/app-installs/").concat(installId, "/channels/subscriptions");
            var params = {
                uuids: uuids
            };
            var options = {
                method: method,
                body: JSON.stringify(params)
            };
            return (0, utils_1.authedFetch)(_this.context, url, options);
        });
    };
    /**
     * Subscribes to the channels given by unique ID
     */
    ChannelSubscriptionManager.prototype.subscribe = function (uuids) {
        return this.makeSubscriptionRequest('POST', uuids);
    };
    /**
     * Unsubscribes from the channels given by unique ID
     */
    ChannelSubscriptionManager.prototype.unsubscribe = function (uuids) {
        return this.makeSubscriptionRequest('DELETE', uuids);
    };
    /**
     * Sets the current installations channel subscriptions to those given by unique ID.
     *
     * Any other subscriptions will be removed.
     */
    ChannelSubscriptionManager.prototype.setSubscriptions = function (uuids) {
        return this.makeSubscriptionRequest('PUT', uuids);
    };
    /**
     * Clears all of the existing installation's channel subscriptions
     */
    ChannelSubscriptionManager.prototype.clearSubscriptions = function () {
        return this.setSubscriptions([]);
    };
    /**
     * Lists the channels available to this installation along with subscription status
     */
    ChannelSubscriptionManager.prototype.listChannels = function () {
        var _this = this;
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/app-installs/").concat(installId, "/channels");
            return (0, utils_1.authedFetchJson)(_this.context, url);
        });
    };
    /**
     * Creates a push channel and optionally subscribes the current installation.
     *
     * Name is optional, but required if showInPortal is true.
     */
    ChannelSubscriptionManager.prototype.createChannel = function (channelSpec) {
        var _this = this;
        if (channelSpec.showInPortal &&
            (!channelSpec.name || !channelSpec.name.length)) {
            return Promise.reject({
                error: 'Name is required for channel creation when showInPortal is true'
            });
        }
        return (0, _1.getInstallId)().then(function (installId) {
            var url = "".concat(_this.context.urlForService(_1.Service.PUSH), "/v1/channels");
            var params = {
                uuid: channelSpec.uuid,
                name: channelSpec.name,
                showInPortal: Boolean(channelSpec.showInPortal),
                meta: channelSpec.meta,
                installId: undefined
            };
            if (channelSpec.subscribe) {
                params.installId = installId;
            }
            var options = {
                method: 'POST',
                body: JSON.stringify(params)
            };
            return (0, utils_1.authedFetchJson)(_this.context, url, options);
        });
    };
    return ChannelSubscriptionManager;
}());
exports.ChannelSubscriptionManager = ChannelSubscriptionManager;


/***/ }),

/***/ "./src/core/config.ts":
/*!****************************!*\
  !*** ./src/core/config.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";

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
    if (browser === 'safari' && !('PushManager' in window)) {
        manager = (0, config_1.loadPlatformConfig)(ctx).then(function (cfg) { return new safari_1["default"](cfg); });
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

"use strict";

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
                    case 0: return [4 /*yield*/, (0, config_1.loadPlatformConfig)(ctx)];
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
                    case 0: return [4 /*yield*/, this.requestNotificationPermission(ctx)];
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

"use strict";

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
                        if (!('PushManager' in window)) {
                            return [2 /*return*/, Promise.reject('Push notifications are not supported in this browser')];
                        }
                        return [4 /*yield*/, getActiveServiceWorkerReg(ctx.serviceWorkerPath)];
                    case 1:
                        workerReg = _a.sent();
                        return [4 /*yield*/, workerReg.pushManager.getSubscription()];
                    case 2:
                        existingSub = _a.sent();
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
                        endpointHash = hashSubscription(ctx, sub);
                        return [4 /*yield*/, (0, storage_1.get)('pushEndpointHash')];
                    case 6:
                        existingEndpointHash = _a.sent();
                        return [4 /*yield*/, (0, storage_1.get)('pushExpiresAt')];
                    case 7:
                        existingExpiry = _a.sent();
                        if (existingEndpointHash === endpointHash &&
                            (!existingExpiry || existingExpiry > Date.now())) {
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
                    case 0: return [4 /*yield*/, this.requestNotificationPermission(ctx)];
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

/***/ "./src/core/root-frame.ts":
/*!********************************!*\
  !*** ./src/core/root-frame.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/core/utils.ts");
var RootFrame = /** @class */ (function () {
    function RootFrame() {
        var _this = this;
        this.element = document.createElement('div');
        this.element.id = 'kumulos-ui-root';
        this.containers = [];
        (0, utils_1.onDOMReady)(function () { return document.body.appendChild(_this.element); });
    }
    RootFrame.prototype.createContainer = function (name) {
        var container = {
            name: name,
            element: document.createElement('div')
        };
        container.element.id = "kumulos-ui-root-".concat(name);
        this.element.appendChild(container.element);
        this.containers.push(container);
        return container;
    };
    return RootFrame;
}());
exports["default"] = RootFrame;


/***/ }),

/***/ "./src/core/storage/idb-keyval.ts":
/*!****************************************!*\
  !*** ./src/core/storage/idb-keyval.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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

"use strict";

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

"use strict";

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
    if ('safari' === browser && !('PushManager' in window)) {
        coreDependencies.push(typeof ((_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification));
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

/***/ "./src/fp/fp-capture.tsx":
/*!*******************************!*\
  !*** ./src/fp/fp-capture.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
var types_1 = __webpack_require__(/*! ./types */ "./src/fp/types.ts");
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var FP_CAPTURE_URL = 'https://pd.app.delivery';
var CaptureState;
(function (CaptureState) {
    CaptureState[CaptureState["IDLE"] = 0] = "IDLE";
    CaptureState[CaptureState["CAPTURING"] = 1] = "CAPTURING";
})(CaptureState || (CaptureState = {}));
var FpCapture = /** @class */ (function (_super) {
    __extends(FpCapture, _super);
    function FpCapture(props) {
        var _this = _super.call(this, props) || this;
        _this.onMessage = function (e) {
            console.info("FpCapure: message ".concat(e.data.type, " received from ").concat(e.origin));
            var message = e.data;
            if (e.origin !== FP_CAPTURE_URL) {
                return;
            }
            switch (message.type) {
                case types_1.ClientMessageType.READY:
                    _this.setState({ isReady: true });
                    break;
                case types_1.ClientMessageType.FINGERPRINT_GENERATED:
                    _this.setState({ captureState: CaptureState.IDLE }, function () {
                        _this.props.onCaptured(message.data.components);
                    });
                    break;
            }
        };
        _this.dispatchMessage = function (message) {
            var _a;
            console.info("FpCapure: dispatching ".concat(message.type, " message to capture frame"));
            var window = (_a = _this.iFrameRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow;
            if (!window) {
                return;
            }
            window.postMessage(message, FP_CAPTURE_URL);
        };
        _this.iFrameRef = (0, preact_1.createRef)();
        _this.state = {
            isReady: false,
            captureState: CaptureState.IDLE
        };
        return _this;
    }
    FpCapture.prototype.componentDidMount = function () {
        window.addEventListener('message', this.onMessage);
    };
    FpCapture.prototype.componentWillUnmount = function () {
        window.removeEventListener('message', this.onMessage);
    };
    FpCapture.prototype.componentWillUpdate = function (_, nextState) {
        var isReady = nextState.isReady, captureState = nextState.captureState;
        var prevCaptureState = this.state.captureState;
        if (isReady &&
            captureState === CaptureState.CAPTURING &&
            prevCaptureState === CaptureState.IDLE) {
            this.dispatchMessage({
                type: types_1.HostMessageType.REQUEST_FINGERPRINT
            });
        }
    };
    FpCapture.prototype.requestFp = function () {
        console.info("FpCapure: requesting fp capture");
        if (this.state.captureState !== CaptureState.IDLE) {
            console.error('FpCapture.requestFp: captureState not IDLE');
            return;
        }
        this.setState({ captureState: CaptureState.CAPTURING });
    };
    FpCapture.prototype.render = function () {
        return (0, compat_1.createPortal)((0, preact_1.h)("iframe", { ref: this.iFrameRef, src: FP_CAPTURE_URL, style: { width: 0, height: 0 } }), document.body);
    };
    return FpCapture;
}(preact_1.Component));
exports["default"] = FpCapture;


/***/ }),

/***/ "./src/fp/index.ts":
/*!*************************!*\
  !*** ./src/fp/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.sendClickRequest = void 0;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
function sendClickRequest(ctx, bannerUid, fingerprint) {
    return __awaiter(this, void 0, void 0, function () {
        var url, webInstallId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(ctx.urlForService(core_1.Service.DDL), "/v1/banners/").concat(bannerUid, "/taps");
                    return [4 /*yield*/, (0, core_1.getInstallId)()];
                case 1:
                    webInstallId = _a.sent();
                    return [2 /*return*/, (0, utils_1.authedFetch)(ctx, url, {
                            method: 'POST',
                            body: JSON.stringify({
                                webInstallId: webInstallId,
                                fingerprint: fingerprint
                            })
                        })];
            }
        });
    });
}
exports.sendClickRequest = sendClickRequest;


/***/ }),

/***/ "./src/fp/types.ts":
/*!*************************!*\
  !*** ./src/fp/types.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.ClientMessageType = exports.HostMessageType = void 0;
var HostMessageType;
(function (HostMessageType) {
    HostMessageType["REQUEST_FINGERPRINT"] = "REQUEST_FINGERPRINT";
})(HostMessageType = exports.HostMessageType || (exports.HostMessageType = {}));
var ClientMessageType;
(function (ClientMessageType) {
    ClientMessageType["READY"] = "READY";
    ClientMessageType["FINGERPRINT_GENERATED"] = "FINGERPRINT_GENERATED";
})(ClientMessageType = exports.ClientMessageType || (exports.ClientMessageType = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.__esModule = true;
var core_1 = __webpack_require__(/*! ./core */ "./src/core/index.ts");
var messaging_1 = __webpack_require__(/*! ./worker/messaging */ "./src/worker/messaging.ts");
var utils_1 = __webpack_require__(/*! ./core/utils */ "./src/core/utils.ts");
var storage_1 = __webpack_require__(/*! ./core/storage */ "./src/core/storage/index.ts");
var push_1 = __importStar(__webpack_require__(/*! ./core/push */ "./src/core/push/index.ts"));
var manager_1 = __importDefault(__webpack_require__(/*! ./prompts/ddl/manager */ "./src/prompts/ddl/manager.tsx"));
var prompts_1 = __webpack_require__(/*! ./prompts */ "./src/prompts/index.tsx");
var root_frame_1 = __importDefault(__webpack_require__(/*! ./core/root-frame */ "./src/core/root-frame.ts"));
var Kumulos = /** @class */ (function () {
    function Kumulos(context, config) {
        var _this = this;
        this.onWorkerMessage = function (e) {
            var _a, _b;
            if (e.origin !== location.origin) {
                return;
            }
            if (!(0, messaging_1.isKumulosWorkerMessage)(e.data)) {
                return;
            }
            switch (e.data.type) {
                case messaging_1.WorkerMessageType.KPushReceived: {
                    var push = (0, push_1.notificationFromPayload)(e.data.data);
                    (_b = (_a = _this.config).onPushReceived) === null || _b === void 0 ? void 0 : _b.call(_a, push);
                    break;
                }
            }
        };
        this.context = context;
        this.config = config;
        this.rootFrame = new root_frame_1["default"]();
    }
    Kumulos.buildInstance = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var context, kumulos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, core_1.assertConfigValid)(config);
                        context = new core_1.Context(config);
                        return [4 /*yield*/, Kumulos.maybePersistInstallIdAndUserId(context, config)];
                    case 1:
                        _a.sent();
                        kumulos = new Kumulos(context, config);
                        kumulos.initialize();
                        return [2 /*return*/, kumulos];
                }
            });
        });
    };
    Kumulos.prototype.initialize = function () {
        (0, storage_1.persistConfig)(this.config);
        (0, core_1.trackInstallDetails)(this.context, this.config.sdkVersion);
        if (this.context.hasFeature(core_1.SDKFeature.PUSH)) {
            this.initializePushFeature();
        }
        if (this.context.hasFeature(core_1.SDKFeature.DDL)) {
            this.initializeDDLFeature();
        }
    };
    Kumulos.prototype.initializePushFeature = function () {
        (0, push_1.trackOpenFromQuery)(this.context);
        (0, push_1.registerServiceWorker)(this.context.serviceWorkerPath);
        if (navigator.permissions) {
            this.observePermissionStatus();
        }
        this.promptManager = new prompts_1.PromptManager(this, this.context, this.rootFrame);
        this.maybeAddMessageEventListenerToSW();
        this.maybeFireOpenedHandler();
    };
    Kumulos.prototype.observePermissionStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permissionStatus;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.permissions.query({ name: 'notifications' })];
                    case 1:
                        permissionStatus = _a.sent();
                        permissionStatus.addEventListener('change', function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var permissionStatus, permissionState, pushManager;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        permissionStatus = event.target;
                                        permissionState = permissionStatus.state;
                                        if (!(permissionState === 'granted')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, (0, push_1["default"])(this.context)];
                                    case 1:
                                        pushManager = _a.sent();
                                        pushManager.pushRegister(this.context);
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Kumulos.prototype.initializeDDLFeature = function () {
        if (!(0, utils_1.isMobile)()) {
            console.info('DdlManager: DDL feature support only available on mobile devices.');
            return;
        }
        this.ddlManager = new manager_1["default"](this.context, this.rootFrame);
    };
    Kumulos.prototype.maybeAddMessageEventListenerToSW = function () {
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', this.onWorkerMessage);
    };
    Kumulos.maybePersistInstallIdAndUserId = function (context, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, core_1.getInstallId)().then(function (installId) {
                            if (installId !== config.originalVisitorId) {
                                return (0, core_1.setInstallId)(config.originalVisitorId);
                            }
                        })];
                    case 1:
                        _a.sent();
                        if (config.customerId === undefined) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, core_1.getUserId)().then(function (userId) {
                                if (userId !== config.customerId) {
                                    return (0, core_1.associateUser)(context, config.customerId);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Kumulos.prototype.associateUser = function (identifier, attributes) {
        return (0, core_1.associateUser)(this.context, identifier, attributes);
    };
    Kumulos.prototype.trackEvent = function (type, properties) {
        return (0, core_1.trackEvent)(this.context, type, properties).then(function (_) { return void 0; });
    };
    Kumulos.prototype.pushRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pushManager, permission, browser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, push_1["default"])(this.context)];
                    case 1:
                        pushManager = _a.sent();
                        return [4 /*yield*/, pushManager.requestNotificationPermission(this.context)];
                    case 2:
                        permission = _a.sent();
                        if (permission !== 'granted') {
                            return [2 /*return*/, Promise.reject('Notification permission not granted')];
                        }
                        browser = (0, utils_1.getBrowserName)();
                        if (browser === 'safari') {
                            pushManager.pushRegister(this.context);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Kumulos.prototype.maybeFireOpenedHandler = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var payload, push;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, storage_1.getMostRecentlyOpenedPushPayload)()];
                    case 1:
                        payload = _c.sent();
                        if (!payload) {
                            return [2 /*return*/];
                        }
                        push = (0, push_1.notificationFromPayload)(payload);
                        (_b = (_a = this.config).onPushOpened) === null || _b === void 0 ? void 0 : _b.call(_a, push);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Kumulos;
}());
exports["default"] = Kumulos;


/***/ }),

/***/ "./src/prompts/bell/index.tsx":
/*!************************************!*\
  !*** ./src/prompts/bell/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
exports.Bell = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ui_1 = __webpack_require__(/*! ../ui */ "./src/prompts/ui.tsx");
var Bell = /** @class */ (function (_super) {
    __extends(Bell, _super);
    function Bell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRequestNativePrompt = function () {
            _this.props.onPromptAccepted(_this.props.config);
        };
        return _this;
    }
    Bell.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var classes = "kumulos-prompt kumulos-prompt-".concat(this.props.promptManagerState, " kumulos-bell-container kumulos-bell-container-").concat(this.props.config.position);
        var config = this.props.config;
        var tooltipPos = (0, ui_1.inversePosition)(config.position);
        var bgColor = (_b = (_a = config.colors) === null || _a === void 0 ? void 0 : _a.bell) === null || _b === void 0 ? void 0 : _b.bg;
        var fgColor = (_d = (_c = config.colors) === null || _c === void 0 ? void 0 : _c.bell) === null || _d === void 0 ? void 0 : _d.fg;
        var bellStyle = {
            borderColor: fgColor,
            backgroundColor: bgColor
        };
        return ((0, preact_1.h)("div", { "class": classes },
            (0, preact_1.h)("div", { "class": "kumulos-bell-inner kumulos-tooltip-parent" },
                (0, preact_1.h)("div", { "class": "kumulos-bell", onClick: this.onRequestNativePrompt, style: bellStyle },
                    (0, preact_1.h)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        (0, preact_1.h)("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z", fill: fgColor }))),
                (0, preact_1.h)(ui_1.Tooltip, { position: tooltipPos }, (_g = (_f = (_e = config.labels) === null || _e === void 0 ? void 0 : _e.tooltip) === null || _f === void 0 ? void 0 : _f.subscribe) !== null && _g !== void 0 ? _g : ui_1.DEFAULT_SUBSCRIBE_LABEL))));
    };
    return Bell;
}(preact_1.Component));
exports.Bell = Bell;


/***/ }),

/***/ "./src/prompts/ddl/ddl-banner.tsx":
/*!****************************************!*\
  !*** ./src/prompts/ddl/ddl-banner.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DdlBanner = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var app_rating_1 = __webpack_require__(/*! ../../components/app-rating */ "./src/components/app-rating/index.tsx");
var deeplink_button_1 = __importDefault(__webpack_require__(/*! ./deeplink-button */ "./src/prompts/ddl/deeplink-button.tsx"));
var styles = {
    bannerIconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    closeIconStyle: {
        width: 12,
        height: 12
    }
};
var CLASSES = [
    'kumulos-prompt',
    'kumulos-banner-container',
    'kumulos-banner-compact',
    'kumulos-safe-area-inset-pad-left',
    'kumulos-safe-area-inset-pad-right'
];
var SHOW_COPY_TOAST_DELAY = 1000;
var DdlBanner = /** @class */ (function (_super) {
    __extends(DdlBanner, _super);
    function DdlBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function (actionType) {
            if (_this.state.showCopyToast === true) {
                return;
            }
            if (actionType === core_1.UiActionType.DDL_OPEN_DEEPLINK) {
                _this.props.onConfirm(_this.props.config);
                return;
            }
            if (actionType === core_1.UiActionType.DDL_OPEN_STORE) {
                _this.setState({ showCopyToast: true });
                setTimeout(function () {
                    _this.setState({ showCopyToast: false });
                    _this.props.onConfirm(_this.props.config);
                }, SHOW_COPY_TOAST_DELAY);
            }
        };
        _this.onCancel = function () {
            _this.props.onCancel(_this.props.config);
        };
        _this.containerRef = (0, preact_1.createRef)();
        _this.state = { showCopyToast: false };
        return _this;
    }
    DdlBanner.prototype.componentDidMount = function () {
        if (!this.containerRef.current) {
            return;
        }
        var _a = this.containerRef.current, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        this.props.dimensions(clientWidth, clientHeight);
    };
    DdlBanner.prototype.getCssClasses = function (promptPosition) {
        var classes = __spreadArray(__spreadArray([], CLASSES, true), [
            "kumulos-prompt-position-".concat(promptPosition)
        ], false);
        if ([core_1.PromptPosition.TOP, core_1.PromptPosition.BOTTOM].includes(promptPosition)) {
            classes.push("kumulos-safe-area-inset-pad-".concat(promptPosition));
        }
        return classes.join(' ');
    };
    DdlBanner.prototype.render = function () {
        var config = this.props.config;
        var position = config.position, labels = config.labels, colors = config.colors, imageUrl = config.imageUrl, appRating = config.appRating;
        var heading = labels.heading, body = labels.body, acceptAction = labels.acceptAction;
        var bg = colors.bg, fg = colors.fg, acceptActionBg = colors.acceptActionBg, acceptActionFg = colors.acceptActionFg, declineActionBg = colors.declineActionBg, declineActionFg = colors.declineActionFg, ratingFg = colors.ratingFg;
        var classes = this.getCssClasses(position);
        var containerStyle = {
            backgroundColor: bg,
            color: fg
        };
        var declineActionStyle = {
            backgroundColor: declineActionBg,
            color: declineActionFg
        };
        var actionStyle = {
            backgroundColor: acceptActionBg,
            color: acceptActionFg
        };
        var bannerIconStyle = __assign(__assign({}, styles.bannerIconStyle), { backgroundImage: "url(".concat(imageUrl, ")") });
        return ((0, preact_1.h)("div", { style: containerStyle, "class": classes, ref: this.containerRef },
            (0, preact_1.h)("div", { "class": "kumulos-banner-close", style: declineActionStyle, onTouchEnd: this.onCancel }, "\u2716"),
            (0, preact_1.h)("div", { style: bannerIconStyle, "class": "kumulos-banner-icon" }),
            (0, preact_1.h)("div", { "class": "kumulos-banner-content" },
                (0, preact_1.h)("div", { "class": "kumulos-banner-header" },
                    (0, preact_1.h)("h1", null, heading)),
                (0, preact_1.h)("div", { "class": "kumulos-banner-body" }, body),
                appRating && ((0, preact_1.h)(app_rating_1.AppRating, { ratingCount: appRating.ratingCount, stars: appRating.rating, color: ratingFg }))),
            (0, preact_1.h)("div", { "class": "kumulos-banner-actions" },
                (0, preact_1.h)(deeplink_button_1["default"], { style: actionStyle, "class": "kumulos-action-button kumulos-action-button-confirm", text: acceptAction, promptActions: config, onAction: this.onConfirm })),
            this.state.showCopyToast && ((0, preact_1.h)("div", { "class": "kumulos-toast" }, "Link Copied"))));
    };
    return DdlBanner;
}(preact_1.Component));
exports.DdlBanner = DdlBanner;


/***/ }),

/***/ "./src/prompts/ddl/deeplink-button.tsx":
/*!*********************************************!*\
  !*** ./src/prompts/ddl/deeplink-button.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var clipboard_copy_1 = __importDefault(__webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js"));
var DeeplinkButton = /** @class */ (function (_super) {
    __extends(DeeplinkButton, _super);
    function DeeplinkButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleAction = function () {
            var accept = _this.props.promptActions.uiActions.accept;
            switch (accept.type) {
                case core_1.UiActionType.DDL_OPEN_STORE:
                    (0, clipboard_copy_1["default"])(accept.deepLinkUrl)
                        .then(function () {
                        return _this.props.onAction(core_1.UiActionType.DDL_OPEN_STORE);
                    })["catch"](function (e) {
                        console.error('Unable to capture deeplink url for deferred app pickup', e);
                    });
                    break;
                case core_1.UiActionType.DDL_OPEN_DEEPLINK:
                    _this.props.onAction(core_1.UiActionType.DDL_OPEN_STORE);
                    break;
                default:
                    return console.error("Handle DeepLink Action: unsupported accept action type '".concat(accept['type'], "'"));
            }
        };
        return _this;
    }
    DeeplinkButton.prototype.render = function () {
        var _a = this.props, style = _a.style, cssClass = _a["class"], text = _a.text;
        return ((0, preact_1.h)("button", { type: "button", style: style, "class": cssClass, onTouchEnd: this.handleAction }, text));
    };
    return DeeplinkButton;
}(preact_1.Component));
exports["default"] = DeeplinkButton;


/***/ }),

/***/ "./src/prompts/ddl/manager.tsx":
/*!*************************************!*\
  !*** ./src/prompts/ddl/manager.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
exports.DdlManagerState = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var index_1 = __webpack_require__(/*! ../../core/index */ "./src/core/index.ts");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ddl/ui.tsx"));
var config_1 = __webpack_require__(/*! ../../core/config */ "./src/core/config.ts");
var prompt_reminder_1 = __webpack_require__(/*! ../prompt-reminder */ "./src/prompts/prompt-reminder.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/prompts/utils.ts");
var fp_1 = __webpack_require__(/*! ../../fp */ "./src/fp/index.ts");
var triggers_1 = __webpack_require__(/*! ../triggers */ "./src/prompts/triggers.ts");
var DdlManagerState;
(function (DdlManagerState) {
    DdlManagerState["LOADING"] = "loading";
    DdlManagerState["READY"] = "ready";
})(DdlManagerState = exports.DdlManagerState || (exports.DdlManagerState = {}));
var DdlManager = /** @class */ (function () {
    function DdlManager(ctx, rootFrame) {
        var _this = this;
        this.activeConfigs = [];
        this.onBannerConfirm = function (prompt, components) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!!components) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, fp_1.sendClickRequest)(this.context, prompt.uuid, components)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, (0, config_1.deleteDdlBannerConfigFromCache)(prompt.uuid)];
                    case 3:
                        _a.sent();
                        this.hidePrompt(prompt);
                        this.performClientRedirection(prompt);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onBannerCancelled = function (prompt) {
            (0, prompt_reminder_1.maybePersistReminder)(prompt);
            _this.hidePrompt(prompt);
        };
        this.render = function (prompt) {
            (0, preact_1.render)((0, preact_1.h)(ui_1["default"], { config: prompt, context: _this.context, onBannerConfirm: _this.onBannerConfirm, onBannerCancelled: _this.onBannerCancelled }), _this.ddlContainer.element);
        };
        console.info('DdlManager: initialising');
        this.ddlContainer = rootFrame.createContainer('ddl');
        this.context = ctx;
        this.triggerFilter = new triggers_1.PromptTriggerEventFilter(ctx, function (_) {
            _this.updateActiveConfigs();
            _this.setState(DdlManagerState.READY);
        });
        this.setState(DdlManagerState.LOADING);
    }
    DdlManager.prototype.hidePrompt = function (prompt) {
        var _a;
        this.activeConfigs = (_a = this.activeConfigs) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c.uuid !== prompt.uuid; });
        this.setState(DdlManagerState.READY);
    };
    DdlManager.prototype.performClientRedirection = function (config) {
        var acceptAction = config.uiActions.accept;
        switch (acceptAction.type) {
            case index_1.UiActionType.DDL_OPEN_STORE:
                window.location.href = acceptAction.url;
                break;
            case index_1.UiActionType.DDL_OPEN_DEEPLINK:
                window.location.href = acceptAction.deepLinkUrl;
                break;
            default:
                console.error('DdlManager.performClientRedirection: Unsupported accept action type, unable to perform redirection');
        }
    };
    DdlManager.prototype.setState = function (state) {
        console.info('Setting DdlManager state:' + state);
        this.onEnter(state);
    };
    DdlManager.prototype.onEnter = function (state) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, prompt_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case DdlManagerState.LOADING: return [3 /*break*/, 1];
                            case DdlManagerState.READY: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, this.loadConfig()];
                    case 2:
                        _c.config = _d.sent();
                        if (!this.config) {
                            return [2 /*return*/];
                        }
                        this.setState(DdlManagerState.READY);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.updateActiveConfigs()];
                    case 4:
                        _d.sent();
                        prompt_1 = (_a = this.activeConfigs) === null || _a === void 0 ? void 0 : _a.shift();
                        if (!prompt_1) {
                            this.renderEmpty();
                            return [2 /*return*/];
                        }
                        if (!(0, utils_1.deferPromptActivation)(prompt_1, this.render)) {
                            this.render(prompt_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DdlManager.prototype.renderEmpty = function () {
        (0, preact_1.render)(null, this.ddlContainer.element);
    };
    DdlManager.prototype.updateActiveConfigs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var matchedConfigs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.triggerFilter.filterPrompts(this.config)];
                    case 1:
                        matchedConfigs = _a.sent();
                        matchedConfigs.forEach(function (c) {
                            var _a;
                            if (((_a = _this.activeConfigs) === null || _a === void 0 ? void 0 : _a.indexOf(c)) !== -1) {
                                return;
                            }
                            _this.activeConfigs.push(c);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DdlManager.prototype.loadConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, config_1.loadDdlConfig)(this.context)];
                    case 1:
                        configs = _a.sent();
                        if (undefined === configs) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, configs.reduce(function (bag, c) {
                                bag[c.uuid] = c;
                                return bag;
                            }, {})];
                }
            });
        });
    };
    return DdlManager;
}());
exports["default"] = DdlManager;


/***/ }),

/***/ "./src/prompts/ddl/ui.tsx":
/*!********************************!*\
  !*** ./src/prompts/ddl/ui.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ddl_banner_1 = __webpack_require__(/*! ./ddl-banner */ "./src/prompts/ddl/ddl-banner.tsx");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var core_2 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var fp_capture_1 = __importDefault(__webpack_require__(/*! ../../fp/fp-capture */ "./src/fp/fp-capture.tsx"));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui(props) {
        var _this = _super.call(this, props) || this;
        _this.onDimensions = function (_bannerWidth, bannerHeight) {
            var config = _this.props.config;
            var bodyStyle = window.getComputedStyle(document.body, null);
            _this.siteMargin = parseFloat(bodyStyle.getPropertyValue((config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
                ? 'margin-top'
                : 'margin-bottom'));
            _this.siteTransition = bodyStyle.getPropertyValue('transition');
            if ((config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.BOTTOM) {
                bannerHeight += 20;
            }
            var offset = bannerHeight + _this.siteMargin;
            document.body.style.transition = 'all 0.375s ease 0s';
            document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
                ? 'marginTop'
                : 'marginBottom'] = "".concat(offset, "px");
        };
        _this.onBannerConfirm = function (config) {
            var _a;
            var acceptAction = config.uiActions.accept;
            switch (acceptAction.type) {
                case core_1.UiActionType.DDL_OPEN_STORE:
                    (_a = _this.fpRef.current) === null || _a === void 0 ? void 0 : _a.requestFp();
                    break;
                case core_1.UiActionType.DDL_OPEN_DEEPLINK:
                    _this.resetBodyStyles();
                    _this.props.onBannerConfirm(_this.props.config);
                    break;
                default:
                    console.error('Ui.onBannerConfirm: Unsupported accept action type, unable to confirm banner');
            }
        };
        _this.onBannerCancelled = function (config) {
            _this.resetBodyStyles();
            _this.props.onBannerCancelled(config);
        };
        _this.onCaptureFp = function (components) {
            _this.resetBodyStyles();
            _this.props.onBannerConfirm(_this.props.config, components);
        };
        _this.state = {
            requestFpCapture: false
        };
        _this.fpRef = (0, preact_1.createRef)();
        return _this;
    }
    Ui.prototype.resetBodyStyles = function () {
        var _a;
        var config = this.props.config;
        document.body.style.transition = (_a = this.siteTransition) !== null && _a !== void 0 ? _a : '';
        document.body.style[(config === null || config === void 0 ? void 0 : config.position) === core_2.PromptPosition.TOP
            ? 'marginTop'
            : 'marginBottom'] = this.siteMargin ? "".concat(this.siteMargin, "px") : '';
    };
    Ui.prototype.componentWillUnmount = function () {
        this.resetBodyStyles();
    };
    Ui.prototype.render = function () {
        if (!this.props.config) {
            return null;
        }
        return (0, compat_1.createPortal)((0, preact_1.h)(preact_1.Fragment, null,
            (0, preact_1.h)(ddl_banner_1.DdlBanner, { config: this.props.config, onConfirm: this.onBannerConfirm, onCancel: this.onBannerCancelled, dimensions: this.onDimensions }),
            (0, preact_1.h)(fp_capture_1["default"], { ref: this.fpRef, onCaptured: this.onCaptureFp })), document.body);
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ }),

/***/ "./src/prompts/dialog/channels-dialog.tsx":
/*!************************************************!*\
  !*** ./src/prompts/dialog/channels-dialog.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ChannelsDialog = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ui_context_1 = __webpack_require__(/*! ../ui-context */ "./src/prompts/ui-context.ts");
var channels_list_1 = __webpack_require__(/*! ./channels-list */ "./src/prompts/dialog/channels-list.tsx");
var styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};
var ChannelsDialog = /** @class */ (function (_super) {
    __extends(ChannelsDialog, _super);
    function ChannelsDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.onConfirm = function () {
            _this.props.onConfirm(_this.state.channelSelections);
        };
        _this.onSelectedChannelChanged = function (channelList) {
            _this.setState({
                channelSelections: __spreadArray([], channelList, true)
            });
        };
        _this.renderDialog = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var action = _this.props.action;
            var classes = "kumulos-prompt kumulos-channel-dialog-container kumulos-prompt-position-".concat(action.dialogConfig.position);
            var _a = action.dialogConfig.labels, heading = _a.heading, confirmAction = _a.confirmAction;
            var _b = action.dialogConfig.colors, bg = _b.bg, fg = _b.fg, confirmActionBg = _b.confirmActionBg, confirmActionFg = _b.confirmActionFg;
            var containerStyle = {
                backgroundColor: bg,
                color: fg
            };
            var confirmActionStyle = {
                backgroundColor: confirmActionBg,
                color: confirmActionFg
            };
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(".concat(uiContext === null || uiContext === void 0 ? void 0 : uiContext.platformConfig.iconUrl, ")") });
            return ((0, preact_1.h)("div", { style: containerStyle, className: classes },
                (0, preact_1.h)("div", { style: iconStyle, className: "kumulos-channel-dialog-icon" }),
                (0, preact_1.h)("div", { className: "kumulos-channel-dialog-content" },
                    (0, preact_1.h)("div", { className: "kumulos-channel-dialog-header" },
                        (0, preact_1.h)("h1", null, heading)),
                    (0, preact_1.h)("div", { className: "kumulos-channel-dialog-body" },
                        (0, preact_1.h)(channels_list_1.ChannelsList, { channelList: (0, core_1.getChannelDialogChannels)(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged }))),
                (0, preact_1.h)("div", { className: "kumulos-channel-dialog-actions" },
                    (0, preact_1.h)("button", { type: "button", style: confirmActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onConfirm }, confirmAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    ChannelsDialog.prototype.render = function () {
        return (0, preact_1.h)(ui_context_1.UIContext.Consumer, null, this.renderDialog);
    };
    return ChannelsDialog;
}(preact_1.Component));
exports.ChannelsDialog = ChannelsDialog;


/***/ }),

/***/ "./src/prompts/dialog/channels-list.tsx":
/*!**********************************************!*\
  !*** ./src/prompts/dialog/channels-list.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.ChannelsList = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var ChannelsList = /** @class */ (function (_super) {
    __extends(ChannelsList, _super);
    function ChannelsList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            channels: __spreadArray([], _this.props.channelList, true)
        };
        _this.props.onChannelSelectionChanged(_this.state.channels);
        return _this;
    }
    ChannelsList.prototype.onChannelCheckChange = function (channelUuid, checked) {
        var _this = this;
        var item = this.state.channels.find(function (c) { return c.channel.uuid === channelUuid; });
        item.checked = checked;
        this.setState({
            channels: __spreadArray([], this.state.channels, true)
        }, function () { return _this.props.onChannelSelectionChanged(_this.state.channels); });
    };
    ChannelsList.prototype.render = function () {
        var _this = this;
        var channels = this.state.channels;
        if (!channels.length) {
            return null;
        }
        return ((0, preact_1.h)("div", { "class": "kumulos-channel-list-container" }, channels.map(function (item) { return ((0, preact_1.h)("label", { key: item.channel.uuid, className: "kumulos-checkbox-container" },
            item.channel.name,
            (0, preact_1.h)("input", { type: "checkbox", readOnly: true, checked: item.checked, onClick: function (e) {
                    _this.onChannelCheckChange(item.channel.uuid, e.currentTarget.checked);
                } }),
            (0, preact_1.h)("span", { className: "kumulos-checkbox" }))); })));
    };
    return ChannelsList;
}(preact_1.Component));
exports.ChannelsList = ChannelsList;


/***/ }),

/***/ "./src/prompts/dialog/index.tsx":
/*!**************************************!*\
  !*** ./src/prompts/dialog/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.Dialog = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var ui_context_1 = __webpack_require__(/*! ../ui-context */ "./src/prompts/ui-context.ts");
var channels_list_1 = __webpack_require__(/*! ./channels-list */ "./src/prompts/dialog/channels-list.tsx");
var styles = {
    iconStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
};
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.onRequestNativePrompt = function () {
            _this.props.onPromptAccepted(_this.props.config, _this.state.channelSelections);
        };
        _this.onRequestCancel = function () {
            _this.props.onPromptDeclined(_this.props.config);
        };
        _this.onSelectedChannelChanged = function (channelList) {
            _this.setState({
                channelSelections: __spreadArray([], channelList, true)
            });
        };
        _this.renderAlert = function (uiContext) {
            if (undefined === uiContext) {
                return null;
            }
            var config = _this.props.config;
            var classes = "kumulos-prompt kumulos-prompt-".concat(_this.props.promptManagerState, " kumulos-").concat(config.type, "-container kumulos-prompt-position-").concat(config.position);
            var _a = config.type === core_1.PromptTypeName.ALERT
                ? config.labels.alert
                : config.labels.banner, heading = _a.heading, body = _a.body, declineAction = _a.declineAction, acceptAction = _a.acceptAction;
            var _b = config.type === core_1.PromptTypeName.ALERT
                ? config.colors.alert
                : config.colors.banner, bg = _b.bg, fg = _b.fg, acceptActionBg = _b.acceptActionBg, acceptActionFg = _b.acceptActionFg, declineActionBg = _b.declineActionBg, declineActionFg = _b.declineActionFg;
            var containerStyle = {
                backgroundColor: bg,
                color: fg
            };
            var declineActionStyle = {
                backgroundColor: declineActionBg,
                color: declineActionFg
            };
            var acceptActionStyle = {
                backgroundColor: acceptActionBg,
                color: acceptActionFg
            };
            var iconStyle = __assign(__assign({}, styles.iconStyle), { backgroundImage: "url(".concat(config.imageUrl, ")") });
            return ((0, preact_1.h)("div", { style: containerStyle, className: classes },
                config.imageUrl && ((0, preact_1.h)("div", { style: iconStyle, className: "kumulos-".concat(config.type, "-icon") })),
                (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-content") },
                    (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-header") },
                        (0, preact_1.h)("h1", null, heading)),
                    (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-body") },
                        body,
                        _this.props.action && ((0, preact_1.h)(channels_list_1.ChannelsList, { channelList: (0, core_1.getChannelDialogChannels)(uiContext.channelList, _this.props.action.channels), onChannelSelectionChanged: _this.onSelectedChannelChanged })))),
                (0, preact_1.h)("div", { className: "kumulos-".concat(config.type, "-actions") },
                    (0, preact_1.h)("button", { type: "button", style: declineActionStyle, className: "kumulos-action-button kumulos-action-button-cancel", onClick: _this.onRequestCancel }, declineAction),
                    (0, preact_1.h)("button", { type: "button", style: acceptActionStyle, className: "kumulos-action-button kumulos-action-button-confirm", onClick: _this.onRequestNativePrompt }, acceptAction))));
        };
        _this.state = {
            channelSelections: []
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        return (0, preact_1.h)(ui_context_1.UIContext.Consumer, null, this.renderAlert);
    };
    return Dialog;
}(preact_1.Component));
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/prompts/index.tsx":
/*!*******************************!*\
  !*** ./src/prompts/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
exports.__esModule = true;
exports.PromptManager = void 0;
var channels_1 = __webpack_require__(/*! ../core/channels */ "./src/core/channels.ts");
var push_1 = __importDefault(__webpack_require__(/*! ../core/push */ "./src/core/push/index.ts"));
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var triggers_1 = __webpack_require__(/*! ./triggers */ "./src/prompts/triggers.ts");
var ui_context_1 = __webpack_require__(/*! ./ui-context */ "./src/prompts/ui-context.ts");
var ui_1 = __importDefault(__webpack_require__(/*! ./ui */ "./src/prompts/ui.tsx"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/prompts/utils.ts");
var config_1 = __webpack_require__(/*! ../core/config */ "./src/core/config.ts");
var prompt_reminder_1 = __webpack_require__(/*! ./prompt-reminder */ "./src/prompts/prompt-reminder.ts");
// loading -> ready
// ready -> requesting
// requesting -> ready
// ready -> postaction
// postaction -> ready
var PromptManager = /** @class */ (function () {
    function PromptManager(client, ctx, rootFrame) {
        var _this = this;
        this.onEventTracked = function (e) {
            console.info('Prompt trigger saw event', e);
            if (_this.state !== 'ready') {
                console.info('Not ready, waiting on queue');
                return;
            }
            _this.evaluateTriggers();
        };
        this.activateDeferredPrompt = function (prompt) {
            _this.activatePrompt(prompt);
            _this.render();
        };
        this.onRequestNativePrompt = function (prompt) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if ('requesting' === this.state || 'requesting-silent' === this.state) {
                            return [2 /*return*/];
                        }
                        this.currentlyRequestingPrompt = prompt;
                        (_b = this.pushOpsManager) === null || _b === void 0 ? void 0 : _b.isNativePromptShown().then(function (isNativePromptShown) {
                            if (isNativePromptShown) {
                                _this.setState('requesting');
                            }
                            else {
                                _this.setState('requesting-silent');
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, ((_c = this.pushOpsManager) === null || _c === void 0 ? void 0 : _c.requestPermissionAndRegisterForPush(this.context))];
                    case 1:
                        _a.subscriptionState = _d.sent();
                        this.setState('ready');
                        return [2 /*return*/];
                }
            });
        }); };
        this.onRequestPostActionPrompt = function (prompt, action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ('postaction' === this.state) {
                    return [2 /*return*/];
                }
                if ('userChannelSelectDialog' !== action.type) {
                    return [2 /*return*/];
                }
                this.currentlyRequestingPrompt = prompt;
                this.currentPostAction = action;
                this.setState('postaction');
                return [2 /*return*/];
            });
        }); };
        this.onPromptAccepted = function (prompt, channelSelections) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.subscriptionState === 'unsubscribed')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onRequestNativePrompt(prompt)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        this.hideAndSuppressPrompts(prompt);
                        if (!(this.subscriptionState === 'subscribed')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.handlePromptActions(prompt)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.handleUserChannelSelection(channelSelections)];
                    case 4:
                        _c.sent();
                        (_a = this.ui) === null || _a === void 0 ? void 0 : _a.showToast((_b = prompt.labels) === null || _b === void 0 ? void 0 : _b.thanksForSubscribing);
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.onPostActionConfirm = function (prompt, channelSelections) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleUserChannelSelection(channelSelections)];
                    case 1:
                        _a.sent();
                        this.setState('ready');
                        this.hideAndSuppressPrompts(prompt);
                        return [2 /*return*/];
                }
            });
        }); };
        this.onPromptDeclined = function (prompt) {
            (0, prompt_reminder_1.maybePersistReminder)(prompt);
            _this.hidePrompt(prompt);
        };
        this.onDismissOverlay = function (prompt) {
            _this.hidePrompt(prompt);
            _this.setState('requesting-silent-dismissed');
        };
        this.prompts = {};
        this.activePrompts = [];
        this.channels = [];
        this.triggerFilter = new triggers_1.PromptTriggerEventFilter(ctx, this.onEventTracked);
        this.pushContainer = rootFrame.createContainer('push');
        this.kumulosClient = client;
        this.context = ctx;
        this.setState('loading');
    }
    PromptManager.prototype.getChannelSubscriptionManager = function () {
        if (!this.channelSubscriptionManager) {
            this.channelSubscriptionManager = new channels_1.ChannelSubscriptionManager(this.context);
        }
        return this.channelSubscriptionManager;
    };
    PromptManager.prototype.hideAndSuppressPrompts = function (prompt) {
        var _this = this;
        var subscriptionState = this.subscriptionState;
        this.hidePrompt(prompt);
        if (subscriptionState !== 'unsubscribed') {
            this.activePrompts.forEach(function (p) { return _this.hidePrompt(p); });
        }
    };
    PromptManager.prototype.handlePromptActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PromptManager.prototype.handleChannelSubActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, uuidsToSubscribe;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (undefined === prompt.actions) {
                            return [2 /*return*/];
                        }
                        actions = prompt.actions.filter(function (action) {
                            return action.type === 'subscribeToChannel';
                        });
                        uuidsToSubscribe = actions
                            .filter(function (action) {
                            var channeltoSub = _this.channels.find(function (c) { return c.uuid === action.channelUuid && c.subscribed === false; });
                            if (undefined === channeltoSub) {
                                console.info("Unable to subscribe to channel '".concat(action.channelUuid, "' as it does not exist"));
                                return false;
                            }
                            return true;
                        })
                            .map(function (action) { return action.channelUuid; });
                        return [4 /*yield*/, this.getChannelSubscriptionManager().subscribe(uuidsToSubscribe)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.handleChannelPostActions = function (prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var actions;
            return __generator(this, function (_a) {
                if (undefined === prompt.actions) {
                    return [2 /*return*/];
                }
                actions = prompt.actions.filter(function (action) {
                    return action.type === 'userChannelSelectDialog';
                });
                if (!actions.length) {
                    return [2 /*return*/];
                }
                // currently only expecting 1 configured `userChannelSelectDialog` action
                this.onRequestPostActionPrompt(prompt, actions[0]);
                return [2 /*return*/];
            });
        });
    };
    PromptManager.prototype.handleUserChannelSelection = function (channelSelections) {
        return __awaiter(this, void 0, void 0, function () {
            var channelSubMgr, unsubscribes, subscribes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (undefined === channelSelections) {
                            return [2 /*return*/];
                        }
                        channelSubMgr = this.getChannelSubscriptionManager();
                        unsubscribes = channelSelections
                            .filter(function (cs) { return !cs.checked; })
                            .map(function (cs) { return cs.channel.uuid; });
                        return [4 /*yield*/, channelSubMgr.unsubscribe(unsubscribes)];
                    case 1:
                        _a.sent();
                        subscribes = channelSelections
                            .filter(function (cs) { return cs.checked; })
                            .map(function (cs) { return cs.channel.uuid; });
                        return [4 /*yield*/, channelSubMgr.subscribe(subscribes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.render = function () {
        var _this = this;
        if (!this.subscriptionState || !this.state || !this.platformConfig) {
            return;
        }
        (0, preact_1.render)((0, preact_1.h)(ui_context_1.UIContext.Provider, { value: {
                platformConfig: this.platformConfig,
                channelList: this.channels
            } },
            (0, preact_1.h)(ui_1["default"], { ref: function (r) { return (_this.ui = r); }, prompts: this.activePrompts, subscriptionState: this.subscriptionState, promptManagerState: this.state, onPromptAccepted: this.onPromptAccepted, onPromptDeclined: this.onPromptDeclined, onPostActionConfirm: this.onPostActionConfirm, onDismissOverlay: this.onDismissOverlay, currentlyRequestingPrompt: this.currentlyRequestingPrompt, currentPostAction: this.currentPostAction })), this.pushContainer.element);
    };
    PromptManager.prototype.evaluateTriggers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var matchedPrompts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        return [4 /*yield*/, this.triggerFilter.filterPrompts(this.prompts, function (prompt) {
                                return _this.promptActionNeedsTaken(prompt);
                            })];
                    case 1:
                        matchedPrompts = _a.sent();
                        this.activatePrompts(matchedPrompts);
                        return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.promptActionNeedsTaken = function (prompt) {
        var _a, _b;
        if (this.subscriptionState === 'unsubscribed') {
            return true;
        }
        var channelsToSub = (_b = (_a = prompt.actions) === null || _a === void 0 ? void 0 : _a.filter(function (action) {
            return action.type === 'subscribeToChannel';
        }).map(function (a) { return a.channelUuid; })) !== null && _b !== void 0 ? _b : [];
        var needsToSub = this.channels.filter(function (c) { return channelsToSub.includes(c.uuid) && !c.subscribed; }).length > 0;
        if (needsToSub) {
            return true;
        }
        return false;
    };
    PromptManager.prototype.hidePrompt = function (prompt) {
        var idx = this.activePrompts.indexOf(prompt);
        this.activePrompts.splice(idx, 1);
        this.render();
    };
    PromptManager.prototype.activatePrompt = function (prompt) {
        // TODO is identity ok for comparison here... might need to use ID
        if (this.activePrompts.indexOf(prompt) > -1) {
            return;
        }
        this.activePrompts.push(prompt);
    };
    PromptManager.prototype.activatePrompts = function (prompts) {
        console.info('Will activate prompts: ', prompts);
        for (var i = 0; i < prompts.length; ++i) {
            var prompt_1 = prompts[i];
            if ((0, utils_1.deferPromptActivation)(prompt_1, this.activateDeferredPrompt)) {
                continue;
            }
            this.activatePrompt(prompt_1);
        }
        this.render();
    };
    PromptManager.prototype.setState = function (state) {
        console.info('Setting prompt manager state:' + state);
        this.state = state;
        this.onEnter(state);
    };
    PromptManager.prototype.onEnter = function (state) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _b = state;
                        switch (_b) {
                            case 'loading': return [3 /*break*/, 1];
                            case 'ready': return [3 /*break*/, 6];
                            case 'postaction': return [3 /*break*/, 9];
                            case 'requesting': return [3 /*break*/, 9];
                            case 'requesting-silent': return [3 /*break*/, 9];
                            case 'requesting-silent-dismissed': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 10];
                    case 1:
                        _c = this;
                        return [4 /*yield*/, (0, push_1["default"])(this.context)];
                    case 2:
                        _c.pushOpsManager = _f.sent();
                        return [4 /*yield*/, this.pushOpsManager.handleAutoResubscription(this.context)];
                    case 3:
                        _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.pushOpsManager.getCurrentSubscriptionState(this.context)];
                    case 4:
                        _d.subscriptionState = _f.sent();
                        return [4 /*yield*/, this.loadPrompts()];
                    case 5:
                        _f.sent();
                        // Note: channels irrelevant for optimove apps
                        //this.channels = await this.getChannelSubscriptionManager().listChannels();
                        this.setState('ready');
                        return [3 /*break*/, 10];
                    case 6:
                        this.currentlyRequestingPrompt = undefined;
                        this.currentPostAction = undefined;
                        _e = this;
                        return [4 /*yield*/, ((_a = this.pushOpsManager) === null || _a === void 0 ? void 0 : _a.getCurrentSubscriptionState(this.context))];
                    case 7:
                        _e.subscriptionState = _f.sent();
                        return [4 /*yield*/, this.evaluateTriggers()];
                    case 8:
                        _f.sent();
                        this.render();
                        return [3 /*break*/, 10];
                    case 9:
                        this.render();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PromptManager.prototype.loadPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, config_1.loadPlatformConfig)(this.context)];
                    case 1:
                        _a.platformConfig = _b.sent();
                        if (!this.platformConfig.publicKey) {
                            console.error('Failed to load prompts config');
                            return [2 /*return*/];
                        }
                        if (this.context.pushPrompts !== 'auto') {
                            this.prompts = __assign({}, this.context.pushPrompts);
                        }
                        else {
                            this.prompts = __assign({}, (this.platformConfig.prompts || {}));
                        }
                        //Note: no prompts with such action can be created from ui for optimove apps
                        // for (let id in this.prompts) {
                        //     const hasChannelOp = Boolean(
                        //         this.prompts[id].actions?.filter(
                        //             a => a.type === 'subscribeToChannel'
                        //         )?.length
                        //     );
                        //     if (hasChannelOp) {
                        //         try {
                        //             this.channels = await this.getChannelSubscriptionManager().listChannels();
                        //         } catch (e) {
                        //             // Noop
                        //         }
                        //         break;
                        //     }
                        // }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    return PromptManager;
}());
exports.PromptManager = PromptManager;


/***/ }),

/***/ "./src/prompts/overlay/background-mask.tsx":
/*!*************************************************!*\
  !*** ./src/prompts/overlay/background-mask.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
exports.BackgroundMask = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var BackgroundMask = /** @class */ (function (_super) {
    __extends(BackgroundMask, _super);
    function BackgroundMask(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        var blurClasses = (_b = (_a = _this.props.blurClass) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        blurClasses.push('kumulos-background-mask-blur');
        _this.state = {
            blurClasses: blurClasses
        };
        return _this;
    }
    BackgroundMask.prototype.updateBlurState = function () {
        var blurClasses = this.state.blurClasses;
        blurClasses.forEach(function (blurClass) {
            if (!document.body.classList.contains(blurClass)) {
                document.body.classList.add(blurClass);
            }
        });
    };
    BackgroundMask.prototype.componentDidMount = function () {
        this.updateBlurState();
    };
    BackgroundMask.prototype.componentDidUpdate = function () {
        this.updateBlurState();
    };
    BackgroundMask.prototype.componentWillUnmount = function () {
        this.state.blurClasses.forEach(function (blurClass) {
            return document.body.classList.remove(blurClass);
        });
    };
    BackgroundMask.prototype.render = function () {
        var _a = this.props, classNames = _a["class"], style = _a.style;
        var classes = ['kumulos-background-mask'];
        if (!!classNames) {
            classes.push(classNames);
        }
        return ((0, preact_1.h)("div", { style: style, "class": classes.join(' '), onClick: this.props.onClick }, this.props.children));
    };
    return BackgroundMask;
}(preact_1.Component));
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ "./src/prompts/overlay/push-perms-silent.tsx":
/*!***************************************************!*\
  !*** ./src/prompts/overlay/push-perms-silent.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
exports.OverlaySilent = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var utils_1 = __webpack_require__(/*! ../../core/utils */ "./src/core/utils.ts");
var background_mask_1 = __webpack_require__(/*! ./background-mask */ "./src/prompts/overlay/background-mask.tsx");
var svg_pointer_1 = __webpack_require__(/*! ../../components/svg-pointer */ "./src/components/svg-pointer.tsx");
var localStyles = {
    mask: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
var POINTER_START_OFFSET = {
    x: 0,
    y: 50
};
var POINTER_END_OFFSET = {
    x: -175,
    y: 75
};
var CONTROL_POINT_OFFSET = {
    x: 0,
    y: 500
};
var OverlaySilent = /** @class */ (function (_super) {
    __extends(OverlaySilent, _super);
    function OverlaySilent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onBackgroundMaskClick = function () {
            var _a = _this.props, prompt = _a.prompt, onDismiss = _a.onDismiss;
            if (!prompt || !onDismiss) {
                return;
            }
            onDismiss(prompt);
        };
        return _this;
    }
    OverlaySilent.prototype.componentWillMount = function () {
        var width = window.innerWidth, height = window.innerHeight;
        this.setState({ windowDimensions: { width: width, height: height } });
    };
    OverlaySilent.prototype.render = function () {
        var _a = this.props, promptState = _a.promptState, prompt = _a.prompt, subscriptionState = _a.subscriptionState;
        if (!prompt ||
            promptState !== 'requesting-silent' ||
            !prompt.silentOverlay ||
            subscriptionState !== 'unsubscribed') {
            return null;
        }
        var overlay = prompt.silentOverlay;
        var bodyLabel = overlay.labels.body;
        var color = overlay.colors.text;
        var maskStyle = __assign(__assign({}, localStyles.mask), { color: color });
        return ((0, preact_1.h)(background_mask_1.BackgroundMask, { blurClass: "kumulos-overlay-blur", "class": "kumulos-overlay kumulos-overlay-".concat((0, utils_1.getBrowserName)()), style: maskStyle, onClick: this.onBackgroundMaskClick },
            this.renderPointer(color),
            (0, preact_1.h)("p", { "class": "kumulos-silent-overlay-content-text" }, bodyLabel)));
    };
    OverlaySilent.prototype.renderPointer = function (color) {
        var windowDimensions = this.state.windowDimensions;
        var pointerStart = {
            x: windowDimensions.width / 2 + POINTER_START_OFFSET.x,
            y: windowDimensions.height / 2 + POINTER_START_OFFSET.y
        };
        var pointerEnd = {
            x: windowDimensions.width + POINTER_END_OFFSET.x,
            y: POINTER_END_OFFSET.y
        };
        var controlPoint = {
            x: pointerEnd.x + CONTROL_POINT_OFFSET.x,
            y: pointerStart.y + CONTROL_POINT_OFFSET.y
        };
        return ((0, preact_1.h)("div", { "class": "kumulos-silent-overlay-indicator" },
            (0, preact_1.h)(svg_pointer_1.SvgPointer, { area: windowDimensions, quadCurvePoints: {
                    p1: pointerStart,
                    p2: controlPoint,
                    p3: pointerEnd
                }, color: color })));
    };
    return OverlaySilent;
}(preact_1.Component));
exports.OverlaySilent = OverlaySilent;


/***/ }),

/***/ "./src/prompts/overlay/push-perms.tsx":
/*!********************************************!*\
  !*** ./src/prompts/overlay/push-perms.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
exports.Overlay = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var utils_1 = __webpack_require__(/*! ../../core/utils */ "./src/core/utils.ts");
var background_mask_1 = __webpack_require__(/*! ./background-mask */ "./src/prompts/overlay/background-mask.tsx");
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Overlay.prototype.render = function () {
        var _a;
        var _b = this.props, promptState = _b.promptState, prompt = _b.prompt, subscriptionState = _b.subscriptionState;
        if (!prompt ||
            promptState !== 'requesting' ||
            !prompt.overlay ||
            subscriptionState !== 'unsubscribed') {
            return null;
        }
        var overlay = prompt.overlay;
        var style = {
            background: overlay.colors.shade,
            color: overlay.colors.text
        };
        return ((0, preact_1.h)(background_mask_1.BackgroundMask, { style: style, 
            // maintains backwards compat with existing blur class that
            // was being applied directly by this component previously
            blurClass: "kumulos-overlay-blur", "class": "kumulos-overlay kumulos-overlay-".concat((0, utils_1.getBrowserName)()) },
            (0, preact_1.h)("div", { "class": "kumulos-overlay-strip", style: { background: overlay.colors.strip } },
                (0, preact_1.h)("div", { "class": "kumulos-overlay-content-container" },
                    (0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "65", height: "35", viewBox: "0 0 64 33" },
                        (0, preact_1.h)("path", { fill: "none", stroke: overlay.colors.text, "stroke-width": "2.5px", "stroke-linecap": "round", d: "M 12.57,11.12\n           C 12.57,11.12 6.84,20.82 4.13,21.01\n             1.42,21.21 20.71,28.67 26.62,28.67M 4.23,21.01\n           C 4.23,21.01 53.96,14.91 60.65,3.47" })),
                    overlay.iconUrl && (0, preact_1.h)("img", { src: overlay.iconUrl }),
                    (0, preact_1.h)("div", { "class": "kumulos-overlay-content" },
                        (0, preact_1.h)("h3", null, overlay.labels.heading),
                        (0, preact_1.h)("p", null, overlay.labels.body), (_a = overlay.links) === null || _a === void 0 ? void 0 :
                        _a.map(function (l) { return ((0, preact_1.h)("a", { href: l.url, target: "_blank" }, l.label)); }))))));
    };
    return Overlay;
}(preact_1.Component));
exports.Overlay = Overlay;


/***/ }),

/***/ "./src/prompts/prompt-reminder.ts":
/*!****************************************!*\
  !*** ./src/prompts/prompt-reminder.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var _a;
exports.__esModule = true;
exports.hasPromptReminderElapsed = exports.isPromptSuppressed = exports.maybePersistReminder = void 0;
var storage_1 = __webpack_require__(/*! ../core/storage */ "./src/core/storage/index.ts");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var REMINDER_TIME_UNIT_TO_MILLIS = (_a = {},
    _a[core_1.ReminderTimeUnit.HOURS] = 1000 * 60 * 60,
    _a[core_1.ReminderTimeUnit.DAYS] = 1000 * 60 * 60 * 24,
    _a);
function maybePersistReminder(prompt) {
    var uiActions = prompt.uiActions;
    if (!uiActions) {
        return;
    }
    var type = uiActions.decline.type;
    switch (type) {
        case core_1.UiActionType.REMIND:
            return (0, storage_1.persistPromptReminder)(prompt.uuid, {
                declinedOn: Date.now()
            });
        case core_1.UiActionType.DECLINE:
            return (0, storage_1.persistPromptReminder)(prompt.uuid, 'suppressed');
        default:
            return console.warn("Unsupported decline action type ".concat(type, " supported for prompt ").concat(prompt.uuid, ", fall back to always show this prompt when declined"));
    }
}
exports.maybePersistReminder = maybePersistReminder;
function isPromptSuppressed(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var reminder, uiActions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, storage_1.getPromptReminder)(prompt.uuid)];
                case 1:
                    reminder = _a.sent();
                    if (!reminder) {
                        return [2 /*return*/, false];
                    }
                    if ('suppressed' === reminder) {
                        return [2 /*return*/, true];
                    }
                    if (!('uiActions' in prompt)) {
                        return [2 /*return*/, false];
                    }
                    uiActions = prompt.uiActions;
                    if (uiActions.decline.type !== core_1.UiActionType.REMIND) {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/, !hasPromptReminderElapsed(reminder.declinedOn, uiActions.decline.delay)];
            }
        });
    });
}
exports.isPromptSuppressed = isPromptSuppressed;
function hasPromptReminderElapsed(declinedOnMillis, delayConfig) {
    return (Date.now() - declinedOnMillis >
        REMINDER_TIME_UNIT_TO_MILLIS[delayConfig.timeUnit] *
            delayConfig.duration);
}
exports.hasPromptReminderElapsed = hasPromptReminderElapsed;


/***/ }),

/***/ "./src/prompts/triggers.ts":
/*!*********************************!*\
  !*** ./src/prompts/triggers.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.PromptTriggerEventFilter = exports.triggerMatched = void 0;
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var prompt_reminder_1 = __webpack_require__(/*! ./prompt-reminder */ "./src/prompts/prompt-reminder.ts");
function propIn(filterValue, propValue) {
    if (!Array.isArray(filterValue)) {
        return false;
    }
    if (typeof propValue === 'string') {
        var tests = filterValue.map(function (v) {
            var pattern = "^".concat((0, utils_1.escapeRegExp)(v).replace(/\\\*/g, '.*'), "$");
            return new RegExp(pattern, 'g');
        });
        var filterMatched = tests.reduce(function (matched, matcher) { return matched || matcher.test(String(propValue)); }, false);
        return filterMatched;
    }
    else if (typeof propValue === 'number') {
        return filterValue.indexOf(propValue) > -1;
    }
    return false;
}
function propEq(filterValue, propValue) {
    return filterValue == propValue;
}
function propGt(filterValue, propValue) {
    return propValue > filterValue;
}
function propGte(filterValue, propValue) {
    return propValue >= filterValue;
}
function propLt(filterValue, propValue) {
    return propValue < filterValue;
}
function propLte(filterValue, propValue) {
    return propValue <= filterValue;
}
function triggerMatched(prompt, event) {
    var _a;
    var trigger = prompt.trigger;
    if (trigger.event !== event.type) {
        return false;
    }
    if (!((_a = trigger.filters) === null || _a === void 0 ? void 0 : _a.length)) {
        return true;
    }
    if (!event.data) {
        return false;
    }
    var allPropFiltersMatch = true;
    for (var i = 0; i < trigger.filters.length; ++i) {
        var _b = trigger.filters[i], prop = _b[0], op = _b[1], filterTestValue = _b[2];
        var propValue = event.data[prop];
        var filterMatched = false;
        switch (op) {
            case 'in':
            case 'IN':
                filterMatched = propIn(filterTestValue, propValue);
                break;
            case '=':
                filterMatched = propEq(filterTestValue, propValue);
                break;
            case '>':
                filterMatched = propGt(filterTestValue, propValue);
                break;
            case '>=':
                filterMatched = propGte(filterTestValue, propValue);
                break;
            case '<':
                filterMatched = propLt(filterTestValue, propValue);
                break;
            case '<=':
                filterMatched = propLte(filterTestValue, propValue);
                break;
            default:
                console.warn("Unknown filter operator: ".concat(op));
        }
        allPropFiltersMatch = allPropFiltersMatch && filterMatched;
    }
    return allPropFiltersMatch;
}
exports.triggerMatched = triggerMatched;
var PromptTriggerEventFilter = /** @class */ (function () {
    function PromptTriggerEventFilter(ctx, eventReceivedCallback) {
        var _this = this;
        this.eventQueue = [];
        this.handleSdkEvent = function (e) {
            var _a;
            var _b;
            var events = e.data;
            (_a = _this.eventQueue).push.apply(_a, events);
            (_b = _this.eventReceivedCallback) === null || _b === void 0 ? void 0 : _b.call(_this, e);
        };
        this.eventReceivedCallback = eventReceivedCallback;
        ctx.subscribe('eventTracked', this.handleSdkEvent);
    }
    PromptTriggerEventFilter.prototype.filterPrompts = function (prompts, filter) {
        if (filter === void 0) { filter = function (_) { return true; }; }
        return __awaiter(this, void 0, void 0, function () {
            var matchedPrompts, _a, _b, _i, id, prompt_1, i, event_1, promptSuppressed;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.info('Evaluating prompt triggers');
                        matchedPrompts = [];
                        _a = [];
                        for (_b in prompts)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        id = _a[_i];
                        prompt_1 = prompts[id];
                        i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(i < this.eventQueue.length)) return [3 /*break*/, 5];
                        event_1 = this.eventQueue[i];
                        return [4 /*yield*/, (0, prompt_reminder_1.isPromptSuppressed)(prompt_1)];
                    case 3:
                        promptSuppressed = _c.sent();
                        if (!promptSuppressed &&
                            triggerMatched(prompt_1, event_1) &&
                            filter(prompt_1)) {
                            matchedPrompts.push(prompt_1);
                        }
                        _c.label = 4;
                    case 4:
                        ++i;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.eventQueue = [];
                        // Cast necessary to narrow the type from the constraint.
                        // Seems the TS compiler isn't quite smart enough when handling
                        // the 'T extends PromptConfig' constraint.
                        return [2 /*return*/, matchedPrompts];
                }
            });
        });
    };
    return PromptTriggerEventFilter;
}());
exports.PromptTriggerEventFilter = PromptTriggerEventFilter;


/***/ }),

/***/ "./src/prompts/ui-context.ts":
/*!***********************************!*\
  !*** ./src/prompts/ui-context.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.UIContext = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
exports.UIContext = (0, preact_1.createContext)(undefined);


/***/ }),

/***/ "./src/prompts/ui.tsx":
/*!****************************!*\
  !*** ./src/prompts/ui.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.Tooltip = exports.inversePosition = exports.DEFAULT_SUBSCRIBE_LABEL = void 0;
var preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
var compat_1 = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
var bell_1 = __webpack_require__(/*! ./bell */ "./src/prompts/bell/index.tsx");
var dialog_1 = __webpack_require__(/*! ./dialog */ "./src/prompts/dialog/index.tsx");
var channels_dialog_1 = __webpack_require__(/*! ./dialog/channels-dialog */ "./src/prompts/dialog/channels-dialog.tsx");
var background_mask_1 = __webpack_require__(/*! ./overlay/background-mask */ "./src/prompts/overlay/background-mask.tsx");
var push_perms_1 = __webpack_require__(/*! ./overlay/push-perms */ "./src/prompts/overlay/push-perms.tsx");
var push_perms_silent_1 = __webpack_require__(/*! ./overlay/push-perms-silent */ "./src/prompts/overlay/push-perms-silent.tsx");
exports.DEFAULT_SUBSCRIBE_LABEL = 'Subscribe for notifications';
function inversePosition(pos) {
    return pos.indexOf('left') > -1 ? 'right' : 'left';
}
exports.inversePosition = inversePosition;
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        return ((0, preact_1.h)("div", { "class": "kumulos-tooltip kumulos-tooltip-".concat(this.props.position) }, this.props.children));
    };
    return Tooltip;
}(preact_1.Component));
exports.Tooltip = Tooltip;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.render = function () {
        return (0, preact_1.h)("div", { "class": "kumulos-toast" }, this.props.message);
    };
    return Toast;
}(preact_1.Component));
var Ui = /** @class */ (function (_super) {
    __extends(Ui, _super);
    function Ui(props) {
        var _this = _super.call(this, props) || this;
        _this.dequeueToast = function () {
            _this.setState({
                toastQueue: _this.state.toastQueue.slice(1)
            });
        };
        _this.state = {
            toastQueue: []
        };
        return _this;
    }
    Ui.prototype.showToast = function (message) {
        if (!message || !message.length) {
            return;
        }
        this.setState({
            toastQueue: __spreadArray(__spreadArray([], this.state.toastQueue, true), [message], false)
        });
        setTimeout(this.dequeueToast, 3200);
    };
    Ui.prototype.render = function () {
        return (0, compat_1.createPortal)((0, preact_1.h)(preact_1.Fragment, null,
            this.maybeRenderPromptBackgroundMask(),
            this.props.prompts.map(this.renderPrompt, this),
            this.renderPostAction(),
            !(0, utils_1.isMobile)() && ((0, preact_1.h)(push_perms_1.Overlay, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt, subscriptionState: this.props.subscriptionState })),
            !(0, utils_1.isMobile)() && ((0, preact_1.h)(push_perms_silent_1.OverlaySilent, { promptState: this.props.promptManagerState, prompt: this.props.currentlyRequestingPrompt, subscriptionState: this.props.subscriptionState, onDismiss: this.props.onDismissOverlay })),
            this.state.toastQueue.length > 0 && ((0, preact_1.h)(Toast, { message: this.state.toastQueue[0] }))), document.body);
    };
    Ui.prototype.maybeRenderPromptBackgroundMask = function () {
        if ('requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState) {
            return null;
        }
        var prompts = this.props.prompts;
        var firstPromptWithMask = prompts.filter(function (p) {
            return (p.type === core_1.PromptTypeName.ALERT ||
                p.type === core_1.PromptTypeName.BANNER) &&
                !!p.backgroundMask;
        })[0];
        if (!firstPromptWithMask) {
            return null;
        }
        var style = {
            backgroundColor: firstPromptWithMask.backgroundMask.colors.bg
        };
        return (0, preact_1.h)(background_mask_1.BackgroundMask, { style: style });
    };
    Ui.prototype.renderPrompt = function (prompt) {
        var _a;
        if ('requesting' === this.props.promptManagerState ||
            'requesting-silent' === this.props.promptManagerState) {
            return null;
        }
        if ('postaction' === this.props.promptManagerState) {
            return null;
        }
        switch (prompt.type) {
            case 'bell':
                return ((0, preact_1.h)(bell_1.Bell, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined }));
            case 'alert':
            case 'banner':
                var action = void 0;
                if (prompt.type === core_1.PromptTypeName.ALERT) {
                    action = (_a = prompt.actions) === null || _a === void 0 ? void 0 : _a.find(function (action) {
                        return action.type === 'userChannelSelectInline';
                    });
                }
                return ((0, preact_1.h)(dialog_1.Dialog, { config: prompt, subscriptionState: this.props.subscriptionState, promptManagerState: this.props.promptManagerState, onPromptAccepted: this.props.onPromptAccepted, onPromptDeclined: this.props.onPromptDeclined, action: action }));
            default:
                return null;
        }
    };
    Ui.prototype.renderPostAction = function () {
        var _this = this;
        var _a = this.props, promptManagerState = _a.promptManagerState, currentPostAction = _a.currentPostAction, currentlyRequestingPrompt = _a.currentlyRequestingPrompt;
        if ('postaction' !== promptManagerState) {
            return null;
        }
        if (!currentlyRequestingPrompt) {
            return null;
        }
        if ('userChannelSelectDialog' !== (currentPostAction === null || currentPostAction === void 0 ? void 0 : currentPostAction.type)) {
            return null;
        }
        var backgroundMask = null;
        if ((currentlyRequestingPrompt.type === core_1.PromptTypeName.ALERT ||
            currentlyRequestingPrompt.type === core_1.PromptTypeName.BANNER) &&
            undefined !== currentlyRequestingPrompt.backgroundMask) {
            var maskConfig = currentlyRequestingPrompt.backgroundMask;
            backgroundMask = ((0, preact_1.h)(background_mask_1.BackgroundMask, { style: { backgroundColor: maskConfig.colors.bg } }));
        }
        return ((0, preact_1.h)(preact_1.Fragment, null,
            backgroundMask,
            (0, preact_1.h)(channels_dialog_1.ChannelsDialog, { action: currentPostAction, onConfirm: function (channelSelections) {
                    _this.props.onPostActionConfirm(currentlyRequestingPrompt, channelSelections);
                } })));
    };
    return Ui;
}(preact_1.Component));
exports["default"] = Ui;


/***/ }),

/***/ "./src/prompts/utils.ts":
/*!******************************!*\
  !*** ./src/prompts/utils.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.deferPromptActivation = void 0;
function deferPromptActivation(prompt, activateFn) {
    if (prompt.trigger.afterSeconds === undefined ||
        prompt.trigger.afterSeconds < 0) {
        return false;
    }
    console.info('Deferring prompt activation by ' + prompt.trigger.afterSeconds);
    setTimeout(activateFn, prompt.trigger.afterSeconds * 1000, prompt);
    return true;
}
exports.deferPromptActivation = deferPromptActivation;


/***/ }),

/***/ "./src/web/index.ts":
/*!**************************!*\
  !*** ./src/web/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.__esModule = true;
var index_1 = __importDefault(__webpack_require__(/*! ../index */ "./src/index.ts"));
var utils_1 = __webpack_require__(/*! ../core/utils */ "./src/core/utils.ts");
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var q, init, instance, executor, i, cmd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!((_a = window.Kumulos) === null || _a === void 0 ? void 0 : _a.q)) {
                        return [2 /*return*/];
                    }
                    q = window.Kumulos.q;
                    init = q.find(function (item) { return item[0] === 'init'; });
                    if ((init === null || init === void 0 ? void 0 : init.length) !== 2) {
                        return [2 /*return*/];
                    }
                    if (!(0, utils_1.isBrowserSupported)(init[1].features)) {
                        console.warn('Optimobile: this browser does not support all required features, aborting initialization...');
                        return [2 /*return*/];
                    }
                    if (location.protocol !== 'https:') {
                        console.warn('Optimobile: this page is not served over HTTPS, some features may be unavailable...');
                    }
                    return [4 /*yield*/, index_1["default"].buildInstance(init[1])];
                case 1:
                    instance = _b.sent();
                    executor = function (cmd) {
                        var _a;
                        var args = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            args[_i - 1] = arguments[_i];
                        }
                        try {
                            if (typeof cmd === 'function') {
                                cmd(instance);
                            }
                            else {
                                (_a = instance)[cmd].apply(_a, args);
                            }
                        }
                        catch (e) {
                            console.error(e);
                        }
                    };
                    for (i = 0; i < q.length; ++i) {
                        cmd = q[i][0];
                        if (cmd === 'init') {
                            continue;
                        }
                        executor.apply(void 0, q[i]);
                    }
                    window.Kumulos = executor;
                    return [2 /*return*/];
            }
        });
    });
}
main();


/***/ }),

/***/ "./src/worker/messaging.ts":
/*!*********************************!*\
  !*** ./src/worker/messaging.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/web/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksZUFBZSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxZQUFZLGVBQWUsYUFBYSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsTUFBTSxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxPQUFPLFNBQVMsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxTQUFT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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkLWNvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3MiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubW9kdWxlLmpzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvbXBvbmVudHMvYXBwLXJhdGluZy9hcHAtcmF0aW5nLnNjc3M/ZmJkMSIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb21wb25lbnRzL2FwcC1yYXRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb21wb25lbnRzL3N2Zy1wb2ludGVyLnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9jaGFubmVscy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2NvcmUvcHVzaC9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3NhZmFyaS50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9wdXNoL3czYy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9yb290LWZyYW1lLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb3JlL3N0b3JhZ2UvaWRiLWtleXZhbC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvY29yZS9zdG9yYWdlL2luZGV4LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9jb3JlL3V0aWxzLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9mcC9mcC1jYXB0dXJlLnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvZnAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL2ZwL3R5cGVzLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy9iZWxsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy9kZGwvZGRsLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3Byb21wdHMvZGRsL2RlZXBsaW5rLWJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3Byb21wdHMvZGRsL21hbmFnZXIudHN4Iiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9wcm9tcHRzL2RkbC91aS50c3giLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3Byb21wdHMvZGlhbG9nL2NoYW5uZWxzLWRpYWxvZy50c3giLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3Byb21wdHMvZGlhbG9nL2NoYW5uZWxzLWxpc3QudHN4Iiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9wcm9tcHRzL2RpYWxvZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViLy4vc3JjL3Byb21wdHMvaW5kZXgudHN4Iiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9wcm9tcHRzL292ZXJsYXkvYmFja2dyb3VuZC1tYXNrLnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy9vdmVybGF5L3B1c2gtcGVybXMtc2lsZW50LnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy9vdmVybGF5L3B1c2gtcGVybXMudHN4Iiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9wcm9tcHRzL3Byb21wdC1yZW1pbmRlci50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy90cmlnZ2Vycy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy91aS1jb250ZXh0LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy9wcm9tcHRzL3VpLnRzeCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvcHJvbXB0cy91dGlscy50cyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvLi9zcmMvd2ViL2luZGV4LnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi8uL3NyYy93b3JrZXIvbWVzc2FnaW5nLnRzIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Aa3VtdWxvcy93ZWIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BrdW11bG9zL3dlYi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGt1bXVsb3Mvd2ViL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgY2xpcGJvYXJkLWNvcHkuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGdsb2JhbCBET01FeGNlcHRpb24gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGlwYm9hcmRDb3B5XG5cbmZ1bmN0aW9uIG1ha2VFcnJvciAoKSB7XG4gIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCcsICdOb3RBbGxvd2VkRXJyb3InKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5Q2xpcGJvYXJkQXBpICh0ZXh0KSB7XG4gIC8vIFVzZSB0aGUgQXN5bmMgQ2xpcGJvYXJkIEFQSSB3aGVuIGF2YWlsYWJsZS4gUmVxdWlyZXMgYSBzZWN1cmUgYnJvd3NpbmdcbiAgLy8gY29udGV4dCAoaS5lLiBIVFRQUylcbiAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgdGhyb3cgbWFrZUVycm9yKClcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUV4ZWNDb21tYW5kICh0ZXh0KSB7XG4gIC8vIFB1dCB0aGUgdGV4dCB0byBjb3B5IGludG8gYSA8c3Bhbj5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIC8vIFByZXNlcnZlIGNvbnNlY3V0aXZlIHNwYWNlcyBhbmQgbmV3bGluZXNcbiAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSdcbiAgc3Bhbi5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ2F1dG8nXG4gIHNwYW4uc3R5bGUudXNlclNlbGVjdCA9ICdhbGwnXG5cbiAgLy8gQWRkIHRoZSA8c3Bhbj4gdG8gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxuXG4gIC8vIE1ha2UgYSBzZWxlY3Rpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcmFuZ2Ugb2YgdGV4dCBzZWxlY3RlZCBieSB0aGUgdXNlclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3QgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShzcGFuKVxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG5cbiAgLy8gQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuICB0cnkge1xuICAgIHN1Y2Nlc3MgPSB3aW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIENsZWFudXBcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuKVxuICB9XG5cbiAgaWYgKCFzdWNjZXNzKSB0aHJvdyBtYWtlRXJyb3IoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbGlwYm9hcmRDb3B5ICh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUNsaXBib2FyZEFwaSh0ZXh0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAuLi5PdGhlcndpc2UsIHVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgpIGZhbGxiYWNrXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvcHlFeGVjQ29tbWFuZCh0ZXh0KVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIHRocm93IChlcnIyIHx8IGVyciB8fCBtYWtlRXJyb3IoKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmt1bXVsb3MtcmF0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ua3VtdWxvcy1yYXRpbmcgLmt1bXVsb3MtcmF0aW5nLXN0YXIgLmt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmt1bXVsb3MtcmF0aW5nIC5rdW11bG9zLXJhdGluZy1jb3VudCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hcHAtcmF0aW5nL2FwcC1yYXRpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rdW11bG9zLXJhdGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuXFxuICAgIC5rdW11bG9zLXJhdGluZy1zdGFyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIC5rdW11bG9zLXJhdGluZy1oYWxmc3RhciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1yYXRpbmctY291bnQge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1zaGFrZSB7XFxuICAxMCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICB9XFxuICAyMCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgfVxcbiAgNDAlLCA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtbGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1yZXZlYWwtcmlnaHQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCwgLTUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXRvYXN0LWluLW91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLWRvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3Mtc2xpZGUtdXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50IC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1wYXJlbnQ6aG92ZXIgLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGZvbnQ6IDE0cHggaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDhweDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcmlnaHQge1xcbiAgbGVmdDogY2FsYygxMDAlICsgMTJweCk7XFxuICBhbmltYXRpb246IGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzIyMjtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQge1xcbiAgcmlnaHQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1sZWZ0IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyMjI7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy10b2FzdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgei1pbmRleDogMTEwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNlZWU7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy10b2FzdC1pbi1vdXQgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG5cXG4ua3VtdWxvcy1wcm9tcHQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5rdW11bG9zLXByb21wdCAqLFxcbi5rdW11bG9zLXByb21wdCAqOmJlZm9yZSxcXG4ua3VtdWxvcy1wcm9tcHQgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICM1NTU7XFxufVxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY2FuY2VsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm06aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICMyMjI7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogLTdweDtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkICMwMDA7XFxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1mbG93OiB3cmFwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3Age1xcbiAgdG9wOiAwO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLWRvd24gMC40cyBlYXNlO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICB0b3A6IHVuc2V0O1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXNsaWRlLXVwIDAuNHMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICBmbGV4LWZsb3c6IGluaXRpYWw7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1pY29uIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgaGVpZ2h0OiA2NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDAgM3B4IDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbXBhY3QgLmt1bXVsb3MtYmFubmVyLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuQHN1cHBvcnRzIChwYWRkaW5nOiBtYXgoMHB4KSkge1xcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXJpZ2h0IHtcXG4gICAgcGFkZGluZy1yaWdodDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtdG9wIHtcXG4gICAgcGFkZGluZy10b3A6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XFxuICB9XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgbGVmdDogMTVweDtcXG59XFxuLmt1bXVsb3MtYmVsbC1jb250YWluZXItYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjNGM4OGUwO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5rdW11bG9zLWJlbGw6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJlbGwgc3ZnIHtcXG4gIGZpbGw6ICNmZmY7XFxuICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1zaGFrZSAwLjRzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogODUlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogNy41JSAwIDAgNy41JTtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbC1pbm5lciB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tZmFkZS1pbiAwLjJzIGVhc2UtaW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgb3JkZXI6IDI7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRlbnQsXFxuLmt1bXVsb3MtYWxlcnQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyIGgxLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgZmxleDogMTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvcmRlcjogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbmJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciA+ICo6bm90KC5rdW11bG9zLXByb21wdCk6bm90KC5rdW11bG9zLW92ZXJsYXkpOm5vdCgua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2spIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAyMDAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5ICosXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmJlZm9yZSxcXG4ua3VtdWxvcy1vdmVybGF5ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IGNhbGMoNTAwcHggKyAxMiUpO1xcbiAgbWF4LXdpZHRoOiA2NjBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiAzOCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBtYXJnaW46IDU1cHggMS43ZW0gMCAwO1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMsXFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBwLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBoMyB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNjVlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQgcCB7XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktY2hyb21lIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiA0NDBweDtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA2NzVweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIC5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgc3ZnIHtcXG4gIG9yZGVyOiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgd2lkdGg6IGNhbGMoNTAlICsgMjEycHgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5rdW11bG9zLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2FuaW1zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL190b29sdGlwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fdG9hc3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19wcm9tcHRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9zdHlsZXMvX2NoZWNrYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL3N0eWxlcy9fYmFubmVyLmNvbXBhY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Byb21wdHMvc3R5bGVzL19zYWZlLWFyZWEtaW5zZXQtcGFkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2JlbGwvYmVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9kaWFsb2cvZGlhbG9nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wcm9tcHRzL2JhY2tncm91bmQtbWFzay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcHJvbXB0cy9vdmVybGF5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSTtJQUVJLGtDQUFBO0VDRE47RURJRTtJQUVJLGlDQUFBO0VDSE47RURNRTtJQUdJLGtDQUFBO0VDTk47RURTRTtJQUVJLGlDQUFBO0VDUk47QUFDRjtBRFdBO0VBQ0k7SUFDSSxVQUFBO0VDVE47RURZRTtJQUNJLFVBQUE7RUNWTjtBQUNGO0FEYUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxnQ0FBQTtFQ1hOO0VEY0U7SUFDSSxVQUFBO0lBQ0EsK0JBQUE7RUNaTjtBQUNGO0FEZUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ2JOO0VEZ0JFO0lBQ0ksVUFBQTtJQUNBLCtCQUFBO0VDZE47QUFDRjtBRGlCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFDQUFBO0VDZk47RURrQkU7SUFDSSxVQUFBO0lBQ0Esa0NBQUE7RUNoQk47QUFDRjtBRG1CQTtFQUNJO0lBQ0ksbUNBQUE7RUNqQk47RURvQkU7SUFDSSwrQkFBQTtF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MmZSO0FheGZJO0VBQ0ksZ0JBQUE7QWIwZlI7QWF4ZlE7RUFDSSxRQUFBO0VBQ0EseUJBQUE7QWIwZlo7O0FhcGZJO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FidWZSOztBYW5mQTtFQUNJO0lBQ0ksYUFBQTtFYnNmTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEJhc2VkIG9uIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL3NoYWtlLWNzcy1rZXlmcmFtZS1hbmltYXRpb24vXFxuQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tc2hha2Uge1xcbiAgICAxMCUsXFxuICAgIDkwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDIwJSxcXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAzMCUsXFxuICAgIDUwJSxcXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgNDAlLFxcbiAgICA2MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1hbmltLWZhZGUtaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy10b2FzdC1pbi1vdXQge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAxMDAlLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS1kb3duIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS11cCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB9XFxufVxcblwiLFwiQGtleWZyYW1lcyBrdW11bG9zLWFuaW0tc2hha2Uge1xcbiAgMTAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgfVxcbiAgMjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gIH1cXG4gIDQwJSwgNjAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtYW5pbS1mYWRlLWluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLWxlZnQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC01MCUpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGt1bXVsb3MtcmV2ZWFsLXJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy10b2FzdC1pbi1vdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDEwMCUsIDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMga3VtdWxvcy1zbGlkZS1kb3duIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBrdW11bG9zLXNsaWRlLXVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy10b29sdGlwLXBhcmVudCAua3VtdWxvcy10b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5rdW11bG9zLXRvb2x0aXAtcGFyZW50OmhvdmVyIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLXRvb2x0aXAge1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxufVxcbi5rdW11bG9zLXRvb2x0aXA6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ua3VtdWxvcy10b29sdGlwLXJpZ2h0IHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSArIDEycHgpO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLXJldmVhbC1yaWdodCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1yaWdodDphZnRlciB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyMjI7XFxuICByaWdodDogMTAwJTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0IHtcXG4gIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmt1bXVsb3MtdG9vbHRpcC1sZWZ0OmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjIyO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtdG9hc3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIHotaW5kZXg6IDExMDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBhbmltYXRpb246IGt1bXVsb3MtdG9hc3QtaW4tb3V0IDAuMjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuXFxuLmt1bXVsb3MtcHJvbXB0IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4ua3VtdWxvcy1wcm9tcHQgKixcXG4ua3VtdWxvcy1wcm9tcHQgKjpiZWZvcmUsXFxuLmt1bXVsb3MtcHJvbXB0ICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4ua3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNvbmZpcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJhY2tncm91bmQ6ICM0Yzg4ZTA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jb25maXJtOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItY29sb3I6ICNhYWE7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDEwcHg7XFxuICB0b3A6IC03cHg7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb250YWluZXIua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tdG9wIHtcXG4gIHRvcDogMDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS1kb3duIDAuNHMgZWFzZTtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiB1bnNldDtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBpbml0aWFsO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItaWNvbiB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ua3VtdWxvcy1iYW5uZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG59XFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAwIDNweCAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gIC5rdW11bG9zLWJhbm5lci1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XFxuICAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ua3VtdWxvcy1iYW5uZXItY29tcGFjdCAua3VtdWxvcy1iYW5uZXItYWN0aW9ucyB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5rdW11bG9zLWJhbm5lci1jb21wYWN0IC5rdW11bG9zLWJhbm5lci1jbG9zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbkBzdXBwb3J0cyAocGFkZGluZzogbWF4KDBweCkpIHtcXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCB7XFxuICAgIHBhZGRpbmctbGVmdDogbWF4KDEwcHgsIGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpO1xcbiAgfVxcblxcbiAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XFxuICB9XFxuXFxuICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgIHBhZGRpbmctdG9wOiBtYXgoMTBweCwgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcXG4gIH1cXG5cXG4gIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtYm90dG9tIHtcXG4gICAgcGFkZGluZy1ib3R0b206IG1heCgxMHB4LCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xcbiAgfVxcbn1cXG4ua3VtdWxvcy1iZWxsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1sZWZ0IHtcXG4gIGJvdHRvbTogMTVweDtcXG4gIGxlZnQ6IDE1cHg7XFxufVxcbi5rdW11bG9zLWJlbGwtY29udGFpbmVyLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLmt1bXVsb3MtYmVsbCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzRjODhlMDtcXG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ua3VtdWxvcy1iZWxsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmt1bXVsb3MtYmVsbDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ua3VtdWxvcy1iZWxsIHN2ZyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuLmt1bXVsb3MtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDg1JTtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDcuNSUgMCAwIDcuNSU7XFxufVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gIH1cXG4gIC5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lci5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1jZW50ZXIsXFxuLmt1bXVsb3MtYWxlcnQtY29udGFpbmVyLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLWNlbnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgdG9wOiAxMjBweDtcXG4gIH1cXG59XFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaWNvbixcXG4ua3VtdWxvcy1hbGVydC1pY29uIHtcXG4gIG9yZGVyOiAyO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50LFxcbi5rdW11bG9zLWFsZXJ0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlcixcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWhlYWRlciBoMSxcXG4ua3VtdWxvcy1hbGVydC1oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctYm9keSxcXG4ua3VtdWxvcy1hbGVydC1ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zLFxcbi5rdW11bG9zLWFsZXJ0LWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWxpc3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5ib2R5Lmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrLWJsdXIgPiAqOm5vdCgua3VtdWxvcy1wcm9tcHQpOm5vdCgua3VtdWxvcy1vdmVybGF5KTpub3QoLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrKSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWJsdXIgPiAqOm5vdCgua3VtdWxvcy1vdmVybGF5KSB7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgei1pbmRleDogMjAwMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAqLFxcbi5rdW11bG9zLW92ZXJsYXkgKjpiZWZvcmUsXFxuLmt1bXVsb3Mtb3ZlcmxheSAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktc3RyaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiBjYWxjKDUwMHB4ICsgMTIlKTtcXG4gIG1heC13aWR0aDogNjYwcHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMzglO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lciBzdmcge1xcbiAgbWFyZ2luOiA1NXB4IDEuN2VtIDAgMDtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogNTVweDtcXG4gIGhlaWdodDogNTVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGgzLFxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgcCxcXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktY29udGVudC1jb250YWluZXIgaDMge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjY1ZW07XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxufVxcbi5rdW11bG9zLW92ZXJsYXkgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5IC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWluZGljYXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmt1bXVsb3Mtb3ZlcmxheSAua3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1jb250ZW50LXRleHQge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ua3VtdWxvcy1vdmVybGF5LWNocm9tZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICB3aWR0aDogNDQwcHg7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua3VtdWxvcy1vdmVybGF5LWVkZ2UgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNjc1cHg7XFxufVxcbi5rdW11bG9zLW92ZXJsYXktZWRnZSAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHN2ZyB7XFxuICBvcmRlcjogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXktc2FmYXJpIC5rdW11bG9zLW92ZXJsYXktc3RyaXA6YmVmb3JlIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSArIDIxMnB4KTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAua3VtdWxvcy1vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsXCIua3VtdWxvcy10b29sdGlwLXBhcmVudCB7XFxuICAgIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIC5rdW11bG9zLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtdG9vbHRpcCB7XFxuICAgIGJhY2tncm91bmQ6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBmb250OiAxNHB4IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgei1pbmRleDogMTEwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG5cXG4gICAgJjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDhweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XFxuICAgIH1cXG5cXG4gICAgJi1yaWdodCB7XFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtcmlnaHQgMC4ycyAkcXVpbnRFYXNpbmc7XFxuXFxuICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi1sZWZ0IHtcXG4gICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1yZXZlYWwtbGVmdCAwLjJzICRxdWludEVhc2luZztcXG5cXG4gICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdG9vbHRpcC1iYWNrZ3JvdW5kO1xcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIkc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiR0b29sdGlwLWJhY2tncm91bmQ6ICMyMjI7XFxuLy8gaHR0cHM6Ly9lYXNpbmdzLm5ldC9lbiNlYXNlT3V0UXVpbnRcXG4kcXVpbnRFYXNpbmc6IGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG5cXG4kZGVmYXVsdEZvbnQ6IGhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kZGVmYXVsdEhlYWRlckZvbnRTaXplOiAxOHB4O1xcbiRkZWZhdWx0Qm9keVNpemU6IDE0cHg7XFxuJGRlZmF1bHRCdXR0b25TaXplOiAxNHB4O1xcblxcbiRtYXNrWkluZGV4OiA5MDA7XFxuJHByb21wdFpJbmRleDogMTAwMDtcXG5cXG4kZGVmYXVsdEJhbm5lckhlYWRlckZvbnRTaXplTW9iaWxlOiAxMnB4O1xcbiRkZWZhdWx0QmFubmVySGVhZGVyTGluZUhlaWdodE1vYmlsZTogMTRweDtcXG5cXG4kZGVmYXVsdEJhbm5lckJvZHlGb250U2l6ZU1vYmlsZTogMTJweDtcXG4kZGVmYXVsdEJhbm5lckJvZHlMaW5lSGVpZ2h0TW9iaWxlOiAxNHB4O1xcblxcbiRkZWZhdWx0QmFubmVyUGFkZGluZzogMTBweDtcIixcIi5rdW11bG9zLXRvYXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQ6ICR0b29sdGlwLWJhY2tncm91bmQ7XFxuICAgIHotaW5kZXg6IDExMDA7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG4gICAgY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBhbmltYXRpb246IGt1bXVsb3MtdG9hc3QtaW4tb3V0IDAuMjVzICRxdWludEVhc2luZztcXG59XFxuXCIsXCIua3VtdWxvcy1wcm9tcHQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAqLFxcbiAgICAqOmJlZm9yZSxcXG4gICAgKjphZnRlciB7XFxuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIHotaW5kZXg6ICRwcm9tcHRaSW5kZXg7XFxufVxcblwiLFwiLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xcblxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QnV0dG9uU2l6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYWN0aW9uLWJ1dHRvbi1jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogIzU1NTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggJHNoYWRvdy1jb2xvcjtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxMzYsIDIyNCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcbn1cXG5cIixcIi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAua3VtdWxvcy1jaGVja2JveCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5rdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94IHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xcbn1cXG5cXG4ua3VtdWxvcy1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1jb2xvcjogIzIyMjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmt1bXVsb3MtY2hlY2tib3gtY29udGFpbmVyIC5rdW11bG9zLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgbGVmdDogMTBweDtcXG4gICAgdG9wOiAtN3B4O1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgIzAwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cIixcIi5rdW11bG9zLWJhbm5lci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuXFxuICAgIHBhZGRpbmc6ICRkZWZhdWx0QmFubmVyUGFkZGluZztcXG5cXG4gICAgZm9udC1mYW1pbHk6ICRkZWZhdWx0Rm9udDtcXG5cXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICAmLmt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLXRvcCB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBhbmltYXRpb246IGt1bXVsb3Mtc2xpZGUtZG93biAwLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi1ib3R0b20ge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdG9wOiB1bnNldDtcXG4gICAgICAgIGFuaW1hdGlvbjoga3VtdWxvcy1zbGlkZS11cCAwLjRzIGVhc2U7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWZsb3c6IGluaXRpYWw7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWljb24ge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRCYW5uZXJIZWFkZXJGb250U2l6ZU1vYmlsZTtcXG4gICAgbGluZS1oZWlnaHQ6ICRkZWZhdWx0QmFubmVyQm9keUxpbmVIZWlnaHRNb2JpbGU7XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgM3B4IDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0SGVhZGVyRm9udFNpemU7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBmb250LXNpemU6ICRkZWZhdWx0QmFubmVyQm9keUZvbnRTaXplTW9iaWxlO1xcbiAgICBsaW5lLWhlaWdodDogJGRlZmF1bHRCYW5uZXJCb2R5TGluZUhlaWdodE1vYmlsZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdEJvZHlTaXplO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgwcHgpIHtcXG4gICAgLmt1bXVsb3MtYmFubmVyLWFjdGlvbnMge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxufVxcblwiLFwiLmt1bXVsb3MtYmFubmVyLWNvbXBhY3Qge1xcbiAgICAua3VtdWxvcy1iYW5uZXItYm9keSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLWJhbm5lci1hY3Rpb25zIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1iYW5uZXItY2xvc2Uge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxufVxcblwiLFwiQHN1cHBvcnRzKHBhZGRpbmc6IHVucXVvdGUoJ21heCgwcHgpJykpIHtcXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1sZWZ0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpKScpO1xcbiAgICB9XFxuICAgIC5rdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtcmlnaHQge1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSknKTtcXG4gICAgfVxcbiAgICAua3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLXRvcCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogdW5xdW90ZSgnbWF4KCcgKyAkZGVmYXVsdEJhbm5lclBhZGRpbmcgKyAnLCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpJyk7XFxuICAgIH1cXG4gICAgLmt1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1ib3R0b20ge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHVucXVvdGUoJ21heCgnICsgJGRlZmF1bHRCYW5uZXJQYWRkaW5nICsgJywgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKScpO1xcbiAgICB9XFxufVxcblwiLFwiLmt1bXVsb3MtYmVsbC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICAgICYtYm90dG9tLWxlZnQge1xcbiAgICAgICAgYm90dG9tOiAxNXB4O1xcbiAgICAgICAgbGVmdDogMTVweDtcXG4gICAgfVxcblxcbiAgICAmLWJvdHRvbS1yaWdodCB7XFxuICAgICAgICBib3R0b206IDE1cHg7XFxuICAgICAgICByaWdodDogMTVweDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1iZWxsIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgJHF1aW50RWFzaW5nLFxcbiAgICAgICAgYm94LXNoYWRvdyAwLjJzICRxdWludEVhc2luZztcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDEzNiwgMjI0KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAvLyBOb3RlIHRoZSBzY2FsZS93aWR0aC9oZWlnaHQgaW4gYWxsIHN0YXRlcyBoYXZlIGJlZW4gY2hvc2VuIHN1Y2ggdGhhdCB0aGV5IHJlc29sdmUgdG8gd2hvbGUgbnVtYmVycy5cXG4gICAgLy8gVGhpcyBoZWxwcyByZWR1Y2UgYmx1ciBvZiB0aGUgU1ZHIGljb24gZHVlIHRvIHJlc3RlcmlzYXRpb24gaW4gV2Via2l0LlxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMXB4ICRzaGFkb3ctY29sb3I7XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMCAkc2hhZG93LWNvbG9yO1xcbiAgICB9XFxuXFxuICAgIGFuaW1hdGlvbjoga3VtdWxvcy1hbmltLWZhZGUtaW4gMC4ycyBlYXNlLWluO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICBmaWxsOiAjZmZmO1xcbiAgICAgICAgYW5pbWF0aW9uOiBrdW11bG9zLWFuaW0tc2hha2UgMC40cyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSBib3RoO1xcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICB9XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgaGVpZ2h0OiA4NSU7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICA7XFxuICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgbWFyZ2luOiA3LjUlIDAgMCA3LjUlO1xcbiAgICB9XFxufVxcblxcbi5rdW11bG9zLWJlbGwtaW5uZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cIixcIi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWNvbnRhaW5lcixcXG4ua3VtdWxvcy1hbGVydC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBmb250LWZhbWlseTogJGRlZmF1bHRGb250O1xcblxcbiAgICBhbmltYXRpb246IGt1bXVsb3MtYW5pbS1mYWRlLWluIDAuMnMgZWFzZS1pbjtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODBweCkge1xcbiAgICAua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250YWluZXIsXFxuICAgIC5rdW11bG9zLWFsZXJ0LWNvbnRhaW5lciB7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuXFxuICAgICAgICB3aWR0aDogNTAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDFweCAkc2hhZG93LWNvbG9yO1xcblxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAgICAgJi5rdW11bG9zLXByb21wdC1wb3NpdGlvbi10b3AtY2VudGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYua3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tY2VudGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgICAgdG9wOiAxMjBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1pY29uLFxcbi5rdW11bG9zLWFsZXJ0LWljb24ge1xcbiAgICBvcmRlcjogMjtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGVudCxcXG4ua3VtdWxvcy1hbGVydC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctaGVhZGVyLFxcbi5rdW11bG9zLWFsZXJ0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogJGRlZmF1bHRIZWFkZXJGb250U2l6ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG4ua3VtdWxvcy1jaGFubmVsLWRpYWxvZy1ib2R5LFxcbi5rdW11bG9zLWFsZXJ0LWJvZHkge1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5rdW11bG9zLWNoYW5uZWwtZGlhbG9nLWFjdGlvbnMsXFxuLmt1bXVsb3MtYWxlcnQtYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG9yZGVyOiAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmt1bXVsb3MtY2hhbm5lbC1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cIixcImJvZHkua3VtdWxvcy1iYWNrZ3JvdW5kLW1hc2stYmx1ciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5rdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyXFxuICAgID4gKjpub3QoLmt1bXVsb3MtcHJvbXB0KTpub3QoLmt1bXVsb3Mtb3ZlcmxheSk6bm90KC5rdW11bG9zLWJhY2tncm91bmQtbWFzaykge1xcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmt1bXVsb3MtYmFja2dyb3VuZC1tYXNrIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHotaW5kZXg6ICRtYXNrWkluZGV4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIixcIi5rdW11bG9zLW92ZXJsYXktYmx1ciA+ICo6bm90KC5rdW11bG9zLW92ZXJsYXkpIHtcXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5rdW11bG9zLW92ZXJsYXkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgICAqLFxcbiAgICAqOmJlZm9yZSxcXG4gICAgKjphZnRlciB7XFxuICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIHotaW5kZXg6IDIwMDA7XFxuXFxuICAgICYtc3RyaXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICY6YmVmb3JlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MDBweCArIDEyJSk7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gICAgfVxcblxcbiAgICAmLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXgtd2lkdGg6IDM4JTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuXFxuICAgICAgICAqIHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIG1hcmdpbjogNTVweCAxLjdlbSAwIDA7XFxuICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDMsXFxuICAgICAgICBwLFxcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42NWVtO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1jb250ZW50IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmt1bXVsb3Mtc2lsZW50LW92ZXJsYXktaW5kaWNhdG9yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5rdW11bG9zLXNpbGVudC1vdmVybGF5LWNvbnRlbnQtdGV4dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZGVmYXVsdEZvbnQ7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1jaHJvbWUge1xcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogNDQwcHg7XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1lZGdlIHtcXG4gICAgLmt1bXVsb3Mtb3ZlcmxheS1zdHJpcDpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAua3VtdWxvcy1vdmVybGF5LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogNjc1cHg7XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIG9yZGVyOiAxO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmt1bXVsb3Mtb3ZlcmxheS1zYWZhcmkge1xcbiAgICAua3VtdWxvcy1vdmVybGF5LXN0cmlwOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgKyAyMTJweCk7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIC5rdW11bG9zLW92ZXJsYXkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQscixvLGY9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHkobCxmLHQscixudWxsKX1mdW5jdGlvbiB5KG4saSx0LHIsbyl7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om99O3JldHVybiBudWxsPT1vJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbztuLl9fZCYmKHI9KHQ9KGw9bikuX192KS5fX2UsKG89bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKG8sdCxpLGwuX19uLHZvaWQgMCE9PW8ub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tyXTpudWxsLHUsbnVsbD09cj9rKHQpOnIsdC5fX2gpLHoodSx0KSx0Ll9fZSE9ciYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQscixvLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LHIsbyxmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtmb3IociBpbiB1KVwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxyIGluIGx8fEgobixyLG51bGwsdVtyXSxpKTtmb3IociBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxIKG4scixsW3JdLHVbcl0saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciByO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKXI9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwscj9UOkkscik6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9UOkkscik7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LHIsbyxmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwsbz1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQscixvLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIWMsb1tvLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LHIsbyxmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKHI9ITApLG51bGwhPW8pZm9yKDtfPG8ubGVuZ3RoO18rKylpZigocz1vW19dKSYmXCJzZXRBdHRyaWJ1dGVcImluIHM9PSEhZCYmKGQ/cy5sb2NhbE5hbWU9PT1kOjM9PT1zLm5vZGVUeXBlKSl7bD1zLG9bX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1yP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLG89bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYobz1vJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHkscixjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LHImJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxvLGYsbz9vWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9bylmb3IoXz1vLmxlbmd0aDtfLS07KW51bGwhPW9bX10mJmgob1tfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PXkudmFsdWV8fF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTih0W3JdLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFyJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxvfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQscikseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxyLG8sZj1hKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBvPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gZCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LGQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAtcmF0aW5nLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCAnLi9hcHAtcmF0aW5nLnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFJhdGluZ1Byb3BzIHtcbiAgICBzdGFyczogbnVtYmVyO1xuICAgIHJhdGluZ0NvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcFJhdGluZyhwcm9wczogQXBwUmF0aW5nUHJvcHMpIHtcbiAgICBjb25zdCB7IHN0YXJzLCByYXRpbmdDb3VudCB9ID0gcHJvcHM7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdGFycygpIHtcbiAgICAgICAgY29uc3Qgc3RhckVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgIHN0YXJFbHMucHVzaChcbiAgICAgICAgICAgICAgICA8QXBwUmF0aW5nU3RhclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycyA+PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGFycyA8IGkgJiYgc3RhcnMgPiBpIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hhbGYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnb2ZmJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhckVscztcbiAgICB9XG5cbiAgICBjb25zdCByYXRpbmdTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLXJhdGluZ1wiIHN0eWxlPXtyYXRpbmdTdHlsZX0+XG4gICAgICAgICAgICB7Y3JlYXRlU3RhcnMoKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia3VtdWxvcy1yYXRpbmctY291bnRcIj4oe3Byb3BzLnJhdGluZ0NvdW50fSk8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmludGVyZmFjZSBBcHBSYXRpbmdTdGFyUHJvcHMge1xuICAgIHN0YXRlOiAnb24nIHwgJ2hhbGYnIHwgJ29mZic7XG59XG5cbmZ1bmN0aW9uIEFwcFJhdGluZ1N0YXIocHJvcHM6IEFwcFJhdGluZ1N0YXJQcm9wcykge1xuICAgIGxldCBzdGFyRWw7XG5cbiAgICBpZiAocHJvcHMuc3RhdGUgPT09ICdvbicpIHtcbiAgICAgICAgc3RhckVsID0gPHNwYW4+JiM5NzMzOzwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwcm9wcy5zdGF0ZSA9PT0gJ2hhbGYnKSB7XG4gICAgICAgIHN0YXJFbCA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+JiM5NzM0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImt1bXVsb3MtcmF0aW5nLWhhbGZzdGFyXCI+JiM5NzMzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJFbCA9IDxzcGFuPiYjOTczNDs8L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwia3VtdWxvcy1yYXRpbmctc3RhclwiPntzdGFyRWx9PC9kaXY+O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IERpbWVuc2lvbnMsIFBvaW50IH0gZnJvbSAnLi4vY29yZSc7XG5cbmludGVyZmFjZSBRdWFkcmF0aWNDdXJ2ZVBvaW50cyB7XG4gICAgcDE6IFBvaW50O1xuICAgIHAyOiBQb2ludDtcbiAgICBwMzogUG9pbnQ7XG59XG5cbmludGVyZmFjZSBTdmdQb2ludGVyUHJvcHMge1xuICAgIGFyZWE6IERpbWVuc2lvbnM7XG4gICAgcXVhZEN1cnZlUG9pbnRzOiBRdWFkcmF0aWNDdXJ2ZVBvaW50cztcbiAgICBjb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCBQSV9IQUxGID0gTWF0aC5QSSAvIDI7XG5jb25zdCBQT0lOVEVSX0hFQURfRlJPTV9CT0RZX0RJU1QgPSA1MDtcbmNvbnN0IFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUID0gMTUwO1xuXG5mdW5jdGlvbiBjYWxjUG9pbnRlckhlYWRDdXJ2ZUNvb3Jkc0Zyb21DdHJsQW5kVGFyZ2V0KFxuICAgIGN0cmxQb2ludDogUG9pbnQsXG4gICAgdGFyZ2V0OiBQb2ludFxuKTogUXVhZHJhdGljQ3VydmVQb2ludHMge1xuICAgIGNvbnN0IHBvaW50ZXJEaXJSYWRzID1cbiAgICAgICAgTWF0aC5hdGFuMihjdHJsUG9pbnQueCAtIGN0cmxQb2ludC54LCB0YXJnZXQueSAtIHRhcmdldC55KSArIFBJX0hBTEY7XG5cbiAgICBjb25zdCBkaXJWZWM6IFBvaW50ID0ge1xuICAgICAgICB4OiBNYXRoLmNvcyhwb2ludGVyRGlyUmFkcyksXG4gICAgICAgIHk6IC1NYXRoLnNpbihwb2ludGVyRGlyUmFkcylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVDdHJsUG9pbnQ6IFBvaW50ID0ge1xuICAgICAgICB4OiBkaXJWZWMueCAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNULFxuICAgICAgICB5OiBkaXJWZWMueSAqIFBPSU5URVJfQ1VSVkVfQ1RSTF9QT0lOVF9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IHBvaW50ZXJPZmZzZXQ6IFBvaW50ID0ge1xuICAgICAgICB4OiAtY3VydmVDdHJsUG9pbnQueCAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCxcbiAgICAgICAgeTogLWRpclZlYy55ICogUE9JTlRFUl9IRUFEX0ZST01fQk9EWV9ESVNUXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnZlU3RhcnQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgLSBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgY29uc3QgY3VydmVFbmQ6IFBvaW50ID0ge1xuICAgICAgICB4OlxuICAgICAgICAgICAgTWF0aC5jb3MocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LngsXG4gICAgICAgIHk6XG4gICAgICAgICAgICAtTWF0aC5zaW4ocG9pbnRlckRpclJhZHMgKyBQSV9IQUxGKSAqIFBPSU5URVJfSEVBRF9GUk9NX0JPRFlfRElTVCArXG4gICAgICAgICAgICBwb2ludGVyT2Zmc2V0LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcDE6IGN1cnZlU3RhcnQsXG4gICAgICAgIHAyOiBjdXJ2ZUN0cmxQb2ludCxcbiAgICAgICAgcDM6IGN1cnZlRW5kXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN2Z1BvaW50ZXIoeyBhcmVhLCBxdWFkQ3VydmVQb2ludHMsIGNvbG9yIH06IFN2Z1BvaW50ZXJQcm9wcykge1xuICAgIGNvbnN0IHsgcDEsIHAyLCBwMyB9ID0gcXVhZEN1cnZlUG9pbnRzO1xuICAgIGNvbnN0IGxpbmVQYXRoID0gYE0gJHtwMS54fSAke3AxLnl9IFEgJHtwMi54fSAke3AyLnl9ICR7cDMueH0gJHtwMy55fWA7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHAxOiBoMSxcbiAgICAgICAgcDI6IGgyLFxuICAgICAgICBwMzogaDNcbiAgICB9ID0gY2FsY1BvaW50ZXJIZWFkQ3VydmVDb29yZHNGcm9tQ3RybEFuZFRhcmdldChwMiwgcDMpO1xuICAgIGNvbnN0IGhlYWRQYXRoID0gYE0gJHtwMy54ICsgaDEueH0gJHtwMy55ICsgaDEueX0gUSAke3AzLnggKyBoMi54fSAke3AzLnkgK1xuICAgICAgICBoMi55fSAke3AzLnggKyBoMy54fSAke3AzLnkgKyBoMy55fWA7XG5cbiAgICBjb25zdCBzdHJva2VTdHlsZSA9IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgZmlsbDogJ25vbmUnXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHZpZXdCb3g9e2AwIDAgJHthcmVhLndpZHRofSAke2FyZWEuaGVpZ2h0fWB9XG4gICAgICAgICAgICB3aWR0aD17YCR7YXJlYS53aWR0aH1weGB9XG4gICAgICAgICAgICBoZWlnaHQ9e2Ake2FyZWEuaGVpZ2h0fXB4YH1cbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjNcIlxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT17c3Ryb2tlU3R5bGV9IGQ9e2xpbmVQYXRofSAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPXtzdHJva2VTdHlsZX0gZD17aGVhZFBhdGh9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBQcm9wc09iamVjdCwgU2VydmljZSwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBhdXRoZWRGZXRjaCwgYXV0aGVkRmV0Y2hKc29uIH0gZnJvbSAnLi91dGlscyc7XG5cbnR5cGUgSHR0cE1ldGhvZCA9ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsIHtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBzdWJzY3JpYmVkOiBCb29sZWFuO1xuICAgIG1ldGE/OiBQcm9wc09iamVjdCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFNwZWMge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICBzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgbWV0YT86IFByb3BzT2JqZWN0IHwgbnVsbDtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHNob3dJblBvcnRhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VTdWJzY3JpcHRpb25SZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IEh0dHBNZXRob2QsXG4gICAgICAgIHV1aWRzOiBzdHJpbmdbXVxuICAgICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29udGV4dC51cmxGb3JTZXJ2aWNlKFxuICAgICAgICAgICAgICAgIFNlcnZpY2UuUFVTSFxuICAgICAgICAgICAgKX0vdjEvYXBwLWluc3RhbGxzLyR7aW5zdGFsbElkfS9jaGFubmVscy9zdWJzY3JpcHRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoKHRoaXMuY29udGV4dCwgdXJsLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgY2hhbm5lbHMgZ2l2ZW4gYnkgdW5pcXVlIElEXG4gICAgICovXG4gICAgc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BPU1QnLCB1dWlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmVzIGZyb20gdGhlIGNoYW5uZWxzIGdpdmVuIGJ5IHVuaXF1ZSBJRFxuICAgICAqL1xuICAgIHVuc3Vic2NyaWJlKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ0RFTEVURScsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbnMgY2hhbm5lbCBzdWJzY3JpcHRpb25zIHRvIHRob3NlIGdpdmVuIGJ5IHVuaXF1ZSBJRC5cbiAgICAgKlxuICAgICAqIEFueSBvdGhlciBzdWJzY3JpcHRpb25zIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBzZXRTdWJzY3JpcHRpb25zKHV1aWRzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVN1YnNjcmlwdGlvblJlcXVlc3QoJ1BVVCcsIHV1aWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBleGlzdGluZyBpbnN0YWxsYXRpb24ncyBjaGFubmVsIHN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBjbGVhclN1YnNjcmlwdGlvbnMoKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdWJzY3JpcHRpb25zKFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0cyB0aGUgY2hhbm5lbHMgYXZhaWxhYmxlIHRvIHRoaXMgaW5zdGFsbGF0aW9uIGFsb25nIHdpdGggc3Vic2NyaXB0aW9uIHN0YXR1c1xuICAgICAqL1xuICAgIGxpc3RDaGFubmVscygpOiBQcm9taXNlPENoYW5uZWxbXT4ge1xuICAgICAgICByZXR1cm4gZ2V0SW5zdGFsbElkKCkudGhlbihpbnN0YWxsSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb250ZXh0LnVybEZvclNlcnZpY2UoXG4gICAgICAgICAgICAgICAgU2VydmljZS5QVVNIXG4gICAgICAgICAgICApfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2NoYW5uZWxzYDtcbiAgICAgICAgICAgIHJldHVybiBhdXRoZWRGZXRjaEpzb248Q2hhbm5lbFtdPih0aGlzLmNvbnRleHQsIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwdXNoIGNoYW5uZWwgYW5kIG9wdGlvbmFsbHkgc3Vic2NyaWJlcyB0aGUgY3VycmVudCBpbnN0YWxsYXRpb24uXG4gICAgICpcbiAgICAgKiBOYW1lIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgaWYgc2hvd0luUG9ydGFsIGlzIHRydWUuXG4gICAgICovXG4gICAgY3JlYXRlQ2hhbm5lbChjaGFubmVsU3BlYzogQ2hhbm5lbFNwZWMpOiBQcm9taXNlPENoYW5uZWw+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2hhbm5lbFNwZWMuc2hvd0luUG9ydGFsICYmXG4gICAgICAgICAgICAoIWNoYW5uZWxTcGVjLm5hbWUgfHwgIWNoYW5uZWxTcGVjLm5hbWUubGVuZ3RoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICdOYW1lIGlzIHJlcXVpcmVkIGZvciBjaGFubmVsIGNyZWF0aW9uIHdoZW4gc2hvd0luUG9ydGFsIGlzIHRydWUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRJbnN0YWxsSWQoKS50aGVuKGluc3RhbGxJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbnRleHQudXJsRm9yU2VydmljZShcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLlBVU0hcbiAgICAgICAgICAgICl9L3YxL2NoYW5uZWxzYDtcblxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB1dWlkOiBjaGFubmVsU3BlYy51dWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGNoYW5uZWxTcGVjLm5hbWUsXG4gICAgICAgICAgICAgICAgc2hvd0luUG9ydGFsOiBCb29sZWFuKGNoYW5uZWxTcGVjLnNob3dJblBvcnRhbCksXG4gICAgICAgICAgICAgICAgbWV0YTogY2hhbm5lbFNwZWMubWV0YSxcbiAgICAgICAgICAgICAgICBpbnN0YWxsSWQ6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGNoYW5uZWxTcGVjLnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIChwYXJhbXMgYXMgYW55KS5pbnN0YWxsSWQgPSBpbnN0YWxsSWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF1dGhlZEZldGNoSnNvbjxDaGFubmVsPih0aGlzLmNvbnRleHQsIHVybCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUGxhdGZvcm1Db25maWcsXG4gICAgU2VydmljZSxcbiAgICBnZXRJbnN0YWxsSWRcbn0gZnJvbSAnLic7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmltcG9ydCB7IGF1dGhlZEZldGNoSnNvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnZXRDYWNoZUtleXMgPSAoa2V5OiBzdHJpbmcpID0+ICh7XG4gICAgQ09ORklHX0NBQ0hFX0tFWTogYCR7a2V5fUNvbmZpZ2AsXG4gICAgQ09ORklHX0NBQ0hFX0tFWV9VUERBVEVEOiBgJHtrZXl9Q29uZmlnVXBkYXRlZGBcbn0pO1xuXG5jb25zdCBNQVhfQ0FDSEVfQUdFX01TID0gMSAqIDYwICogNjAgKiAxMDAwO1xuXG5lbnVtIENvbmZpZ0NhY2hlVHlwZSB7XG4gICAgUExBVEZPUk0gPSAncGxhdGZvcm0nLFxuICAgIERETCA9ICdkZGwnXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWc8VENvbmZpZ1R5cGU+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhY2hlS2V5OiBzdHJpbmcsXG4gICAgY3R4OiBDb250ZXh0XG4pOiBQcm9taXNlPFRDb25maWdUeXBlPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKGNhY2hlS2V5KTtcbiAgICBsZXQgY29uZmlnID0gYXdhaXQgZ2V0PFRDb25maWdUeXBlPihjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSk7XG5cbiAgICBjb25zdCBsYXN0TG9hZFRpbWUgPVxuICAgICAgICAoYXdhaXQgZ2V0PG51bWJlcj4oY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVlfVVBEQVRFRCkpID8/IDA7XG4gICAgbGV0IHVwZGF0ZWRSZW1vdGVDb25maWcgPSBmYWxzZTtcblxuICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdExvYWRUaW1lID4gTUFYX0NBQ0hFX0FHRV9NUykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0NvbmZpZyBuZXZlciBzeW5jZWQvc3RhbGUsIHN5bmNpbmcgbm93Li4uJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbmZpZyA9IGF3YWl0IGF1dGhlZEZldGNoSnNvbjxUQ29uZmlnVHlwZT4oY3R4LCB1cmwpO1xuICAgICAgICAgICAgdXBkYXRlZFJlbW90ZUNvbmZpZyA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgICAgIC8vIE5vb3AgKGZhbGxiYWNrIHRvIGxvY2FsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZWRSZW1vdGVDb25maWcpIHtcbiAgICAgICAgYXdhaXQgc2V0KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZLCBjb25maWcpO1xuICAgICAgICBhd2FpdCBzZXQoY2FjaGVLZXlzLkNPTkZJR19DQUNIRV9LRVlfVVBEQVRFRCwgRGF0ZS5ub3coKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbGF0Zm9ybUNvbmZpZyhcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UGxhdGZvcm1Db25maWc+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoYXdhaXQgbG9hZENvbmZpZzxQbGF0Zm9ybUNvbmZpZz4oXG4gICAgICAgICAgICBgJHtjdHgudXJsRm9yU2VydmljZShTZXJ2aWNlLlBVU0gpfS92MS93ZWIvY29uZmlnYCxcbiAgICAgICAgICAgIENvbmZpZ0NhY2hlVHlwZS5QTEFURk9STSxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICApKSA/PyB7fVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGRsQ29uZmlnKFxuICAgIGN0eDogQ29udGV4dFxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHdlYkluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRDb25maWc8RGRsUHJvbXB0Q29uZmlnW10+KFxuICAgICAgICAgICAgYCR7Y3R4LnVybEZvclNlcnZpY2UoXG4gICAgICAgICAgICAgICAgU2VydmljZS5ERExcbiAgICAgICAgICAgICl9L3YxL2Jhbm5lcnM/d2ViSW5zdGFsbElkPSR7d2ViSW5zdGFsbElkfWAsXG4gICAgICAgICAgICBDb25maWdDYWNoZVR5cGUuRERMLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBsb2FkRGRsQ29uZmlnOiBmYWlsZWQgdG8gbG9hZCBEZWZlcnJlZCBEZWVwTGluayBjb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICApO1xuICAgICAgICAvLyB1bmRlZmluZWQgcmV0dXJuIC8gbm8gY29uZmlnXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRGRsQmFubmVyQ29uZmlnRnJvbUNhY2hlKFxuICAgIGJhbm5lclV1aWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2FjaGVLZXlzID0gZ2V0Q2FjaGVLZXlzKENvbmZpZ0NhY2hlVHlwZS5EREwpO1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBhd2FpdCBnZXQ8RGRsUHJvbXB0Q29uZmlnW10+KGNhY2hlS2V5cy5DT05GSUdfQ0FDSEVfS0VZKTtcblxuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncyA9IGNvbmZpZ3MuZmlsdGVyKGMgPT4gYy51dWlkICE9PSBiYW5uZXJVdWlkKTtcblxuICAgIGF3YWl0IHNldChjYWNoZUtleXMuQ09ORklHX0NBQ0hFX0tFWSwgY29uZmlncyk7XG59XG4iLCJpbXBvcnQgeyBhdXRoZWRGZXRjaCwgY3lyYjUzLCB1dWlkdjQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlbCwgZ2V0LCBzZXQgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5pbXBvcnQgeyBDaGFubmVsIH0gZnJvbSAnLi9jaGFubmVscyc7XG5cbmNvbnN0IFNES19UWVBFID0gMTA0O1xuLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBvcHRpbW92ZSBTREsgbm90IGluY2x1ZGluZyB2ZXJzaW9uIGluIE9wdGltb2JpbGUgY29uZmlnXG5jb25zdCBERUZBVUxUX1NES19WRVJTSU9OID0gJzIuMC4xNyc7XG5cbmV4cG9ydCB0eXBlIEluc3RhbGxJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIFVzZXJJZCA9IHN0cmluZztcblxudHlwZSBKc29uaXNoID1cbiAgICB8IHN0cmluZ1xuICAgIHwgbnVtYmVyXG4gICAgfCBib29sZWFuXG4gICAgfCBudWxsXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfVxuICAgIHwgeyB0b0pTT046ICgpID0+IGFueSB9XG4gICAgfCBKc29uaXNoW11cbiAgICB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IHR5cGUgUHJvcHNPYmplY3QgPSB7IFtrZXk6IHN0cmluZ106IEpzb25pc2ggfTtcblxudHlwZSBOZXN0ZWRQaWNrPFQsIEsxIGV4dGVuZHMga2V5b2YgVCwgSzIgZXh0ZW5kcyBrZXlvZiBUW0sxXT4gPSB7XG4gICAgW1AxIGluIEsxXToge1xuICAgICAgICBbUDIgaW4gSzJdOiBUW0sxXVtQMl07XG4gICAgfTtcbn07XG5cbi8vb25seSBzeXN0ZW0gZXZlbnRzXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICAgIE1FU1NBR0VfREVMSVZFUkVEID0gJ2subWVzc2FnZS5kZWxpdmVyZWQnLFxuICAgIE1FU1NBR0VfT1BFTkVEID0gJ2subWVzc2FnZS5vcGVuZWQnLFxuICAgIFBVU0hfUkVHSVNURVJFRCA9ICdrLnB1c2guZGV2aWNlUmVnaXN0ZXJlZCcsXG4gICAgSU5TVEFMTF9UUkFDS0VEID0gJ2suc3RhdHMuaW5zdGFsbFRyYWNrZWQnLFxuICAgIFVTRVJfQVNTT0NJQVRFRCA9ICdrLnN0YXRzLnVzZXJBc3NvY2lhdGVkJyxcbiAgICBVU0VSX0FTU09DSUFUSU9OX0NMRUFSRUQgPSAnay5zdGF0cy51c2VyQXNzb2NpYXRpb25DbGVhcmVkJ1xufVxuXG5leHBvcnQgZW51bSBQcm9tcHRUeXBlTmFtZSB7XG4gICAgQkVMTCA9ICdiZWxsJyxcbiAgICBBTEVSVCA9ICdhbGVydCcsXG4gICAgQkFOTkVSID0gJ2Jhbm5lcicsXG4gICAgRERMX0JBTk5FUiA9ICdkZGxfYmFubmVyJ1xufVxuXG4vLyBOb3RlIGR1cGxpY2F0ZSAnaW4nIHZzICdJTicgZHVlIHRvIG1pc2FsaWdubWVudCBpbiBzZXJ2ZXIgY29uZmlnIGFuZCBwdWJsaXNoZWQgZG9jcyBmb3IgbWFudWFsIGNvbmZpZ1xuZXhwb3J0IHR5cGUgRmlsdGVyT3BlcmF0b3IgPSAnaW4nIHwgJ0lOJyB8ICc9JyB8ICc+JyB8ICc8JyB8ICc+PScgfCAnPD0nO1xuZXhwb3J0IHR5cGUgRmlsdGVyVmFsdWUgPSBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIHwgc3RyaW5nW107XG5leHBvcnQgdHlwZSBQcm9wRmlsdGVyID0gW3N0cmluZywgRmlsdGVyT3BlcmF0b3IsIEZpbHRlclZhbHVlXTtcblxuaW50ZXJmYWNlIFByb21wdFRyaWdnZXIge1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgYWZ0ZXJTZWNvbmRzPzogbnVtYmVyO1xuICAgIGZpbHRlcnM/OiBQcm9wRmlsdGVyW107XG59XG5cbmludGVyZmFjZSBQcm9tcHRPdmVybGF5Q29uZmlnIHtcbiAgICBpY29uVXJsPzogc3RyaW5nO1xuICAgIGxhYmVsczoge1xuICAgICAgICBoZWFkaW5nOiBzdHJpbmc7XG4gICAgICAgIGJvZHk6IHN0cmluZztcbiAgICB9O1xuICAgIGxpbmtzPzogeyBsYWJlbDogc3RyaW5nOyB1cmw6IHN0cmluZyB9W107XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHNoYWRlOiBzdHJpbmc7XG4gICAgICAgIHN0cmlwOiBzdHJpbmc7XG4gICAgICAgIHRleHQ6IHN0cmluZztcbiAgICB9O1xufVxuXG50eXBlIFByb21wdFNpbGVudE92ZXJsYXlDb25maWcgPSBOZXN0ZWRQaWNrPFxuICAgIFByb21wdE92ZXJsYXlDb25maWcsXG4gICAgJ2xhYmVscycsXG4gICAgJ2JvZHknXG4+ICZcbiAgICBOZXN0ZWRQaWNrPFByb21wdE92ZXJsYXlDb25maWcsICdjb2xvcnMnLCAndGV4dCc+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dMYWJlbHNDb25maWcge1xuICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICBjb25maXJtQWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbERpYWxvZ0NvbG9yc0NvbmZpZyB7XG4gICAgYmc6IHN0cmluZztcbiAgICBmZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25CZzogc3RyaW5nO1xuICAgIGNvbmZpcm1BY3Rpb25GZzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dDb25maWcge1xuICAgIGxhYmVsczogQ2hhbm5lbERpYWxvZ0xhYmVsc0NvbmZpZztcbiAgICBjb2xvcnM6IENoYW5uZWxEaWFsb2dDb2xvcnNDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZyB7XG4gICAgcHJlc2VudGVkVXVpZHM6IHN0cmluZ1tdIHwgJ2FsbCc7XG4gICAgY2hlY2tlZFV1aWRzOiBzdHJpbmdbXSB8ICdub25lJyB8ICdhbGwnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHtcbiAgICB0eXBlOiAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnO1xuICAgIGNoYW5uZWxzOiBNdWx0aUNoYW5uZWxTZWxlY3Rpb25Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24ge1xuICAgIHR5cGU6ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZyc7XG4gICAgY2hhbm5lbHM6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZztcbiAgICBkaWFsb2dDb25maWc6IENoYW5uZWxEaWFsb2dDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbFN1YkFjdGlvbiB7XG4gICAgdHlwZTogJ3N1YnNjcmliZVRvQ2hhbm5lbCc7XG4gICAgY2hhbm5lbFV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVWlBY3Rpb25UeXBlIHtcbiAgICBERUNMSU5FID0gJ2RlY2xpbmUnLFxuICAgIFJFTUlORCA9ICdyZW1pbmQnLFxuICAgIERETF9PUEVOX1NUT1JFID0gJ29wZW5TdG9yZScsXG4gICAgRERMX09QRU5fREVFUExJTksgPSAnb3BlbkRlZXBsaW5rJ1xufVxuXG5pbnRlcmZhY2UgRGVjbGluZVByb21wdEFjdGlvbiB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRFQ0xJTkU7XG59XG5cbmludGVyZmFjZSBSZW1pbmRQcm9tcHRBY3Rpb24ge1xuICAgIHR5cGU6IFVpQWN0aW9uVHlwZS5SRU1JTkQ7XG4gICAgZGVsYXk6IFByb21wdFJlbWluZGVyRGVsYXlDb25maWc7XG59XG5cbmV4cG9ydCB0eXBlIFByb21wdEFjdGlvbiA9XG4gICAgfCBDaGFubmVsU3ViQWN0aW9uXG4gICAgfCBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvblxuICAgIHwgVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb247XG5cbmV4cG9ydCBlbnVtIFJlbWluZGVyVGltZVVuaXQge1xuICAgIEhPVVJTID0gJ2hvdXJzJyxcbiAgICBEQVlTID0gJ2RheXMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZyB7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICB0aW1lVW5pdDogUmVtaW5kZXJUaW1lVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHVpQWN0aW9uczoge1xuICAgICAgICBkZWNsaW5lOiBEZWNsaW5lUHJvbXB0QWN0aW9uIHwgUmVtaW5kUHJvbXB0QWN0aW9uO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tDb25maWcge1xuICAgIGNvbG9yczoge1xuICAgICAgICBiZzogc3RyaW5nO1xuICAgIH07XG59XG5cbmV4cG9ydCBlbnVtIFByb21wdFBvc2l0aW9uIHtcbiAgICBUT1BfTEVGVCA9ICd0b3AtbGVmdCcsXG4gICAgVE9QX0NFTlRFUiA9ICd0b3AtY2VudGVyJyxcbiAgICBUT1BfUklHSFQgPSAndG9wLXJpZ2h0JyxcbiAgICBDRU5URVJfTEVGVCA9ICdjZW50ZXItbGVmdCcsXG4gICAgQ0VOVEVSID0gJ2NlbnRlcicsXG4gICAgQ0VOVEVSX1JJR0hUID0gJ2NlbnRlci1yaWdodCcsXG4gICAgQk9UVE9NX0xFRlQgPSAnYm90dG9tLWxlZnQnLFxuICAgIEJPVFRPTV9DRU5URVIgPSAnYm90dG9tLWNlbnRlcicsXG4gICAgQk9UVE9NX1JJR0hUID0gJ2JvdHRvbS1yaWdodCcsXG4gICAgVE9QID0gJ3RvcCcsXG4gICAgQk9UVE9NID0gJ2JvdHRvbSdcbn1cblxuaW50ZXJmYWNlIEJhc2VQcm9tcHRDb25maWcge1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0eXBlOiBQcm9tcHRUeXBlTmFtZTtcbiAgICB0cmlnZ2VyOiBQcm9tcHRUcmlnZ2VyO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbjtcbiAgICBvdmVybGF5PzogUHJvbXB0T3ZlcmxheUNvbmZpZztcbiAgICBzaWxlbnRPdmVybGF5PzogUHJvbXB0U2lsZW50T3ZlcmxheUNvbmZpZztcbiAgICBhY3Rpb25zPzogUHJvbXB0QWN0aW9uW107XG59XG5cbmludGVyZmFjZSBXaXRoSW1hZ2VVcmwge1xuICAgIGltYWdlVXJsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVG9vbHRpcENvbmZpZyB7XG4gICAgdG9vbHRpcDoge1xuICAgICAgICBzdWJzY3JpYmU6IHN0cmluZztcbiAgICB9O1xufVxuXG50eXBlIERpYWxvZ0xhYmVsQ29uZmlnID0ge1xuICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbjogc3RyaW5nO1xuICAgIGFjY2VwdEFjdGlvbjogc3RyaW5nO1xufTtcblxudHlwZSBOYW1lZERpYWxvZ0xhYmVsQ29uZmlnPFQgZXh0ZW5kcyBQcm9tcHRUeXBlTmFtZT4gPSBSZWNvcmQ8XG4gICAgVCxcbiAgICBEaWFsb2dMYWJlbENvbmZpZ1xuPjtcblxudHlwZSBEaWFsb2dDb2xvckNvbmZpZyA9IHtcbiAgICBmZzogc3RyaW5nO1xuICAgIGJnOiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbkZnOiBzdHJpbmc7XG4gICAgZGVjbGluZUFjdGlvbkJnOiBzdHJpbmc7XG4gICAgYWNjZXB0QWN0aW9uRmc6IHN0cmluZztcbiAgICBhY2NlcHRBY3Rpb25CZzogc3RyaW5nO1xufTtcblxudHlwZSBOYW1lZERpYWxvZ0NvbG9yQ29uZmlnPFQgZXh0ZW5kcyBQcm9tcHRUeXBlTmFtZT4gPSBSZWNvcmQ8XG4gICAgVCxcbiAgICBEaWFsb2dDb2xvckNvbmZpZ1xuPjtcblxuaW50ZXJmYWNlIFRvYXN0TWVzc2FnZSB7XG4gICAgdGhhbmtzRm9yU3Vic2NyaWJpbmc6IHN0cmluZztcbn1cblxuLy8gQkVMTFxuXG50eXBlIEJlbGxMYWJlbENvbmZpZyA9IFRvYXN0TWVzc2FnZSAmIFRvb2x0aXBDb25maWc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVsbENvbG9yQ29uZmlnIHtcbiAgICBiZWxsOiB7XG4gICAgICAgIGZnOiBzdHJpbmc7XG4gICAgICAgIGJnOiBzdHJpbmc7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWxsUHJvbXB0Q29uZmlnIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQkVMTDtcbiAgICBsYWJlbHM/OiBCZWxsTGFiZWxDb25maWc7XG4gICAgY29sb3JzPzogQmVsbENvbG9yQ29uZmlnO1xuICAgIHBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbi5CT1RUT01fTEVGVCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcbn1cblxuLy8gQUxFUlRcblxudHlwZSBBbGVydExhYmVsQ29uZmlnID0gTmFtZWREaWFsb2dMYWJlbENvbmZpZzxQcm9tcHRUeXBlTmFtZS5BTEVSVD4gJlxuICAgIFRvYXN0TWVzc2FnZTtcbnR5cGUgQWxlcnRDb2xvckNvbmZpZyA9IE5hbWVkRGlhbG9nQ29sb3JDb25maWc8UHJvbXB0VHlwZU5hbWUuQUxFUlQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0UHJvbXB0Q29uZmlnXG4gICAgZXh0ZW5kcyBCYXNlUHJvbXB0Q29uZmlnLFxuICAgICAgICBXaXRoSW1hZ2VVcmwsXG4gICAgICAgIFByb21wdFVpQWN0aW9ucyB7XG4gICAgdHlwZTogUHJvbXB0VHlwZU5hbWUuQUxFUlQ7XG4gICAgbGFiZWxzOiBBbGVydExhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogQWxlcnRDb2xvckNvbmZpZztcbiAgICBwb3NpdGlvbjogUHJvbXB0UG9zaXRpb24uVE9QIHwgUHJvbXB0UG9zaXRpb24uQ0VOVEVSO1xuICAgIGJhY2tncm91bmRNYXNrPzogQmFja2dyb3VuZE1hc2tDb25maWc7XG59XG5cbi8vIEJBTk5FUlxuXG50eXBlIEJhbm5lckxhYmVsQ29uZmlnID0gTmFtZWREaWFsb2dMYWJlbENvbmZpZzxQcm9tcHRUeXBlTmFtZS5CQU5ORVI+ICZcbiAgICBUb2FzdE1lc3NhZ2U7XG50eXBlIEJhbm5lckNvbG9yQ29uZmlnID0gTmFtZWREaWFsb2dDb2xvckNvbmZpZzxQcm9tcHRUeXBlTmFtZS5CQU5ORVI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhbm5lclByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBQcm9tcHRVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkJBTk5FUjtcbiAgICBsYWJlbHM6IEJhbm5lckxhYmVsQ29uZmlnO1xuICAgIGNvbG9yczogQmFubmVyQ29sb3JDb25maWc7XG4gICAgcG9zaXRpb246IFByb21wdFBvc2l0aW9uLlRPUCB8IFByb21wdFBvc2l0aW9uLkJPVFRPTTtcbiAgICBiYWNrZ3JvdW5kTWFzaz86IEJhY2tncm91bmRNYXNrQ29uZmlnO1xufVxuXG4vLyBEREwgQkFOTkVSXG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwUmF0aW5nIHtcbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICByYXRpbmdDb3VudDogbnVtYmVyO1xufVxuXG50eXBlIERkbERpYWxvZ0NvbG9yQ29uZmlnID0gRGlhbG9nQ29sb3JDb25maWcgJiB7IHJhdGluZ0ZnOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgT3BlblN0b3JlVWlBY3Rpb24gPSB7XG4gICAgdHlwZTogVWlBY3Rpb25UeXBlLkRETF9PUEVOX1NUT1JFO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGRlZXBMaW5rVXJsOiBzdHJpbmc7XG59O1xudHlwZSBPcGVuRGVlcExpbmtVaUFjdGlvbiA9IHtcbiAgICB0eXBlOiBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks7XG4gICAgZGVlcExpbmtVcmw6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERkbFVpQWN0aW9ucyA9IFByb21wdFVpQWN0aW9ucyAmIHtcbiAgICB1aUFjdGlvbnM6IHtcbiAgICAgICAgYWNjZXB0OiBPcGVuU3RvcmVVaUFjdGlvbiB8IE9wZW5EZWVwTGlua1VpQWN0aW9uO1xuICAgIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERkbEJhbm5lclByb21wdENvbmZpZ1xuICAgIGV4dGVuZHMgQmFzZVByb21wdENvbmZpZyxcbiAgICAgICAgV2l0aEltYWdlVXJsLFxuICAgICAgICBEZGxVaUFjdGlvbnMge1xuICAgIHR5cGU6IFByb21wdFR5cGVOYW1lLkRETF9CQU5ORVI7XG4gICAgbGFiZWxzOiBEaWFsb2dMYWJlbENvbmZpZztcbiAgICBjb2xvcnM6IERkbERpYWxvZ0NvbG9yQ29uZmlnO1xuICAgIGFwcFJhdGluZz86IEFwcFJhdGluZztcbn1cblxuZXhwb3J0IHR5cGUgUHVzaFByb21wdENvbmZpZyA9XG4gICAgfCBCZWxsUHJvbXB0Q29uZmlnXG4gICAgfCBBbGVydFByb21wdENvbmZpZ1xuICAgIHwgQmFubmVyUHJvbXB0Q29uZmlnO1xuXG5leHBvcnQgdHlwZSBEZGxQcm9tcHRDb25maWcgPSBEZGxCYW5uZXJQcm9tcHRDb25maWc7XG5cbmV4cG9ydCB0eXBlIFByb21wdENvbmZpZyA9IFB1c2hQcm9tcHRDb25maWcgfCBEZGxQcm9tcHRDb25maWc7XG5leHBvcnQgdHlwZSBQcm9tcHRDb25maWdzPFQgZXh0ZW5kcyBQcm9tcHRDb25maWc+ID0gUmVjb3JkPHN0cmluZywgVD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhdGZvcm1Db25maWcge1xuICAgIHB1YmxpY0tleTogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgcHJvbXB0cz86IFByb21wdENvbmZpZ3M8UHVzaFByb21wdENvbmZpZz47XG4gICAgc2FmYXJpUHVzaElkPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGVudW0gU0RLRmVhdHVyZSB7XG4gICAgUFVTSCA9ICdwdXNoJyxcbiAgICBEREwgPSAnZGRsJ1xufVxuXG5leHBvcnQgZW51bSBTZXJ2aWNlIHtcbiAgICBQVVNIID0gJ3B1c2gnLFxuICAgIERETCA9ICdkZGwnLFxuICAgIEVWRU5UUyA9ICdldmVudHMnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgYXBpS2V5OiBzdHJpbmc7XG4gICAgc2VjcmV0S2V5OiBzdHJpbmc7XG4gICAgdmFwaWRQdWJsaWNLZXk6IHN0cmluZztcbiAgICBzZXJ2aWNlV29ya2VyUGF0aD86IHN0cmluZztcbiAgICBwdXNoUHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPiB8ICdhdXRvJztcbiAgICBhdXRvUmVzdWJzY3JpYmU/OiBib29sZWFuO1xuICAgIGZlYXR1cmVzPzogU0RLRmVhdHVyZVtdO1xufVxuXG5leHBvcnQgdHlwZSBQcm9tcHRSZW1pbmRlciA9XG4gICAgfCB7XG4gICAgICAgICAgZGVjbGluZWRPbjogbnVtYmVyO1xuICAgICAgfVxuICAgIHwgJ3N1cHByZXNzZWQnO1xuXG50eXBlIFNka0V2ZW50VHlwZSA9ICdldmVudFRyYWNrZWQnO1xuZXhwb3J0IHR5cGUgU2RrRXZlbnQ8VCA9IGFueT4gPSB7IHR5cGU6IFNka0V2ZW50VHlwZTsgZGF0YTogVCB9O1xudHlwZSBTZGtFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IFNka0V2ZW50KSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcmVhZG9ubHkgYXBpS2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2VjcmV0S2V5OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdmFwaWRQdWJsaWNLZXk6IHN0cmluZztcbiAgICByZWFkb25seSBhdXRoSGVhZGVyOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2VydmljZVdvcmtlclBhdGg6IHN0cmluZztcbiAgICByZWFkb25seSBwdXNoUHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPiB8ICdhdXRvJztcbiAgICByZWFkb25seSBhdXRvUmVzdWJzY3JpYmU6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgZmVhdHVyZXM6IFNES0ZlYXR1cmVbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogU2RrRXZlbnRIYW5kbGVyW10gfTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybE1hcDogeyBba2V5IGluIFNlcnZpY2VdOiBzdHJpbmcgfTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG4gICAgICAgIHRoaXMuc2VjcmV0S2V5ID0gY29uZmlnLnNlY3JldEtleTtcbiAgICAgICAgdGhpcy52YXBpZFB1YmxpY0tleSA9IGNvbmZpZy52YXBpZFB1YmxpY0tleTtcbiAgICAgICAgdGhpcy5hdXRoSGVhZGVyID0gYEJhc2ljICR7YnRvYShgJHt0aGlzLmFwaUtleX06JHt0aGlzLnNlY3JldEtleX1gKX1gO1xuICAgICAgICB0aGlzLnNlcnZpY2VXb3JrZXJQYXRoID0gY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoID8/ICcvd29ya2VyLmpzJztcbiAgICAgICAgdGhpcy5wdXNoUHJvbXB0cyA9IGNvbmZpZy5wdXNoUHJvbXB0cyA/PyAnYXV0byc7XG4gICAgICAgIHRoaXMuYXV0b1Jlc3Vic2NyaWJlID0gY29uZmlnLmF1dG9SZXN1YnNjcmliZSA/PyB0cnVlO1xuICAgICAgICB0aGlzLmZlYXR1cmVzID0gY29uZmlnLmZlYXR1cmVzID8/IFtTREtGZWF0dXJlLlBVU0hdO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcblxuICAgICAgICB0aGlzLnVybE1hcCA9IHtcbiAgICAgICAgICAgIFtTZXJ2aWNlLlBVU0hdOiBgaHR0cHM6Ly9wdXNoLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gLFxuICAgICAgICAgICAgW1NlcnZpY2UuRVZFTlRTXTogYGh0dHBzOi8vZXZlbnRzLSR7Y29uZmlnLnJlZ2lvbn0ua3VtdWxvcy5jb21gLFxuICAgICAgICAgICAgW1NlcnZpY2UuRERMXTogYGh0dHBzOi8vbGlua3MtJHtjb25maWcucmVnaW9ufS5rdW11bG9zLmNvbWBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZXZlbnQ6IFNka0V2ZW50VHlwZSwgaGFuZGxlcjogU2RrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyc1tldmVudF0uaW5kZXhPZihoYW5kbGVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdChldmVudDogU2RrRXZlbnRUeXBlLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baV0oe1xuICAgICAgICAgICAgICAgIHR5cGU6IGV2ZW50LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRmVhdHVyZShmZWF0dXJlOiBTREtGZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUpO1xuICAgIH1cblxuICAgIHVybEZvclNlcnZpY2Uoc2VydmljZTogU2VydmljZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybE1hcFtzZXJ2aWNlXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDb25maWdWYWxpZChjb25maWc6IGFueSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyAnQ29uZmlnIG11c3QgYmUgYW4gb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBmZWF0dXJlcyA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkoY29uZmlnLmZlYXR1cmVzKSAmJiBjb25maWcuZmVhdHVyZXMubGVuZ3RoXG4gICAgICAgICAgICA/IGNvbmZpZy5mZWF0dXJlc1xuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIWZlYXR1cmVzIHx8IGZlYXR1cmVzLmluY2x1ZGVzKFNES0ZlYXR1cmUuUFVTSCkpIHtcbiAgICAgICAgcmV0dXJuIGFzc2VydFB1c2hDb25maWdWYWxpZChjb25maWcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UHVzaENvbmZpZ1ZhbGlkKGNvbmZpZzogYW55KSB7XG4gICAgY29uc3QgcmVxdWlyZWRTdHJpbmdQcm9wcyA9IFtcbiAgICAgICAgJ3JlZ2lvbicsXG4gICAgICAgICdhcGlLZXknLFxuICAgICAgICAnc2VjcmV0S2V5JyxcbiAgICAgICAgJ3ZhcGlkUHVibGljS2V5J1xuICAgIF07XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHJlcXVpcmVkU3RyaW5nUHJvcHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcHJvcF0gIT09ICdzdHJpbmcnIHx8IGNvbmZpZ1twcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IGBSZXF1aXJlZCBjb25maWd1cmF0aW9uIGtleSAnJHtwcm9wfScgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoICYmXG4gICAgICAgIHR5cGVvZiBjb25maWcuc2VydmljZVdvcmtlclBhdGggIT09ICdzdHJpbmcnICYmXG4gICAgICAgIGNvbmZpZy5zZXJ2aWNlV29ya2VyUGF0aC5sZW5ndGggPT09IDBcbiAgICApIHtcbiAgICAgICAgdGhyb3cgXCJPcHRpb25hbCBjb25maWd1cmF0aW9uIGtleSAnc2VydmljZVdvcmtlclBhdGgnIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZyAoaWYgc3VwcGxpZWQpXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vblB1c2hSZWNlaXZlZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaFJlY2VpdmVkICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IFwiT3B0aW9uYWwgY29uZmlndXJhdGlvbiBrZXkgJ29uUHVzaFJlY2VpdmVkJyBtdXN0IGJlIGEgZnVuY3Rpb25cIjtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9uUHVzaE9wZW5lZCAmJiB0eXBlb2YgY29uZmlnLm9uUHVzaE9wZW5lZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBcIk9wdGlvbmFsIGNvbmZpZ3VyYXRpb24ga2V5ICdvblB1c2hPcGVuZWQnIG11c3QgYmUgYSBmdW5jdGlvblwiO1xuICAgIH1cbn1cblxubGV0IGluc3RhbGxJZFByb21pc2U6IFByb21pc2U8SW5zdGFsbElkPiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGlmIChpbnN0YWxsSWRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YWxsSWRQcm9taXNlO1xuICAgIH1cblxuICAgIGluc3RhbGxJZFByb21pc2UgPSBnZXQ8SW5zdGFsbElkIHwgdW5kZWZpbmVkPignaW5zdGFsbElkJykudGhlbihcbiAgICAgICAgaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmICghaW5zdGFsbElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEluc3RhbGxJZCh1dWlkdjQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsSWQ7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGluc3RhbGxJZFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnN0YWxsSWQoaW5zdGFsbElkOiBJbnN0YWxsSWQpOiBQcm9taXNlPEluc3RhbGxJZD4ge1xuICAgIGluc3RhbGxJZFByb21pc2UgPSBzZXQoJ2luc3RhbGxJZCcsIGluc3RhbGxJZCk7XG5cbiAgICByZXR1cm4gaW5zdGFsbElkUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJJZCgpOiBQcm9taXNlPFVzZXJJZD4ge1xuICAgIHJldHVybiBnZXQ8VXNlcklkIHwgdW5kZWZpbmVkPigndXNlcklkJykudGhlbihcbiAgICAgICAgdXNlcklkID0+IHVzZXJJZCA/PyBnZXRJbnN0YWxsSWQoKVxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc3NvY2lhdGVVc2VyKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBpZDogVXNlcklkLFxuICAgIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgc2V0KCd1c2VySWQnLCBpZCk7XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGF0dHJpYnV0ZXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVEVELCBwcm9wcykudGhlbihfID0+IHt9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyVXNlckFzc29jaWF0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBhd2FpdCBnZXRVc2VySWQoKTtcblxuICAgIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuVVNFUl9BU1NPQ0lBVElPTl9DTEVBUkVELCB7XG4gICAgICAgIG9sZFVzZXJJZGVudGlmaWVyOiBjdXJyZW50VXNlcklkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVsKCd1c2VySWQnKTtcbn1cblxuZXhwb3J0IHR5cGUgS3VtdWxvc0V2ZW50ID0ge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdGltZXN0YW1wOiBudW1iZXI7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgZGF0YT86IFByb3BzT2JqZWN0O1xufTtcblxuZXhwb3J0IHR5cGUgRXZlbnRQYXlsb2FkID0gS3VtdWxvc0V2ZW50W107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0V2ZW50KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgcHJvcGVydGllcz86IFByb3BzT2JqZWN0XG4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IGluc3RhbGxJZCA9IGF3YWl0IGdldEluc3RhbGxJZCgpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZCgpO1xuXG4gICAgY29uc3QgZXZlbnRzOiBFdmVudFBheWxvYWQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB1dWlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICB1c2VySWRcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjdHguYnJvYWRjYXN0KCdldmVudFRyYWNrZWQnLCBldmVudHMpO1xuXG4gICAgaWYgKCFpc1N5c3RlbUV2ZW50KHR5cGUpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShcbiAgICAgICAgU2VydmljZS5FVkVOVFNcbiAgICApfS92MS9hcHAtaW5zdGFsbHMvJHtpbnN0YWxsSWR9L2V2ZW50c2A7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudHMpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzU3lzdGVtRXZlbnQodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICg8YW55Pk9iamVjdCkudmFsdWVzKEV2ZW50VHlwZSkuaW5jbHVkZXModHlwZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmFja0luc3RhbGxEZXRhaWxzKFxuICAgIGN0eDogQ29udGV4dCxcbiAgICBvcHRpb25hbFNka1ZlcnNpb24/OiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNka1ZlcnNpb24gPSBvcHRpb25hbFNka1ZlcnNpb24gfHwgREVGQVVMVF9TREtfVkVSU0lPTjtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgIGJ1bmRsZTogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMCcsIC8vIFRPRE8gcmVhZCBmcm9tIGNvbnRleHQ/XG4gICAgICAgICAgICB0YXJnZXQ6IDIgLy8gVE9ETyByZWFkIGZyb20gY29udGV4dD9cbiAgICAgICAgfSxcbiAgICAgICAgc2RrOiB7XG4gICAgICAgICAgICBpZDogU0RLX1RZUEUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBzZGtWZXJzaW9uXG4gICAgICAgIH0sXG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgdmVyc2lvbjogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICB9LFxuICAgICAgICBvczoge1xuICAgICAgICAgICAgLy8gRGV0ZWN0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIHNlcnZlci1zaWRlIGZyb20gVUEgZGF0YVxuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjAnXG4gICAgICAgIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgLy8gV2lsbCBiZSBoYW5kbGVkIG9uIGJlc3QtZWZmb3J0IGJhc2lzIHNlcnZlci1zaWRlXG4gICAgICAgICAgICBuYW1lOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAgICAgdHo6XG4gICAgICAgICAgICAgICAgdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICAgID8gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgaXNTaW11bGF0b3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQgaW5zdGFsbElkID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5zdGFsbElkID0gYXdhaXQgZ2V0SW5zdGFsbElkKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IGluc3RhbGwgSUQ6ICcsIGUpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaFBhcnRzID0gW1xuICAgICAgICAvLyBJbmNsdWRlIGluc3RhbGwgSUQgaW4gaGFzaCB0byBlbnN1cmUgaW5zdGFsbCB0cmFja2VkIGV2ZW50cyBhcmUgc2VudFxuICAgICAgICAvLyB0byB0aGUgc2VydmVyIGlmIGluc3RhbGwgSUQgKG9yaWdpbmFsIHZpc2l0b3IgSUQpIGNoYW5nZXMgKGUuZy4gaWYgYXBwXG4gICAgICAgIC8vIGNsZWFycyBsb2NhbCBzdG9yYWdlIGtleXMgYW5kIElEIGlzIHJlZ2VuZXJhdGVkKVxuICAgICAgICBpbnN0YWxsSWQsXG4gICAgICAgIHNka1ZlcnNpb24sXG4gICAgICAgIHBheWxvYWQuYXBwLmJ1bmRsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UudHosXG4gICAgICAgIHBheWxvYWQuZGV2aWNlLmxvY2FsZSxcbiAgICAgICAgcGF5bG9hZC5kZXZpY2UubmFtZVxuICAgIF07XG5cbiAgICBjb25zdCBoYXNoID0gY3lyYjUzKGhhc2hQYXJ0cy5qb2luKCd8JykpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ2RldGFpbHNIYXNoJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nSGFzaCA9PT0gaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuSU5TVEFMTF9UUkFDS0VELCBwYXlsb2FkKVxuICAgICAgICAudGhlbigoKSA9PiBzZXQoJ2RldGFpbHNIYXNoJywgaGFzaCkpXG4gICAgICAgIC50aGVuKCgpID0+IHZvaWQgMCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbExpc3RJdGVtIHtcbiAgICBjaGFubmVsOiBDaGFubmVsO1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgYWxsQ2hhbm5lbHM6IENoYW5uZWxbXSxcbiAgICBzZWxlY3Rpb25Db25maWc6IE11bHRpQ2hhbm5lbFNlbGVjdGlvbkNvbmZpZ1xuKSB7XG4gICAgcmV0dXJuIGFsbENoYW5uZWxzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICBjID0+XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLnByZXNlbnRlZFV1aWRzID09PSAnYWxsJyB8fFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNvbmZpZy5wcmVzZW50ZWRVdWlkcy5pbmNsdWRlcyhjLnV1aWQpXG4gICAgICAgIClcbiAgICAgICAgLm1hcDxDaGFubmVsTGlzdEl0ZW0+KGMgPT4gKHtcbiAgICAgICAgICAgIGNoYW5uZWw6IHsgLi4uYyB9LFxuICAgICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgICAgICBjLnN1YnNjcmliZWQudmFsdWVPZigpIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29uZmlnLmNoZWNrZWRVdWlkcyA9PT0gJ2FsbCcgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db25maWcuY2hlY2tlZFV1aWRzLmluY2x1ZGVzKGMudXVpZClcbiAgICAgICAgfSkpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbnMge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmVudFR5cGUsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBnZXRCcm93c2VyTmFtZSwgZ2V0RnVsbFVybCwgcGFyc2VRdWVyeVN0cmluZyB9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IFNhZmFyaVB1c2hNYW5hZ2VyIGZyb20gJy4vc2FmYXJpJztcbmltcG9ydCBXM2NQdXNoTWFuYWdlciBmcm9tICcuL3czYyc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgdHlwZSBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgPSAnc3Vic2NyaWJlZCcgfCAndW5zdWJzY3JpYmVkJyB8ICdibG9ja2VkJztcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgICBXM0MgPSAzLFxuICAgIFNBRkFSSSA9IDRcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICAgIFBVU0ggPSAxXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE9wc01hbmFnZXIge1xuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+O1xuICAgIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuICAgIHJlcXVlc3RQZXJtaXNzaW9uQW5kUmVnaXN0ZXJGb3JQdXNoKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPFB1c2hTdWJzY3JpcHRpb25TdGF0ZT47XG4gICAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKGN0eDogQ29udGV4dCk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPjtcbiAgICBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbiAgICBpc05hdGl2ZVByb21wdFNob3duKCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3VtdWxvc1B1c2hOb3RpZmljYXRpb24ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGljb25Vcmw/OiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdXNoUGF5bG9hZCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtc2c6IHN0cmluZztcbiAgICBkYXRhOiB7XG4gICAgICAgICdrLm1lc3NhZ2UnOiB7XG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5QVVNIO1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbiAgICB1cmw6IHN0cmluZyB8IG51bGw7XG4gICAgaW1hZ2U6IHN0cmluZyB8IG51bGw7XG4gICAgaWNvbjogc3RyaW5nIHwgbnVsbDtcbn1cblxubGV0IG1hbmFnZXI6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQdXNoT3BzTWFuYWdlcihcbiAgICBjdHg6IENvbnRleHRcbik6IFByb21pc2U8UHVzaE9wc01hbmFnZXI+IHtcbiAgICBpZiAobWFuYWdlcikge1xuICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgIGlmIChicm93c2VyID09PSAnc2FmYXJpJyAmJiAhKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkge1xuICAgICAgICBtYW5hZ2VyID0gbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCkudGhlbihcbiAgICAgICAgICAgIGNmZyA9PiBuZXcgU2FmYXJpUHVzaE1hbmFnZXIoY2ZnKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9taXNlLnJlc29sdmUobmV3IFczY1B1c2hNYW5hZ2VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYW5hZ2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tPcGVuRnJvbVF1ZXJ5KGN0eDogQ29udGV4dCkge1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKGJyb3dzZXIgIT09ICdzYWZhcmknKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKCk7XG5cbiAgICBpZiAoIXBhcmFtcz8uWydrbmlkJ10pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQoY3R4LCBFdmVudFR5cGUuTUVTU0FHRV9PUEVORUQsIHtcbiAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuUFVTSCxcbiAgICAgICAgaWQ6IE51bWJlcihwYXJhbXNbJ2tuaWQnXSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyU2VydmljZVdvcmtlcih3b3JrZXJQYXRoOiBzdHJpbmcpIHtcbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1NlcnZpY2VXb3JrZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIsIGFib3J0aW5nLi4uJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFdvcmtlclVybCA9IGdldEZ1bGxVcmwod29ya2VyUGF0aCk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoZnVsbFdvcmtlclVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkKFxuICAgIHBheWxvYWQ6IFB1c2hQYXlsb2FkXG4pOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbiB7XG4gICAgY29uc3QgeyAnay5tZXNzYWdlJzogXywgLi4udXNlckRhdGEgfSA9IHBheWxvYWQuZGF0YTtcblxuICAgIGNvbnN0IHB1c2g6IEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uID0ge1xuICAgICAgICBpZDogcGF5bG9hZC5kYXRhWydrLm1lc3NhZ2UnXS5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogcGF5bG9hZC50aXRsZSxcbiAgICAgICAgbWVzc2FnZTogcGF5bG9hZC5tc2csXG4gICAgICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgICAgICB1cmw6IHBheWxvYWQudXJsID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaWNvblVybDogcGF5bG9hZC5pY29uID8/IHVuZGVmaW5lZCxcbiAgICAgICAgaW1hZ2VVcmw6IHBheWxvYWQuaW1hZ2UgPz8gdW5kZWZpbmVkXG4gICAgfTtcbiAgICByZXR1cm4gcHVzaDtcbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2ZW50VHlwZSwgUGxhdGZvcm1Db25maWcsIFNlcnZpY2UsIHRyYWNrRXZlbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBQdXNoT3BzTWFuYWdlciwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBjeXJiNTMsIGRlZmVyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICcuLi9zdG9yYWdlJztcblxuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vcHVzaCc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuXG5mdW5jdGlvbiBoYXNoVG9rZW4oY3R4OiBDb250ZXh0LCB0b2tlbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7dG9rZW59YCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhZmFyaVB1c2hNYW5hZ2VyIGltcGxlbWVudHMgUHVzaE9wc01hbmFnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2ZnOiBQbGF0Zm9ybUNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKGNmZzogUGxhdGZvcm1Db25maWcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgfVxuICAgIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKFxuICAgICAgICBjdHg6IENvbnRleHRcbiAgICApOiBQcm9taXNlPE5vdGlmaWNhdGlvblBlcm1pc3Npb24+IHtcbiAgICAgICAgY29uc3Qgc3ZjVXJsID0gYCR7Y3R4LnVybEZvclNlcnZpY2UoU2VydmljZS5QVVNIKX0vc2FmYXJpLyR7XG4gICAgICAgICAgICBjdHguYXBpS2V5XG4gICAgICAgIH1gO1xuXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gZGVmZXI8Tm90aWZpY2F0aW9uUGVybWlzc2lvbj4oKTtcblxuICAgICAgICB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKFxuICAgICAgICAgICAgc3ZjVXJsLFxuICAgICAgICAgICAgdGhpcy5jZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgcGVybSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGVybSk7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwZXJtLnBlcm1pc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGFzeW5jIHB1c2hSZWdpc3RlcihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUb2tlbkhhc2ggPSBhd2FpdCBnZXQ8bnVtYmVyPigncHVzaFRva2VuSGFzaCcpO1xuICAgICAgICBjb25zdCB0b2tlbkhhc2ggPSBoYXNoVG9rZW4oY3R4LCBwZXJtLmRldmljZVRva2VuKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUb2tlbkhhc2ggPT09IHRva2VuSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdHJhY2tFdmVudChjdHgsIEV2ZW50VHlwZS5QVVNIX1JFR0lTVEVSRUQsIHtcbiAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5TQUZBUkksXG4gICAgICAgICAgICB0b2tlbjogcGVybS5kZXZpY2VUb2tlbixcbiAgICAgICAgICAgIGJ1bmRsZUlkOiBjZmcuc2FmYXJpUHVzaElkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldCgncHVzaFRva2VuSGFzaCcsIHRva2VuSGFzaCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtPy5wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9rZW5IYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hUb2tlbkhhc2gnKTtcbiAgICAgICAgY29uc3QgdG9rZW5IYXNoID0gaGFzaFRva2VuKGN0eCwgcGVybS5kZXZpY2VUb2tlbiA/PyAnJyk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVG9rZW5IYXNoID09PSB0b2tlbkhhc2ggJiYgcGVybS5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlQXV0b1Jlc3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWN0eC5hdXRvUmVzdWJzY3JpYmUgfHwgIXRoaXMuY2ZnLnNhZmFyaVB1c2hJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2ZnID0gYXdhaXQgbG9hZFBsYXRmb3JtQ29uZmlnKGN0eCk7XG4gICAgICAgIGNvbnN0IHBlcm0gPSB3aW5kb3cuc2FmYXJpPy5wdXNoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24oXG4gICAgICAgICAgICBjZmcuc2FmYXJpUHVzaElkIGFzIHN0cmluZ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICghcGVybSB8fCBwZXJtLnBlcm1pc3Npb24gIT09ICdncmFudGVkJyB8fCAhcGVybS5kZXZpY2VUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgICAgICdBdXRvLXJlc3Vic2NyaXB0aW9uOiBwZXJtaXNzaW9uIG5vdCBncmFudGVkIG9yIG5vIHRva2VuLCBhYm9ydGluZydcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ1Rva2VuSGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoVG9rZW5IYXNoJyk7XG4gICAgICAgIGNvbnN0IHRva2VuSGFzaCA9IGhhc2hUb2tlbihjdHgsIHBlcm0uZGV2aWNlVG9rZW4pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1Rva2VuSGFzaCA9PT0gdG9rZW5IYXNoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0F1dG8tcmVzdWJzY3JpcHRpb246IGFscmVhZHkgaGF2ZSBhIHRva2VuIGhhc2ggZm9yIHNhbWUgdG9rZW4sIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hSZWdpc3RlcihjdHgpO1xuICAgIH1cblxuICAgIGFzeW5jIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZlbnRUeXBlLCB0cmFja0V2ZW50IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHVzaE9wc01hbmFnZXIsIFB1c2hTdWJzY3JpcHRpb25TdGF0ZSwgVG9rZW5UeXBlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBiYXNlNjRVcmxFbmNvZGUsIGN5cmI1MywgZ2V0QnJvd3Nlck5hbWUsIGdldEZ1bGxVcmwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJy4uL3N0b3JhZ2UnO1xuXG5jb25zdCBCTFVSX0VWRU5UX1RJTUVPVVRfTUlMTElTID0gMTAwMDtcblxuZnVuY3Rpb24gaGFzU2FtZUtleSh2YXBpZEtleTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBjb25zdCBleGlzdGluZ1N1YktleSA9IHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5O1xuXG4gICAgaWYgKCFleGlzdGluZ1N1YktleSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ViS2V5ID0gYmFzZTY0VXJsRW5jb2RlKGV4aXN0aW5nU3ViS2V5KTtcblxuICAgIHJldHVybiBzdWJLZXkgPT09IHZhcGlkS2V5O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKFxuICAgIHdvcmtlclBhdGg6IHN0cmluZ1xuKTogUHJvbWlzZTxTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uPiB7XG4gICAgY29uc3QgZnVsbFdvcmtlclVybCA9IGdldEZ1bGxVcmwod29ya2VyUGF0aCk7XG5cbiAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oXG4gICAgICAgIGZ1bGxXb3JrZXJVcmxcbiAgICApO1xuXG4gICAgaWYgKCF3b3JrZXJSZWcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdObyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29ya2VyUmVnO1xufVxuXG5mdW5jdGlvbiBoYXNoU3Vic2NyaXB0aW9uKGN0eDogQ29udGV4dCwgc3ViOiBQdXNoU3Vic2NyaXB0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gY3lyYjUzKGAke2N0eC5hcGlLZXl9OiR7c3ViLmVuZHBvaW50fWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXM2NQdXNoTWFuYWdlciBpbXBsZW1lbnRzIFB1c2hPcHNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgcmVnaXN0ZXJJblByb2dyZXNzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhc3luYyByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbihcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxOb3RpZmljYXRpb25QZXJtaXNzaW9uPiB7XG4gICAgICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICdOb3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlciwgYWJvcnRpbmcuLi4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaFJlZ2lzdGVyKGN0eDogQ29udGV4dCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnUHVzaCBub3RpZmljYXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKFxuICAgICAgICAgICAgY3R4LnNlcnZpY2VXb3JrZXJQYXRoXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdTdWIgPSBhd2FpdCB3b3JrZXJSZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nU3ViICYmICFoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpKSB7XG4gICAgICAgICAgICBhd2FpdCBleGlzdGluZ1N1Yj8udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YiA9IGF3YWl0IHdvcmtlclJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IGN0eC52YXBpZFB1YmxpY0tleSxcbiAgICAgICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmRwb2ludEhhc2ggPSBoYXNoU3Vic2NyaXB0aW9uKGN0eCwgc3ViKTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ0VuZHBvaW50SGFzaCA9IGF3YWl0IGdldDxudW1iZXI+KCdwdXNoRW5kcG9pbnRIYXNoJyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXhwaXJ5ID0gYXdhaXQgZ2V0PG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ+KFxuICAgICAgICAgICAgJ3B1c2hFeHBpcmVzQXQnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXhpc3RpbmdFbmRwb2ludEhhc2ggPT09IGVuZHBvaW50SGFzaCAmJlxuICAgICAgICAgICAgKCFleGlzdGluZ0V4cGlyeSB8fCBleGlzdGluZ0V4cGlyeSA+IERhdGUubm93KCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBhd2FpdCB0aGlzLnRyYWNrRXZlbnRBbmRDYWNoZShjdHgsIHN1YiwgZW5kcG9pbnRIYXNoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHRyYWNrRXZlbnRBbmRDYWNoZShjdHg6IENvbnRleHQsIHB1c2hTdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24sIGVuZHBvaW50SGFzaDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVySW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0cmFja0V2ZW50KGN0eCwgRXZlbnRUeXBlLlBVU0hfUkVHSVNURVJFRCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFRva2VuVHlwZS5XM0MsXG4gICAgICAgICAgICAgICAgdG9rZW46IHB1c2hTdWJzY3JpcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgYXdhaXQgc2V0KCdwdXNoRW5kcG9pbnRIYXNoJywgZW5kcG9pbnRIYXNoKTtcbiAgICAgICAgICAgIGF3YWl0IHNldCgncHVzaEV4cGlyZXNBdCcsIHB1c2hTdWJzY3JpcHRpb24uZXhwaXJhdGlvblRpbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgIGN0eDogQ29udGV4dFxuICAgICk6IFByb21pc2U8aW1wb3J0KCcuJykuUHVzaFN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgICAgIGNvbnN0IHBlcm0gPSBhd2FpdCB0aGlzLnJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKGN0eCk7XG5cbiAgICAgICAgc3dpdGNoIChwZXJtKSB7XG4gICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Vuc3Vic2NyaWJlZCc7XG4gICAgICAgICAgICBjYXNlICdkZW5pZWQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYmxvY2tlZCc7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgICAgIHJldHVybiAnc3Vic2NyaWJlZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRTdWJzY3JpcHRpb25TdGF0ZShcbiAgICAgICAgY3R4OiBDb250ZXh0XG4gICAgKTogUHJvbWlzZTxQdXNoU3Vic2NyaXB0aW9uU3RhdGU+IHtcbiAgICAgICAgY29uc3QgcGVybSA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uO1xuXG4gICAgICAgIGlmIChwZXJtID09PSAnZGVuaWVkJykge1xuICAgICAgICAgICAgcmV0dXJuICdibG9ja2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZyA9IGF3YWl0IGdldEFjdGl2ZVNlcnZpY2VXb3JrZXJSZWcoY3R4LnNlcnZpY2VXb3JrZXJQYXRoKTtcbiAgICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnPy5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAoc3ViICYmIHBlcm0gPT09ICdncmFudGVkJyAmJiBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgc3ViKSkge1xuICAgICAgICAgICAgcmV0dXJuICdzdWJzY3JpYmVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndW5zdWJzY3JpYmVkJztcbiAgICB9XG5cbiAgICBhc3luYyBoYW5kbGVBdXRvUmVzdWJzY3JpcHRpb24oY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghY3R4LmF1dG9SZXN1YnNjcmliZSkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdBdXRvLXJlc3Vic2NyaWJlOiBub3QgZW5hYmxlZCwgYWJvcnRpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBlcm0gPSBOb3RpZmljYXRpb24ucGVybWlzc2lvbjtcblxuICAgICAgICBpZiAocGVybSAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgYEF1dG8tcmVzdWJzY3JpYmU6IHBlcm1pc3Npb24gbm90IGdyYW50ZWQsIGFib3J0aW5nOiAke3Blcm19YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRW5kcG9pbnRIYXNoID0gYXdhaXQgZ2V0PG51bWJlcj4oJ3B1c2hFbmRwb2ludEhhc2gnKTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdFeHBpcnkgPSBhd2FpdCBnZXQ8bnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZD4oXG4gICAgICAgICAgICAncHVzaEV4cGlyZXNBdCdcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB3b3JrZXJSZWcgPSBhd2FpdCBnZXRBY3RpdmVTZXJ2aWNlV29ya2VyUmVnKFxuICAgICAgICAgICAgY3R4LnNlcnZpY2VXb3JrZXJQYXRoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nU3ViID0gYXdhaXQgd29ya2VyUmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGxldCBleGlzdGluZ1N1Ykhhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChleGlzdGluZ1N1Yikge1xuICAgICAgICAgICAgZXhpc3RpbmdTdWJIYXNoID0gaGFzaFN1YnNjcmlwdGlvbihjdHgsIGV4aXN0aW5nU3ViKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGV4aXN0aW5nRW5kcG9pbnRIYXNoID09PSBleGlzdGluZ1N1Ykhhc2ggJiZcbiAgICAgICAgICAgIGV4aXN0aW5nU3ViICYmXG4gICAgICAgICAgICBoYXNTYW1lS2V5KGN0eC52YXBpZFB1YmxpY0tleSwgZXhpc3RpbmdTdWIpICYmXG4gICAgICAgICAgICAoZXhpc3RpbmdFeHBpcnkgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBleGlzdGluZ0V4cGlyeSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdFeHBpcnkgPiBEYXRlLm5vdygpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAnQXV0by1yZXN1YnNjcmliZTogYWxyZWFkeSBoYXZlIGEgbm9uLWV4cGlyZWQgZW5kcG9pbnQgaGFzaCBmb3Igc2FtZSBzdWIsIGFib3J0aW5nJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnQXV0by1yZXN1YnNjcmliZTogYXR0ZW1wdGluZyByZXN1YnNjcmlwdGlvbicpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoUmVnaXN0ZXIoY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzTmF0aXZlUHJvbXB0U2hvd24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJOYW1lID0gZ2V0QnJvd3Nlck5hbWUoKTtcblxuICAgICAgICBpZiAoJ2Nocm9tZScgIT09IGJyb3dzZXJOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJsdXJFdmVudEZpcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yQmx1ciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmx1ckV2ZW50RmlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYW5jZWxCbHVyVGltZW91dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuICAgICAgICAgICAgICAgIGJsdXJFdmVudEZpcmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBjaGVja0ZvckJsdXIpO1xuXG4gICAgICAgICAgICBjb25zdCBjYW5jZWxCbHVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2hlY2tGb3JCbHVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIEJMVVJfRVZFTlRfVElNRU9VVF9NSUxMSVMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHsgb25ET01SZWFkeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvb3RGcmFtZUNvbnRhaW5lciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290RnJhbWUge1xuICAgIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyczogUm9vdEZyYW1lQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9ICdrdW11bG9zLXVpLXJvb3QnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcblxuICAgICAgICBvbkRPTVJlYWR5KCgpID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuZWxlbWVudC5pZCA9IGBrdW11bG9zLXVpLXJvb3QtJHtuYW1lfWA7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAyMDE2LCBKYWtlIEFyY2hpYmFsZFxuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbi8vICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgcmVhZG9ubHkgX2RicDogUHJvbWlzZTxJREJEYXRhYmFzZT47XG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWUgPSAna2V5dmFsLXN0b3JlJywgcmVhZG9ubHkgc3RvcmVOYW1lID0gJ2tleXZhbCcpIHtcbiAgICAgICAgdGhpcy5fZGJwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XG4gICAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNldHVwOiBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHN0b3JlXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvcGVucmVxLnJlc3VsdC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3dpdGhJREJTdG9yZShcbiAgICAgICAgdHlwZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgICAgICBjYWxsYmFjazogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gdm9pZFxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGJwLnRoZW4oXG4gICAgICAgICAgICBkYiA9PlxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXMuc3RvcmVOYW1lKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldCBzdG9yZTogU3RvcmU7XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRTdG9yZSgpIHtcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldDxUeXBlPihcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKClcbik6IFByb21pc2U8VHlwZT4ge1xuICAgIGxldCByZXE6IElEQlJlcXVlc3Q7XG4gICAgcmV0dXJuIHN0b3JlXG4gICAgICAgIC5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcbiAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiByZXEucmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChcbiAgICBrZXk6IElEQlZhbGlkS2V5LFxuICAgIHZhbHVlOiBhbnksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsKFxuICAgIGtleTogSURCVmFsaWRLZXksXG4gICAgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKGtleSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihzdG9yZSA9IGdldERlZmF1bHRTdG9yZSgpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSk6IFByb21pc2U8SURCVmFsaWRLZXlbXT4ge1xuICAgIGNvbnN0IGtleXM6IElEQlZhbGlkS2V5W10gPSBbXTtcblxuICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuX3dpdGhJREJTdG9yZSgncmVhZG9ubHknLCBzdG9yZSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIHN0b3JlLmdldEFsbEtleXMoKSwgYnV0IGl0IGlzbid0IHN1cHBvcnRlZCBieSBFZGdlIG9yIFNhZmFyaS5cbiAgICAgICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXG4gICAgICAgICAgICAoc3RvcmUub3BlbktleUN1cnNvciB8fCBzdG9yZS5vcGVuQ3Vyc29yKS5jYWxsKFxuICAgICAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgICApLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZXN1bHQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5jb250aW51ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ga2V5cyk7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0UmVtaW5kZXJcbn0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHtcbiAgICBTdG9yZSxcbiAgICBkZWwgYXMgaWRiRGVsLFxuICAgIGdldCBhcyBpZGJHZXQsXG4gICAgc2V0IGFzIGlkYlNldFxufSBmcm9tICcuL2lkYi1rZXl2YWwnO1xuXG5pbXBvcnQgeyBQdXNoUGF5bG9hZCB9IGZyb20gJy4uL3B1c2gnO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgna3VtdWxvcycsICdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oa2V5OiBJREJWYWxpZEtleSk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiBpZGJHZXQoa2V5LCBzdG9yZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VCBleHRlbmRzIGFueT4oa2V5OiBJREJWYWxpZEtleSwgdmFsdWU6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gaWRiU2V0KGtleSwgdmFsdWUsIHN0b3JlKS50aGVuKCgpID0+IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbChrZXk6IElEQlZhbGlkS2V5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGlkYkRlbChrZXksIHN0b3JlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RDb25maWcoY29uZmlnOiBDb25maWd1cmF0aW9uKTogUHJvbWlzZTxDb25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHNldDxDb25maWd1cmF0aW9uPignY29uZmlnJywge1xuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXG4gICAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgICAgc2VjcmV0S2V5OiBjb25maWcuc2VjcmV0S2V5LFxuICAgICAgICB2YXBpZFB1YmxpY0tleTogY29uZmlnLnZhcGlkUHVibGljS2V5LFxuICAgICAgICBzZXJ2aWNlV29ya2VyUGF0aDogY29uZmlnLnNlcnZpY2VXb3JrZXJQYXRoLFxuICAgICAgICBhdXRvUmVzdWJzY3JpYmU6IGNvbmZpZy5hdXRvUmVzdWJzY3JpYmUsXG4gICAgICAgIHB1c2hQcm9tcHRzOiBjb25maWcucHVzaFByb21wdHNcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNpc3RERExDb25maWcoXG4gICAgY29uZmlnOiBEZGxQcm9tcHRDb25maWdbXVxuKTogUHJvbWlzZTxEZGxQcm9tcHRDb25maWdbXT4ge1xuICAgIHJldHVybiBzZXQ8RGRsUHJvbXB0Q29uZmlnW10+KCdkZGxjb25maWcnLCBjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc2lzdFByb21wdFJlbWluZGVyKFxuICAgIHByb21wdFV1aWQ6IHN0cmluZyxcbiAgICByZW1pbmRlcjogUHJvbXB0UmVtaW5kZXJcbikge1xuICAgIHJldHVybiBzZXQoYHJlbWluZGVyLiR7cHJvbXB0VXVpZH1gLCByZW1pbmRlcik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9tcHRSZW1pbmRlcihcbiAgICBwcm9tcHRVdWlkOiBzdHJpbmdcbik6IFByb21pc2U8UHJvbXB0UmVtaW5kZXIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0PFByb21wdFJlbWluZGVyIHwgdW5kZWZpbmVkPihgcmVtaW5kZXIuJHtwcm9tcHRVdWlkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dEZyb21TdG9yZWRDb25maWcoKTogUHJvbWlzZTxDb250ZXh0IHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIGdldDxDb25maWd1cmF0aW9uPignY29uZmlnJykudGhlbihjb25maWcgPT5cbiAgICAgICAgY29uZmlnID8gbmV3IENvbnRleHQoY29uZmlnKSA6IHVuZGVmaW5lZFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaXN0T3BlbmVkUHVzaFBheWxvYWQoXG4gICAgcGF5bG9hZDogUHVzaFBheWxvYWRcbik6IFByb21pc2U8UHVzaFBheWxvYWQ+IHtcbiAgICByZXR1cm4gc2V0KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkKCk6IFByb21pc2U8XG4gICAgUHVzaFBheWxvYWQgfCB1bmRlZmluZWRcbj4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXQ8UHVzaFBheWxvYWQ+KCdtb3N0UmVjZW50T3BlbmVkUHVzaFBheWxvYWQnKTtcblxuICAgIGF3YWl0IGRlbCgnbW9zdFJlY2VudE9wZW5lZFB1c2hQYXlsb2FkJyk7XG5cbiAgICByZXR1cm4gcGF5bG9hZCA/PyB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBTREtGZWF0dXJlIH0gZnJvbSAnLi9pbmRleCc7XG5cbnR5cGUgRmVhdHVyZURlcGVuZGVuY3kgPVxuICAgIHwgc3RyaW5nXG4gICAgfCBvYmplY3RcbiAgICB8IElEQkZhY3RvcnlcbiAgICB8IFByb21pc2VDb25zdHJ1Y3RvclxuICAgIHwgTm90aWZpY2F0aW9uXG4gICAgfCBQdXNoTWFuYWdlclxuICAgIHwgU2VydmljZVdvcmtlckNvbnRhaW5lclxuICAgIHwgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uO1xuXG5jb25zdCBDT1JFX0ZFQVRVUkVfREVQRU5ERU5DSUVTOiBGZWF0dXJlRGVwZW5kZW5jeVtdID0gW1xuICAgIHR5cGVvZiBQcm9taXNlLFxuICAgIHR5cGVvZiBmZXRjaCxcbiAgICB0eXBlb2YgaW5kZXhlZERCXG5dO1xuXG5jb25zdCBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0s6IHsgW2tleSBpbiBTREtGZWF0dXJlXTogKCkgPT4gYm9vbGVhbiB9ID0ge1xuICAgIHB1c2g6IGlzQnJvd3NlclN1cHBvcnRlZEZvclB1c2gsXG4gICAgZGRsOiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGxcbn07XG5cbi8vIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcbmV4cG9ydCBmdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKFxuICAgICAgICAgICAgY1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgICAgICAgICAgIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoKDFlNykudG9TdHJpbmcoKSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKFxuICAgICAgICAvWzAxOF0vZyxcbiAgICAgICAgYyA9PlxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE51bWJlcihjKSBeXG4gICAgICAgICAgICAgICAgKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICZcbiAgICAgICAgICAgICAgICAgICAgKDE1ID4+IChOdW1iZXIoYykgLyA0KSkpXG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGJyb3dzZXJzID0gWydlZGdlJywgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaSddO1xuXG4gICAgZm9yIChsZXQgYiBvZiBicm93c2Vycykge1xuICAgICAgICBpZiAodWEuaW5kZXhPZihiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlclN1cHBvcnRlZChzZGtGZWF0dXJlcz86IFNES0ZlYXR1cmVbXSkge1xuICAgIHNka0ZlYXR1cmVzID0gc2RrRmVhdHVyZXMgPz8gW107XG4gICAgaWYgKCFzZGtGZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgc2RrRmVhdHVyZXMucHVzaChTREtGZWF0dXJlLlBVU0gpO1xuICAgIH1cblxuICAgIHJldHVybiBzZGtGZWF0dXJlcy5maWx0ZXIoZiA9PiBGRUFUVVJFX0RFUEVOREVOQ1lfQ0hFQ0tbZl0oKSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gaXNCcm93c2VyU3VwcG9ydGVkRm9yUHVzaCgpIHtcbiAgICBjb25zdCBjb3JlRGVwZW5kZW5jaWVzID0gWy4uLkNPUkVfRkVBVFVSRV9ERVBFTkRFTkNJRVNdO1xuICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgaWYgKCdzYWZhcmknID09PSBicm93c2VyICYmICEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgIGNvcmVEZXBlbmRlbmNpZXMucHVzaCh0eXBlb2Ygd2luZG93LnNhZmFyaT8ucHVzaE5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29yZURlcGVuZGVuY2llcy5wdXNoKFxuICAgICAgICAgICAgLi4uW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBOb3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgdHlwZW9mIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBQdXNoTWFuYWdlclxuICAgICAgICAgICAgXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja1JlcXVpcmVkKGNvcmVEZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBpc0Jyb3dzZXJTdXBwb3J0ZWRGb3JEZGwoKSB7XG4gICAgcmV0dXJuIGNoZWNrUmVxdWlyZWQoQ09SRV9GRUFUVVJFX0RFUEVOREVOQ0lFUyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWQoY29yZURlcGVuZGVuY2llczogRmVhdHVyZURlcGVuZGVuY3lbXSkge1xuICAgIHJldHVybiBjb3JlRGVwZW5kZW5jaWVzLnJlZHVjZShcbiAgICAgICAgKHN1cHBvcnRlZDogYm9vbGVhbiwgZGVwZW5kZW5jeTogRmVhdHVyZURlcGVuZGVuY3kpID0+XG4gICAgICAgICAgICBzdXBwb3J0ZWQgJiYgZGVwZW5kZW5jeSAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICAgIHRydWVcbiAgICApO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9pbXVsXG5jb25zdCBpbXVsID1cbiAgICBNYXRoLmltdWwgfHxcbiAgICBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGIgfD0gMDsgLy8gZW5zdXJlIHRoYXQgb3BCIGlzIGFuIGludGVnZXIuIG9wQSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY29lcmNlZC5cbiAgICAgICAgLy8gZmxvYXRpbmcgcG9pbnRzIGdpdmUgdXMgNTMgYml0cyBvZiBwcmVjaXNpb24gdG8gd29yayB3aXRoIHBsdXMgMSBzaWduIGJpdFxuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGhhbmRsZWQgZm9yIG91ciBjb252aWVuZW5jZTpcbiAgICAgICAgLy8gMS4gMHgwMDNmZmZmZiAvKm9wQSAmIDB4MDAwZmZmZmYqLyAqIDB4N2ZmZmZmZmYgLypvcEIqLyA9IDB4MWZmZmZmN2ZjMDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmY3ZmMwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIHZhciByZXN1bHQgPSAoYSAmIDB4MDAzZmZmZmYpICogYjtcbiAgICAgICAgLy8gMi4gV2UgY2FuIHJlbW92ZSBhbiBpbnRlZ2VyIGNvZXJzaW9uIGZyb20gdGhlIHN0YXRlbWVudCBhYm92ZSBiZWNhdXNlOlxuICAgICAgICAvLyAgICAweDFmZmZmZjdmYzAwMDAxICsgMHhmZmMwMDAwMCA9IDB4MWZmZmZmZmY4MDAwMDFcbiAgICAgICAgLy8gICAgMHgxZmZmZmZmZjgwMDAwMSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIC8qMHgxZmZmZmZmZmZmZmZmZiovXG4gICAgICAgIGlmIChhICYgMHhmZmMwMDAwMCAvKiE9PSAwKi8pIHJlc3VsdCArPSAoKGEgJiAweGZmYzAwMDAwKSAqIGIpIHwgMDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8IDA7XG4gICAgfTtcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyMTcxNDgwXG5leHBvcnQgZnVuY3Rpb24gY3lyYjUzKHN0cjogc3RyaW5nLCBzZWVkID0gMCk6IG51bWJlciB7XG4gICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWQsXG4gICAgICAgIGgyID0gMHg0MWM2Y2U1NyBeIHNlZWQ7XG4gICAgZm9yIChsZXQgaSA9IDAsIGNoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGgxID0gaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKTtcbiAgICAgICAgaDIgPSBpbXVsKGgyIF4gY2gsIDE1OTczMzQ2NzcpO1xuICAgIH1cbiAgICBoMSA9XG4gICAgICAgIGltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBpbXVsKGgyIF4gKGgyID4+PiAxMyksIDMyNjY0ODk5MDkpO1xuICAgIGgyID1cbiAgICAgICAgaW11bChoMiBeIChoMiA+Pj4gMTYpLCAyMjQ2ODIyNTA3KSBeIGltdWwoaDEgXiAoaDEgPj4+IDEzKSwgMzI2NjQ4OTkwOSk7XG4gICAgcmV0dXJuIDQyOTQ5NjcyOTYgKiAoMjA5NzE1MSAmIGgyKSArIChoMSA+Pj4gMCk7XG59XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvUmVndWxhcl9FeHByZXNzaW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2goXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIHVybDogUmVxdWVzdEluZm8sXG4gICAgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IG1ldGhvZDogJ0dFVCcgfVxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/PyB7fTtcblxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGN0eC5hdXRoSGVhZGVyLFxuICAgICAgICAuLi5leGlzdGluZ0hlYWRlcnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZWRGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0NvZGU6IG51bWJlciwgc3RhdHVzVGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGBhdXRoZWQgZmV0Y2ggZmFpbGVkOiAke3N0YXR1c0NvZGV9LCAke3N0YXR1c1RleHR9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aGVkRmV0Y2hKc29uPFQ+KFxuICAgIGN0eDogQ29udGV4dCxcbiAgICB1cmw6IFJlcXVlc3RJbmZvLFxuICAgIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdFxuKTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIGF1dGhlZEZldGNoKGN0eCwgdXJsLCBvcHRpb25zKS50aGVuKHIgPT4ge1xuICAgICAgICBpZiAoIXIub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBBdXRoZWRGZXRjaEVycm9yKHIuc3RhdHVzLCByLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHIuanNvbigpO1xuICAgIH0pO1xufVxuXG4vLyBCYXNlZCBvbiB0aGUgYWxwaGFiZXRzIGluIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM0NjQ4IFRhYmxlcyAxICYgMlxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFVybEVuY29kZShidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbnRzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBjb25zdCBiYXNlNjRFbmNvZGVkID0gYnRvYShcbiAgICAgICAgaW50cy5yZWR1Y2UoKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLCAnJylcbiAgICApO1xuICAgIGNvbnN0IHVybFZhcmlhbnQgPSBiYXNlNjRFbmNvZGVkXG4gICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAucmVwbGFjZSgvXFwvL2csICdfJylcbiAgICAgICAgLnJlcGxhY2UoLz0vZywgJycpO1xuXG4gICAgcmV0dXJuIHVybFZhcmlhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsVXJsKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgVVJMKHBhdGgsIGxvY2F0aW9uLm9yaWdpbikuaHJlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyPFQ+KCkge1xuICAgIGNvbnN0IGRlZmVycmVkID0ge1xuICAgICAgICByZXNvbHZlOiAobnVsbCBhcyB1bmtub3duKSBhcyAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKG51bGwgYXMgdW5rbm93bikgYXMgKHJlYXNvbj86IGFueSkgPT4gdm9pZCxcbiAgICAgICAgcHJvbWlzZTogKG51bGwgYXMgdW5rbm93bikgYXMgUHJvbWlzZTxUPlxuICAgIH07XG5cbiAgICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAoZGVmZXJyZWQgYXMgYW55KS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgKGRlZmVycmVkIGFzIGFueSkucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhcbiAgICBxczogc3RyaW5nID0gbG9jYXRpb24uc2VhcmNoLFxuICAgIGV4Y2x1ZGVkUXVlcnlLZXlzOiBzdHJpbmdbXSA9IFtdXG4pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcXVlcnkgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocXMubGVuZ3RoID4gMCkge1xuICAgICAgICBxdWVyeSA9IHFzXG4gICAgICAgICAgICAuc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgLm1hcCh2YXJzID0+IHZhcnMuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgIC5tYXAocGFpcnMgPT4gcGFpcnMubWFwKGRlY29kZVVSSUNvbXBvbmVudCkpXG4gICAgICAgICAgICAuZmlsdGVyKHBhaXJzID0+IGV4Y2x1ZGVkUXVlcnlLZXlzLmluZGV4T2YocGFpcnNbMF0pID09PSAtMSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKHEsIHBhaXIpID0+ICh7IC4uLnEsIFtwYWlyWzBdXTogcGFpclsxXSB9KSwge30pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRE9NUmVhZHkoZm46ICgpID0+IHZvaWQpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL2FuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxtb2JpbGUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDbGllbnRNZXNzYWdlVHlwZSxcbiAgICBGaW5nZXJwcmludENvbXBvbmVudHMsXG4gICAgSG9zdE1lc3NhZ2UsXG4gICAgSG9zdE1lc3NhZ2VUeXBlXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBSZWZPYmplY3QsIGNyZWF0ZVJlZiwgaCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3ByZWFjdC9jb21wYXQnO1xuXG5jb25zdCBGUF9DQVBUVVJFX1VSTCA9ICdodHRwczovL3BkLmFwcC5kZWxpdmVyeSc7XG5cbmVudW0gQ2FwdHVyZVN0YXRlIHtcbiAgICBJRExFLFxuICAgIENBUFRVUklOR1xufVxuXG5pbnRlcmZhY2UgRnBDYXB0dXJlUHJvcHMge1xuICAgIG9uQ2FwdHVyZWQ6IChjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGcENhcHR1cmVTdGF0ZSB7XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnBDYXB0dXJlIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIEZwQ2FwdHVyZVByb3BzLFxuICAgIEZwQ2FwdHVyZVN0YXRlXG4+IHtcbiAgICBwcml2YXRlIGlGcmFtZVJlZjogUmVmT2JqZWN0PEhUTUxJRnJhbWVFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBGcENhcHR1cmVQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pRnJhbWVSZWYgPSBjcmVhdGVSZWY8SFRNTElGcmFtZUVsZW1lbnQ+KCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShfOiBGcENhcHR1cmVQcm9wcywgbmV4dFN0YXRlOiBGcENhcHR1cmVTdGF0ZSkge1xuICAgICAgICBjb25zdCB7IGlzUmVhZHksIGNhcHR1cmVTdGF0ZSB9ID0gbmV4dFN0YXRlO1xuICAgICAgICBjb25zdCBwcmV2Q2FwdHVyZVN0YXRlID0gdGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNSZWFkeSAmJlxuICAgICAgICAgICAgY2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuQ0FQVFVSSU5HICYmXG4gICAgICAgICAgICBwcmV2Q2FwdHVyZVN0YXRlID09PSBDYXB0dXJlU3RhdGUuSURMRVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWVzdEZwKCkge1xuICAgICAgICBjb25zb2xlLmluZm8oYEZwQ2FwdXJlOiByZXF1ZXN0aW5nIGZwIGNhcHR1cmVgKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYXB0dXJlU3RhdGUgIT09IENhcHR1cmVTdGF0ZS5JRExFKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGcENhcHR1cmUucmVxdWVzdEZwOiBjYXB0dXJlU3RhdGUgbm90IElETEUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXB0dXJlU3RhdGU6IENhcHR1cmVTdGF0ZS5DQVBUVVJJTkcgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgIGBGcENhcHVyZTogbWVzc2FnZSAke2UuZGF0YS50eXBlfSByZWNlaXZlZCBmcm9tICR7ZS5vcmlnaW59YFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XG5cbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBGUF9DQVBUVVJFX1VSTCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TWVzc2FnZVR5cGUuUkVBRFk6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUmVhZHk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FwdHVyZVN0YXRlOiBDYXB0dXJlU3RhdGUuSURMRSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DYXB0dXJlZChtZXNzYWdlLmRhdGEuY29tcG9uZW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBkaXNwYXRjaE1lc3NhZ2UgPSAobWVzc2FnZTogSG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKFxuICAgICAgICAgICAgYEZwQ2FwdXJlOiBkaXNwYXRjaGluZyAke21lc3NhZ2UudHlwZX0gbWVzc2FnZSB0byBjYXB0dXJlIGZyYW1lYFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuaUZyYW1lUmVmLmN1cnJlbnQ/LmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBGUF9DQVBUVVJFX1VSTCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaUZyYW1lUmVmfVxuICAgICAgICAgICAgICAgIHNyYz17RlBfQ0FQVFVSRV9VUkx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgU2VydmljZSwgZ2V0SW5zdGFsbElkIH0gZnJvbSAnLi4vY29yZSc7XG5cbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVkRmV0Y2ggfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRDbGlja1JlcXVlc3QoXG4gICAgY3R4OiBDb250ZXh0LFxuICAgIGJhbm5lclVpZDogc3RyaW5nLFxuICAgIGZpbmdlcnByaW50OiBGaW5nZXJwcmludENvbXBvbmVudHNcbik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtjdHgudXJsRm9yU2VydmljZShcbiAgICAgICAgU2VydmljZS5ERExcbiAgICApfS92MS9iYW5uZXJzLyR7YmFubmVyVWlkfS90YXBzYDtcbiAgICBjb25zdCB3ZWJJbnN0YWxsSWQgPSBhd2FpdCBnZXRJbnN0YWxsSWQoKTtcblxuICAgIHJldHVybiBhdXRoZWRGZXRjaChjdHgsIHVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgd2ViSW5zdGFsbElkLFxuICAgICAgICAgICAgZmluZ2VycHJpbnRcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsIlxudHlwZSBNZXNzYWdlPFQsIEQgPSBuZXZlcj4gPVxuICAgIHwge1xuICAgICAgICB0eXBlOiBUO1xuICAgIH1cbiAgICB8IHsgdHlwZTogVDsgZGF0YTogRCB9O1xuXG5leHBvcnQgZW51bSBIb3N0TWVzc2FnZVR5cGUge1xuICAgIFJFUVVFU1RfRklOR0VSUFJJTlQgPSAnUkVRVUVTVF9GSU5HRVJQUklOVCcsXG59XG5cbmV4cG9ydCBlbnVtIENsaWVudE1lc3NhZ2VUeXBlIHtcbiAgICBSRUFEWSA9ICdSRUFEWScsXG4gICAgRklOR0VSUFJJTlRfR0VORVJBVEVEID0gJ0ZJTkdFUlBSSU5UX0dFTkVSQVRFRCcsXG59XG5cbmV4cG9ydCB0eXBlIEZpbmdlcnByaW50Q29tcG9uZW50cyA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbmV4cG9ydCB0eXBlIEhvc3RNZXNzYWdlID0gTWVzc2FnZTxIb3N0TWVzc2FnZVR5cGUuUkVRVUVTVF9GSU5HRVJQUklOVD47XG5cbmV4cG9ydCB0eXBlIENsaWVudE1lc3NhZ2UgPVxuICAgIHwgTWVzc2FnZTxDbGllbnRNZXNzYWdlVHlwZS5SRUFEWT5cbiAgICB8IE1lc3NhZ2U8XG4gICAgICAgIENsaWVudE1lc3NhZ2VUeXBlLkZJTkdFUlBSSU5UX0dFTkVSQVRFRCxcbiAgICAgICAgeyBjb21wb25lbnRzOiBGaW5nZXJwcmludENvbXBvbmVudHMgfVxuICAgID47XG4iLCJpbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb24sXG4gICAgQ29udGV4dCxcbiAgICBJbnN0YWxsSWQsXG4gICAgUHJvcHNPYmplY3QsXG4gICAgU0RLRmVhdHVyZSxcbiAgICBVc2VySWQsXG4gICAgYXNzZXJ0Q29uZmlnVmFsaWQsXG4gICAgYXNzb2NpYXRlVXNlcixcbiAgICBnZXRJbnN0YWxsSWQsXG4gICAgZ2V0VXNlcklkLFxuICAgIHNldEluc3RhbGxJZCxcbiAgICB0cmFja0V2ZW50LFxuICAgIHRyYWNrSW5zdGFsbERldGFpbHNcbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7IFdvcmtlck1lc3NhZ2VUeXBlLCBpc0t1bXVsb3NXb3JrZXJNZXNzYWdlIH0gZnJvbSAnLi93b3JrZXIvbWVzc2FnaW5nJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBpc01vYmlsZSB9IGZyb20gJy4vY29yZS91dGlscyc7XG5pbXBvcnQge1xuICAgIGdldE1vc3RSZWNlbnRseU9wZW5lZFB1c2hQYXlsb2FkLFxuICAgIHBlcnNpc3RDb25maWcsXG4gICAgc2V0XG59IGZyb20gJy4vY29yZS9zdG9yYWdlJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIEt1bXVsb3NQdXNoTm90aWZpY2F0aW9uLFxuICAgIG5vdGlmaWNhdGlvbkZyb21QYXlsb2FkLFxuICAgIHJlZ2lzdGVyU2VydmljZVdvcmtlcixcbiAgICB0cmFja09wZW5Gcm9tUXVlcnlcbn0gZnJvbSAnLi9jb3JlL3B1c2gnO1xuXG5pbXBvcnQgRGRsTWFuYWdlciBmcm9tICcuL3Byb21wdHMvZGRsL21hbmFnZXInO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlciB9IGZyb20gJy4vcHJvbXB0cyc7XG5pbXBvcnQgUm9vdEZyYW1lIGZyb20gJy4vY29yZS9yb290LWZyYW1lJztcblxuaW50ZXJmYWNlIEt1bXVsb3NDb25maWcgZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgICBvblB1c2hSZWNlaXZlZD86IChwYXlsb2FkOiBLdW11bG9zUHVzaE5vdGlmaWNhdGlvbikgPT4gdm9pZDtcbiAgICBvblB1c2hPcGVuZWQ/OiAocGF5bG9hZDogS3VtdWxvc1B1c2hOb3RpZmljYXRpb24pID0+IHZvaWQ7XG4gICAgb3JpZ2luYWxWaXNpdG9ySWQ6IEluc3RhbGxJZDtcbiAgICBjdXN0b21lcklkPzogVXNlcklkO1xuICAgIHNka1ZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEt1bXVsb3Mge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZmlnOiBLdW11bG9zQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ29udGV4dDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb3RGcmFtZTogUm9vdEZyYW1lO1xuXG4gICAgcHJpdmF0ZSBwcm9tcHRNYW5hZ2VyPzogUHJvbXB0TWFuYWdlcjtcbiAgICBwcml2YXRlIGRkbE1hbmFnZXI/OiBEZGxNYW5hZ2VyO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBidWlsZEluc3RhbmNlKGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICBhc3NlcnRDb25maWdWYWxpZChjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChjb25maWcpO1xuICAgICAgICBhd2FpdCBLdW11bG9zLm1heWJlUGVyc2lzdEluc3RhbGxJZEFuZFVzZXJJZChjb250ZXh0LCBjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IGt1bXVsb3MgPSBuZXcgS3VtdWxvcyhjb250ZXh0LCBjb25maWcpO1xuICAgICAgICBrdW11bG9zLmluaXRpYWxpemUoKTtcblxuICAgICAgICByZXR1cm4ga3VtdWxvcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENvbnRleHQsIGNvbmZpZzogS3VtdWxvc0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5yb290RnJhbWUgPSBuZXcgUm9vdEZyYW1lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplKCkge1xuICAgICAgICBwZXJzaXN0Q29uZmlnKHRoaXMuY29uZmlnKTtcbiAgICAgICAgdHJhY2tJbnN0YWxsRGV0YWlscyh0aGlzLmNvbnRleHQsIHRoaXMuY29uZmlnLnNka1ZlcnNpb24pO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0Lmhhc0ZlYXR1cmUoU0RLRmVhdHVyZS5QVVNIKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUHVzaEZlYXR1cmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuaGFzRmVhdHVyZShTREtGZWF0dXJlLkRETCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZURETEZlYXR1cmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVB1c2hGZWF0dXJlKCkge1xuICAgICAgICB0cmFja09wZW5Gcm9tUXVlcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKHRoaXMuY29udGV4dC5zZXJ2aWNlV29ya2VyUGF0aCk7XG4gICAgICAgIFxuICAgICAgICBpZiAobmF2aWdhdG9yLnBlcm1pc3Npb25zKXtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZVBlcm1pc3Npb25TdGF0dXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvbXB0TWFuYWdlciA9IG5ldyBQcm9tcHRNYW5hZ2VyKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIHRoaXMucm9vdEZyYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tYXliZUFkZE1lc3NhZ2VFdmVudExpc3RlbmVyVG9TVygpO1xuICAgICAgICB0aGlzLm1heWJlRmlyZU9wZW5lZEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9ic2VydmVQZXJtaXNzaW9uU3RhdHVzKCkge1xuICAgICAgICBjb25zdCBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgbmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHtuYW1lOiAnbm90aWZpY2F0aW9ucyd9KTtcblxuICAgICAgICBwZXJtaXNzaW9uU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGV2ZW50LnRhcmdldCBhcyBQZXJtaXNzaW9uU3RhdHVzO1xuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXRlID0gcGVybWlzc2lvblN0YXR1cy5zdGF0ZTtcblxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0ZSA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHVzaE1hbmFnZXIgPSBhd2FpdCBnZXRQdXNoT3BzTWFuYWdlcih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgcHVzaE1hbmFnZXIucHVzaFJlZ2lzdGVyKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZURETEZlYXR1cmUoKXtcbiAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgJ0RkbE1hbmFnZXI6IERETCBmZWF0dXJlIHN1cHBvcnQgb25seSBhdmFpbGFibGUgb24gbW9iaWxlIGRldmljZXMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGRsTWFuYWdlciA9IG5ldyBEZGxNYW5hZ2VyKHRoaXMuY29udGV4dCwgdGhpcy5yb290RnJhbWUpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBtYXliZUFkZE1lc3NhZ2VFdmVudExpc3RlbmVyVG9TVygpIHtcbiAgICAgICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnbWVzc2FnZScsXG4gICAgICAgICAgICB0aGlzLm9uV29ya2VyTWVzc2FnZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIG1heWJlUGVyc2lzdEluc3RhbGxJZEFuZFVzZXJJZChcbiAgICAgICAgY29udGV4dDogQ29udGV4dCxcbiAgICAgICAgY29uZmlnOiBLdW11bG9zQ29uZmlnXG4gICAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGdldEluc3RhbGxJZCgpLnRoZW4oaW5zdGFsbElkID0+IHtcbiAgICAgICAgICAgIGlmIChpbnN0YWxsSWQgIT09IGNvbmZpZy5vcmlnaW5hbFZpc2l0b3JJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnN0YWxsSWQoY29uZmlnLm9yaWdpbmFsVmlzaXRvcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5jdXN0b21lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGdldFVzZXJJZCgpLnRoZW4odXNlcklkID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VySWQgIT09IGNvbmZpZy5jdXN0b21lcklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc29jaWF0ZVVzZXIoY29udGV4dCwgY29uZmlnLmN1c3RvbWVySWQhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXNzb2NpYXRlVXNlcihpZGVudGlmaWVyOiBVc2VySWQsIGF0dHJpYnV0ZXM/OiBQcm9wc09iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gYXNzb2NpYXRlVXNlcih0aGlzLmNvbnRleHQsIGlkZW50aWZpZXIsIGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHRyYWNrRXZlbnQodHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogUHJvcHNPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNrRXZlbnQodGhpcy5jb250ZXh0LCB0eXBlLCBwcm9wZXJ0aWVzKS50aGVuKF8gPT4gdm9pZCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBwdXNoUmVnaXN0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHB1c2hNYW5hZ2VyID0gYXdhaXQgZ2V0UHVzaE9wc01hbmFnZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgcGVybWlzc2lvbiAgPSBhd2FpdCBwdXNoTWFuYWdlci5yZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAnTm90aWZpY2F0aW9uIHBlcm1pc3Npb24gbm90IGdyYW50ZWQnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBUaGUgYmVsb3cgY29kZSBpcyBhIGhhY2sgaW4gcGxhY2UgdG8gYXZvaWQgYW4gaXNzdWUgd2l0aCB0aGUgb25QZXJtaXNzaW9uQ2hhbmdlIGV2ZW50IG5vdCBmaXJpbmcgZnJvbSBTYWZhcmk6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNTYyMDEjYzEgICAgXG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyTmFtZSgpO1xuXG4gICAgICAgIGlmIChicm93c2VyID09PSAnc2FmYXJpJykge1xuICAgICAgICAgICAgcHVzaE1hbmFnZXIucHVzaFJlZ2lzdGVyKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV29ya2VyTWVzc2FnZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNLdW11bG9zV29ya2VyTWVzc2FnZShlLmRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGUuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFdvcmtlck1lc3NhZ2VUeXBlLktQdXNoUmVjZWl2ZWQ6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoID0gbm90aWZpY2F0aW9uRnJvbVBheWxvYWQoZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uUHVzaFJlY2VpdmVkPy4ocHVzaCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIGFzeW5jIG1heWJlRmlyZU9wZW5lZEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRNb3N0UmVjZW50bHlPcGVuZWRQdXNoUGF5bG9hZCgpO1xuICAgICAgICBpZiAoIXBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHB1c2ggPSBub3RpZmljYXRpb25Gcm9tUGF5bG9hZChwYXlsb2FkKTtcblxuICAgICAgICB0aGlzLmNvbmZpZy5vblB1c2hPcGVuZWQ/LihwdXNoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQmVsbFByb21wdENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NVQlNDUklCRV9MQUJFTCwgaW52ZXJzZVBvc2l0aW9uLCBQcm9tcHRVaVByb3BzLCBUb29sdGlwIH0gZnJvbSBcIi4uL3VpXCI7XG5cbmV4cG9ydCBjbGFzcyBCZWxsIGV4dGVuZHMgQ29tcG9uZW50PFByb21wdFVpUHJvcHM8QmVsbFByb21wdENvbmZpZz4sIG5ldmVyPiB7XG4gIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25Qcm9tcHRBY2NlcHRlZCh0aGlzLnByb3BzLmNvbmZpZyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IGBrdW11bG9zLXByb21wdCBrdW11bG9zLXByb21wdC0ke3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfSBrdW11bG9zLWJlbGwtY29udGFpbmVyIGt1bXVsb3MtYmVsbC1jb250YWluZXItJHt0aGlzLnByb3BzLmNvbmZpZy5wb3NpdGlvbn1gO1xuICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHRvb2x0aXBQb3MgPSBpbnZlcnNlUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGJnQ29sb3IgPSBjb25maWcuY29sb3JzPy5iZWxsPy5iZztcbiAgICAgIGNvbnN0IGZnQ29sb3IgPSBjb25maWcuY29sb3JzPy5iZWxsPy5mZztcblxuICAgICAgY29uc3QgYmVsbFN0eWxlID0ge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBmZ0NvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvclxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzPXtjbGFzc2VzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmVsbC1pbm5lciBrdW11bG9zLXRvb2x0aXAtcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrdW11bG9zLWJlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtiZWxsU3R5bGUgYXMgYW55fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuODkgMiAyIDJ6bTYtNnYtNWMwLTMuMDctMS42NC01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTIgMnYxaDE2di0xbC0yLTJ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2ZnQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBvc2l0aW9uPXt0b29sdGlwUG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29uZmlnLmxhYmVscz8udG9vbHRpcD8uc3Vic2NyaWJlID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERFRkFVTFRfU1VCU0NSSUJFX0xBQkVMfVxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlZk9iamVjdCwgY3JlYXRlUmVmLCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7XG4gICAgRGRsQmFubmVyUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFBvc2l0aW9uLFxuICAgIFVpQWN0aW9uVHlwZVxufSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW1wb3J0IHsgQXBwUmF0aW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hcHAtcmF0aW5nJztcbmltcG9ydCBEZWVwbGlua0J1dHRvbiBmcm9tICcuL2RlZXBsaW5rLWJ1dHRvbic7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBiYW5uZXJJY29uU3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgfSxcbiAgICBjbG9zZUljb25TdHlsZToge1xuICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgIGhlaWdodDogMTJcbiAgICB9XG59O1xuXG5jb25zdCBDTEFTU0VTID0gW1xuICAgICdrdW11bG9zLXByb21wdCcsXG4gICAgJ2t1bXVsb3MtYmFubmVyLWNvbnRhaW5lcicsXG4gICAgJ2t1bXVsb3MtYmFubmVyLWNvbXBhY3QnLFxuICAgICdrdW11bG9zLXNhZmUtYXJlYS1pbnNldC1wYWQtbGVmdCcsXG4gICAgJ2t1bXVsb3Mtc2FmZS1hcmVhLWluc2V0LXBhZC1yaWdodCdcbl07XG5cbmNvbnN0IFNIT1dfQ09QWV9UT0FTVF9ERUxBWSA9IDEwMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGRsQmFubmVyUHJvcHMge1xuICAgIGNvbmZpZzogRGRsQmFubmVyUHJvbXB0Q29uZmlnO1xuICAgIG9uQ29uZmlybTogKGNvbmZpZzogRGRsQmFubmVyUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uQ2FuY2VsOiAoY29uZmlnOiBEZGxCYW5uZXJQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgZGltZW5zaW9uczogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRGRsQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIERkbEJhbm5lclByb3BzLFxuICAgIHtcbiAgICAgICAgc2hvd0NvcHlUb2FzdDogYm9vbGVhbjtcbiAgICB9XG4+IHtcbiAgICBwcml2YXRlIGNvbnRhaW5lclJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEZGxCYW5uZXJQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJSZWYgPSBjcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNob3dDb3B5VG9hc3Q6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50O1xuXG4gICAgICAgIHRoaXMucHJvcHMuZGltZW5zaW9ucyhjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ29uZmlybSA9IChhY3Rpb25UeXBlOiBVaUFjdGlvblR5cGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0NvcHlUb2FzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9ERUVQTElOSykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvblR5cGUgPT09IFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb3B5VG9hc3Q6IHRydWUgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvcHlUb2FzdDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICAgICAgfSwgU0hPV19DT1BZX1RPQVNUX0RFTEFZKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBnZXRDc3NDbGFzc2VzKHByb21wdFBvc2l0aW9uOiBQcm9tcHRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgLi4uQ0xBU1NFUyxcbiAgICAgICAgICAgIGBrdW11bG9zLXByb21wdC1wb3NpdGlvbi0ke3Byb21wdFBvc2l0aW9ufWBcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBbUHJvbXB0UG9zaXRpb24uVE9QLCBQcm9tcHRQb3NpdGlvbi5CT1RUT01dLmluY2x1ZGVzKHByb21wdFBvc2l0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChga3VtdWxvcy1zYWZlLWFyZWEtaW5zZXQtcGFkLSR7cHJvbXB0UG9zaXRpb259YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCBsYWJlbHMsIGNvbG9ycywgaW1hZ2VVcmwsIGFwcFJhdGluZyB9ID0gY29uZmlnO1xuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGJvZHksIGFjY2VwdEFjdGlvbiB9ID0gbGFiZWxzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiZyxcbiAgICAgICAgICAgIGZnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uQmcsXG4gICAgICAgICAgICBhY2NlcHRBY3Rpb25GZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25CZyxcbiAgICAgICAgICAgIGRlY2xpbmVBY3Rpb25GZyxcbiAgICAgICAgICAgIHJhdGluZ0ZnXG4gICAgICAgIH0gPSBjb2xvcnM7XG5cbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0Q3NzQ2xhc3Nlcyhwb3NpdGlvbik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxuICAgICAgICAgICAgY29sb3I6IGZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVjbGluZUFjdGlvblN0eWxlOiBoLkpTWC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBjb2xvcjogZGVjbGluZUFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWN0aW9uU3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGFjY2VwdEFjdGlvbkZnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmFubmVySWNvblN0eWxlID0ge1xuICAgICAgICAgICAgLi4uc3R5bGVzLmJhbm5lckljb25TdHlsZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfSBjbGFzcz17Y2xhc3Nlc30gcmVmPXt0aGlzLmNvbnRhaW5lclJlZn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2RlY2xpbmVBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5vbkNhbmNlbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICYjMTAwMDY7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVySWNvblN0eWxlfSBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWljb25cIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWJhbm5lci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWJvZHlcIj57Ym9keX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2FwcFJhdGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwUmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nQ291bnQ9e2FwcFJhdGluZy5yYXRpbmdDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycz17YXBwUmF0aW5nLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17cmF0aW5nRmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtYmFubmVyLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPERlZXBsaW5rQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXthY2NlcHRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRBY3Rpb25zPXtjb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q29weVRvYXN0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj5MaW5rIENvcGllZDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgRGRsVWlBY3Rpb25zLCBVaUFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuaW1wb3J0IGNvcHkgZnJvbSAnY2xpcGJvYXJkLWNvcHknO1xuXG5pbnRlcmZhY2UgRGVlcGxpbmtCdXR0b25Qcm9wcyB7XG4gICAgc3R5bGU6IGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgcHJvbXB0QWN0aW9uczogRGRsVWlBY3Rpb25zO1xuICAgIG9uQWN0aW9uOiAoYWN0aW9uVHlwZTogVWlBY3Rpb25UeXBlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWVwbGlua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudDxcbiAgICBEZWVwbGlua0J1dHRvblByb3BzLFxuICAgIG5ldmVyXG4+IHtcbiAgICBwcml2YXRlIGhhbmRsZUFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdWlBY3Rpb25zOiB7IGFjY2VwdCB9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzLnByb21wdEFjdGlvbnM7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgY29weShhY2NlcHQuZGVlcExpbmtVcmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVbmFibGUgdG8gY2FwdHVyZSBkZWVwbGluayB1cmwgZm9yIGRlZmVycmVkIGFwcCBwaWNrdXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbihVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYEhhbmRsZSBEZWVwTGluayBBY3Rpb246IHVuc3VwcG9ydGVkIGFjY2VwdCBhY3Rpb24gdHlwZSAnJHthY2NlcHRbJ3R5cGUnXX0nYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0eWxlLCBjbGFzczogY3NzQ2xhc3MsIHRleHQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3M9e2Nzc0NsYXNzfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlQWN0aW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7XG4gICAgQ29udGV4dCxcbiAgICBEZGxQcm9tcHRDb25maWcsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFVpQWN0aW9uVHlwZSxcbiAgICBTZGtFdmVudFxufSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCBVaSBmcm9tICcuL3VpJztcbmltcG9ydCB7XG4gICAgbG9hZERkbENvbmZpZyxcbiAgICBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGVcbn0gZnJvbSAnLi4vLi4vY29yZS9jb25maWcnO1xuaW1wb3J0IHsgbWF5YmVQZXJzaXN0UmVtaW5kZXIgfSBmcm9tICcuLi9wcm9tcHQtcmVtaW5kZXInO1xuaW1wb3J0IHsgZGVmZXJQcm9tcHRBY3RpdmF0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgc2VuZENsaWNrUmVxdWVzdCB9IGZyb20gJy4uLy4uL2ZwJztcbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2ZwL3R5cGVzJztcbmltcG9ydCB7IFByb21wdFRyaWdnZXJFdmVudEZpbHRlciB9IGZyb20gJy4uL3RyaWdnZXJzJztcblxuZXhwb3J0IGVudW0gRGRsTWFuYWdlclN0YXRlIHtcbiAgICBMT0FESU5HID0gJ2xvYWRpbmcnLFxuICAgIFJFQURZID0gJ3JlYWR5J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZGxNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZGxDb250YWluZXI6IFJvb3RGcmFtZUNvbnRhaW5lcjtcbiAgICBwcml2YXRlIGNvbmZpZz86IFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz47XG4gICAgcHJpdmF0ZSBhY3RpdmVDb25maWdzPzogRGRsUHJvbXB0Q29uZmlnW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyaWdnZXJGaWx0ZXI6IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxEZGxQcm9tcHRDb25maWc+O1xuXG4gICAgY29uc3RydWN0b3IoY3R4OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0RkbE1hbmFnZXI6IGluaXRpYWxpc2luZycpO1xuXG4gICAgICAgIHRoaXMuZGRsQ29udGFpbmVyID0gcm9vdEZyYW1lLmNyZWF0ZUNvbnRhaW5lcignZGRsJyk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGN0eDtcblxuICAgICAgICB0aGlzLnRyaWdnZXJGaWx0ZXIgPSBuZXcgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPERkbFByb21wdENvbmZpZz4oXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAoXzogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuTE9BRElORyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNvbmZpcm0gPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogRGRsUHJvbXB0Q29uZmlnLFxuICAgICAgICBjb21wb25lbnRzPzogRmluZ2VycHJpbnRDb21wb25lbnRzXG4gICAgKSA9PiB7XG4gICAgICAgIGlmICghIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmRDbGlja1JlcXVlc3QodGhpcy5jb250ZXh0LCBwcm9tcHQudXVpZCwgY29tcG9uZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBkZWxldGVEZGxCYW5uZXJDb25maWdGcm9tQ2FjaGUocHJvbXB0LnV1aWQpO1xuXG4gICAgICAgIHRoaXMuaGlkZVByb21wdChwcm9tcHQpO1xuXG4gICAgICAgIHRoaXMucGVyZm9ybUNsaWVudFJlZGlyZWN0aW9uKHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25CYW5uZXJDYW5jZWxsZWQgPSAocHJvbXB0OiBEZGxQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0KTtcbiAgICAgICAgdGhpcy5oaWRlUHJvbXB0KHByb21wdCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGlkZVByb21wdChwcm9tcHQ6IERkbFByb21wdENvbmZpZykge1xuICAgICAgICB0aGlzLmFjdGl2ZUNvbmZpZ3MgPSB0aGlzLmFjdGl2ZUNvbmZpZ3M/LmZpbHRlcihcbiAgICAgICAgICAgIGMgPT4gYy51dWlkICE9PSBwcm9tcHQudXVpZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKERkbE1hbmFnZXJTdGF0ZS5SRUFEWSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwZXJmb3JtQ2xpZW50UmVkaXJlY3Rpb24oY29uZmlnOiBEZGxQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgYWNjZXB0QWN0aW9uID0gY29uZmlnLnVpQWN0aW9ucy5hY2NlcHQ7XG5cbiAgICAgICAgc3dpdGNoIChhY2NlcHRBY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fU1RPUkU6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY2NlcHRBY3Rpb24udXJsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhY2NlcHRBY3Rpb24uZGVlcExpbmtVcmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdEZGxNYW5hZ2VyLnBlcmZvcm1DbGllbnRSZWRpcmVjdGlvbjogVW5zdXBwb3J0ZWQgYWNjZXB0IGFjdGlvbiB0eXBlLCB1bmFibGUgdG8gcGVyZm9ybSByZWRpcmVjdGlvbidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTdGF0ZShzdGF0ZTogRGRsTWFuYWdlclN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnU2V0dGluZyBEZGxNYW5hZ2VyIHN0YXRlOicgKyBzdGF0ZSk7XG4gICAgICAgIHRoaXMub25FbnRlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkVudGVyKHN0YXRlOiBEZGxNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBEZGxNYW5hZ2VyU3RhdGUuTE9BRElORzpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMubG9hZENvbmZpZygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShEZGxNYW5hZ2VyU3RhdGUuUkVBRFkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEZGxNYW5hZ2VyU3RhdGUuUkVBRFk6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVBY3RpdmVDb25maWdzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tcHQgPSB0aGlzLmFjdGl2ZUNvbmZpZ3M/LnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXByb21wdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlZmVyUHJvbXB0QWN0aXZhdGlvbihwcm9tcHQsIHRoaXMucmVuZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcihwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIgPSAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHQgYXMgRGRsUHJvbXB0Q29uZmlnfVxuICAgICAgICAgICAgICAgIGNvbnRleHQ9e3RoaXMuY29udGV4dH1cbiAgICAgICAgICAgICAgICBvbkJhbm5lckNvbmZpcm09e3RoaXMub25CYW5uZXJDb25maXJtfVxuICAgICAgICAgICAgICAgIG9uQmFubmVyQ2FuY2VsbGVkPXt0aGlzLm9uQmFubmVyQ2FuY2VsbGVkfVxuICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICB0aGlzLmRkbENvbnRhaW5lci5lbGVtZW50XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgcmVuZGVyRW1wdHkoKSB7XG4gICAgICAgIHJlbmRlcihudWxsLCB0aGlzLmRkbENvbnRhaW5lci5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZUFjdGl2ZUNvbmZpZ3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hdGNoZWRDb25maWdzID0gYXdhaXQgdGhpcy50cmlnZ2VyRmlsdGVyLmZpbHRlclByb21wdHMoXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1xuICAgICAgICApO1xuXG4gICAgICAgIG1hdGNoZWRDb25maWdzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDb25maWdzPy5pbmRleE9mKGMpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb25maWdzLnB1c2goYyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbG9hZENvbmZpZygpOiBQcm9taXNlPFxuICAgICAgICBSZWNvcmQ8c3RyaW5nLCBEZGxQcm9tcHRDb25maWc+IHwgdW5kZWZpbmVkXG4gICAgPiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBhd2FpdCBsb2FkRGRsQ29uZmlnKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY29uZmlncykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ3MucmVkdWNlPFJlY29yZDxzdHJpbmcsIERkbFByb21wdENvbmZpZz4+KChiYWcsIGMpID0+IHtcbiAgICAgICAgICAgIGJhZ1tjLnV1aWRdID0gYztcbiAgICAgICAgICAgIHJldHVybiBiYWc7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGgsIEZyYWdtZW50LCBSZWZPYmplY3QsIGNyZWF0ZVJlZiB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCB7IERkbFByb21wdENvbmZpZywgVWlBY3Rpb25UeXBlLCBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBEZGxCYW5uZXIgfSBmcm9tICcuL2RkbC1iYW5uZXInO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgeyBQcm9tcHRQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IEZwQ2FwdHVyZSBmcm9tICcuLi8uLi9mcC9mcC1jYXB0dXJlJztcbmltcG9ydCB7IEZpbmdlcnByaW50Q29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2ZwL3R5cGVzJztcblxuaW50ZXJmYWNlIFVpUHJvcHMge1xuICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnO1xuICAgIGNvbnRleHQ6IENvbnRleHQ7XG4gICAgb25CYW5uZXJDb25maXJtOiAoXG4gICAgICAgIGNvbmZpZzogRGRsUHJvbXB0Q29uZmlnLFxuICAgICAgICBmaW5nZXJwcmludENvbXBvbmVudHM/OiBGaW5nZXJwcmludENvbXBvbmVudHNcbiAgICApID0+IHZvaWQ7XG4gICAgb25CYW5uZXJDYW5jZWxsZWQ6IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFVpU3RhdGUge1xuICAgIHJlcXVlc3RGcENhcHR1cmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpIGV4dGVuZHMgQ29tcG9uZW50PFVpUHJvcHMsIFVpU3RhdGU+IHtcbiAgICBwcml2YXRlIHNpdGVNYXJnaW4/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzaXRlVHJhbnNpdGlvbj86IHN0cmluZztcbiAgICBwcml2YXRlIGZwUmVmOiBSZWZPYmplY3Q8RnBDYXB0dXJlPjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBVaVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVxdWVzdEZwQ2FwdHVyZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZwUmVmID0gY3JlYXRlUmVmPEZwQ2FwdHVyZT4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGltZW5zaW9ucyA9IChfYmFubmVyV2lkdGg6IG51bWJlciwgYmFubmVySGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpO1xuICAgICAgICB0aGlzLnNpdGVNYXJnaW4gPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgICAgICAgICAgY29uZmlnPy5wb3NpdGlvbiA9PT0gUHJvbXB0UG9zaXRpb24uVE9QXG4gICAgICAgICAgICAgICAgICAgID8gJ21hcmdpbi10b3AnXG4gICAgICAgICAgICAgICAgICAgIDogJ21hcmdpbi1ib3R0b20nXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2l0ZVRyYW5zaXRpb24gPSBib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbicpO1xuXG4gICAgICAgIGlmIChjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5CT1RUT00pIHtcbiAgICAgICAgICAgIGJhbm5lckhlaWdodCArPSAyMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGJhbm5lckhlaWdodCArIHRoaXMuc2l0ZU1hcmdpbjtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuMzc1cyBlYXNlIDBzJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZVtcbiAgICAgICAgICAgIGNvbmZpZz8ucG9zaXRpb24gPT09IFByb21wdFBvc2l0aW9uLlRPUFxuICAgICAgICAgICAgICAgID8gJ21hcmdpblRvcCdcbiAgICAgICAgICAgICAgICA6ICdtYXJnaW5Cb3R0b20nXG4gICAgICAgIF0gPSBgJHtvZmZzZXR9cHhgO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uQmFubmVyQ29uZmlybSA9IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCBhY2NlcHRBY3Rpb24gPSBjb25maWcudWlBY3Rpb25zLmFjY2VwdDtcblxuICAgICAgICBzd2l0Y2ggKGFjY2VwdEFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFVpQWN0aW9uVHlwZS5ERExfT1BFTl9TVE9SRTpcbiAgICAgICAgICAgICAgICB0aGlzLmZwUmVmLmN1cnJlbnQ/LnJlcXVlc3RGcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuRERMX09QRU5fREVFUExJTks6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEJvZHlTdHlsZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQmFubmVyQ29uZmlybSh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVaS5vbkJhbm5lckNvbmZpcm06IFVuc3VwcG9ydGVkIGFjY2VwdCBhY3Rpb24gdHlwZSwgdW5hYmxlIHRvIGNvbmZpcm0gYmFubmVyJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkJhbm5lckNhbmNlbGxlZCA9IChjb25maWc6IERkbFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQmFubmVyQ2FuY2VsbGVkKGNvbmZpZyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25DYXB0dXJlRnAgPSAoY29tcG9uZW50czogRmluZ2VycHJpbnRDb21wb25lbnRzKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRCb2R5U3R5bGVzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25CYW5uZXJDb25maXJtKHRoaXMucHJvcHMuY29uZmlnLCBjb21wb25lbnRzKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZXNldEJvZHlTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnNpdGVUcmFuc2l0aW9uID8/ICcnO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGVbXG4gICAgICAgICAgICBjb25maWc/LnBvc2l0aW9uID09PSBQcm9tcHRQb3NpdGlvbi5UT1BcbiAgICAgICAgICAgICAgICA/ICdtYXJnaW5Ub3AnXG4gICAgICAgICAgICAgICAgOiAnbWFyZ2luQm90dG9tJ1xuICAgICAgICBdID0gdGhpcy5zaXRlTWFyZ2luID8gYCR7dGhpcy5zaXRlTWFyZ2lufXB4YCA6ICcnO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc2V0Qm9keVN0eWxlcygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxEZGxCYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXt0aGlzLm9uQmFubmVyQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMub25CYW5uZXJDYW5jZWxsZWR9XG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9e3RoaXMub25EaW1lbnNpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZwQ2FwdHVyZSByZWY9e3RoaXMuZnBSZWZ9IG9uQ2FwdHVyZWQ9e3RoaXMub25DYXB0dXJlRnB9IC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHtcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvbixcbiAgICBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMsXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVUlDb250ZXh0LCBVSUNvbnRleHRTdGF0ZSB9IGZyb20gJy4uL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbm5lbHNMaXN0IH0gZnJvbSAnLi9jaGFubmVscy1saXN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxzRGlhbG9nUHJvcHMge1xuICAgIGFjdGlvbjogVXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb247XG4gICAgb25Db25maXJtOiAoY2hhbm5lbFNlbGVjdGlvbnM6IENoYW5uZWxMaXN0SXRlbVtdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5uZWxEaWFsb2dTdGF0ZSB7XG4gICAgY2hhbm5lbFNlbGVjdGlvbnM6IENoYW5uZWxMaXN0SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hhbm5lbHNEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQ2hhbm5lbHNEaWFsb2dQcm9wcyxcbiAgICBDaGFubmVsRGlhbG9nU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDaGFubmVsc0RpYWxvZ1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Db25maXJtID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLnN0YXRlLmNoYW5uZWxTZWxlY3Rpb25zKTtcbiAgICB9O1xuXG4gICAgb25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkID0gKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbLi4uY2hhbm5lbExpc3RdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXJEaWFsb2cgPSAodWlDb250ZXh0PzogVUlDb250ZXh0U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdWlDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gYGt1bXVsb3MtcHJvbXB0IGt1bXVsb3MtY2hhbm5lbC1kaWFsb2ctY29udGFpbmVyIGt1bXVsb3MtcHJvbXB0LXBvc2l0aW9uLSR7YWN0aW9uLmRpYWxvZ0NvbmZpZy5wb3NpdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IHsgaGVhZGluZywgY29uZmlybUFjdGlvbiB9ID0gYWN0aW9uLmRpYWxvZ0NvbmZpZy5sYWJlbHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGJnLFxuICAgICAgICAgICAgZmcsXG4gICAgICAgICAgICBjb25maXJtQWN0aW9uQmcsXG4gICAgICAgICAgICBjb25maXJtQWN0aW9uRmdcbiAgICAgICAgfSA9IGFjdGlvbi5kaWFsb2dDb25maWcuY29sb3JzO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbmZpcm1BY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29uZmlybUFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGNvbmZpcm1BY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt1aUNvbnRleHQ/LnBsYXRmb3JtQ29uZmlnLmljb25Vcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aWNvblN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWljb25cIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdW11bG9zLWNoYW5uZWwtZGlhbG9nLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdD17Z2V0Q2hhbm5lbERpYWxvZ0NoYW5uZWxzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRleHQuY2hhbm5lbExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9uLmNoYW5uZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlbGVjdGVkQ2hhbm5lbENoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VtdWxvcy1jaGFubmVsLWRpYWxvZy1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbmZpcm1BY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1BY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxVSUNvbnRleHQuQ29uc3VtZXI+e3RoaXMucmVuZGVyRGlhbG9nfTwvVUlDb250ZXh0LkNvbnN1bWVyPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQ2hhbm5lbExpc3RJdGVtIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmludGVyZmFjZSBDaGFubmVsTGlzdFByb3BzIHtcbiAgICBjaGFubmVsTGlzdDogQ2hhbm5lbExpc3RJdGVtW107XG4gICAgb25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZDogKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENoYW5uZWxMaXN0U3RhdGUge1xuICAgIGNoYW5uZWxzOiBDaGFubmVsTGlzdEl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5uZWxzTGlzdCBleHRlbmRzIENvbXBvbmVudDxcbiAgICBDaGFubmVsTGlzdFByb3BzLFxuICAgIENoYW5uZWxMaXN0U3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDaGFubmVsTGlzdFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhbm5lbHM6IFsuLi50aGlzLnByb3BzLmNoYW5uZWxMaXN0XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0aW9uQ2hhbmdlZCh0aGlzLnN0YXRlLmNoYW5uZWxzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5uZWxDaGVja0NoYW5nZShjaGFubmVsVXVpZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN0YXRlLmNoYW5uZWxzLmZpbmQoXG4gICAgICAgICAgICBjID0+IGMuY2hhbm5lbC51dWlkID09PSBjaGFubmVsVXVpZFxuICAgICAgICApO1xuICAgICAgICBpdGVtIS5jaGVja2VkID0gY2hlY2tlZDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoYW5uZWxzOiBbLi4udGhpcy5zdGF0ZS5jaGFubmVsc11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLm9uQ2hhbm5lbFNlbGVjdGlvbkNoYW5nZWQodGhpcy5zdGF0ZS5jaGFubmVscylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFjaGFubmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrdW11bG9zLWNoYW5uZWwtbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7Y2hhbm5lbHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5jaGFubmVsLnV1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWNoZWNrYm94LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoYW5uZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpdGVtLmNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBoLkpTWC5UYXJnZXRlZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFubmVsQ2hlY2tDaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoYW5uZWwudXVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrdW11bG9zLWNoZWNrYm94XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFByb21wdFVpUHJvcHMgfSBmcm9tICcuLi91aSc7XG5pbXBvcnQge1xuICAgIEFsZXJ0UHJvbXB0Q29uZmlnLFxuICAgIEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRUeXBlTmFtZSxcbiAgICBnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMsXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVUlDb250ZXh0LCBVSUNvbnRleHRTdGF0ZSB9IGZyb20gJy4uL3VpLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2hhbm5lbHNMaXN0IH0gZnJvbSAnLi9jaGFubmVscy1saXN0JztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGljb25TdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcidcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ1N0YXRlIHtcbiAgICBjaGFubmVsU2VsZWN0aW9uczogQ2hhbm5lbExpc3RJdGVtW107XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgUHJvbXB0VWlQcm9wczxBbGVydFByb21wdENvbmZpZyB8IEJhbm5lclByb21wdENvbmZpZz4sXG4gICAgRGlhbG9nU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9tcHRVaVByb3BzPEFsZXJ0UHJvbXB0Q29uZmlnIHwgQmFubmVyUHJvbXB0Q29uZmlnPikge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUmVxdWVzdE5hdGl2ZVByb21wdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNoYW5uZWxTZWxlY3Rpb25zXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIG9uUmVxdWVzdENhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkKHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICB9O1xuXG4gICAgb25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkID0gKGNoYW5uZWxMaXN0OiBDaGFubmVsTGlzdEl0ZW1bXSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zOiBbLi4uY2hhbm5lbExpc3RdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXJBbGVydCA9ICh1aUNvbnRleHQ/OiBVSUNvbnRleHRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB1aUNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBga3VtdWxvcy1wcm9tcHQga3VtdWxvcy1wcm9tcHQtJHt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX0ga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1jb250YWluZXIga3VtdWxvcy1wcm9tcHQtcG9zaXRpb24tJHtjb25maWcucG9zaXRpb259YDtcblxuICAgICAgICBjb25zdCB7IGhlYWRpbmcsIGJvZHksIGRlY2xpbmVBY3Rpb24sIGFjY2VwdEFjdGlvbiB9ID1cbiAgICAgICAgICAgIGNvbmZpZy50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVFxuICAgICAgICAgICAgICAgID8gY29uZmlnLmxhYmVscy5hbGVydFxuICAgICAgICAgICAgICAgIDogY29uZmlnLmxhYmVscy5iYW5uZXI7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmcsXG4gICAgICAgICAgICBmZyxcbiAgICAgICAgICAgIGFjY2VwdEFjdGlvbkJnLFxuICAgICAgICAgICAgYWNjZXB0QWN0aW9uRmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uQmcsXG4gICAgICAgICAgICBkZWNsaW5lQWN0aW9uRmdcbiAgICAgICAgfSA9XG4gICAgICAgICAgICBjb25maWcudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlRcbiAgICAgICAgICAgICAgICA/IGNvbmZpZy5jb2xvcnMuYWxlcnRcbiAgICAgICAgICAgICAgICA6IGNvbmZpZy5jb2xvcnMuYmFubmVyO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcbiAgICAgICAgICAgIGNvbG9yOiBmZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRlY2xpbmVBY3Rpb25TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGVjbGluZUFjdGlvbkJnLFxuICAgICAgICAgICAgY29sb3I6IGRlY2xpbmVBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdEFjdGlvblN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlcHRBY3Rpb25CZyxcbiAgICAgICAgICAgIGNvbG9yOiBhY2NlcHRBY3Rpb25GZ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGljb25TdHlsZSA9IHtcbiAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uU3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb25maWcuaW1hZ2VVcmx9KWBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge2NvbmZpZy5pbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWljb25gfVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1jb250ZW50YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VtdWxvcy0ke2NvbmZpZy50eXBlfS1oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aGVhZGluZ308L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BrdW11bG9zLSR7Y29uZmlnLnR5cGV9LWJvZHlgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbHNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxMaXN0PXtnZXRDaGFubmVsRGlhbG9nQ2hhbm5lbHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUNvbnRleHQuY2hhbm5lbExpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbi5jaGFubmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5uZWxTZWxlY3Rpb25DaGFuZ2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RlZENoYW5uZWxDaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGt1bXVsb3MtJHtjb25maWcudHlwZX0tYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtkZWNsaW5lQWN0aW9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdW11bG9zLWFjdGlvbi1idXR0b24ga3VtdWxvcy1hY3Rpb24tYnV0dG9uLWNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVxdWVzdENhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RlY2xpbmVBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXthY2NlcHRBY3Rpb25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1bXVsb3MtYWN0aW9uLWJ1dHRvbiBrdW11bG9zLWFjdGlvbi1idXR0b24tY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVxdWVzdE5hdGl2ZVByb21wdH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY2VwdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFVJQ29udGV4dC5Db25zdW1lcj57dGhpcy5yZW5kZXJBbGVydH08L1VJQ29udGV4dC5Db25zdW1lcj47XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2hhbm5lbCwgQ2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcbmltcG9ydCB7XG4gICAgQ2hhbm5lbExpc3RJdGVtLFxuICAgIENoYW5uZWxTdWJBY3Rpb24sXG4gICAgQ29udGV4dCxcbiAgICBQbGF0Zm9ybUNvbmZpZyxcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdENvbmZpZ3MsXG4gICAgUHVzaFByb21wdENvbmZpZyxcbiAgICBTZGtFdmVudCxcbiAgICBVc2VyQ2hhbm5lbFNlbGVjdERpYWxvZ0FjdGlvblxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCBSb290RnJhbWUsIHsgUm9vdEZyYW1lQ29udGFpbmVyIH0gZnJvbSAnLi4vY29yZS9yb290LWZyYW1lJztcbmltcG9ydCBnZXRQdXNoT3BzTWFuYWdlciwge1xuICAgIFB1c2hPcHNNYW5hZ2VyLFxuICAgIFB1c2hTdWJzY3JpcHRpb25TdGF0ZVxufSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IEt1bXVsb3MgZnJvbSAnLi4nO1xuaW1wb3J0IHsgUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyIH0gZnJvbSAnLi90cmlnZ2Vycyc7XG5pbXBvcnQgeyBVSUNvbnRleHQgfSBmcm9tICcuL3VpLWNvbnRleHQnO1xuaW1wb3J0IFVpIGZyb20gJy4vdWknO1xuaW1wb3J0IHsgZGVmZXJQcm9tcHRBY3RpdmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBsb2FkUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBtYXliZVBlcnNpc3RSZW1pbmRlciB9IGZyb20gJy4vcHJvbXB0LXJlbWluZGVyJztcblxuZXhwb3J0IHR5cGUgUHJvbXB0TWFuYWdlclN0YXRlID1cbiAgICB8ICdsb2FkaW5nJ1xuICAgIHwgJ3JlYWR5J1xuICAgIHwgJ3JlcXVlc3RpbmcnXG4gICAgfCAncmVxdWVzdGluZy1zaWxlbnQnXG4gICAgfCAncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJ1xuICAgIHwgJ3Bvc3RhY3Rpb24nO1xuXG4vLyBsb2FkaW5nIC0+IHJlYWR5XG4vLyByZWFkeSAtPiByZXF1ZXN0aW5nXG4vLyByZXF1ZXN0aW5nIC0+IHJlYWR5XG4vLyByZWFkeSAtPiBwb3N0YWN0aW9uXG4vLyBwb3N0YWN0aW9uIC0+IHJlYWR5XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGt1bXVsb3NDbGllbnQ6IEt1bXVsb3M7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDb250ZXh0O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHVzaENvbnRhaW5lcjogUm9vdEZyYW1lQ29udGFpbmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJpZ2dlckZpbHRlcjogUHJvbXB0VHJpZ2dlckV2ZW50RmlsdGVyPFB1c2hQcm9tcHRDb25maWc+O1xuXG4gICAgcHJpdmF0ZSBzdGF0ZT86IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvblN0YXRlPzogUHVzaFN1YnNjcmlwdGlvblN0YXRlO1xuICAgIHByaXZhdGUgcHJvbXB0czogUHJvbXB0Q29uZmlnczxQdXNoUHJvbXB0Q29uZmlnPjtcbiAgICBwcml2YXRlIGFjdGl2ZVByb21wdHM6IFB1c2hQcm9tcHRDb25maWdbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHByaXZhdGUgcHVzaE9wc01hbmFnZXI/OiBQdXNoT3BzTWFuYWdlcjtcbiAgICBwcml2YXRlIGNoYW5uZWxzOiBDaGFubmVsW107XG4gICAgcHJpdmF0ZSB1aT86IFVpO1xuICAgIHByaXZhdGUgcGxhdGZvcm1Db25maWc/OiBQbGF0Zm9ybUNvbmZpZztcbiAgICBwcml2YXRlIGN1cnJlbnRQb3N0QWN0aW9uPzogUHJvbXB0QWN0aW9uO1xuICAgIHByaXZhdGUgY2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXI/OiBDaGFubmVsU3Vic2NyaXB0aW9uTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudDogS3VtdWxvcywgY3R4OiBDb250ZXh0LCByb290RnJhbWU6IFJvb3RGcmFtZSkge1xuICAgICAgICB0aGlzLnByb21wdHMgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzID0gW107XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlnZ2VyRmlsdGVyID0gbmV3IFByb21wdFRyaWdnZXJFdmVudEZpbHRlcjxQdXNoUHJvbXB0Q29uZmlnPihcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIHRoaXMub25FdmVudFRyYWNrZWRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnB1c2hDb250YWluZXIgPSByb290RnJhbWUuY3JlYXRlQ29udGFpbmVyKCdwdXNoJyk7XG4gICAgICAgIHRoaXMua3VtdWxvc0NsaWVudCA9IGNsaWVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2xvYWRpbmcnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk6IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyID0gbmV3IENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FdmVudFRyYWNrZWQgPSAoZTogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdQcm9tcHQgdHJpZ2dlciBzYXcgZXZlbnQnLCBlKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdOb3QgcmVhZHksIHdhaXRpbmcgb24gcXVldWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlRGVmZXJyZWRQcm9tcHQgPSAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdChwcm9tcHQgYXMgUHVzaFByb21wdENvbmZpZyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25SZXF1ZXN0TmF0aXZlUHJvbXB0ID0gYXN5bmMgKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBpZiAoJ3JlcXVlc3RpbmcnID09PSB0aGlzLnN0YXRlIHx8ICdyZXF1ZXN0aW5nLXNpbGVudCcgPT09IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCA9IHByb21wdDtcblxuICAgICAgICB0aGlzLnB1c2hPcHNNYW5hZ2VyPy5pc05hdGl2ZVByb21wdFNob3duKCkudGhlbihpc05hdGl2ZVByb21wdFNob3duID0+IHtcbiAgICAgICAgICAgIGlmIChpc05hdGl2ZVByb21wdFNob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVxdWVzdGluZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdyZXF1ZXN0aW5nLXNpbGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8ucmVxdWVzdFBlcm1pc3Npb25BbmRSZWdpc3RlckZvclB1c2goXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUmVxdWVzdFBvc3RBY3Rpb25Qcm9tcHQgPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICApID0+IHtcbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZycgIT09IGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSBwcm9tcHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFBvc3RBY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncG9zdGFjdGlvbicpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUHJvbXB0QWNjZXB0ZWQgPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3Vuc3Vic2NyaWJlZCcpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub25SZXF1ZXN0TmF0aXZlUHJvbXB0KHByb21wdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0KTtcblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TdGF0ZSA9PT0gJ3N1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oY2hhbm5lbFNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLnVpPy5zaG93VG9hc3QocHJvbXB0LmxhYmVscz8udGhhbmtzRm9yU3Vic2NyaWJpbmchKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIG9uUG9zdEFjdGlvbkNvbmZpcm0gPSBhc3luYyAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVVzZXJDaGFubmVsU2VsZWN0aW9uKGNoYW5uZWxTZWxlY3Rpb25zKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKCdyZWFkeScpO1xuICAgICAgICB0aGlzLmhpZGVBbmRTdXBwcmVzc1Byb21wdHMocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblByb21wdERlY2xpbmVkID0gKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICBtYXliZVBlcnNpc3RSZW1pbmRlcihwcm9tcHQpO1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkRpc21pc3NPdmVybGF5ID0gKHByb21wdDogUHVzaFByb21wdENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGlkZUFuZFN1cHByZXNzUHJvbXB0cyhwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpIHtcbiAgICAgICAgY29uc3QgeyBzdWJzY3JpcHRpb25TdGF0ZSB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLmhpZGVQcm9tcHQocHJvbXB0KTtcblxuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uU3RhdGUgIT09ICd1bnN1YnNjcmliZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuZm9yRWFjaChwID0+IHRoaXMuaGlkZVByb21wdChwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVByb21wdEFjdGlvbnMocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSB7XG4gICAgICAgIC8vIE5vdGU6IG5vIHByb21wdHMgd2l0aCBzdWNoIGFjdGlvbiBjYW4gYmUgY3JlYXRlZCBmcm9tIHVpIGZvciBvcHRpbW92ZSBhcHBzXG4gICAgICAgIC8vIGlmICghcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbygnV2lsbCBoYW5kbGUgYWN0aW9uczogJywgcHJvbXB0LmFjdGlvbnMpO1xuXG4gICAgICAgIC8vIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8vIHRoaXMuY2hhbm5lbHMgPSBhd2FpdCBjaGFubmVsU3ViTWdyLmxpc3RDaGFubmVscygpO1xuXG4gICAgICAgIC8vIGF3YWl0IHRoaXMuaGFuZGxlQ2hhbm5lbFN1YkFjdGlvbnMocHJvbXB0KTtcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5oYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMocHJvbXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUNoYW5uZWxTdWJBY3Rpb25zKFxuICAgICAgICBwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWdcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gcHJvbXB0LmFjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8Q2hhbm5lbFN1YkFjdGlvbj4oXG4gICAgICAgICAgICAoYWN0aW9uOiBQcm9tcHRBY3Rpb24pOiBhY3Rpb24gaXMgQ2hhbm5lbFN1YkFjdGlvbiA9PlxuICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAnc3Vic2NyaWJlVG9DaGFubmVsJ1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHV1aWRzVG9TdWJzY3JpYmUgPSBhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbHRvU3ViID0gdGhpcy5jaGFubmVscy5maW5kKFxuICAgICAgICAgICAgICAgICAgICBjID0+IGMudXVpZCA9PT0gYWN0aW9uLmNoYW5uZWxVdWlkICYmIGMuc3Vic2NyaWJlZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbHRvU3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gc3Vic2NyaWJlIHRvIGNoYW5uZWwgJyR7YWN0aW9uLmNoYW5uZWxVdWlkfScgYXMgaXQgZG9lcyBub3QgZXhpc3RgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24uY2hhbm5lbFV1aWQpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5zdWJzY3JpYmUodXVpZHNUb1N1YnNjcmliZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDaGFubmVsUG9zdEFjdGlvbnMoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZ1xuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBwcm9tcHQuYWN0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9zdCBhY3Rpb25zIG9ubHkgYXBwbHkgdG8gYHVzZXJDaGFubmVsU2VsZWN0RGlhbG9nYCBhY3Rpb25zXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBwcm9tcHQuYWN0aW9ucy5maWx0ZXI8VXNlckNoYW5uZWxTZWxlY3REaWFsb2dBY3Rpb24+KFxuICAgICAgICAgICAgKGFjdGlvbjogUHJvbXB0QWN0aW9uKTogYWN0aW9uIGlzIFVzZXJDaGFubmVsU2VsZWN0RGlhbG9nQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgYWN0aW9uLnR5cGUgPT09ICd1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjdXJyZW50bHkgb25seSBleHBlY3RpbmcgMSBjb25maWd1cmVkIGB1c2VyQ2hhbm5lbFNlbGVjdERpYWxvZ2AgYWN0aW9uXG4gICAgICAgIHRoaXMub25SZXF1ZXN0UG9zdEFjdGlvblByb21wdChwcm9tcHQsIGFjdGlvbnNbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlVXNlckNoYW5uZWxTZWxlY3Rpb24oXG4gICAgICAgIGNoYW5uZWxTZWxlY3Rpb25zPzogQ2hhbm5lbExpc3RJdGVtW11cbiAgICApIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gY2hhbm5lbFNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5uZWxTdWJNZ3IgPSB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG5cbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gIWNzLmNoZWNrZWQpXG4gICAgICAgICAgICAubWFwKGNzID0+IGNzLmNoYW5uZWwudXVpZCk7XG4gICAgICAgIGF3YWl0IGNoYW5uZWxTdWJNZ3IudW5zdWJzY3JpYmUodW5zdWJzY3JpYmVzKTtcblxuICAgICAgICBjb25zdCBzdWJzY3JpYmVzID0gY2hhbm5lbFNlbGVjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY3MgPT4gY3MuY2hlY2tlZClcbiAgICAgICAgICAgIC5tYXAoY3MgPT4gY3MuY2hhbm5lbC51dWlkKTtcbiAgICAgICAgYXdhaXQgY2hhbm5lbFN1Yk1nci5zdWJzY3JpYmUoc3Vic2NyaWJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb25TdGF0ZSB8fCAhdGhpcy5zdGF0ZSB8fCAhdGhpcy5wbGF0Zm9ybUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgICAgPFVJQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29uZmlnOiB0aGlzLnBsYXRmb3JtQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsTGlzdDogdGhpcy5jaGFubmVsc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFVpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiAodGhpcy51aSA9IHIpfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRzPXt0aGlzLmFjdGl2ZVByb21wdHN9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlPXt0aGlzLnN1YnNjcmlwdGlvblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvbXB0QWNjZXB0ZWQ9e3RoaXMub25Qcm9tcHRBY2NlcHRlZH1cbiAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICBvblBvc3RBY3Rpb25Db25maXJtPXt0aGlzLm9uUG9zdEFjdGlvbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzc092ZXJsYXk9e3RoaXMub25EaXNtaXNzT3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD17dGhpcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zdEFjdGlvbj17dGhpcy5jdXJyZW50UG9zdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9VSUNvbnRleHQuUHJvdmlkZXI+LFxuICAgICAgICAgICAgdGhpcy5wdXNoQ29udGFpbmVyLmVsZW1lbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGV2YWx1YXRlVHJpZ2dlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnRXZhbHVhdGluZyBwcm9tcHQgdHJpZ2dlcnMnKTtcblxuICAgICAgICBjb25zdCBtYXRjaGVkUHJvbXB0cyA9IGF3YWl0IHRoaXMudHJpZ2dlckZpbHRlci5maWx0ZXJQcm9tcHRzKFxuICAgICAgICAgICAgdGhpcy5wcm9tcHRzLFxuICAgICAgICAgICAgcHJvbXB0ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9tcHRBY3Rpb25OZWVkc1Rha2VuKHByb21wdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdHMobWF0Y2hlZFByb21wdHMpO1xuICAgIH1cblxuICAgIHByb21wdEFjdGlvbk5lZWRzVGFrZW4ocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblN0YXRlID09PSAndW5zdWJzY3JpYmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGFubmVsc1RvU3ViID1cbiAgICAgICAgICAgIHByb21wdC5hY3Rpb25zXG4gICAgICAgICAgICAgICAgPy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChhY3Rpb246IFByb21wdEFjdGlvbik6IGFjdGlvbiBpcyBDaGFubmVsU3ViQWN0aW9uID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udHlwZSA9PT0gJ3N1YnNjcmliZVRvQ2hhbm5lbCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IGEuY2hhbm5lbFV1aWQpID8/IFtdO1xuICAgICAgICBjb25zdCBuZWVkc1RvU3ViID1cbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGMgPT4gY2hhbm5lbHNUb1N1Yi5pbmNsdWRlcyhjLnV1aWQpICYmICFjLnN1YnNjcmliZWRcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAobmVlZHNUb1N1Yikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLmFjdGl2ZVByb21wdHMuaW5kZXhPZihwcm9tcHQpO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb21wdHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICAvLyBUT0RPIGlzIGlkZW50aXR5IG9rIGZvciBjb21wYXJpc29uIGhlcmUuLi4gbWlnaHQgbmVlZCB0byB1c2UgSURcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUHJvbXB0cy5pbmRleE9mKHByb21wdCkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQcm9tcHRzLnB1c2gocHJvbXB0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlUHJvbXB0cyhwcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW10pIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdXaWxsIGFjdGl2YXRlIHByb21wdHM6ICcsIHByb21wdHMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbXB0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpXTtcblxuICAgICAgICAgICAgaWYgKGRlZmVyUHJvbXB0QWN0aXZhdGlvbihwcm9tcHQsIHRoaXMuYWN0aXZhdGVEZWZlcnJlZFByb21wdCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVByb21wdChwcm9tcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBQcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKCdTZXR0aW5nIHByb21wdCBtYW5hZ2VyIHN0YXRlOicgKyBzdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5vbkVudGVyKHN0YXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRW50ZXIoc3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hPcHNNYW5hZ2VyID0gYXdhaXQgZ2V0UHVzaE9wc01hbmFnZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnB1c2hPcHNNYW5hZ2VyLmhhbmRsZUF1dG9SZXN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlci5nZXRDdXJyZW50U3Vic2NyaXB0aW9uU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUHJvbXB0cygpO1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGNoYW5uZWxzIGlycmVsZXZhbnQgZm9yIG9wdGltb3ZlIGFwcHNcbiAgICAgICAgICAgICAgICAvL3RoaXMuY2hhbm5lbHMgPSBhd2FpdCB0aGlzLmdldENoYW5uZWxTdWJzY3JpcHRpb25NYW5hZ2VyKCkubGlzdENoYW5uZWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgncmVhZHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlYWR5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zdEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblN0YXRlID0gYXdhaXQgdGhpcy5wdXNoT3BzTWFuYWdlcj8uZ2V0Q3VycmVudFN1YnNjcmlwdGlvblN0YXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZXZhbHVhdGVUcmlnZ2VycygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0YWN0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3RpbmcnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQnOlxuICAgICAgICAgICAgY2FzZSAncmVxdWVzdGluZy1zaWxlbnQtZGlzbWlzc2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkUHJvbXB0cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyA9IGF3YWl0IGxvYWRQbGF0Zm9ybUNvbmZpZyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wbGF0Zm9ybUNvbmZpZy5wdWJsaWNLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb21wdHMgY29uZmlnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHRoaXMucHJvbXB0cyA9IHsgLi4udGhpcy5jb250ZXh0LnB1c2hQcm9tcHRzIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb21wdHMgPSB7IC4uLih0aGlzLnBsYXRmb3JtQ29uZmlnLnByb21wdHMgfHwge30pIH07XG4gICAgICAgIH1cblxuICAgICAgICAvL05vdGU6IG5vIHByb21wdHMgd2l0aCBzdWNoIGFjdGlvbiBjYW4gYmUgY3JlYXRlZCBmcm9tIHVpIGZvciBvcHRpbW92ZSBhcHBzXG4gICAgICAgIC8vIGZvciAobGV0IGlkIGluIHRoaXMucHJvbXB0cykge1xuICAgICAgICAvLyAgICAgY29uc3QgaGFzQ2hhbm5lbE9wID0gQm9vbGVhbihcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb21wdHNbaWRdLmFjdGlvbnM/LmZpbHRlcihcbiAgICAgICAgLy8gICAgICAgICAgICAgYSA9PiBhLnR5cGUgPT09ICdzdWJzY3JpYmVUb0NoYW5uZWwnXG4gICAgICAgIC8vICAgICAgICAgKT8ubGVuZ3RoXG4gICAgICAgIC8vICAgICApO1xuXG4gICAgICAgIC8vICAgICBpZiAoaGFzQ2hhbm5lbE9wKSB7XG4gICAgICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jaGFubmVscyA9IGF3YWl0IHRoaXMuZ2V0Q2hhbm5lbFN1YnNjcmlwdGlvbk1hbmFnZXIoKS5saXN0Q2hhbm5lbHMoKTtcbiAgICAgICAgLy8gICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIE5vb3BcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoLCBKU1ggfSBmcm9tICdwcmVhY3QnO1xuXG5pbnRlcmZhY2UgQmFja2dyb3VuZE1hc2tQcm9wcyB7XG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgYmx1ckNsYXNzPzogc3RyaW5nO1xuICAgIHN0eWxlPzogSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBCYWNrZ3JvdW5kTWFza1N0YXRlIHtcbiAgICBibHVyQ2xhc3Nlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTWFzayBleHRlbmRzIENvbXBvbmVudDxcbiAgICBCYWNrZ3JvdW5kTWFza1Byb3BzLFxuICAgIEJhY2tncm91bmRNYXNrU3RhdGVcbj4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBCYWNrZ3JvdW5kTWFza1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBibHVyQ2xhc3NlcyA9IHRoaXMucHJvcHMuYmx1ckNsYXNzPy5zcGxpdCgnICcpID8/IFtdO1xuICAgICAgICBibHVyQ2xhc3Nlcy5wdXNoKCdrdW11bG9zLWJhY2tncm91bmQtbWFzay1ibHVyJyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJsdXJDbGFzc2VzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlQmx1clN0YXRlKCkge1xuICAgICAgICBjb25zdCB7IGJsdXJDbGFzc2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGJsdXJDbGFzc2VzLmZvckVhY2goYmx1ckNsYXNzID0+IHtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoYmx1ckNsYXNzKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChibHVyQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCbHVyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQmx1clN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmx1ckNsYXNzZXMuZm9yRWFjaChibHVyQ2xhc3MgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShibHVyQ2xhc3MpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNsYXNzOiBjbGFzc05hbWVzLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBjbGFzc2VzID0gWydrdW11bG9zLWJhY2tncm91bmQtbWFzayddO1xuXG4gICAgICAgIGlmICghIWNsYXNzTmFtZXMpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzPXtjbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBQdXNoUHJvbXB0Q29uZmlnLCBQb2ludCwgRGltZW5zaW9ucyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lLCBpc01vYmlsZSB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmFja2dyb3VuZE1hc2sgfSBmcm9tICcuL2JhY2tncm91bmQtbWFzayc7XG5pbXBvcnQgeyBTdmdQb2ludGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdmctcG9pbnRlcic7XG5cbmNvbnN0IGxvY2FsU3R5bGVzID0ge1xuICAgIG1hc2s6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfVxufTtcblxuY29uc3QgUE9JTlRFUl9TVEFSVF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IDAsXG4gICAgeTogNTBcbn07XG5cbmNvbnN0IFBPSU5URVJfRU5EX09GRlNFVDogUG9pbnQgPSB7XG4gICAgeDogLTE3NSxcbiAgICB5OiA3NVxufTtcblxuY29uc3QgQ09OVFJPTF9QT0lOVF9PRkZTRVQ6IFBvaW50ID0ge1xuICAgIHg6IDAsXG4gICAgeTogNTAwXG59O1xuXG5pbnRlcmZhY2UgT3ZlcmxheVNpbGVudFByb3BzIHtcbiAgICBwcm9tcHRTdGF0ZTogUHJvbXB0TWFuYWdlclN0YXRlO1xuICAgIHByb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBvbkRpc21pc3M/OiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgT3ZlcmxheVNpbGVudFN0YXRlIHtcbiAgICB3aW5kb3dEaW1lbnNpb25zOiBEaW1lbnNpb25zO1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNpbGVudCBleHRlbmRzIENvbXBvbmVudDxcbiAgICBPdmVybGF5U2lsZW50UHJvcHMsXG4gICAgT3ZlcmxheVNpbGVudFN0YXRlXG4+IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvdztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2luZG93RGltZW5zaW9uczogeyB3aWR0aCwgaGVpZ2h0IH0gfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb21wdFN0YXRlLCBwcm9tcHQsIHN1YnNjcmlwdGlvblN0YXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9tcHQgfHxcbiAgICAgICAgICAgIHByb21wdFN0YXRlICE9PSAncmVxdWVzdGluZy1zaWxlbnQnIHx8XG4gICAgICAgICAgICAhcHJvbXB0LnNpbGVudE92ZXJsYXkgfHxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblN0YXRlICE9PSAndW5zdWJzY3JpYmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHByb21wdC5zaWxlbnRPdmVybGF5O1xuICAgICAgICBjb25zdCBib2R5TGFiZWwgPSBvdmVybGF5LmxhYmVscy5ib2R5O1xuICAgICAgICBjb25zdCBjb2xvciA9IG92ZXJsYXkuY29sb3JzLnRleHQ7XG5cbiAgICAgICAgY29uc3QgbWFza1N0eWxlID0ge1xuICAgICAgICAgICAgLi4ubG9jYWxTdHlsZXMubWFzayxcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgIGJsdXJDbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1ibHVyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3Mtb3ZlcmxheSBrdW11bG9zLW92ZXJsYXktJHtnZXRCcm93c2VyTmFtZSgpfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e21hc2tTdHlsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQmFja2dyb3VuZE1hc2tDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb2ludGVyKGNvbG9yKX1cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImt1bXVsb3Mtc2lsZW50LW92ZXJsYXktY29udGVudC10ZXh0XCI+e2JvZHlMYWJlbH08L3A+XG4gICAgICAgICAgICA8L0JhY2tncm91bmRNYXNrPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyUG9pbnRlcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHsgd2luZG93RGltZW5zaW9ucyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBwb2ludGVyU3RhcnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogd2luZG93RGltZW5zaW9ucy53aWR0aCAvIDIgKyBQT0lOVEVSX1NUQVJUX09GRlNFVC54LFxuICAgICAgICAgICAgeTogd2luZG93RGltZW5zaW9ucy5oZWlnaHQgLyAyICsgUE9JTlRFUl9TVEFSVF9PRkZTRVQueVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBvaW50ZXJFbmQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogd2luZG93RGltZW5zaW9ucy53aWR0aCArIFBPSU5URVJfRU5EX09GRlNFVC54LFxuICAgICAgICAgICAgeTogUE9JTlRFUl9FTkRfT0ZGU0VULnlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb250cm9sUG9pbnQ6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogcG9pbnRlckVuZC54ICsgQ09OVFJPTF9QT0lOVF9PRkZTRVQueCxcbiAgICAgICAgICAgIHk6IHBvaW50ZXJTdGFydC55ICsgQ09OVFJPTF9QT0lOVF9PRkZTRVQueVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia3VtdWxvcy1zaWxlbnQtb3ZlcmxheS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICA8U3ZnUG9pbnRlclxuICAgICAgICAgICAgICAgICAgICBhcmVhPXt3aW5kb3dEaW1lbnNpb25zfVxuICAgICAgICAgICAgICAgICAgICBxdWFkQ3VydmVQb2ludHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHAxOiBwb2ludGVyU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwMjogY29udHJvbFBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcDM6IHBvaW50ZXJFbmRcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQmFja2dyb3VuZE1hc2tDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwcm9tcHQsIG9uRGlzbWlzcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoIXByb21wdCB8fCAhb25EaXNtaXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvbkRpc21pc3MocHJvbXB0KTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgUHVzaFByb21wdENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgUHVzaFN1YnNjcmlwdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29yZS9wdXNoJztcbmltcG9ydCB7IGdldEJyb3dzZXJOYW1lIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWFzayB9IGZyb20gJy4vYmFja2dyb3VuZC1tYXNrJztcblxuaW50ZXJmYWNlIE92ZXJsYXlQcm9wcyB7XG4gICAgcHJvbXB0U3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBwcm9tcHQ/OiBQdXNoUHJvbXB0Q29uZmlnO1xuICAgIHN1YnNjcmlwdGlvblN0YXRlOiBQdXNoU3Vic2NyaXB0aW9uU3RhdGU7XG59XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50PE92ZXJsYXlQcm9wcywgbmV2ZXI+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcHJvbXB0U3RhdGUsIHByb21wdCwgc3Vic2NyaXB0aW9uU3RhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXByb21wdCB8fFxuICAgICAgICAgICAgcHJvbXB0U3RhdGUgIT09ICdyZXF1ZXN0aW5nJyB8fFxuICAgICAgICAgICAgIXByb21wdC5vdmVybGF5IHx8XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZSAhPT0gJ3Vuc3Vic2NyaWJlZCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBwcm9tcHQub3ZlcmxheTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBvdmVybGF5LmNvbG9ycy5zaGFkZSxcbiAgICAgICAgICAgIGNvbG9yOiBvdmVybGF5LmNvbG9ycy50ZXh0XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAvLyBtYWludGFpbnMgYmFja3dhcmRzIGNvbXBhdCB3aXRoIGV4aXN0aW5nIGJsdXIgY2xhc3MgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHdhcyBiZWluZyBhcHBsaWVkIGRpcmVjdGx5IGJ5IHRoaXMgY29tcG9uZW50IHByZXZpb3VzbHlcbiAgICAgICAgICAgICAgICBibHVyQ2xhc3M9XCJrdW11bG9zLW92ZXJsYXktYmx1clwiXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BrdW11bG9zLW92ZXJsYXkga3VtdWxvcy1vdmVybGF5LSR7Z2V0QnJvd3Nlck5hbWUoKX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrdW11bG9zLW92ZXJsYXktc3RyaXBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBvdmVybGF5LmNvbG9ycy5zdHJpcCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1jb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0IDMzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17b3ZlcmxheS5jb2xvcnMudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMi41cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gMTIuNTcsMTEuMTJcbiAgICAgICAgICAgQyAxMi41NywxMS4xMiA2Ljg0LDIwLjgyIDQuMTMsMjEuMDFcbiAgICAgICAgICAgICAxLjQyLDIxLjIxIDIwLjcxLDI4LjY3IDI2LjYyLDI4LjY3TSA0LjIzLDIxLjAxXG4gICAgICAgICAgIEMgNC4yMywyMS4wMSA1My45NiwxNC45MSA2MC42NSwzLjQ3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3ZlcmxheS5pY29uVXJsICYmIDxpbWcgc3JjPXtvdmVybGF5Lmljb25Vcmx9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImt1bXVsb3Mtb3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntvdmVybGF5LmxhYmVscy5oZWFkaW5nfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e292ZXJsYXkubGFiZWxzLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvdmVybGF5LmxpbmtzPy5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2wudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JhY2tncm91bmRNYXNrPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHBlcnNpc3RQcm9tcHRSZW1pbmRlciwgZ2V0UHJvbXB0UmVtaW5kZXIgfSBmcm9tICcuLi9jb3JlL3N0b3JhZ2UnO1xuXG5pbXBvcnQge1xuICAgIFByb21wdFVpQWN0aW9ucyxcbiAgICBVaUFjdGlvblR5cGUsXG4gICAgUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFJlbWluZGVyRGVsYXlDb25maWcsXG4gICAgUmVtaW5kZXJUaW1lVW5pdFxufSBmcm9tICcuLi9jb3JlJztcblxuY29uc3QgUkVNSU5ERVJfVElNRV9VTklUX1RPX01JTExJUyA9IHtcbiAgICBbUmVtaW5kZXJUaW1lVW5pdC5IT1VSU106IDEwMDAgKiA2MCAqIDYwLFxuICAgIFtSZW1pbmRlclRpbWVVbml0LkRBWVNdOiAxMDAwICogNjAgKiA2MCAqIDI0XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVQZXJzaXN0UmVtaW5kZXIocHJvbXB0OiBQcm9tcHRDb25maWcpIHtcbiAgICBjb25zdCB7IHVpQWN0aW9ucyB9ID0gcHJvbXB0IGFzIFByb21wdFVpQWN0aW9ucztcblxuICAgIGlmICghdWlBY3Rpb25zKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHR5cGUgfSA9IHVpQWN0aW9ucy5kZWNsaW5lO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgVWlBY3Rpb25UeXBlLlJFTUlORDpcbiAgICAgICAgICAgIHJldHVybiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQsIHtcbiAgICAgICAgICAgICAgICBkZWNsaW5lZE9uOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBVaUFjdGlvblR5cGUuREVDTElORTpcbiAgICAgICAgICAgIHJldHVybiBwZXJzaXN0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQsICdzdXBwcmVzc2VkJyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBkZWNsaW5lIGFjdGlvbiB0eXBlICR7dHlwZX0gc3VwcG9ydGVkIGZvciBwcm9tcHQgJHtwcm9tcHQudXVpZH0sIGZhbGwgYmFjayB0byBhbHdheXMgc2hvdyB0aGlzIHByb21wdCB3aGVuIGRlY2xpbmVkYFxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1Byb21wdFN1cHByZXNzZWQoXG4gICAgcHJvbXB0OiBQcm9tcHRDb25maWdcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlbWluZGVyID0gYXdhaXQgZ2V0UHJvbXB0UmVtaW5kZXIocHJvbXB0LnV1aWQpO1xuXG4gICAgaWYgKCFyZW1pbmRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCdzdXBwcmVzc2VkJyA9PT0gcmVtaW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCEoJ3VpQWN0aW9ucycgaW4gcHJvbXB0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgeyB1aUFjdGlvbnMgfSA9IHByb21wdDtcblxuICAgIGlmICh1aUFjdGlvbnMuZGVjbGluZS50eXBlICE9PSBVaUFjdGlvblR5cGUuUkVNSU5EKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWhhc1Byb21wdFJlbWluZGVyRWxhcHNlZChcbiAgICAgICAgcmVtaW5kZXIuZGVjbGluZWRPbixcbiAgICAgICAgdWlBY3Rpb25zLmRlY2xpbmUuZGVsYXlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJvbXB0UmVtaW5kZXJFbGFwc2VkKFxuICAgIGRlY2xpbmVkT25NaWxsaXM6IG51bWJlcixcbiAgICBkZWxheUNvbmZpZzogUHJvbXB0UmVtaW5kZXJEZWxheUNvbmZpZ1xuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgRGF0ZS5ub3coKSAtIGRlY2xpbmVkT25NaWxsaXMgPlxuICAgICAgICBSRU1JTkRFUl9USU1FX1VOSVRfVE9fTUlMTElTW2RlbGF5Q29uZmlnLnRpbWVVbml0XSAqXG4gICAgICAgICAgICBkZWxheUNvbmZpZy5kdXJhdGlvblxuICAgICk7XG59XG4iLCJpbXBvcnQge1xuICAgIEZpbHRlclZhbHVlLFxuICAgIEt1bXVsb3NFdmVudCxcbiAgICBQcm9wRmlsdGVyLFxuICAgIFByb21wdENvbmZpZyxcbiAgICBQcm9tcHRDb25maWdzLFxuICAgIENvbnRleHQsXG4gICAgU2RrRXZlbnQsXG4gICAgRXZlbnRQYXlsb2FkXG59IGZyb20gJy4uL2NvcmUnO1xuXG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IGlzUHJvbXB0U3VwcHJlc3NlZCB9IGZyb20gJy4vcHJvbXB0LXJlbWluZGVyJztcblxuZnVuY3Rpb24gcHJvcEluKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGVzdHMgPSBmaWx0ZXJWYWx1ZS5tYXAodiA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gYF4ke2VzY2FwZVJlZ0V4cCh2KS5yZXBsYWNlKC9cXFxcXFwqL2csICcuKicpfSRgO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbHRlck1hdGNoZWQgPSB0ZXN0cy5yZWR1Y2UoXG4gICAgICAgICAgICAobWF0Y2hlZCwgbWF0Y2hlcikgPT4gbWF0Y2hlZCB8fCBtYXRjaGVyLnRlc3QoU3RyaW5nKHByb3BWYWx1ZSkpLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyTWF0Y2hlZDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJWYWx1ZS5pbmRleE9mKHByb3BWYWx1ZSBhcyBhbnkpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwcm9wRXEoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmaWx0ZXJWYWx1ZSA9PSBwcm9wVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHByb3BHdChmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA+IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wR3RlKGZpbHRlclZhbHVlOiBGaWx0ZXJWYWx1ZSwgcHJvcFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvcFZhbHVlID49IGZpbHRlclZhbHVlO1xufVxuXG5mdW5jdGlvbiBwcm9wTHQoZmlsdGVyVmFsdWU6IEZpbHRlclZhbHVlLCBwcm9wVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm9wVmFsdWUgPCBmaWx0ZXJWYWx1ZTtcbn1cblxuZnVuY3Rpb24gcHJvcEx0ZShmaWx0ZXJWYWx1ZTogRmlsdGVyVmFsdWUsIHByb3BWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3BWYWx1ZSA8PSBmaWx0ZXJWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyaWdnZXJNYXRjaGVkKFxuICAgIHByb21wdDogUHJvbXB0Q29uZmlnLFxuICAgIGV2ZW50OiBLdW11bG9zRXZlbnRcbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRyaWdnZXIgPSBwcm9tcHQudHJpZ2dlcjtcblxuICAgIGlmICh0cmlnZ2VyLmV2ZW50ICE9PSBldmVudC50eXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRyaWdnZXIuZmlsdGVycz8ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXZlbnQuZGF0YSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlci5maWx0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IFtwcm9wLCBvcCwgZmlsdGVyVGVzdFZhbHVlXSA9IHRyaWdnZXIuZmlsdGVyc1tpXSBhcyBQcm9wRmlsdGVyO1xuXG4gICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGV2ZW50LmRhdGFbcHJvcF07XG5cbiAgICAgICAgbGV0IGZpbHRlck1hdGNoZWQgPSBmYWxzZTtcblxuICAgICAgICBzd2l0Y2ggKG9wKSB7XG4gICAgICAgICAgICBjYXNlICdpbic6XG4gICAgICAgICAgICBjYXNlICdJTic6XG4gICAgICAgICAgICAgICAgZmlsdGVyTWF0Y2hlZCA9IHByb3BJbihmaWx0ZXJUZXN0VmFsdWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgICAgICBmaWx0ZXJNYXRjaGVkID0gcHJvcEVxKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3QoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wR3RlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHQoZmlsdGVyVGVzdFZhbHVlLCBwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIGZpbHRlck1hdGNoZWQgPSBwcm9wTHRlKGZpbHRlclRlc3RWYWx1ZSwgcHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGZpbHRlciBvcGVyYXRvcjogJHtvcH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbFByb3BGaWx0ZXJzTWF0Y2ggPSBhbGxQcm9wRmlsdGVyc01hdGNoICYmIGZpbHRlck1hdGNoZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbFByb3BGaWx0ZXJzTWF0Y2g7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRUcmlnZ2VyRXZlbnRGaWx0ZXI8VCBleHRlbmRzIFByb21wdENvbmZpZz4ge1xuICAgIHByaXZhdGUgZXZlbnRRdWV1ZTogRXZlbnRQYXlsb2FkID0gW107XG4gICAgcHJpdmF0ZSBldmVudFJlY2VpdmVkQ2FsbGJhY2s/OiAoZTogU2RrRXZlbnQpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENvbnRleHQsIGV2ZW50UmVjZWl2ZWRDYWxsYmFjaz86IChlOiBTZGtFdmVudCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmV2ZW50UmVjZWl2ZWRDYWxsYmFjayA9IGV2ZW50UmVjZWl2ZWRDYWxsYmFjaztcbiAgICAgICAgY3R4LnN1YnNjcmliZSgnZXZlbnRUcmFja2VkJywgdGhpcy5oYW5kbGVTZGtFdmVudCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmlsdGVyUHJvbXB0cyhcbiAgICAgICAgcHJvbXB0czogUHJvbXB0Q29uZmlnczxUPixcbiAgICAgICAgZmlsdGVyOiAocHJvbXB0OiBUKSA9PiBib29sZWFuID0gKF86IFQpID0+IHRydWVcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oJ0V2YWx1YXRpbmcgcHJvbXB0IHRyaWdnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlZFByb21wdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gcHJvbXB0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvbXB0ID0gcHJvbXB0c1tpZF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXZlbnRRdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5ldmVudFF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21wdFN1cHByZXNzZWQgPSBhd2FpdCBpc1Byb21wdFN1cHByZXNzZWQocHJvbXB0KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIXByb21wdFN1cHByZXNzZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck1hdGNoZWQocHJvbXB0LCBldmVudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyKHByb21wdClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFByb21wdHMucHVzaChwcm9tcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRRdWV1ZSA9IFtdO1xuXG4gICAgICAgIC8vIENhc3QgbmVjZXNzYXJ5IHRvIG5hcnJvdyB0aGUgdHlwZSBmcm9tIHRoZSBjb25zdHJhaW50LlxuICAgICAgICAvLyBTZWVtcyB0aGUgVFMgY29tcGlsZXIgaXNuJ3QgcXVpdGUgc21hcnQgZW5vdWdoIHdoZW4gaGFuZGxpbmdcbiAgICAgICAgLy8gdGhlICdUIGV4dGVuZHMgUHJvbXB0Q29uZmlnJyBjb25zdHJhaW50LlxuICAgICAgICByZXR1cm4gbWF0Y2hlZFByb21wdHMgYXMgVFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU2RrRXZlbnQgPSAoZTogU2RrRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gZS5kYXRhIGFzIEV2ZW50UGF5bG9hZDtcblxuICAgICAgICB0aGlzLmV2ZW50UXVldWUucHVzaCguLi5ldmVudHMpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRSZWNlaXZlZENhbGxiYWNrPy4oZSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgUGxhdGZvcm1Db25maWcgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IENoYW5uZWwgfSBmcm9tICcuLi9jb3JlL2NoYW5uZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbnRleHRTdGF0ZSB7XG4gICAgcGxhdGZvcm1Db25maWc6IFBsYXRmb3JtQ29uZmlnO1xuICAgIGNoYW5uZWxMaXN0OiBDaGFubmVsW107XG59XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVJQ29udGV4dFN0YXRlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgaCwgSlNYIH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHtcbiAgICBQdXNoUHJvbXB0Q29uZmlnLFxuICAgIFByb21wdFR5cGVOYW1lLFxuICAgIEFsZXJ0UHJvbXB0Q29uZmlnLFxuICAgIEJhbm5lclByb21wdENvbmZpZyxcbiAgICBQcm9tcHRBY3Rpb24sXG4gICAgVXNlckNoYW5uZWxTZWxlY3RJbmxpbmVBY3Rpb24sXG4gICAgQ2hhbm5lbExpc3RJdGVtXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUHJvbXB0TWFuYWdlclN0YXRlIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBQdXNoU3Vic2NyaXB0aW9uU3RhdGUgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgQmVsbCB9IGZyb20gJy4vYmVsbCc7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgeyBDaGFubmVsc0RpYWxvZyB9IGZyb20gJy4vZGlhbG9nL2NoYW5uZWxzLWRpYWxvZyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTWFzayB9IGZyb20gJy4vb3ZlcmxheS9iYWNrZ3JvdW5kLW1hc2snO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheS9wdXNoLXBlcm1zJztcbmltcG9ydCB7IE92ZXJsYXlTaWxlbnQgfSBmcm9tICcuL292ZXJsYXkvcHVzaC1wZXJtcy1zaWxlbnQnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVUJTQ1JJQkVfTEFCRUwgPSAnU3Vic2NyaWJlIGZvciBub3RpZmljYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2VQb3NpdGlvbihwb3M6IHN0cmluZyk6ICdsZWZ0JyB8ICdyaWdodCcge1xuICAgIHJldHVybiBwb3MuaW5kZXhPZignbGVmdCcpID4gLTEgPyAncmlnaHQnIDogJ2xlZnQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb21wdFVpUHJvcHM8VCBleHRlbmRzIFB1c2hQcm9tcHRDb25maWc+IHtcbiAgICBjb25maWc6IFQ7XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBvblByb21wdEFjY2VwdGVkOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIGFjdGlvbj86IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uO1xufVxuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgICBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuZXhwb3J0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBuZXZlcj4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz17YGt1bXVsb3MtdG9vbHRpcCBrdW11bG9zLXRvb2x0aXAtJHt0aGlzLnByb3BzLnBvc2l0aW9ufWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50PHsgbWVzc2FnZTogc3RyaW5nIH0sIG5ldmVyPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImt1bXVsb3MtdG9hc3RcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvZGl2PjtcbiAgICB9XG59XG5cbmludGVyZmFjZSBVaVByb3BzIHtcbiAgICBwcm9tcHRzOiBQdXNoUHJvbXB0Q29uZmlnW107XG4gICAgc3Vic2NyaXB0aW9uU3RhdGU6IFB1c2hTdWJzY3JpcHRpb25TdGF0ZTtcbiAgICBwcm9tcHRNYW5hZ2VyU3RhdGU6IFByb21wdE1hbmFnZXJTdGF0ZTtcbiAgICBvblByb21wdEFjY2VwdGVkOiAoXG4gICAgICAgIHByb21wdDogUHVzaFByb21wdENvbmZpZyxcbiAgICAgICAgY2hhbm5lbFNlbGVjdGlvbnM/OiBDaGFubmVsTGlzdEl0ZW1bXVxuICAgICkgPT4gdm9pZDtcbiAgICBvblByb21wdERlY2xpbmVkOiAocHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnKSA9PiB2b2lkO1xuICAgIG9uUG9zdEFjdGlvbkNvbmZpcm06IChcbiAgICAgICAgcHJvbXB0OiBQdXNoUHJvbXB0Q29uZmlnLFxuICAgICAgICBjaGFubmVsU2VsZWN0aW9ucz86IENoYW5uZWxMaXN0SXRlbVtdXG4gICAgKSA9PiB2b2lkO1xuICAgIG9uRGlzbWlzc092ZXJsYXk6IChwcm9tcHQ6IFB1c2hQcm9tcHRDb25maWcpID0+IHZvaWQ7XG4gICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdD86IFB1c2hQcm9tcHRDb25maWc7XG4gICAgY3VycmVudFBvc3RBY3Rpb24/OiBQcm9tcHRBY3Rpb247XG59XG5cbmludGVyZmFjZSBVaVN0YXRlIHtcbiAgICB0b2FzdFF1ZXVlOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWkgZXh0ZW5kcyBDb21wb25lbnQ8VWlQcm9wcywgVWlTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBVaVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXF1ZXVlVG9hc3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogdGhpcy5zdGF0ZS50b2FzdFF1ZXVlLnNsaWNlKDEpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzaG93VG9hc3QobWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgIW1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IFsuLi50aGlzLnN0YXRlLnRvYXN0UXVldWUsIG1lc3NhZ2VdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5kZXF1ZXVlVG9hc3QsIDMyMDApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5tYXliZVJlbmRlclByb21wdEJhY2tncm91bmRNYXNrKCl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9tcHRzLm1hcCh0aGlzLnJlbmRlclByb21wdCwgdGhpcyl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0QWN0aW9uKCl9XG5cbiAgICAgICAgICAgICAgICB7IWlzTW9iaWxlKCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0U3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0PXt0aGlzLnByb3BzLmN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgeyFpc01vYmlsZSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlTaWxlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdFN0YXRlPXt0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdD17dGhpcy5wcm9wcy5jdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9e3RoaXMucHJvcHMub25EaXNtaXNzT3ZlcmxheX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG9hc3RRdWV1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0IG1lc3NhZ2U9e3RoaXMuc3RhdGUudG9hc3RRdWV1ZVswXX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GcmFnbWVudD4sXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWF5YmVSZW5kZXJQcm9tcHRCYWNrZ3JvdW5kTWFzaygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJ3JlcXVlc3RpbmcnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZSB8fFxuICAgICAgICAgICAgJ3JlcXVlc3Rpbmctc2lsZW50JyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgcHJvbXB0cyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBmaXJzdFByb21wdFdpdGhNYXNrID0gcHJvbXB0cy5maWx0ZXIoXG4gICAgICAgICAgICBwID0+XG4gICAgICAgICAgICAgICAgKHAudHlwZSA9PT0gUHJvbXB0VHlwZU5hbWUuQUxFUlQgfHxcbiAgICAgICAgICAgICAgICAgICAgcC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5CQU5ORVIpICYmXG4gICAgICAgICAgICAgICAgISFwLmJhY2tncm91bmRNYXNrXG4gICAgICAgIClbMF0gYXMgQWxlcnRQcm9tcHRDb25maWcgfCBCYW5uZXJQcm9tcHRDb25maWc7XG5cbiAgICAgICAgaWYgKCFmaXJzdFByb21wdFdpdGhNYXNrKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmaXJzdFByb21wdFdpdGhNYXNrLmJhY2tncm91bmRNYXNrIS5jb2xvcnMuYmdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gPEJhY2tncm91bmRNYXNrIHN0eWxlPXtzdHlsZX0gLz47XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvbXB0KHByb21wdDogUHVzaFByb21wdENvbmZpZykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAncmVxdWVzdGluZycgPT09IHRoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlIHx8XG4gICAgICAgICAgICAncmVxdWVzdGluZy1zaWxlbnQnID09PSB0aGlzLnByb3BzLnByb21wdE1hbmFnZXJTdGF0ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdwb3N0YWN0aW9uJyA9PT0gdGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChwcm9tcHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmVsbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17cHJvbXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uU3RhdGU9e3RoaXMucHJvcHMuc3Vic2NyaXB0aW9uU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9tcHRNYW5hZ2VyU3RhdGU9e3RoaXMucHJvcHMucHJvbXB0TWFuYWdlclN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHRBY2NlcHRlZD17dGhpcy5wcm9wcy5vblByb21wdEFjY2VwdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9tcHREZWNsaW5lZD17dGhpcy5wcm9wcy5vblByb21wdERlY2xpbmVkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgICAgICBjYXNlICdiYW5uZXInOlxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb246IFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5BTEVSVCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSBwcm9tcHQuYWN0aW9ucz8uZmluZDxcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJDaGFubmVsU2VsZWN0SW5saW5lQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgID4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBQcm9tcHRBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICk6IGFjdGlvbiBpcyBVc2VyQ2hhbm5lbFNlbGVjdElubGluZUFjdGlvbiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi50eXBlID09PSAndXNlckNoYW5uZWxTZWxlY3RJbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25TdGF0ZT17dGhpcy5wcm9wcy5zdWJzY3JpcHRpb25TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZT17dGhpcy5wcm9wcy5wcm9tcHRNYW5hZ2VyU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdEFjY2VwdGVkPXt0aGlzLnByb3BzLm9uUHJvbXB0QWNjZXB0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb21wdERlY2xpbmVkPXt0aGlzLnByb3BzLm9uUHJvbXB0RGVjbGluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclBvc3RBY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb21wdE1hbmFnZXJTdGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRQb3N0QWN0aW9uLFxuICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoJ3Bvc3RhY3Rpb24nICE9PSBwcm9tcHRNYW5hZ2VyU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgndXNlckNoYW5uZWxTZWxlY3REaWFsb2cnICE9PSBjdXJyZW50UG9zdEFjdGlvbj8udHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFja2dyb3VuZE1hc2sgPSBudWxsO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChjdXJyZW50bHlSZXF1ZXN0aW5nUHJvbXB0LnR5cGUgPT09IFByb21wdFR5cGVOYW1lLkFMRVJUIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC50eXBlID09PSBQcm9tcHRUeXBlTmFtZS5CQU5ORVIpICYmXG4gICAgICAgICAgICB1bmRlZmluZWQgIT09IGN1cnJlbnRseVJlcXVlc3RpbmdQcm9tcHQuYmFja2dyb3VuZE1hc2tcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBtYXNrQ29uZmlnID0gY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdC5iYWNrZ3JvdW5kTWFzaztcbiAgICAgICAgICAgIGJhY2tncm91bmRNYXNrID0gKFxuICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kTWFza1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IG1hc2tDb25maWcuY29sb3JzLmJnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtiYWNrZ3JvdW5kTWFza31cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbHNEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtjdXJyZW50UG9zdEFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtjaGFubmVsU2VsZWN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUG9zdEFjdGlvbkNvbmZpcm0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UmVxdWVzdGluZ1Byb21wdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9tcHRDb25maWcgfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVyUHJvbXB0QWN0aXZhdGlvbihcbiAgICBwcm9tcHQ6IFByb21wdENvbmZpZyxcbiAgICBhY3RpdmF0ZUZuOiAocHJvbXB0OiBQcm9tcHRDb25maWcpID0+IHZvaWRcbikge1xuICAgIGlmIChcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgcHJvbXB0LnRyaWdnZXIuYWZ0ZXJTZWNvbmRzIDwgMFxuICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5pbmZvKFxuICAgICAgICAnRGVmZXJyaW5nIHByb21wdCBhY3RpdmF0aW9uIGJ5ICcgKyBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHNcbiAgICApO1xuXG4gICAgc2V0VGltZW91dChhY3RpdmF0ZUZuLCBwcm9tcHQudHJpZ2dlci5hZnRlclNlY29uZHMgKiAxMDAwLCBwcm9tcHQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgS3VtdWxvcyBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJTdXBwb3J0ZWQgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxudHlwZSBDbWRGbiA9IChrOiBLdW11bG9zKSA9PiB2b2lkO1xudHlwZSBDbWQgPSBzdHJpbmcgfCBDbWRGbjtcbnR5cGUgUXVldWVkQ29tbWFuZCA9IFtDbWQsIC4uLmFueVtdXTtcbnR5cGUgTGF6eUt1bXVsb3MgPSB7IHE/OiBRdWV1ZWRDb21tYW5kW10gfTtcblxuaW50ZXJmYWNlIFdpbiBleHRlbmRzIFdpbmRvdyB7XG4gICAgS3VtdWxvcz86IExhenlLdW11bG9zO1xufVxuXG5kZWNsYXJlIHZhciB3aW5kb3c6IFdpbjtcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgICBpZiAoIXdpbmRvdy5LdW11bG9zPy5xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxID0gd2luZG93Lkt1bXVsb3MucTtcbiAgICBjb25zdCBpbml0ID0gcS5maW5kKGl0ZW0gPT4gaXRlbVswXSA9PT0gJ2luaXQnKTtcblxuICAgIGlmIChpbml0Py5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNCcm93c2VyU3VwcG9ydGVkKGluaXRbMV0uZmVhdHVyZXMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICdPcHRpbW9iaWxlOiB0aGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBhbGwgcmVxdWlyZWQgZmVhdHVyZXMsIGFib3J0aW5nIGluaXRpYWxpemF0aW9uLi4uJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnByb3RvY29sICE9PSAnaHR0cHM6Jykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAnT3B0aW1vYmlsZTogdGhpcyBwYWdlIGlzIG5vdCBzZXJ2ZWQgb3ZlciBIVFRQUywgc29tZSBmZWF0dXJlcyBtYXkgYmUgdW5hdmFpbGFibGUuLi4nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCBLdW11bG9zLmJ1aWxkSW5zdGFuY2UoaW5pdFsxXSk7XG4gICAgY29uc3QgZXhlY3V0b3IgPSBmdW5jdGlvbihjbWQ6IENtZCwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY21kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY21kKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKGluc3RhbmNlIGFzIGFueSlbY21kXSguLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgY21kID0gcVtpXVswXTtcblxuICAgICAgICBpZiAoY21kID09PSAnaW5pdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY3V0b3IoLi4ucVtpXSk7XG4gICAgfVxuXG4gICAgKHdpbmRvdy5LdW11bG9zIGFzIGFueSkgPSBleGVjdXRvcjtcbn1cblxubWFpbigpO1xuIiwiaW1wb3J0IHsgUHVzaFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL3B1c2gnO1xuXG5leHBvcnQgZW51bSBXb3JrZXJNZXNzYWdlVHlwZSB7XG4gICAgS1B1c2hSZWNlaXZlZCA9ICdLUHVzaFJlY2VpdmVkJ1xufVxuZXhwb3J0IHR5cGUgV29ya2VyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBXb3JrZXJNZXNzYWdlVHlwZS5LUHVzaFJlY2VpdmVkO1xuICAgIGRhdGE6IFB1c2hQYXlsb2FkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzS3VtdWxvc1dvcmtlck1lc3NhZ2UoZGF0YTogYW55KTogZGF0YSBpcyBXb3JrZXJNZXNzYWdlIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAoZGF0YSBhcyBXb3JrZXJNZXNzYWdlKS50eXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgV29ya2VyTWVzc2FnZVR5cGVbKGRhdGEgYXMgV29ya2VyTWVzc2FnZSkudHlwZV0gIT09IHVuZGVmaW5lZFxuICAgICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy93ZWIvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
