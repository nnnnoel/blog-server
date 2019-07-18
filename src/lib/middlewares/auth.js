exports.isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ status: 'fail', message: '로그인이 필요합니다.' });
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.user) {
    next();
  } else {
    res.status(401).json({ status: 'fail', message: '로그인한 사용자는 접근할 수 없습니다.' });
  }
};
