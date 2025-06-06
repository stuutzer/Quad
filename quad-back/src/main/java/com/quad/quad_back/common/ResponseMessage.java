package com.quad.quad_back.common;

public interface ResponseMessage {
    //http status 200
    String SUCCESS = "Success.";

    //http status 400
    String VALIDATION_FAILED = "Validation Failed.";
    String DUPLICATE_EMAIL = "Duplicate Email.";
    String DUPLICATE_USERNAME = "Duplicate Username.";
    String NOT_EXISTED_EMAIL = "This email does not exist.";
    String NOT_EXISTED_REVIEW = "This review does not exist.";
    String NOT_EXISTED_COURSE = "This course does not exist.";

    //Http status 401
    String SIGN_IN_FAIL = "Login infomation mismatch.";
    String AUTHORIZATION_FAIL = "Authorization Failed.";
    String EMAIL_VERIFICATION_FAIL = "Email verification failed";
    String SIGN_IN_TYPE_WRONG = "Sign in with wrong type";

    //HTTP STATUS 403
    String NO_PERMISSION = "Do not have permission.";

    //HTTP STATUS 500
    String DATABASE_ERROR = "Database error.";
    String MAIL_SEND_FAILED = "Mail send failed.";
}
