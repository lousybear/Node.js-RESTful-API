module.exports = class SuccessDetails {
    constructor(data) {
        this.timestamp = new Date();
        this.status = 'success';
        this.statusCode = 200;
        this.message = 'default';
        this.data = data;
    }
}