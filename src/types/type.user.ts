export type UserType = "admin" | "client" | "physio";
export interface User {
  id: string;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  createdAt: string;
}
export interface Blog {
  id: string;
  title: string;
  htmlContent: string;
  imageUrl: string;
  createdAt: string;
}
export interface ContactUsData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}