// This file defines the User type for the application
export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  user_type?: string; 
};