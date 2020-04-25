module.exports = class ErrorDetails {
    constructor(error) {
        this.timestamp = new Date();
        this.status = 'success';
        this.statusCode = error && error.statusCode ? error.statusCode : 503;
        this.message = error && error.message ? error.message : 'Server Temporarily Unavailable';
        this.data = data;
    }
}