import { ContactUsData, UserType } from "../../../types/type.user";
import { userQuery } from "../user.entity";
import { GetUserResponseNestedFields, UserCRUD, userIntegration } from "./user.type";


// contact us
export interface ContactUsRequest {
    contactMessage: Partial<ContactUsData>;
}
export interface ContactUsResponse {
    success: boolean;
}
export const contactUsResponse: (keyof ContactUsResponse)[] = [
    "success"
]
// me 
export type MeResponse = UserCRUD["GetResponse"] & {
    userType: UserType;
}
export const meResponse: (keyof MeResponse)[] = [
    "user",
    "userType"
]
export interface MeResponseNestedFields extends GetUserResponseNestedFields {
    
}
export const meResponseNestedFields: MeResponseNestedFields = {
    user: userQuery
}

// send otp
export interface SendOTPRequest {
    phone: string;
}
export interface SendOTPResponse {
    successful: boolean;
    otp: string;
}
export const sendOTPResponse: (keyof SendOTPResponse)[] = [
    "successful",
    "otp"
]

// verify otp 
export interface VerifyOTPRequest {
    phone: string;
    otp: string;
}
export interface VerifyOTPResponse {
    otpVerifiedAccessToken: string;
}
export const verifyOTPResponse: (keyof VerifyOTPResponse)[] = [
    "otpVerifiedAccessToken"
]
export interface LoginRequest {
    pin?: string;
    phone?: string;
    email?: string;
    userType: UserType;
    password?: string;
}
export interface LoginResponse {
    accessToken: string;
    userId: string;
}
export const loginResponse: (keyof LoginResponse)[] = [
    "accessToken",
    "userId"
]