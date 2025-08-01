// token
export const ERROR_ACCESS_TOKEN_EXPIRED = {
  code: 'ACCESS_TOKEN_EXPIRED',
  message: 'Access token has expired',
};

export const ERROR_INVALID_ACCESS_TOKEN = {
  code: 'INVALID_ACCESS_TOKEN',
  message: 'Access token is invalid',
};

export const ERROR_UNKNOWN_ACCESS_TOKEN = {
  code: 'UNKNOWN_ACCESS_TOKEN',
  message: 'Unknown error occurred while verifying access token',
};

export const ERROR_REFRESH_TOKEN_EXPIRED = {
  code: 'REFRESH_TOKEN_EXPIRED',
  message: 'Refresh token has expired',
};

export const ERROR_INVALID_REFRESH_TOKEN = {
  code: 'INVALID_REFRESH_TOKEN',
  message: 'Refresh token is invalid',
};

export const ERROR_UNKNOWN_REFRESH_TOKEN = {
  code: 'UNKNOWN_REFRESH_TOKEN',
  message: 'Unknown error occurred while verifying refresh token',
};

// general errors
export const ERROR_INTERNAL_SERVER = {
  code: 'INTERNAL_SERVER_ERROR',
  message: 'An internal server error occurred',
};

export const ERROR_MISSING_AUTH_HEADER = {
  code: 'MISSING_AUTH_HEADER',
  message: 'Authorization header is missing or malformed',
};

export const ERROR_BAD_REQUEST = {
  code: 'BAD_REQUEST',
  message: 'Invalid request data',
};

export const ERROR_EMAIL_ALREADY_EXISTS = {
  code: 'EMAIL_ALREADY_EXISTS',
  message: 'Email already exists',
};

export const ERROR_INVALID_CREDENTIALS = {
  code: 'INVALID_CREDENTIALS',
  message: 'Email or password is incorrect',
};

export const ERROR_USER_NOT_FOUND = {
  code: 'USER_NOT_FOUND',
  message: 'User not found',
};

export const ERROR_FORBIDDEN_ACCESS = {
  code: 'FORBIDDEN_ACCESS',
  message: 'You do not have permission to access this resource',
};

export const ERROR_FORBIDDEN_UPDATE_PROFILE = {
  code: 'FORBIDDEN_UPDATE_PROFILE',
  message: 'You can only update your own profile information',
};

export const ERROR_FORBIDDEN_ACCESS_ACCOUNT_INFO = {
  code: 'FORBIDDEN_ACCESS_ACCOUNT_INFO',
  message:
    'You can only access your own account information or view seller public profiles',
};

export const ERROR_UPDATE_PROFILE_FAILED = {
  code: 'UPDATE_PROFILE_FAILED',
  message: 'Failed to update user profile',
};

export const ERROR_INCORRECT_CURRENT_PASSWORD = {
  code: 'INCORRECT_CURRENT_PASSWORD',
  message: 'Current password is incorrect',
}

export const ERROR_CHANGE_PASSWORD_FAILED = {
  code: 'CHANGE_PASSWORD_FAILED',
  message: 'Failed to change password',

};

export const ERROR_UNAUTHENTICATED = {
  code: 'UNAUTHENTICATED',
  message: 'User not authenticated',
}

export const ERROR_UNAUTHORIZED = {
  code: 'UNAUTHORIZED',
  message: 'You are not authorized to perform this action',
};

export const ERROR_ONLY_BIDDERS_CAN_FOLLOW = {
  code: 'ONLY_BIDDERS_CAN_FOLLOW',
  message: 'Only bidders can follow sellers',
};

export const ERROR_SELLER_NOT_FOUND = {
  code: 'SELLER_NOT_FOUND',
  message: 'Seller not found',
};

export const ERROR_ALREADY_FOLLOWING = {
  code: 'ALREADY_FOLLOWING',
  message: 'You are already following this seller',
};

export const ERROR_CANNOT_FOLLOW_YOURSELF = {
  code: 'CANNOT_FOLLOW_YOURSELF',
  message: 'You cannot follow yourself',
};

export const ERROR_FOLLOW_FAILED = {
  code: 'FOLLOW_FAILED',
  message: 'Failed to follow seller',
};
