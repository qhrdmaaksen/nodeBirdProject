webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 보기 시도중일땐 로딩중 띄울거임
  loadMyInfoDone: false,
  // 유저 정보 보기 됨
  loadMyInfoError: null,
  // 유저 정보 보기중일때 에러 없앰
  followLoading: false,
  // 팔로우 시도중일땐 로딩중 띄울거임
  followDone: false,
  // 팔로우 됨
  followError: null,
  // 팔로우중일때 에러 없앰
  unfollowLoading: false,
  // 언팔로우 시도중일땐 로딩중 띄울거임
  unfollowDone: false,
  // 언팔로우 됨
  unfollowError: null,
  // 언팔로우중일때 에러 없앰
  loadFollowersLoading: false,
  // 팔로워 시도중일땐 로딩중 띄울거임
  loadFollowersDone: false,
  // 팔로워 됨
  loadFollowersError: null,
  // 팔로워일때 에러 없앰
  loadFollowingsLoading: false,
  // 팔로윙 시도중일땐 로딩중 띄울거임
  loadFollowingsDone: false,
  // 팔로윙 됨
  loadFollowingsError: null,
  // 팔로윙 중일때 에러 없앰
  logInLoading: false,
  // 로그인 시도중일땐 로딩중 띄울거임
  logInDone: false,
  // 로그인 됨
  logInError: null,
  // 로딩중일때 에러 없앰
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  // 로그아웃 완료
  logOutError: null,
  signUpLoading: false,
  // 회원가입 로딩중
  signUpDone: false,
  // 회원 가입 완료
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 로딩중
  changeNicknameDone: false,
  // 닉네임 변경 완료
  changeNicknameError: null,
  me: null,
  signUpData: {},
  // 회원 가입 데이터
  loginData: {}
}; // 로그인 액션 생성기 thunk
// export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
// 	return (dispatch, getState) => {
// 		const state = getState()
// 		dispatch(loginRequestAction())
// 		axios.post('/api/login')
// 				.then((res) => {
// 					dispatch(loginSuccessAction(res.data))
// 				})
// 				.catch((error) => {
// 					dispatch(loginFailureAction(error))
// 				})
// 	}
// }
// actions

var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'; // 유저 리듀서의 상태를 바꿀수있는 액션 생성

var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
/* front
const dummyUser = (data) => ({
	...data,
	nickname: '비타민',
	id: 1,
	Posts: [{id: 1}],
	Followings: [{nickname: '외노'}, {nickname: '음메'}, {nickname: '썽'}, {nickname: '오댕'}, {nickname: '만뽀'}],
	Followers: [{nickname: '까매'}, {nickname: '만두'}, {nickname: '보챙'}, {nickname: '뒷가'}, {nickname: '야덩'}],
})*/

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
}; // 로그아웃 액션 생성기 thunk
// export const logoutAction = (data) => {
// 	return (dispatch) => {
// 		axios.post('/api/logout')
// 				.then(() => {
// 					dispatch(logoutSuccessAction())
// 				})
// 				.catch(() => {
// 					dispatch(logoutFailureAction())
// 				})
// 	}
// }

var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null; // 로딩 중일때는 에러 없앰

        draft.loadMyInfoDone = false;
        console.log('reducer myInfo 요청');
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data; // back 사용자 정보가 들어있음

        draft.loadMyInfoDone = true; //draft.me = dummyUser(action.data)

        console.log('reducer myInfo 성공');
        break;

      case LOAD_MY_INFO_FAILURE:
        console.error('loadMyInfoFail :: ' + action.error);
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case FOLLOW_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.followLoading = true;
        draft.followError = null; // 로딩 중일때는 에러 없앰

        draft.followDone = false;
        console.log('reducer FOLLOW_REQUEST 요청');
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true; //draft.me = dummyUser(action.data)

        draft.me.Followings.push({
          id: action.data.UserId
        });
        console.log('reducer FOLLOW_SUCCESS 성공');
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        console.error('reducer FOLLOW_FAILURE 실패::', action.error);
        break;

      case UNFOLLOW_REQUEST:
        // store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
        draft.unfollowLoading = true;
        draft.unfollowError = null; // 로딩 중일때는 에러 없앰

        draft.unfollowDone = false;
        console.log('reducer unfollow 요청');
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; //draft.me = dummyUser(action.data)
        // 언팔로우 한 사람만 빠지게

        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        console.log('reducer unfollow 성공');
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        console.error('reducer unfollow 실패::', action.error);
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        console.log('reducer login 요청');
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true; //draft.me = dummyUser(action.data) front

        draft.me = action.data; // back

        console.log('reducer login 성공');
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        console.error('reducer login 실패:: ', action.error);
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        console.log('reducer logout 요청');
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        console.log('reducer logout 성공');
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        console.error('reducer logout 실패', action.error);
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        console.log('reducer signup 요청');
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        console.log('reducer signUp 성공');
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        console.error('reducer signUp 실패', action.error);
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        console.log('reducer CHANGE_NICKNAME_REQUEST 요청');
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        console.log('reducer CHANGE_NICKNAME_SUCCESS 성공');
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        console.error('reducer CHANGE_NICKNAME 실패', action.error);
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        console.log('reducer LOAD_FOLLOWERS_REQUEST 요청');
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        console.log('reducer LOAD_FOLLOWERS_SUCCESS 성공');
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        console.error('reducer LOAD_FOLLOWERS 실패', action.error);
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        console.log('reducer LOAD_FOLLOWINGS_REQUEST 요청');
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        console.log('reducer LOAD_FOLLOWINGS_SUCCESS 성공');
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        console.error('reducer LOAD_FOLLOWINGS 실패', action.error);
        break;

      case ADD_POST_TO_ME:
        // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
        draft.me.Posts.unshift({
          id: action.data
        });
        console.log('ADD_POST_TO_ME 성공');
        break;
      // return {
      // 	...state,
      // 	me: {
      // 		...state.me,
      // 		Posts: [{id: action.data}, ...state.me.Posts],
      // 	}
      // }

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        console.log('REMOVE_POST_OF_ME');
        break;
      // return { // 불변성을 지키며 게시글을 지워야한다.
      // 	...state,
      // 	me: {
      // 		...state.me,
      // 		Posts: state.me.Posts.filter((v) => v.id !== action.data)
      // 	}
      // }

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJpZCIsIlVzZXJJZCIsImZpbHRlciIsInYiLCJQb3N0cyIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxtQkFBaUIsRUFBRSxLQURRO0FBQ0Q7QUFDMUJDLGdCQUFjLEVBQUUsS0FGVztBQUVKO0FBQ3ZCQyxpQkFBZSxFQUFFLElBSFU7QUFHSjtBQUN2QkMsZUFBYSxFQUFFLEtBSlk7QUFJTDtBQUN0QkMsWUFBVSxFQUFFLEtBTGU7QUFLUjtBQUNuQkMsYUFBVyxFQUFFLElBTmM7QUFNUjtBQUNuQkMsaUJBQWUsRUFBRSxLQVBVO0FBT0g7QUFDeEJD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QUNBOztBQUNEO0FBQ0M7QUFyTEY7QUF1TEEsR0F4THdELENBQXpDO0FBQUEsQ0FBaEI7O0FBMExlTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUyYzk3YTFmOTFlZWRmZDZjNDY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvYWRNeUluZm9Eb25lOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDrs7TquLAg65CoXHJcblx0bG9hZE15SW5mb0Vycm9yOiBudWxsLCAvLyDsnKDsoIAg7KCV67O0IOuztOq4sOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0Zm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGZvbGxvd0RvbmU6IGZhbHNlLCAvLyDtjJTroZzsmrAg65CoXHJcblx0Zm9sbG93RXJyb3I6IG51bGwsIC8vIO2MlOuhnOyasOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0dW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0dW5mb2xsb3dEb25lOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOuQqFxyXG5cdHVuZm9sbG93RXJyb3I6IG51bGwsIC8vIOyWuO2MlOuhnOyasOykkeydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4wg7Iuc64+E7KSR7J2865WQIOuhnOuUqeykkSDrnYTsmrjqsbDsnoRcclxuXHRsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsIC8vIO2MlOuhnOybjCDrkKhcclxuXHRsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsIC8vIO2MlOuhnOybjOydvOuVjCDsl5Drn6wg7JeG7JWwXHJcblx0bG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JyZIOyLnOuPhOykkeydvOuVkCDroZzrlKnspJEg652E7Jq46rGw7J6EXHJcblx0bG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSwgLy8g7YyU66Gc7JyZIOuQqFxyXG5cdGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsIC8vIO2MlOuhnOycmSDspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJHsnbzrlZAg66Gc65Sp7KSRIOudhOyauOqxsOyehFxyXG5cdGxvZ0luRG9uZTogZmFsc2UsIC8vIOuhnOq3uOyduCDrkKhcclxuXHRsb2dJbkVycm9yOiBudWxsLCAvLyDroZzrlKnspJHsnbzrlYwg7JeQ65+sIOyXhuyVsFxyXG5cdGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcblx0bG9nT3V0RG9uZTogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsmYTro4xcclxuXHRsb2dPdXRFcnJvcjogbnVsbCxcclxuXHRzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOuhnOuUqeykkVxyXG5cdHNpZ25VcERvbmU6IGZhbHNlLCAvLyDtmozsm5Ag6rCA7J6FIOyZhOujjFxyXG5cdHNpZ25VcEVycm9yOiBudWxsLFxyXG5cdGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g66Gc65Sp7KSRXHJcblx0Y2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsmYTro4xcclxuXHRjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cdG1lOiBudWxsLFxyXG5cdHNpZ25VcERhdGE6IHt9LCAvLyDtmozsm5Ag6rCA7J6FIOuNsOydtO2EsFxyXG5cdGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbi8vIOuhnOq3uOyduCDslaHshZgg7IOd7ISx6riwIHRodW5rXHJcbi8vIGV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IC8vIO2VqOyImOulvCDrpqzthLTtlZjripQg67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLDqsIAg7LaU6rCAXHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKVxyXG4vLyBcdFx0ZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpXHJcbi8vIFx0XHRheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxuLy8gXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKVxyXG4vLyBcdFx0XHRcdH0pXHJcbi8vIFx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyBcdFx0XHRcdFx0ZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycm9yKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gYWN0aW9uc1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnXHJcblxyXG4vLyDsnKDsoIAg66as65OA7ISc7J2YIOyDge2DnOulvCDrsJTqv4DsiJjsnojripQg7JWh7IWYIOyDneyEsVxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSdcclxuXHJcbi8qIGZyb250XHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG5cdC4uLmRhdGEsXHJcblx0bmlja25hbWU6ICfruYTtg4Drr7wnLFxyXG5cdGlkOiAxLFxyXG5cdFBvc3RzOiBbe2lkOiAxfV0sXHJcblx0Rm9sbG93aW5nczogW3tuaWNrbmFtZTogJ+yZuOuFuCd9LCB7bmlja25hbWU6ICfsnYzrqZQnfSwge25pY2tuYW1lOiAn7I29J30sIHtuaWNrbmFtZTogJ+yYpOuMlSd9LCB7bmlja25hbWU6ICfrp4zrvYAnfV0sXHJcblx0Rm9sbG93ZXJzOiBbe25pY2tuYW1lOiAn6rmM66ekJ30sIHtuaWNrbmFtZTogJ+unjOuRkCd9LCB7bmlja25hbWU6ICfrs7TssZknfSwge25pY2tuYW1lOiAn65K36rCAJ30sIHtuaWNrbmFtZTogJ+yVvOuNqSd9XSxcclxufSkqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG5cdFx0ZGF0YSxcclxuXHR9XHJcbn1cclxuLy8g66Gc6re47JWE7JuDIOyVoeyFmCDsg53shLHquLAgdGh1bmtcclxuLy8gZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbi8vIFx0cmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4vLyBcdFx0YXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG4vLyBcdFx0XHRcdC50aGVuKCgpID0+IHtcclxuLy8gXHRcdFx0XHRcdGRpc3BhdGNoKGxvZ291dFN1Y2Nlc3NBY3Rpb24oKSlcclxuLy8gXHRcdFx0XHR9KVxyXG4vLyBcdFx0XHRcdC5jYXRjaCgoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRkaXNwYXRjaChsb2dvdXRGYWlsdXJlQWN0aW9uKCkpXHJcbi8vIFx0XHRcdFx0fSlcclxuLy8gXHR9XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG5cdHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsIC8vIOuhnOuUqSDspJHsnbzrlYzripQg7JeQ65+sIOyXhuyVsFxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIG15SW5mbyDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubWUgPSBhY3Rpb24uZGF0YSAvLyBiYWNrIOyCrOyaqeyekCDsoJXrs7TqsIAg65Ok7Ja07J6I7J2MXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBteUluZm8g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdsb2FkTXlJbmZvRmFpbCA6OiAnICsgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcblx0XHRcdC8vIHN0b3JlIOyXkOyEnCDrs7Trgrggc3RhdGUg6rCAIOunjOuTpOyWtOynkCwgc3RhdGUg7J6Q7LK06rCAIHVzZXIuanMg7J2YIHN0YXRlIOyehFxyXG5cdFx0XHRkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKVxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBGT0xMT1dfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvclxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdyZWR1Y2VyIEZPTExPV19GQUlMVVJFIOyLpO2MqDo6JywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuXHRcdFx0Ly8gc3RvcmUg7JeQ7IScIOuztOuCuCBzdGF0ZSDqsIAg66eM65Ok7Ja07KeQLCBzdGF0ZSDsnpDssrTqsIAgdXNlci5qcyDsnZggc3RhdGUg7J6EXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGwgLy8g66Gc65SpIOykkeydvOuVjOuKlCDsl5Drn6wg7JeG7JWwXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIHVuZm9sbG93IOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlXHJcblx0XHRcdC8vZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpXHJcblx0XHRcdC8vIOyWuO2MlOuhnOyasCDtlZwg7IKs656M66eMIOu5oOyngOqyjFxyXG5cdFx0XHRkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgdW5mb2xsb3cg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciB1bmZvbGxvdyDsi6TtjKg6OicsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsXHJcblx0XHRcdGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ2luIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nSW5Eb25lID0gdHJ1ZVxyXG5cdFx0XHQvL2RyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSBmcm9udFxyXG5cdFx0XHRkcmFmdC5tZSA9IGFjdGlvbi5kYXRhIC8vIGJhY2tcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgbG9naW4g7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPR19JTl9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgbG9naW4g7Iuk7YyoOjogJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5sb2dPdXREb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDsmpTssq0nKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RG9uZSA9IHRydWVcclxuXHRcdFx0ZHJhZnQubWUgPSBudWxsXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ291dCDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBsb2dvdXQg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgc2lnbnVwIOyalOyyrScpXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5zaWduVXBEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBzaWduVXAg7ISx6rO1JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBzaWduVXAg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCDsmpTssq0nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZVxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyDshLHqs7UnKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuXHRcdFx0Y29uc29sZS5lcnJvcigncmVkdWNlciBDSEFOR0VfTklDS05BTUUg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbFxyXG5cdFx0XHRjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0ZPTExPV0VSU19SRVFVRVNUIOyalOyyrScpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfRk9MTE9XRVJTX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9GT0xMT1dFUlMg7Iuk7YyoJywgYWN0aW9uLmVycm9yKVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWVcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2VcclxuXHRcdFx0ZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGxcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Qg7JqU7LKtJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlXHJcblx0XHRcdGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWVcclxuXHRcdFx0Y29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1Mg7ISx6rO1JylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZVxyXG5cdFx0XHRkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlZHVjZXIgTE9BRF9GT0xMT1dJTkdTIOyLpO2MqCcsIGFjdGlvbi5lcnJvcilcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEFERF9QT1NUX1RPX01FOiAvLyDqsozsi5zquIDsnYQg7JOw66m0IOqyjOyLnOq4gCDslYTsnbTrlJTqsIAg7Jes6riw66GcIOuTpOyWtOyZgOyEnCDtlZjrgpjqsIAg7LaU6rCA65Cc64ukXHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdBRERfUE9TVF9UT19NRSDshLHqs7UnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0XHQvLyByZXR1cm4ge1xyXG5cdFx0XHQvLyBcdC4uLnN0YXRlLFxyXG5cdFx0XHQvLyBcdG1lOiB7XHJcblx0XHRcdC8vIFx0XHQuLi5zdGF0ZS5tZSxcclxuXHRcdFx0Ly8gXHRcdFBvc3RzOiBbe2lkOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcblx0XHRcdGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JFTU9WRV9QT1NUX09GX01FJylcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRcdC8vIHJldHVybiB7IC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbAg6rKM7Iuc6riA7J2EIOyngOybjOyVvO2VnOuLpC5cclxuXHRcdFx0Ly8gXHQuLi5zdGF0ZSxcclxuXHRcdFx0Ly8gXHRtZToge1xyXG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUubWUsXHJcblx0XHRcdC8vIFx0XHRQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuXHRcdFx0Ly8gXHR9XHJcblx0XHRcdC8vIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==