const apiSettings = {
  fetchPosts: async (searchTerm, page, searchFilter) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}&searchFilter=${searchFilter}`
      : `${POSTS_BASE_URL}&page=${page}&searchFilter=${searchFilter}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPost: async (postUrl, userHash) => {
    const endpoint = `${API_URL}post?postUrl=${postUrl}&userHash=${userHash}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSystem: async () => {
    const endpoint = `${API_URL}system`;
    return await (await fetch(endpoint)).json();
  },
  createPost: async (postTitle, userHash, hashtagObject) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'createPost', postTitle: postTitle, userHash: userHash, hashtags: hashtagObject })
  };
  return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();

  },
  createAnswer: async (answerText, postUrl, userHash) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'createAnswer', answerText: answerText, postUrl: postUrl, userHash: userHash })
  };
  return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();

  },
  fetchAnswers: async (postUrl, userHash) => {
    const creditsEndpoint = `${API_URL}answers?postUrl=${postUrl}&userHash=${userHash}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchHashtags: async (hashtagSearchTerm) => {

    var apiRequest = 'hashtags';
    return await (await fetch(`${API_URL}getRequest?API=${apiRequest}&search=${hashtagSearchTerm}`)).json();

  },
  fetchUser: async (userName, userHash) => {
    const endpoint = `${API_URL}user?userName=${userName}&userHash=${userHash}`;
    return await (await fetch(endpoint)).json();
  },
  fetchText: async (textName, textLang) => {
    const endpoint = `${API_URL}content?textName=${textName}&textLang=${textLang}`;
    return await (await fetch(endpoint)).json();
  },
  fetchStats: async (userHash) => {
    const endpoint = `${API_URL}stats?userHash=${userHash}`;
    return await (await fetch(endpoint)).json();
  },
  vote: async (vote, answerId, userHash) => {
    const resultVote = `${API_URL}vote?vote=${vote}&answerId=${answerId}&userHash=${userHash}`;
    return await (await fetch(resultVote)).json();
  },
  moderation: async (action, postId, answerId, userHash, reportId, postTitle, postAnswer) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'moderation', action: action, postId: postId, answerId: answerId, userHash: userHash, reportId: reportId, post: postTitle, answer: postAnswer })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();

  },
  updateSettings: async (action, userName, userHash, userNameNew, email, passwordOld, passwordNew) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'updateSettings', action: action, userName: userName, userHash: userHash, userNameNew: userNameNew, userEmailNew: email, userPasswordOld: passwordOld, userPasswordNew: passwordNew, userDarkMode: null })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();
    
  },
  register: async (username, password, email) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'authentication', action: 'register', username: username, password: password, email: email })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();
    
  },
  login: async (username, password, code, authenticatorPin) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'authentication', action: 'login', username: username, password: password, emailCode: code, authenticatorPin: authenticatorPin })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();
    
  },
  logout: async (userId, userHash) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'authentication', action: 'logout', userId: userId, userHash: userHash })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();

  },
  accountRecovery: async (email, code, newPassword) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ API: 'accountRecovery', action: 'accountRecovery', email: email, code: code, newPassword: newPassword })
    };
    return await (await fetch(`${API_URL}postRequest`, requestOptions)).json();

  },
};

export default apiSettings;