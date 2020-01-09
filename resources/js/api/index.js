const _axios = window.axios;

export default class api {
    static async getTrackingDetailsFromCode(trackingCode) {
       return await _axios.post('/tracking-details', {trackingCodes: trackingCode});
    }
}