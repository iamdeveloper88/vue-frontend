import ApiClass from './../../Api/Api';

const VerifyOtp = async (otpData) => {
    const result = await ApiClass.postRequest(`validate_otp/${otpData.type}/${otpData.userType}`, false, otpData);
    return {
        message: result.data.message,
        
    };
}

export default VerifyOtp;