webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/NicknameEditForm */ "./component/NicknameEditForm.js");
/* harmony import */ var _component_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/FollowList */ "./component/FollowList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "D:\\intellijProjects\\react-nodebird\\prepare\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











//import FollowerList from '../component/FollowerList'
// fetcher 를 다른걸로 바꾸면 graphql 도 쓸수있다
var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  /* front
  const dispatch = useDispatch();
  const followingList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}] front early
  const followerList = [{nickname: '비타민'}, {nickname: '엠알민'}, {nickname: '올마스터'}]*/
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;
  /*useEffect(() => {
  	dispatch({
  		type: LOAD_FOLLOWERS_REQUEST,
  	});
  	dispatch({
  		type: LOAD_FOLLOWINGS_REQUEST,
  	});
  }, []);*/
  //followers 불러오기
  // data, error 가 둘다 있다면 성공했거나, 실패했거나, 둘다 없다면 로딩중


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error; //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌
  //followings 불러오기


  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])("http://localhost:3065/user/followings", fetcher),
      followingsData = _useSWR2.data,
      followingError = _useSWR2.error; //fetcher 가 url 를 어떻게 가져올지에 대한걸적어줌


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      // 프로필 페이지에서 로그아웃했을 경우 main 화면으로
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    // 내가 없으면 못들어가게
    return '내 정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, "\uB0B4 \uD504\uB85C\uD544 | NodeBird")), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_component_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC719 \uBAA9\uB85D",
    data: followingsData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }), __jsx(_component_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    data: followersData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  })));
};

_s(Profile, "MV9/uwZNRopsSeKLiy69103t+ZI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_6__["default"], swr__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU1dSIiwiZm9sbG93ZXJzTGltaXQiLCJmb2xsb3dlcnNEYXRhIiwiZm9sbG93ZXJFcnJvciIsImVycm9yIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdFcnJvciIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUNHLG1CQUFlLEVBQUU7QUFBbEIsR0FBZixFQUF3Q0MsSUFBeEMsQ0FBNkMsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUE3QyxDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNyQjtBQUNEO0FBQ0E7QUFDQTtBQUNDLHFCQUFhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFFQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFFQTs7O0FBQ0EsZ0JBQW9EQyxtREFBTSxzREFBK0NDLGNBQS9DLEdBQWlFZCxPQUFqRSxDQUExRDtBQUFBLE1BQWFlLGFBQWIsV0FBT1IsSUFBUDtBQUFBLE1BQW1DUyxhQUFuQyxXQUE0QkMsS0FBNUIsQ0FsQnFCLENBa0IrRztBQUNwSTs7O0FBQ0EsaUJBQXNESixtREFBTSwwQ0FBMENiLE9BQTFDLENBQTVEO0FBQUEsTUFBYWtCLGNBQWIsWUFBT1gsSUFBUDtBQUFBLE1BQW9DWSxjQUFwQyxZQUE2QkYsS0FBN0IsQ0FwQnFCLENBb0IwRjs7O0FBRS9HRyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFJLEVBQUVSLEVBQUUsSUFBSUEsRUFBRSxDQUFDUyxFQUFYLENBQUosRUFBb0I7QUFBRTtBQUNyQkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQTtBQUNELEdBSlEsRUFJTixDQUFDWCxFQUFFLElBQUlBLEVBQUUsQ0FBQ1MsRUFBVixDQUpNLENBQVQ7O0FBTUEsTUFBSSxDQUFDVCxFQUFMLEVBQVM7QUFBRTtBQUNWLFdBQU8sYUFBUDtBQUNBOztBQUVELE1BQUlJLGFBQWEsSUFBSUcsY0FBckIsRUFBcUM7QUFDcENLLFdBQU8sQ0FBQ1AsS0FBUixDQUFjRCxhQUFhLElBQUlHLGNBQS9CO0FBQ0EsV0FBTywwQkFBUDtBQUNBOztBQUVELFNBQ0UsbUVBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERCxDQURELEVBSUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLDZEQUFEO0FBQVksVUFBTSxFQUFDLGlDQUFuQjtBQUE0QixRQUFJLEVBQUVELGNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsNkRBQUQ7QUFBWSxVQUFNLEVBQUMsaUNBQW5CO0FBQTRCLFFBQUksRUFBRUgsYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELENBSkQsQ0FERjtBQVlBLENBakREOztHQUFNUCxPO1VBS1FDLHVELEVBYXVDSSwyQyxFQUVFQSwyQzs7O0tBcEJqREwsTzs7QUFtRVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOTdhZGU4MzM3MWYzYjVjNDg2NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnQvTmlja25hbWVFZGl0Rm9ybSdcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudC9Gb2xsb3dMaXN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHtFTkR9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge0xPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX01ZX0lORk9fUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuLy9pbXBvcnQgRm9sbG93ZXJMaXN0IGZyb20gJy4uL2NvbXBvbmVudC9Gb2xsb3dlckxpc3QnXG5cbi8vIGZldGNoZXIg66W8IOuLpOuluOqxuOuhnCDrsJTqvrjrqbQgZ3JhcGhxbCDrj4Qg7JO47IiY7J6I64ukXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpXG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG5cdC8qIGZyb250XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblx0Y29uc3QgZm9sbG93aW5nTGlzdCA9IFt7bmlja25hbWU6ICfruYTtg4Drr7wnfSwge25pY2tuYW1lOiAn7Jeg7JWM66+8J30sIHtuaWNrbmFtZTogJ+yYrOuniOyKpO2EsCd9XSBmcm9udCBlYXJseVxuXHRjb25zdCBmb2xsb3dlckxpc3QgPSBbe25pY2tuYW1lOiAn67mE7YOA66+8J30sIHtuaWNrbmFtZTogJ+yXoOyVjOuvvCd9LCB7bmlja25hbWU6ICfsmKzrp4jsiqTthLAnfV0qL1xuXHRjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKVxuXG5cdC8qdXNlRWZmZWN0KCgpID0+IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxuXHRcdH0pO1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxuXHRcdH0pO1xuXHR9LCBbXSk7Ki9cblx0Ly9mb2xsb3dlcnMg67aI65+s7Jik6riwXG5cblx0Ly8gZGF0YSwgZXJyb3Ig6rCAIOuRmOuLpCDsnojri6TrqbQg7ISx6rO17ZaI6rGw64KYLCDsi6TtjKjtlojqsbDrgpgsIOuRmOuLpCDsl4bri6TrqbQg66Gc65Sp7KSRXG5cdGNvbnN0IHtkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvcn0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpIC8vZmV0Y2hlciDqsIAgdXJsIOulvCDslrTrlrvqsowg6rCA7KC47Jis7KeA7JeQIOuMgO2VnOqxuOyggeyWtOykjFxuXHQvL2ZvbGxvd2luZ3Mg67aI65+s7Jik6riwXG5cdGNvbnN0IHtkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93aW5nc2AsIGZldGNoZXIpIC8vZmV0Y2hlciDqsIAgdXJsIOulvCDslrTrlrvqsowg6rCA7KC47Jis7KeA7JeQIOuMgO2VnOqxuOyggeyWtOykjFxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKCEobWUgJiYgbWUuaWQpKSB7IC8vIO2UhOuhnO2VhCDtjpjsnbTsp4Dsl5DshJwg66Gc6re47JWE7JuD7ZaI7J2EIOqyveyasCBtYWluIO2ZlOuptOycvOuhnFxuXHRcdFx0Um91dGVyLnB1c2goJy8nKVxuXHRcdH1cblx0fSwgW21lICYmIG1lLmlkXSlcblxuXHRpZiAoIW1lKSB7IC8vIOuCtOqwgCDsl4bsnLzrqbQg66q765Ok7Ja06rCA6rKMXG5cdFx0cmV0dXJuICfrgrQg7KCV67O0IOuhnOuUqeykkS4uLic7XG5cdH1cblxuXHRpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcilcblx0XHRyZXR1cm4gJ+2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLidcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+64K0IO2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8QXBwTGF5b3V0PlxuXHRcdFx0XHRcdDxOaWNrbmFtZUVkaXRGb3JtLz5cblx0XHRcdFx0XHQ8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnJkg66qp66GdXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9Lz5cblx0XHRcdFx0XHQ8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17Zm9sbG93ZXJzRGF0YX0vPlxuXHRcdFx0XHQ8L0FwcExheW91dD5cblx0XHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xuXHRjb25zb2xlLmxvZygnUHJvZmlsZSBnZXRTZXJ2ZXJTaWRlUHJvcHMgU3RhcnQnKVxuXHRjb25zb2xlLmxvZyhjb250ZXh0LnJlcS5oZWFkZXJzKVxuXHRjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XG5cdGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XG5cdGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcblx0XHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcblx0fVxuXHRjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcblx0XHR0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcblx0fSlcblx0Y29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpXG5cdGNvbnNvbGUubG9nKCdQcm9maWxlIGdldFNlcnZlclNpZGVQcm9wcyBFTkQnKVxuXHRhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=