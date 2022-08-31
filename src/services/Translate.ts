import ApiHelper from "./ApiHelper";

class TranslateService {
    static async Translate(body: {}) {
        return ApiHelper.postAnonymous("translate", body)
    }
}
export default TranslateService;
