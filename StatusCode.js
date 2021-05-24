//1xx informational response - the request was recieved, continuing process

//2xx sucessful - the request was successfully received, understood,and accepted
const OK = 200
const CREATED = 201

//3xx redirection - further action needs to be taken in order to complete the request 

//4xx client error - the request contains bad syntax or cannot be fulfilled
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405
const DUBLICATE_RESOURCE = 409

//5XX server error - the server failed to fulfil an opporently valid request
const INTERNAL_SERVER_ERROR = 500

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    DUBLICATE_RESOURCE,
    INTERNAL_SERVER_ERROR
}
