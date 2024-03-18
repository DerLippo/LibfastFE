/* Cookie */
function setCookie(name,value,days) {
  var expires = "";

  expires = "; max-age=" + 86400 * 180; // 86400 * x days

  document.cookie = name + "=" + (value+";secure" || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
/* Cookie End */

var UserFunctions = (function() {

    var userId;
    var userName;
    var userLanguage;
    var sessionHash;
    var darkMode;
    var scrollPage;
    var scrollPosts;
    var scrollPosition;
  
    /* userId */
    var setUserId = function(getuserId) {
      userId = getuserId;
      // Also set this in cookie/localStorage
      setCookie('sessionUserId', userId);
    };

    var getUserId = function() {
      //from cookie/localStorage
      userId = getCookie('sessionUserId');

      return userId;
    };
    var deleteUserId = function() {
      //delete this cookies
      eraseCookie('sessionUserId');
    };
    /* userId end */

    /* username */
    var setUserName = function(getUserName) {
      userName = getUserName;
      // Also set this in cookie/localStorage
      setCookie('sessionUserName', userName);
    };

    var getUserName = function() {
      //from cookie/localStorage
      userName = getCookie('sessionUserName');
      return userName;
    };
    var deleteUserName = function() {
      //delete this cookies
      eraseCookie('sessionUserName');
    };
    /* username end */

    /* Language */
    var setUserLanguage = function(getUserLanguage) {
      userLanguage = getUserLanguage;
      // Also set this in cookie/localStorage
      setCookie('sessionUserLanguage', userLanguage);
    };

    var getUserLanguage = function() {
      //from cookie/localStorage
      userLanguage = getCookie('sessionUserLanguage');
      return userLanguage;
    };
    var deleteUserLanguage = function() {
      //delete this cookies
      eraseCookie('sessionUserLanguage');
    };
    /* Language end */

    /* session */
    var setSessionHash = function(getSessionHash) {
      sessionHash = getSessionHash;     
      setCookie('sessionSessionHash', sessionHash);
      // Also set this in cookie/localStorage
    };

    var getSessionHash = function() {
          
      //from cookie/localStorage
      sessionHash = getCookie('sessionSessionHash');

      return sessionHash;
    };
    var deleteSessionHash = function() {
      //delete this cookies
      eraseCookie('sessionSessionHash');
    };
    /* session end */
    /* darkMode */
     var setDarkMode = function(getDarkMode) {
      darkMode = getDarkMode;
      // Also set this in cookie/localStorage
      setCookie('sessionDarkMode', darkMode);
    };

    var getDarkMode = function() {
      //from cookie/localStorage
      darkMode = getCookie('sessionDarkMode');
      return darkMode;
    };
    var deleteDarkMode = function() {
      //delete this cookies
      eraseCookie('sessionDarkMode');
    };
    /* darkMode end */
    /* scrollPage */
    var setScrollPage = function(getScrollPage) {
      scrollPage = getScrollPage;
      // Also set this in cookie/localStorage
      setCookie('sessionScrollPage', scrollPage);
    };
    var getScrollPage = function() {
      //from cookie/localStorage
      scrollPage = getCookie('sessionScrollPage');
      return scrollPage;
    };
    var deleteScrollPage = function() {
      //delete this cookies
      eraseCookie('sessionScrollPage');
    };
    /* scrollPage end */
    /* scrollPosts */
    var setScrollPosts = function(getScrollPosts) {
      scrollPosts = getScrollPosts;
      // Also set this in cookie/localStorage
      //setCookie('sessionScrollPosts', scrollPosts);
      localStorage.setItem('sessionScrollPosts', JSON.stringify(scrollPosts));
    };
    var getScrollPosts = function() {
      //from cookie/localStorage
      //scrollPosts = getCookie('sessionScrollPosts');
      scrollPosts = localStorage.getItem('sessionScrollPosts');
      return JSON.parse(scrollPosts);
    };
    var deleteScrollPosts = function() {
      //delete this cookies
      //eraseCookie('sessionScrollPosts');
      localStorage.removeItem('sessionScrollPosts');
    };
    /* scrollPosts end */

    /* scrollPosition */
    var setScrollPosition = function(getScrollPosition) {
      scrollPosition = getScrollPosition;
      // Also set this in cookie/localStorage
      //setCookie('sessionScrollPosition', scrollPosition);
      localStorage.setItem('sessionScrollPosition', scrollPosition);
    };
    var getScrollPosition = function() {
      //from cookie/localStorage
      //scrollPosition = getCookie('sessionScrollPosition');
      scrollPosition = localStorage.getItem('sessionScrollPosition');
      return scrollPosition;
    };
    var deleteScrollPosition = function() {
      //delete this cookies
      //eraseCookie('sessionScrollPosition');
      localStorage.removeItem('sessionScrollPosition');
    };
    /* scrollPosition end */

    return {
        setUserId: setUserId,
        getUserId: getUserId,
        deleteUserId: deleteUserId,

        setUserName: setUserName,
        getUserName: getUserName,
        deleteUserName: deleteUserName,

        setSessionHash: setSessionHash,
        getSessionHash: getSessionHash,
        deleteSessionHash: deleteSessionHash,

        setUserLanguage: setUserLanguage,
        getUserLanguage: getUserLanguage,
        deleteUserLanguage: deleteUserLanguage,

        setDarkMode: setDarkMode,
        getDarkMode: getDarkMode,
        deleteDarkMode: deleteDarkMode,

        setScrollPage: setScrollPage,
        getScrollPage: getScrollPage,
        deleteScrollPage: deleteScrollPage,

        setScrollPosts: setScrollPosts,
        getScrollPosts: getScrollPosts,
        deleteScrollPosts: deleteScrollPosts,

        setScrollPosition: setScrollPosition,
        getScrollPosition: getScrollPosition,
        deleteScrollPosition: deleteScrollPosition
    }
  
  })();
  
export default UserFunctions;