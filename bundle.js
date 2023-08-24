/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftBudgetValue": () => (/* binding */ leftBudgetValue),
/* harmony export */   "rightBudgetValue": () => (/* binding */ rightBudgetValue),
/* harmony export */   "filterBtn": () => (/* binding */ filterBtn),
/* harmony export */   "filterCloseBtn": () => (/* binding */ filterCloseBtn),
/* harmony export */   "filterModal": () => (/* binding */ filterModal),
/* harmony export */   "bookingModal": () => (/* binding */ bookingModal),
/* harmony export */   "roomModal": () => (/* binding */ roomModal),
/* harmony export */   "availableRoomsView": () => (/* binding */ availableRoomsView),
/* harmony export */   "userDashView": () => (/* binding */ userDashView),
/* harmony export */   "accountBtn": () => (/* binding */ accountBtn),
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn),
/* harmony export */   "roomsShownText": () => (/* binding */ roomsShownText),
/* harmony export */   "userBookingSections": () => (/* binding */ userBookingSections),
/* harmony export */   "currentBookings": () => (/* binding */ currentBookings),
/* harmony export */   "updateAvailableRooms": () => (/* binding */ updateAvailableRooms),
/* harmony export */   "calendar": () => (/* binding */ calendar),
/* harmony export */   "dateError": () => (/* binding */ dateError),
/* harmony export */   "noResultsView": () => (/* binding */ noResultsView),
/* harmony export */   "landingPage": () => (/* binding */ landingPage),
/* harmony export */   "errorMsg": () => (/* binding */ errorMsg),
/* harmony export */   "mainPage": () => (/* binding */ mainPage),
/* harmony export */   "showRoomsBtn": () => (/* binding */ showRoomsBtn),
/* harmony export */   "logOutBtn": () => (/* binding */ logOutBtn)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apicalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _rooms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _images_suite_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _images_lotus_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _images_pool_side_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _images_singleroom_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _images_juniorsuite_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _images_residentialsuite_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var _images_canopy_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18);
/* harmony import */ var _images_yoga_room_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var _images_resort_area_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20);
/* harmony import */ var _images_no_results_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21);
/* harmony import */ var _images_500_error_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);
// IMPORTS









//IMAGES












//GLOBAL VARIABLES
const leftSlider = document.querySelector('#min');
const rightSlider = document.querySelector('#max');
const leftBudgetValue = document.querySelector('.value1');
const rightBudgetValue = document.querySelector('.value2');
const filterCloseBtn = document.querySelector('.close-btn-1');
const roomCloseBtn = document.querySelector('.close-btn-2');
const filterBtn = document.querySelector('.filter-button');
const accountBtn = document.querySelector('.account-btn');
const searchBtn = document.querySelector('.search-btn');
const filterModal = document.querySelector('.filter-modal');
const roomModal = document.querySelector('.room-modal');
const bookingModal = document.querySelector('.booking-modal');
const availableRoomsView = document.querySelector('.available-rooms-view');
const roomsShownText = document.querySelector('.rooms-shown-txt');
const showRoomsBtn = document.querySelector('.filter-show-button');
const userDashView = document.querySelector('.user-dash-view');
const upcomingBookings = document.querySelector('.upcoming-bookings');
const pastBookings = document.querySelector('.past-bookings');
const currentBookings = document.querySelector('.current-bookings');
const userBookingSections = Array.from([upcomingBookings, pastBookings, currentBookings])
const filterAndSearchBtns = Array.from([filterBtn, searchBtn]);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const modalImgs = document.querySelector('.modal-imgs');
const calendar = document.querySelector('#calendar');
const dateError = document.querySelector('.date-error-msg');
const noResultsView = document.querySelector('.no-results-view');
const reserveBtn = document.querySelector('.reserve-room-btn');
const bookingDashBtn = document.querySelector('.booking-modal-dash-btn');
const bookingSearchBtn = document.querySelector('.booking-modal-search-btn');
const landingPage = document.querySelector('.landing-page-container');
const loginBtn = document.querySelector('.login-btn');
const errorMsg = document.querySelector('.credential-error');
const mainPage = document.querySelector('.available-rooms-container')
const loginForm = document.querySelector('.login-child')
const roomType = document.querySelector('#roomTypes');
const logOutBtn = document.querySelector('.logout-btn');

// FUNCTIONS
const updateAvailableRooms = (data) => {
  _apicalls__WEBPACK_IMPORTED_MODULE_1__.currentUser.selectedDate = (0,_dates__WEBPACK_IMPORTED_MODULE_4__.getDateValue)(calendar.value)
  const roomsByDate = (0,_rooms__WEBPACK_IMPORTED_MODULE_3__.getAvailableRooms)(data[1].bookings, data[0].rooms, _apicalls__WEBPACK_IMPORTED_MODULE_1__.currentUser.selectedDate);
  const roomsByPrice = (0,_rooms__WEBPACK_IMPORTED_MODULE_3__.filterRoomsByPrice)(roomsByDate, _apicalls__WEBPACK_IMPORTED_MODULE_1__.currentUser.budget.min, _apicalls__WEBPACK_IMPORTED_MODULE_1__.currentUser.budget.max)
  let filteredRooms = roomsByPrice;

  if(roomType.value !== 'allRooms') {
    filteredRooms = (0,_rooms__WEBPACK_IMPORTED_MODULE_3__.filterRoomsByType)(roomsByPrice, roomType.value)
  } 

  return filteredRooms
}

// EVENT LISTENERS

window.addEventListener('load', () => {
  ;(0,_apicalls__WEBPACK_IMPORTED_MODULE_1__.loadRooms)()
  ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.setCalendarDate)()
});

loginBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.logIn)

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
})

Array.from([leftSlider, rightSlider]).forEach((input) => {
  input.addEventListener('input', (e) => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.slideBudget)(e);
  });
});


Array.from([calendar, roomType, leftSlider, rightSlider]).forEach(input => {
  input.addEventListener('input', () => {
    (0,_apicalls__WEBPACK_IMPORTED_MODULE_1__.getRoomsAndBookings)(_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changeBtnAmount)
  })
})

Array.from([bookingSearchBtn, filterBtn, searchBtn]).forEach(btn => {
  btn.addEventListener('click', () => {
    ;(0,_apicalls__WEBPACK_IMPORTED_MODULE_1__.getRoomsAndBookings)(_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changeBtnAmount)
  })
})

filterAndSearchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(filterModal, 'add', 'setAttribute');
  });
})

filterCloseBtn.addEventListener('click', () => {
  ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(filterModal, 'remove', 'removeAttribute');
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.changeAttribute)(userDashView.querySelectorAll('.user-room'), 'setAttribute', 'tabindex', 0)
});

roomCloseBtn.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(roomModal, 'remove', 'removeAttribute');
});

accountBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.showDash);

calendar.addEventListener('input', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.removeDateError);

showRoomsBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.closeFilterModal);

availableRoomsView.addEventListener('click', (e) => {
  if(e.target.classList.contains('booking-btn')) {
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.updateSelectedRoom)(e)
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.updateRoomModal)()
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(roomModal, 'add', 'setAttribute')
  }
})

leftArrow.addEventListener('click', () => {
  modalImgs.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  })
})

leftArrow.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    modalImgs.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    })
  }
})

rightArrow.addEventListener('click', () => {
  modalImgs.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  })
})

rightArrow.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    modalImgs.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    })
  }
})

reserveBtn.addEventListener('click', () => {
  ;(0,_apicalls__WEBPACK_IMPORTED_MODULE_1__.submitBooking)(_apicalls__WEBPACK_IMPORTED_MODULE_1__.currentUser.id, _apicalls__WEBPACK_IMPORTED_MODULE_1__.pageData.selectedRoom.APIDate, _apicalls__WEBPACK_IMPORTED_MODULE_1__.pageData.selectedRoom.room.number)
})

bookingSearchBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.returnToFilter);
bookingDashBtn.addEventListener('click', () => {
  (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(bookingModal, 'remove', 'removeAttribute')
  ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.showDash)()
});

logOutBtn.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_2__.logOut)




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* FONTS\nfont-family: 'Jacques Francois', serif;\nfont-family: 'Maven Pro', sans-serif;\n*/\n\n* {\n  font-family: 'Jacques Francois', serif;\n  font-weight: 400;\n}\n\nbody {\n  background: rgba(118, 149, 193, 0.85);\n  margin: 0 auto; \n  height: 100%;\n}\n\nheader {\n  background: rgba(249, 249, 249, 0.13);\n  max-height: 5%;\n  width: 100%;\n  display: flex; \n  align-items: center;\n\n}\n\nnav {\n  display: flex; \n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 75%;\n  max-height: 10%;\n}\n\nh1 {\n  word-spacing: 0.35em;\n  margin: 0 auto; \n  text-align: center;\n}\n\nh1 > span {\n  letter-spacing: -0.2em;\n}\n\nh2, .modal-heading {\n  font-family: 'Maven Pro', sans-serif;\n  font-size: large;\n  letter-spacing: 0.1em;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.logo {\n  height: 50%;\n  width: 10%;\n  border-right: 2px solid black;\n  margin: 1% 2% 1% 0;\n  padding: 1%\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.content-box {\n  height: 80%;\n  width: 97vw;\n  position: relative; \n}\n\n/* LANDING PAGE VIEW */\n.landing-page-view {\n  height: 90%;\n}\n\n.bg-img {\n  width: 95%;\n  height: 95%;\n  margin: 2%;\n}\n\n.initial-content-container {\n  display: flex;\n  justify-content: center; \n  align-items: center;\n  position: absolute;\n  top: 10%;\n  padding: 2%;\n  margin: 5%;\n  width: 22%;\n  height: 55%;\n  background: rgba(217, 217, 217, 0.8);\n  border-radius: 28px;\n}\n\n.login-view-container {\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n}\n\n.login-child {\n  display: flex; \n  flex-direction: column;\n  width: 80%;\n}\n\n.login-child > label {\n  margin-bottom: 5%;\n}\n\n.login-child > input {\n  margin-top: 5%;\n  border-radius: 10px;\n}\n\n.login-view-container p {\n  text-align: center;\n}\n\ninput {\n  border: none;\n  padding: 2%;\n}\n\n/* AVAILABLE ROOMS VIEW */\n.available-rooms-container {\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.available-rooms-view {\n  margin-right: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rooms-shown-txt {\n  margin-left: 5%;\n  align-self: flex-start;\n}\n\n.single-room {\n  background: rgba(255, 255, 255, 0.6);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 80%;\n  height: 40%;\n  position: relative;\n  padding: 1%;\n  margin-bottom: 5%;\n  margin-left: 8%;\n  display: flex; \n  justify-content: space-between;\n  align-items: center;\n}\n\n.single-room > img {\n  height: 90%;\n  max-width: 36%;\n  width: 36%;\n}\n\n.room-details {\n  margin-right: 25%;\n}\n\n.room-details > p {\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n\n/* USER DASHBOARD */\n.current-bookings > section{\n  min-width: 30%;\n  max-width: 35%;\n}\n\n\n.current-bookings {\n  overflow-x: auto; \n  display: flex;\n  max-width: 95%;\n}\n\n.user-dash-view {\n  width: 80%;\n  max-height: 90%;\n}\n\n.all-user-bookings {\n  display: flex;\n  height: 100%;\n  position: relative;\n}\n\n.all-user-bookings > .content-box {\n  max-height: 60%;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.user-room {\n  flex-direction: column;\n  align-items: center;\n  max-width: 60%;\n  height: 300px;\n}\n\n.user-room > img {\n  max-width: none;\n  width: 100%;\n  height:50%;\n}\n\n.user-room > .room-details {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.user-room > .room-details > p {\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n}\n\n/* FILTER MODAL */\n.modal {\n  position: absolute;\n  min-height: fit-content; \n  height: 70%;\n  width: 60%;\n  background: rgba(154, 179, 199, 0.863);\n  border-radius: 20px;\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-top {\n  display: flex; \n  width: 98%;\n  margin-top: 1%;\n}\n\n.modal-heading {\n  padding-right: 7%;\n}\n\n.filter-modal-bottom {\n  display: flex; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 98%;\n  min-height: min-content;\n  height: 90%;\n}\n\n.filter-tags {\n  min-height: min-content;\n  height: 60%;\n  width: 60%; \n  display: flex; \n  justify-content: center;\n  align-items: center;\n}\n\n.filter-tags > form {\n  margin: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.filter-tags > form > input, .filter-tags > form > select {\n  border-radius: 25px;\n  background-color:rgba(255, 255, 255, 0.474)\n}\n\n.filter-tags > form > label {\n  text-align: center;\n}\n\n.budget-container {\n  width: 90%;\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5%;\n}\n\n.values {\n  background-color:rgba(118, 149, 193, 0.85);\n  padding: 1% 5%; \n  border-radius: 8px;\n}\n\n.values > span {\n  font-family: 'Maven Pro', sans-serif;\n}\n\n.slider-track {\n  display:flex; \n  justify-content: center;\n  align-items: center;\n  background-color: #3c4f6b;\n  width: 80%;\n  height: 8%;\n  border-radius: 3px;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none; \n  -moz-appearance:none; \n  appearance: none;\n  width: 50%;\n  margin: 0 auto;\n  background-color: #00000000;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1.5em;\n  width: 1.5em;\n  background-color: #6e9ddd;\n  border: 1px solid #6886B0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n  -moz-appearance: none;\n  height: 1.5em;\n  width: 1.5em;\n  background-color: #6e9ddd;\n  border: 1px solid #6886B0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n/* ROOM MODAL */\n\n.room-modal-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.modal-bottom {\n  display: flex;\n  justify-content: center;\n  max-height: 20%;\n  width: 80%;\n}\n\n.modal-description, .modal-cost-date {\n  font-family: Maven Pro;\n  text-align: center;\n}\n\n.modal-cost-date span {\n  font-family: Maven Pro;\n}\n\n.modal-description-wrapper {\n  min-height: 20%;\n}\n\n.modal-imgs {\n  overflow-x: auto;\n  max-height: 100%;\n  display: flex;\n}\n\n.modal-imgs > img {\n  width: 50%;\n  min-height: 100%;\n  margin-right: 5%;\n}\n\n#lastImg {\n  margin: 0 auto;\n}\n\n.arrows {\n  background-color: #00000000;\n  border: none;\n}\n\n.img-slide-wrapper {\n  display: flex;\n  align-items: center;\n  max-width: 90%;\n  max-height: 60%;\n}\n\n/* SCROLL BAR */\n.scrollbar {\n  overflow-y: auto;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 12px;\n  background-color:  #ADACAC;\n  border-radius: 5px;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: #6886B0;\n  border-radius: 5px;\n}\n\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: #7596c5;\n}\n\n/* ICONS */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n.icon {\n  color: #405570;\n  padding-left: 10%;\n}\n\n/* BUTTONS */\n.login-btn {\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 29px;\n  border: none;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  padding-left: 10%; \n  padding-right: 10%;\n}\n\n.nav-btn {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-left: 5%;\n  height: 80%;\n}\n\n.btn {\n  background-color:  #97AECF;\n  border: 1px solid #6886B0;\n  border-radius: 25px;\n  align-self: flex-end;\n  padding-left: 2%;\n  padding-right: 2%;\n  cursor: pointer;\n}\n\n.btn-text {\n  font-family: 'Maven Pro', sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n  margin: 10%;\n  text-align: center;\n  padding: 0 auto;\n}\n\n.reserve-room-btn {\n  align-self: center;\n}\n\n.filter-show-button {\n  margin-top: 0;\n  margin-bottom: 2%;\n  margin-right: 5%;\n  padding: 1%;\n  border-radius: 8px;\n  align-self: flex-end;\n  background-color:#6789ba;\n  border: none;\n}\n\n.close-btn {\n  background-color: #00000000;\n  border: none;\n  cursor: pointer;\n}\n\n/* BOOKING MODAL */\n.booking-modal {\n  background: rgba(154, 179, 199, 0.947);\n  height: 30%;\n}\n\n.booking-modal-bottom {\n  max-height: 10%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ERROR VIEWS */\n.no-results-view {\n  max-height: 80%;\n  display: flex; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-page {\n  max-height: 100%;\n  width: 100vw;\n  position: relative;\n  display: grid;\n}\n\n#serverInstructions {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  justify-self: center;\n  margin-top: 5%;\n}\n\n.error-page > img {\n  max-height: 100%;\n  width: 100%;\n}\n\n.error-btn {\n  text-align: center;\n}\n\n.no-results-img {\n  max-height: 90%;  \n  max-width: 90%;\n} \n\n\n\n/* ANIMATIONS */\n\n.fade-in {\n  animation: fade-in 0.75s ease-in forwards, animate-modal .75s ease-in-out forwards;\n}\n\n@keyframes animate-modal {\n  0% {\n    height: 0%;\n  }\n  100% {\n    height: 70%\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  30% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  60% {\n    visibility: visible;\n    opacity: 1;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n/* OVERRIDES */\nbutton:hover {\n  cursor: pointer;\n  background-color:rgba(118, 149, 193, 0.85);\n}\n\n.close-btn:hover, .arrows:hover {\n  background-color: #00000000;\n}\n.last-room {\n  margin-bottom: 1%; \n}\n\n.blur {\n  filter: blur(4px);\n}\n\n.no-click{\n  pointer-events: none;\n  user-select: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.error {\n  color: red;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1000px) {\n  .landing-page-view {\n    display: flex;\n    justify-content: center;\n  }\n  .initial-content-container {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 975px) {\n  .room-details {\n    margin-right: 10%;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  .initial-content-container {\n    width: 80%;\n  }\n\n  .bg-img {\n    height: 75%;\n  }\n\n  .filter-tags {\n    flex-direction: column;\n    justify-content: space-around;\n    width: 100%;\n  }\n\n  .filter-option {\n    width: 50%;\n  }\n\n  nav {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .nav-btn {\n    width: 45%;\n    margin: 1%\n  }\n\n  .filter-show-button {\n    align-self: center;\n    margin-top: 10%;\n  }\n\n  .all-user-bookings {\n    flex-direction: column;\n\n  }\n\n  .single-room {\n    height: 70%;\n    flex-direction: column;\n  }\n\n  .single-room > img {\n    height: 60%;\n    width: 100%;\n    max-width: none;\n  }\n\n  .user-room {\n    height: 90%; \n    min-width: 300px;\n  }\n\n  .all-user-bookings > .content-box {\n    height: 400px;\n    margin-top: 5%; \n    flex-direction: row;\n    overflow-x: auto;\n    align-self: center;\n  }\n\n  .room-details {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  .room-details > p {\n    margin: 1%;\n  }\n\n  .modal-imgs > img {\n    width: 100%;\n  }\n\n  .modal {\n    width: 90%;\n  }\n\n\n  @keyframes animate-modal {\n    0% {\n      height: 0%;\n    }\n    100% {\n      height: 60%\n    }\n  }\n\n  .booking-modal-dash-btn, .booking-modal-search-btn {\n    margin: 1% 1% 10% 1%\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .logo {\n    width: 20%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* FONTS\nfont-family: 'Jacques Francois', serif;\nfont-family: 'Maven Pro', sans-serif;\n*/\n\n* {\n  font-family: 'Jacques Francois', serif;\n  font-weight: 400;\n}\n\nbody {\n  background: rgba(118, 149, 193, 0.85);\n  margin: 0 auto; \n  height: 100%;\n}\n\nheader {\n  background: rgba(249, 249, 249, 0.13);\n  max-height: 5%;\n  width: 100%;\n  display: flex; \n  align-items: center;\n\n}\n\nnav {\n  display: flex; \n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 75%;\n  max-height: 10%;\n}\n\nh1 {\n  word-spacing: 0.35em;\n  margin: 0 auto; \n  text-align: center;\n}\n\nh1 > span {\n  letter-spacing: -0.2em;\n}\n\nh2, .modal-heading {\n  font-family: 'Maven Pro', sans-serif;\n  font-size: large;\n  letter-spacing: 0.1em;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.logo {\n  height: 50%;\n  width: 10%;\n  border-right: 2px solid black;\n  margin: 1% 2% 1% 0;\n  padding: 1%\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.content-box {\n  height: 80%;\n  width: 97vw;\n  position: relative; \n}\n\n/* LANDING PAGE VIEW */\n.landing-page-view {\n  height: 90%;\n}\n\n.bg-img {\n  width: 95%;\n  height: 95%;\n  margin: 2%;\n}\n\n.initial-content-container {\n  display: flex;\n  justify-content: center; \n  align-items: center;\n  position: absolute;\n  top: 10%;\n  padding: 2%;\n  margin: 5%;\n  width: 22%;\n  height: 55%;\n  background: rgba(217, 217, 217, 0.8);\n  border-radius: 28px;\n}\n\n.login-view-container {\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 90%;\n  width: 100%;\n}\n\n.login-child {\n  display: flex; \n  flex-direction: column;\n  width: 80%;\n}\n\n.login-child > label {\n  margin-bottom: 5%;\n}\n\n.login-child > input {\n  margin-top: 5%;\n  border-radius: 10px;\n}\n\n.login-view-container p {\n  text-align: center;\n}\n\ninput {\n  border: none;\n  padding: 2%;\n}\n\n/* AVAILABLE ROOMS VIEW */\n.available-rooms-container {\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.available-rooms-view {\n  margin-right: 1%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.rooms-shown-txt {\n  margin-left: 5%;\n  align-self: flex-start;\n}\n\n.single-room {\n  background: rgba(255, 255, 255, 0.6);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  width: 80%;\n  height: 40%;\n  position: relative;\n  padding: 1%;\n  margin-bottom: 5%;\n  margin-left: 8%;\n  display: flex; \n  justify-content: space-between;\n  align-items: center;\n}\n\n.single-room > img {\n  height: 90%;\n  max-width: 36%;\n  width: 36%;\n}\n\n.room-details {\n  margin-right: 25%;\n}\n\n.room-details > p {\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n\n/* USER DASHBOARD */\n.current-bookings > section{\n  min-width: 30%;\n  max-width: 35%;\n}\n\n\n.current-bookings {\n  overflow-x: auto; \n  display: flex;\n  max-width: 95%;\n}\n\n.user-dash-view {\n  width: 80%;\n  max-height: 90%;\n}\n\n.all-user-bookings {\n  display: flex;\n  height: 100%;\n  position: relative;\n}\n\n.all-user-bookings > .content-box {\n  max-height: 60%;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.user-room {\n  flex-direction: column;\n  align-items: center;\n  max-width: 60%;\n  height: 300px;\n}\n\n.user-room > img {\n  max-width: none;\n  width: 100%;\n  height:50%;\n}\n\n.user-room > .room-details {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.user-room > .room-details > p {\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n}\n\n/* FILTER MODAL */\n.modal {\n  position: absolute;\n  min-height: fit-content; \n  height: 70%;\n  width: 60%;\n  background: rgba(154, 179, 199, 0.863);\n  border-radius: 20px;\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-top {\n  display: flex; \n  width: 98%;\n  margin-top: 1%;\n}\n\n.modal-heading {\n  padding-right: 7%;\n}\n\n.filter-modal-bottom {\n  display: flex; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 98%;\n  min-height: min-content;\n  height: 90%;\n}\n\n.filter-tags {\n  min-height: min-content;\n  height: 60%;\n  width: 60%; \n  display: flex; \n  justify-content: center;\n  align-items: center;\n}\n\n.filter-tags > form {\n  margin: 5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.filter-tags > form > input, .filter-tags > form > select {\n  border-radius: 25px;\n  background-color:rgba(255, 255, 255, 0.474)\n}\n\n.filter-tags > form > label {\n  text-align: center;\n}\n\n.budget-container {\n  width: 90%;\n  display: flex; \n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5%;\n}\n\n.values {\n  background-color:rgba(118, 149, 193, 0.85);\n  padding: 1% 5%; \n  border-radius: 8px;\n}\n\n.values > span {\n  font-family: 'Maven Pro', sans-serif;\n}\n\n.slider-track {\n  display:flex; \n  justify-content: center;\n  align-items: center;\n  background-color: #3c4f6b;\n  width: 80%;\n  height: 8%;\n  border-radius: 3px;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none; \n  -moz-appearance:none; \n  appearance: none;\n  width: 50%;\n  margin: 0 auto;\n  background-color: #00000000;\n}\n\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 1.5em;\n  width: 1.5em;\n  background-color: #6e9ddd;\n  border: 1px solid #6886B0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type=\"range\"]::-moz-range-thumb {\n  -moz-appearance: none;\n  height: 1.5em;\n  width: 1.5em;\n  background-color: #6e9ddd;\n  border: 1px solid #6886B0;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n/* ROOM MODAL */\n\n.room-modal-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.modal-bottom {\n  display: flex;\n  justify-content: center;\n  max-height: 20%;\n  width: 80%;\n}\n\n.modal-description, .modal-cost-date {\n  font-family: Maven Pro;\n  text-align: center;\n}\n\n.modal-cost-date span {\n  font-family: Maven Pro;\n}\n\n.modal-description-wrapper {\n  min-height: 20%;\n}\n\n.modal-imgs {\n  overflow-x: auto;\n  max-height: 100%;\n  display: flex;\n}\n\n.modal-imgs > img {\n  width: 50%;\n  min-height: 100%;\n  margin-right: 5%;\n}\n\n#lastImg {\n  margin: 0 auto;\n}\n\n.arrows {\n  background-color: #00000000;\n  border: none;\n}\n\n.img-slide-wrapper {\n  display: flex;\n  align-items: center;\n  max-width: 90%;\n  max-height: 60%;\n}\n\n/* SCROLL BAR */\n.scrollbar {\n  overflow-y: auto;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 12px;\n  background-color:  #ADACAC;\n  border-radius: 5px;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: #6886B0;\n  border-radius: 5px;\n}\n\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: #7596c5;\n}\n\n/* ICONS */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n.icon {\n  color: #405570;\n  padding-left: 10%;\n}\n\n/* BUTTONS */\n.login-btn {\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 29px;\n  border: none;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  padding-left: 10%; \n  padding-right: 10%;\n}\n\n.nav-btn {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-left: 5%;\n  height: 80%;\n}\n\n.btn {\n  background-color:  #97AECF;\n  border: 1px solid #6886B0;\n  border-radius: 25px;\n  align-self: flex-end;\n  padding-left: 2%;\n  padding-right: 2%;\n  cursor: pointer;\n}\n\n.btn-text {\n  font-family: 'Maven Pro', sans-serif;\n  font-size: 16px;\n  letter-spacing: 0.1em;\n  margin: 10%;\n  text-align: center;\n  padding: 0 auto;\n}\n\n.reserve-room-btn {\n  align-self: center;\n}\n\n.filter-show-button {\n  margin-top: 0;\n  margin-bottom: 2%;\n  margin-right: 5%;\n  padding: 1%;\n  border-radius: 8px;\n  align-self: flex-end;\n  background-color:#6789ba;\n  border: none;\n}\n\n.close-btn {\n  background-color: #00000000;\n  border: none;\n  cursor: pointer;\n}\n\n/* BOOKING MODAL */\n.booking-modal {\n  background: rgba(154, 179, 199, 0.947);\n  height: 30%;\n}\n\n.booking-modal-bottom {\n  max-height: 10%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ERROR VIEWS */\n.no-results-view {\n  max-height: 80%;\n  display: flex; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-page {\n  max-height: 100%;\n  width: 100vw;\n  position: relative;\n  display: grid;\n}\n\n#serverInstructions {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  justify-self: center;\n  margin-top: 5%;\n}\n\n.error-page > img {\n  max-height: 100%;\n  width: 100%;\n}\n\n.error-btn {\n  text-align: center;\n}\n\n.no-results-img {\n  max-height: 90%;  \n  max-width: 90%;\n} \n\n\n\n/* ANIMATIONS */\n\n.fade-in {\n  animation: fade-in 0.75s ease-in forwards, animate-modal .75s ease-in-out forwards;\n}\n\n@keyframes animate-modal {\n  0% {\n    height: 0%;\n  }\n  100% {\n    height: 70%\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  30% {\n    visibility: hidden;\n    opacity: 0;\n  }\n  60% {\n    visibility: visible;\n    opacity: 1;\n  }\n  100% {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n\n/* OVERRIDES */\nbutton:hover {\n  cursor: pointer;\n  background-color:rgba(118, 149, 193, 0.85);\n}\n\n.close-btn:hover, .arrows:hover {\n  background-color: #00000000;\n}\n.last-room {\n  margin-bottom: 1%; \n}\n\n.blur {\n  filter: blur(4px);\n}\n\n.no-click{\n  pointer-events: none;\n  user-select: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.error {\n  color: red;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1000px) {\n  .landing-page-view {\n    display: flex;\n    justify-content: center;\n  }\n  .initial-content-container {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 975px) {\n  .room-details {\n    margin-right: 10%;\n  }\n}\n\n@media screen and (max-width: 750px) {\n  .initial-content-container {\n    width: 80%;\n  }\n\n  .bg-img {\n    height: 75%;\n  }\n\n  .filter-tags {\n    flex-direction: column;\n    justify-content: space-around;\n    width: 100%;\n  }\n\n  .filter-option {\n    width: 50%;\n  }\n\n  nav {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .nav-btn {\n    width: 45%;\n    margin: 1%\n  }\n\n  .filter-show-button {\n    align-self: center;\n    margin-top: 10%;\n  }\n\n  .all-user-bookings {\n    flex-direction: column;\n\n  }\n\n  .single-room {\n    height: 70%;\n    flex-direction: column;\n  }\n\n  .single-room > img {\n    height: 60%;\n    width: 100%;\n    max-width: none;\n  }\n\n  .user-room {\n    height: 90%; \n    min-width: 300px;\n  }\n\n  .all-user-bookings > .content-box {\n    height: 400px;\n    margin-top: 5%; \n    flex-direction: row;\n    overflow-x: auto;\n    align-self: center;\n  }\n\n  .room-details {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  .room-details > p {\n    margin: 1%;\n  }\n\n  .modal-imgs > img {\n    width: 100%;\n  }\n\n  .modal {\n    width: 90%;\n  }\n\n\n  @keyframes animate-modal {\n    0% {\n      height: 0%;\n    }\n    100% {\n      height: 60%\n    }\n  }\n\n  .booking-modal-dash-btn, .booking-modal-search-btn {\n    margin: 1% 1% 10% 1%\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .logo {\n    width: 20%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoomsAndBookings": () => (/* binding */ getRoomsAndBookings),
/* harmony export */   "loadRooms": () => (/* binding */ loadRooms),
/* harmony export */   "submitBooking": () => (/* binding */ submitBooking),
/* harmony export */   "currentUser": () => (/* binding */ currentUser),
/* harmony export */   "pageData": () => (/* binding */ pageData)
/* harmony export */ });
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);



let pageData = {
  allRooms: [],
  selectedRoom: {},
};

let currentUser = {
  budget: {
    min: 150,
    max: 500,
  },
};

const loadRooms = () => {
  fetchAPI('rooms').then((data) => {
    pageData.allRooms = data.rooms;
  });
};

const submitBooking = (userID, date, roomNumber) => {
  const data = { userID, date, roomNumber };
  fetchAPI('bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.showConfirmation)(data.newBooking);
      getRoomsAndBookings(_domUpdates__WEBPACK_IMPORTED_MODULE_0__.updateBookingsHTML);
    })
    .catch(() => alert(`We failed to connect to the server. Please refresh.`));
};

const fetchAPI = (dataType, options) => {
  return fetch(`https://overlook-api-heroku.herokuapp.com/api/v1/${dataType}`, options)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      document
        .querySelectorAll('.main-container')
        .forEach((view) => view.classList.add('hidden'));
      document.querySelector('.error-page').classList.remove('hidden');
    });
};

const getRoomsAndBookings = (eventHandler) => {
  const id = currentUser.id;
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
    .then((data) => {
      eventHandler(data, id);
    })
    .catch(() => {
      document
        .querySelectorAll('.main-container')
        .forEach((view) => view.classList.add('hidden'));
      document.querySelector('.error-page').classList.remove('hidden');
    });
};




/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logIn": () => (/* binding */ logIn),
/* harmony export */   "slideBudget": () => (/* binding */ slideBudget),
/* harmony export */   "toggleModal": () => (/* binding */ toggleModal),
/* harmony export */   "showDash": () => (/* binding */ showDash),
/* harmony export */   "switchToHome": () => (/* binding */ switchToHome),
/* harmony export */   "createUserBookingsHTML": () => (/* binding */ createUserBookingsHTML),
/* harmony export */   "createAvailableRoomsHTML": () => (/* binding */ createAvailableRoomsHTML),
/* harmony export */   "setCalendarDate": () => (/* binding */ setCalendarDate),
/* harmony export */   "updateAvailableRoomsHTML": () => (/* binding */ updateAvailableRoomsHTML),
/* harmony export */   "updateBookingsHTML": () => (/* binding */ updateBookingsHTML),
/* harmony export */   "removeDateError": () => (/* binding */ removeDateError),
/* harmony export */   "closeFilterModal": () => (/* binding */ closeFilterModal),
/* harmony export */   "updateSelectedRoom": () => (/* binding */ updateSelectedRoom),
/* harmony export */   "updateRoomModal": () => (/* binding */ updateRoomModal),
/* harmony export */   "showConfirmation": () => (/* binding */ showConfirmation),
/* harmony export */   "returnToFilter": () => (/* binding */ returnToFilter),
/* harmony export */   "changeAttribute": () => (/* binding */ changeAttribute),
/* harmony export */   "changeBtnAmount": () => (/* binding */ changeBtnAmount),
/* harmony export */   "logOut": () => (/* binding */ logOut)
/* harmony export */ });
/* harmony import */ var _bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _apicalls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);







const formatRoomType = (room) => room.roomType.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const logIn = () => {
  const userName = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const validUser = (0,_login__WEBPACK_IMPORTED_MODULE_2__.verifyCredentials)(userName, password);

  if (validUser.valid) {
    _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.id = validUser.id;
    (0,_apicalls__WEBPACK_IMPORTED_MODULE_4__.getRoomsAndBookings)(updateBookingsHTML);
    changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.landingPage, _scripts__WEBPACK_IMPORTED_MODULE_3__.errorMsg], 'add', ['hidden'])
    changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.mainPage], 'remove', ['hidden'])
  } else {
    changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.errorMsg], 'remove', ['hidden'])
  }
};

const logOut = () => {
  _scripts__WEBPACK_IMPORTED_MODULE_3__.mainPage.classList.add('hidden')
  _scripts__WEBPACK_IMPORTED_MODULE_3__.landingPage.classList.remove('hidden')
  document.querySelector('#username').value = ''
  document.querySelector('#password').value = ''
  _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.id = null;
}

const setCalendarDate = () => {
  document
    .querySelector('#calendar')
    .setAttribute('min', (0,_dates__WEBPACK_IMPORTED_MODULE_1__.formatDate)('calendar', Date.now()));
};

const removeDateError = () => {
  if ((0,_dates__WEBPACK_IMPORTED_MODULE_1__.checkDateValidity)(Date.now(), _scripts__WEBPACK_IMPORTED_MODULE_3__.calendar.value)) {
    changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.calendar], 'remove', ['error']);
    changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.dateError], 'add', ['hidden']);
  }
};

const slideBudget = (e) => {
  const targets = {
    min: _scripts__WEBPACK_IMPORTED_MODULE_3__.leftBudgetValue,
    max: _scripts__WEBPACK_IMPORTED_MODULE_3__.rightBudgetValue,
  };
  _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.budget[e.target.id] = e.target.value;
  targets[e.target.id].innerText = _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.budget[e.target.id];
};

const changeClass = (elements, change, classes) => {
  elements.forEach((element) => {
    classes.forEach((item) => {
      element.classList[change](item);
    });
  });
};

const changeAttribute = (elements, change, attribute, boolean) => {
  elements.forEach((element) => {
    element[change](attribute, boolean);
  });
};

const toggleModal = (modal, changeOption, attributeOption) => {
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.accountBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.filterBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.logOutBtn], changeOption, ['no-click']);
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView, _scripts__WEBPACK_IMPORTED_MODULE_3__.userDashView, _scripts__WEBPACK_IMPORTED_MODULE_3__.noResultsView], changeOption, ['blur', 'no-click']);
  changeAttribute([_scripts__WEBPACK_IMPORTED_MODULE_3__.filterBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.accountBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.logOutBtn], attributeOption, 'disabled', true);
  changeAttribute(_scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView.querySelectorAll('.booking-btn'), attributeOption, 'disabled', true);

  if (modal !== _scripts__WEBPACK_IMPORTED_MODULE_3__.bookingModal) {
    modal.classList.toggle('fade-in');
  }

  modal.classList.toggle('hidden');
  _scripts__WEBPACK_IMPORTED_MODULE_3__.filterCloseBtn.classList.remove('hidden');
  changeAttribute(_scripts__WEBPACK_IMPORTED_MODULE_3__.userDashView.querySelectorAll('.user-room'), 'removeAttribute', 'tabindex', 0);
};

const showDash = () => {
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.filterBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.accountBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView, _scripts__WEBPACK_IMPORTED_MODULE_3__.noResultsView], 'add', ['hidden']);
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.userDashView, _scripts__WEBPACK_IMPORTED_MODULE_3__.logOutBtn], 'remove', ['hidden']);
  changeAttribute(_scripts__WEBPACK_IMPORTED_MODULE_3__.userDashView.querySelectorAll('.user-room'), 'setAttribute', 'tabindex', 0);
};

const switchToHome = () => {
  toggleModal(_scripts__WEBPACK_IMPORTED_MODULE_3__.filterModal, 'remove', 'removeAttribute');
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.filterBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.accountBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView],'remove',['hidden']);
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.searchBtn, _scripts__WEBPACK_IMPORTED_MODULE_3__.userDashView, _scripts__WEBPACK_IMPORTED_MODULE_3__.logOutBtn], 'add', ['hidden']);
};

const closeFilterModal = () => {
  if (_scripts__WEBPACK_IMPORTED_MODULE_3__.calendar.value && (0,_dates__WEBPACK_IMPORTED_MODULE_1__.checkDateValidity)(Date.now(), _scripts__WEBPACK_IMPORTED_MODULE_3__.calendar.value)) {
    (0,_apicalls__WEBPACK_IMPORTED_MODULE_4__.getRoomsAndBookings)(updateAvailableRoomsHTML);
    switchToHome();
  } else {
    _scripts__WEBPACK_IMPORTED_MODULE_3__.dateError.classList.remove('hidden');
    _scripts__WEBPACK_IMPORTED_MODULE_3__.calendar.classList.add('error');
  }
};

const getAltText = (img) => {
  const altOptions = {
    residentialsuite: 'open floor plan hotel suite with an outdoor patio, ocean view and blue decor',
    juniorsuite: 'modern hotel suite with an ocean view and small living room',
    singleroom: 'breezy plant filled hotel room with an ocean view and wicker decor',
    suite: 'suite with an ocean view, small desk, and comfortable chaise',
  };

  return altOptions[img];
};

const createCardInfo = (booking, rooms, i, array) => {
  const foundRoom = rooms.find((room) => room.number === booking.roomNumber);
  const img = foundRoom.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  const date = (0,_dates__WEBPACK_IMPORTED_MODULE_1__.formatDate)('US', booking.date);
  let plural = '';
  let roomLast = '';

  if (foundRoom.numBeds > 1) {
    plural = 's';
  }

  if (i === array.length - 1) {
    roomLast = 'last-room';
  }

  return { foundRoom, img, alt, date, plural, roomLast };
};

const createSingleRoomInfo = (room, i, array) => {
  const img = room.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  let plural = '';
  let roomLast = '';

  if (room.numBeds > 1) {
    plural = 's';
  }

  if (i === array?.length - 1) {
    roomLast = 'last-room';
  }

  return { img, alt, plural, roomLast };
};

const createSingleRoomHTML = (room, i, array) => {
  const info = createSingleRoomInfo(room, i, array);

  return `
  <section class="single-room ${info.roomLast}" id="${room.number}">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${room.number}</p>
      <p class="room-type">Room Type: ${formatRoomType(room)}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight.toFixed(2)}</p>
      <p class="room-beds">${room.numBeds} ${room.bedSize} sized bed${info.plural}</p>
    </div>
    <button class="btn booking-btn">
      Book Now
    </button>
  </section>`;
};

const createSingleUserBookingHTML = (booking, rooms, i, array) => {
  const info = createCardInfo(booking, rooms, i, array);

  return `
  <section tabindex="0" class="single-room user-room ${info.roomLast}">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${info.foundRoom.number}</p>
      <p class="room-type">Room Type: ${formatRoomType(info.foundRoom)}</p>
      <p class="room-beds">${info.foundRoom.numBeds} ${info.foundRoom.bedSize} sized bed${info.plural}</p>
      <p class="booked-date">Date: ${info.date}</p>
    </div>
  </section>
</section>`;
};

const addTitleToSections = () => {
  _scripts__WEBPACK_IMPORTED_MODULE_3__.userBookingSections.forEach((section) => {
    const formattedTitle =
      section.id.charAt(0).toUpperCase() +
      section.id.split('').slice(1).join('');
    section.innerHTML = `<p class="${section.id}-text">${formattedTitle} Bookings</p>`;
  });
};

const createUserBookingsHTML = (userBookings, rooms) => {
  let separatedBookings = (0,_bookings__WEBPACK_IMPORTED_MODULE_0__.sortBookings)(userBookings, Date.now());
  const sortedBookings = (0,_bookings__WEBPACK_IMPORTED_MODULE_0__.sortSections)(separatedBookings, Date.now());

  document.querySelector('.total-spent').innerText = `Total Spent: $${(0,_bookings__WEBPACK_IMPORTED_MODULE_0__.totalCost)(userBookings, rooms)}`;
  addTitleToSections();

  _scripts__WEBPACK_IMPORTED_MODULE_3__.userBookingSections.forEach((section) => {
    section.innerHTML += sortedBookings[section.id]
      .map((booking, i, array) =>createSingleUserBookingHTML(booking, rooms, i, array))
      .join('');
  });

  if (!sortedBookings.current.length) {
    _scripts__WEBPACK_IMPORTED_MODULE_3__.currentBookings.innerHTML = '';
    _scripts__WEBPACK_IMPORTED_MODULE_3__.currentBookings.classList.add('hidden');
  } else {
    _scripts__WEBPACK_IMPORTED_MODULE_3__.currentBookings.classList.remove('hidden');
  }
};

const createAvailableRoomsHTML = (rooms) => {
  if (rooms.length) {
    _scripts__WEBPACK_IMPORTED_MODULE_3__.noResultsView.classList.add('hidden');
    _scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView.innerHTML = `<p class="rooms-shown-txt">Showing <span class="rooms-avail-amt">${rooms.length}</span> Available Rooms:</p>`;
    rooms.forEach((room, i, array) => {
      _scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView.innerHTML += createSingleRoomHTML(room, i, array);
    });
  } else {
    _scripts__WEBPACK_IMPORTED_MODULE_3__.availableRoomsView.classList.add('hidden');
    _scripts__WEBPACK_IMPORTED_MODULE_3__.noResultsView.classList.remove('hidden');
  }
};

const changeBtnAmount = (data) => {
  const rooms = (0,_scripts__WEBPACK_IMPORTED_MODULE_3__.updateAvailableRooms)(data)
  _scripts__WEBPACK_IMPORTED_MODULE_3__.showRoomsBtn.innerText = `SHOW ${rooms.length} ROOMS`
}

const updateAvailableRoomsHTML = (data) => {
  const availableRooms = (0,_scripts__WEBPACK_IMPORTED_MODULE_3__.updateAvailableRooms)(data);
  createAvailableRoomsHTML(availableRooms);
};

const updateBookingsHTML = (data, id) => {
  let userBookings = data[1].bookings.filter((booking) => booking.userID === id);
  createUserBookingsHTML(userBookings, data[0].rooms);
};

const updateSelectedRoom = (e) => {
  const roomID = e.target.closest('.single-room').id;
  _apicalls__WEBPACK_IMPORTED_MODULE_4__.pageData.selectedRoom = {
    room: _apicalls__WEBPACK_IMPORTED_MODULE_4__.pageData.allRooms.find((currentRoom) => currentRoom.number.toString() === roomID),
    get info() {
      return createSingleRoomInfo(this.room);
    },
    USDate: (0,_dates__WEBPACK_IMPORTED_MODULE_1__.formatDate)('US', _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.selectedDate),
    APIDate: (0,_dates__WEBPACK_IMPORTED_MODULE_1__.formatDate)('API', _apicalls__WEBPACK_IMPORTED_MODULE_4__.currentUser.selectedDate)
  };
};

const updateRoomModal = () => {
  const room = _apicalls__WEBPACK_IMPORTED_MODULE_4__.pageData.selectedRoom.room;
  const info = _apicalls__WEBPACK_IMPORTED_MODULE_4__.pageData.selectedRoom.info;
  document.querySelector('.modal-description').innerText = `${formatRoomType(room)} with ${room.numBeds} ${room.bedSize} bed${info.plural}`;
  document.querySelector('.room-price').innerText = room.costPerNight.toFixed(2);
  document.querySelector('.selected-date').innerText = _apicalls__WEBPACK_IMPORTED_MODULE_4__.pageData.selectedRoom.USDate;
  document.querySelector('.modal-room-img').src = `./images/${info.img}.png`;
  document.querySelector('.modal-room-img').alt = info.alt;
};

const showConfirmation = (confirmation) => {
  document.querySelector('.confirmation').innerText = confirmation.id;
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.roomModal], 'add', ['hidden']);
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.bookingModal], 'remove', ['hidden']);
};

const returnToFilter = () => {
  changeClass([_scripts__WEBPACK_IMPORTED_MODULE_3__.bookingModal, _scripts__WEBPACK_IMPORTED_MODULE_3__.filterModal, _scripts__WEBPACK_IMPORTED_MODULE_3__.filterCloseBtn], 'toggle', ['hidden']);
};




/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortBookings": () => (/* binding */ sortBookings),
/* harmony export */   "totalCost": () => (/* binding */ totalCost),
/* harmony export */   "sortBookingsByDate": () => (/* binding */ sortBookingsByDate),
/* harmony export */   "sortSections": () => (/* binding */ sortSections)
/* harmony export */ });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const sortBookings = (bookings, date) => {
  let currentDate = new Date(date).setHours(0, 0, 0, 0);
  return {
    past: bookings.filter((booking) => (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(booking.date) < currentDate),
    upcoming: bookings.filter((booking) => (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(booking.date) > currentDate),
    current: bookings.filter((booking) => (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(booking.date) === currentDate),
  };
};

const sortBookingsByDate = (bookings, currentDate) => {
  const updatedBookings = bookings.map(booking => {
    const diff = currentDate - (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(booking.date);
    return {booking, diff}
  })
  const bookingsToSort = JSON.parse(JSON.stringify(updatedBookings))
  return bookingsToSort.sort((a,b) => {
    return b.diff - a.diff
  })
  .map(booking => booking.booking)
}

const sortSections = (userBookings, currentDate) => {
  return Object.keys(userBookings).reduce((bookings, curr) => {
    const newBookings = sortBookingsByDate(userBookings[curr], currentDate)
    if (curr === 'past') {
      newBookings.reverse()
    }
    bookings[curr] = newBookings
    return bookings
  }, {})
}

const totalCost = (bookings, rooms) => {
  let bookedRooms = bookings.map((booking) => {
    return rooms.find((room) => room.number === booking.roomNumber);
  });

  return bookedRooms
    .reduce((total, curr) => (total += curr.costPerNight), 0)
    .toFixed(2);
};




/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateValue": () => (/* binding */ getDateValue),
/* harmony export */   "checkDateValidity": () => (/* binding */ checkDateValidity),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "checkInitialDateFormat": () => (/* binding */ checkInitialDateFormat),
/* harmony export */   "fixIntegerFormat": () => (/* binding */ fixIntegerFormat)
/* harmony export */ });
const getDateValue = (date) => {
  const dateValues = date.split(/[/-]/);
  const fullDate = new Date(
    dateValues[0],
    dateValues[1] - 1,
    dateValues[2]
  ).setHours(0, 0, 0, 0);
  return fullDate;
};

const checkDateValidity = (currDate, bookingDate) => {
  const currentDate = new Date(currDate).setHours(0, 0, 0, 0);
  const attemptedDate = getDateValue(bookingDate);
  if (currentDate <= attemptedDate) {
    return true;
  } else {
    return false;
  }
};

const checkInitialDateFormat = (date) => {
  let udpatedDate = date;
  if (date.toString().includes('/')) {
    udpatedDate = getDateValue(date);
  }

  return udpatedDate;
};

const fixIntegerFormat = (date) => {
  let setDate = date;
  if (date.toString().length !== 2) {
    setDate = `0${date}`;
  }

  return setDate;
};

const formatDate = (formatType, date) => {
  const udpatedDate = checkInitialDateFormat(date);

  const month = new Date(udpatedDate).getMonth() + 1;
  const setMonth = fixIntegerFormat(month);

  const day = new Date(udpatedDate).getDate();
  const setDay = fixIntegerFormat(day);

  const year = new Date(udpatedDate).getFullYear();

  const dates = {
    US: `${month}/${day}/${year}`,
    calendar: `${year}-${setMonth}-${setDay}`,
    API: `${year}/${setMonth}/${setDay}`,
  };

  return dates[formatType];
};




/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyUserName": () => (/* binding */ verifyUserName),
/* harmony export */   "verifyPassword": () => (/* binding */ verifyPassword),
/* harmony export */   "verifyCredentials": () => (/* binding */ verifyCredentials)
/* harmony export */ });
const verifyUserName = (userName) => {
  let validity = { valid: false };

  if (userName.includes('customer') && userName.length === 10) {
    const userID = parseInt(userName.slice(8));
    if (userID >= 1 && userID <= 50) {
      validity = {
        valid: true,
        id: userID,
      };
    }
  }

  return validity;
};

const verifyPassword = (password) => {
  let validity = false;
  if (password === 'overlook2021') {
    validity = true;
  }

  return validity;
};

const verifyCredentials = (userName, password) => {
  let userCredentials;
  let valid = false

  if(userName && password) {
    userCredentials = verifyUserName(userName)
    const validPass = verifyPassword(password)
    if(userCredentials.valid && validPass) {
      valid = true
    }
  }

  return {id: userCredentials.id, valid}
}




/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvailableRooms": () => (/* binding */ getAvailableRooms),
/* harmony export */   "filterRoomsByType": () => (/* binding */ filterRoomsByType),
/* harmony export */   "filterRoomsByPrice": () => (/* binding */ filterRoomsByPrice)
/* harmony export */ });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


const getAvailableRooms = (bookings, rooms, date) => {
  const bookingsOnDate = bookings.filter((booking) => (0,_dates__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(booking.date) === date)
  const bookedRooms = bookingsOnDate.map(booking => rooms.find(room => room.number === booking.roomNumber))
  const availableRooms = rooms.filter(room => !bookedRooms.includes(room))
  return availableRooms;
}

const filterRoomsByType = (rooms, type) => {
  return rooms.filter(room => room.roomType === type)
}

const filterRoomsByPrice = (rooms, min, max) => {
  return rooms.filter(room => room.costPerNight >= min && room.costPerNight <= max)
}



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/suite.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/lotus-logo.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/pool-side.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/singleroom.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/juniorsuite.png");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/residentialsuite.png");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/canopy.png");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/yoga-room.png");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/resort-area.png");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/no-results.png");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/500-error.png");

/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map