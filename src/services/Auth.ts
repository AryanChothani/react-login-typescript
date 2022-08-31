import ApiHelper from "./ApiHelper";
import jwt from 'jsonwebtoken';
import Session from 'store2';
import * as apiURL from './Apiconfig';

class AuthService {
    static async Login(body: {}) {
        return ApiHelper.postAnonymous("sign-in", body);
    }

    static async VerifyOTP(body: {}) {
        return ApiHelper.postAnonymousOTP("verify-otp", body);
    }
    static GetCurrentLoggedUserDetails() {
        const userAccessToken = Session.session('userAccessToken');
        if (userAccessToken) {

            return jwt.decode(userAccessToken.replace('Bearer ', ''));
        }
        return null;
    }
}
export default AuthService;
