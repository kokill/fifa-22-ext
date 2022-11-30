"use strict";
self["webpackHotUpdatefifa_22"]("popup",{

/***/ "./src/pages/Popup/Scores.jsx":
/*!************************************!*\
  !*** ./src/pages/Popup/Scores.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ScoreCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreCard */ "./src/pages/Popup/ScoreCard.jsx");
/* harmony import */ var _Scores_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scores.css */ "./src/pages/Popup/Scores.css");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var node_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-sass */ "./node_modules/node-sass/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const createScoreCardsPast = card => {
  if (card.homeScore) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScoreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      country1: card.home,
      country2: card.away,
      score1: card.homeScore,
      score2: card.awayScore
    }));
  }
};
const createScoreCardsUpcoming = card => {
  if (card.homeScore == node_sass__WEBPACK_IMPORTED_MODULE_3__.NULL) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScoreCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      country1: card.home,
      country2: card.away,
      score1: card.homeScore,
      score2: card.awayScore
    }));
  }
};
const Scores = () => {
  let hm = new Map();
  hm.set('', [{
    home: '',
    homeScore: '',
    away: '',
    awayScore: ''
  }]);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([[], hm]);
  async function fetchData() {
    const from = new Date();
    const to = new Date();
    from.setDate(from.getDate() - 1);
    const beginning = '2022-11-20';
    const conclusion = '2022-12-02';
    const startDate = '2022-' + (from.getMonth() + 1) + '-' + from.getDate();
    const currDate = '2022-' + (to.getMonth() + 1) + '-' + to.getDate();
    const res = await fetch(`https://api.fifa.com/api/v3/calendar/matches?from=${beginning}T00%3A00%3A00Z&to=${conclusion}T23%3A59%3A59Z&language=en&idSeason=255711`);
    const json = await res.json();
    const results = json.Results;
    const groups = new Map();
    results.map(ele => {
      const g = ele.GroupName[0].Description;
      if (groups.get(g) == null) {
        groups.set(g, []);
      }
      groups.get(g).push({
        home: ele.Home.Abbreviation,
        homeScore: ele.Home.Score,
        away: ele.Away.Abbreviation,
        awayScore: ele.Away.Score
      });
    });
    setData([results, groups]);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, []);
  const groups2 = data[1];
  const finalCards = [];
  groups2.forEach((val, key) => {
    finalCards.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "cardClass"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Header, null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "flush"
    }, val.map(createScoreCardsPast))));
  });

  // return (
  //   <Tabs
  //     defaultActiveKey="past"
  //     id="fill-tab-example"
  //     className="mb-3 tabClass"
  //     fill
  //   >
  //     <Tab eventKey="past" title="Past">
  //       Hello
  //     </Tab>
  //     <Tab eventKey="profile" title="Upcoming">
  //       World
  //     </Tab>
  //   </Tabs>
  // );

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, finalCards);
};
__signature__(Scores, "useState{[data, setData]([[], hm])}\nuseEffect{}");
const _default = Scores;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(createScoreCardsPast, "createScoreCardsPast", "/Users/gvishok/Desktop/Code/FifaScore-extension/Fifa22-score-extension/src/pages/Popup/Scores.jsx");
  reactHotLoader.register(createScoreCardsUpcoming, "createScoreCardsUpcoming", "/Users/gvishok/Desktop/Code/FifaScore-extension/Fifa22-score-extension/src/pages/Popup/Scores.jsx");
  reactHotLoader.register(Scores, "Scores", "/Users/gvishok/Desktop/Code/FifaScore-extension/Fifa22-score-extension/src/pages/Popup/Scores.jsx");
  reactHotLoader.register(_default, "default", "/Users/gvishok/Desktop/Code/FifaScore-extension/Fifa22-score-extension/src/pages/Popup/Scores.jsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7251dee4790a46b0863")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.a427c3748196f177df47.hot-update.js.map