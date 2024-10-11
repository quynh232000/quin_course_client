export type UserRegister = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    birthday: string;
    gender: string;
  };
  export type UserLogin ={
    email:string,
    password:string
  }
  export type UserToken={
    token:string
  };
  export type ResendEmail = {
    email:string
  }
  export interface UserModel {
    id: string
    uuid: string
    first_name: string
    last_name: string
    birthday: string
    email: string
    email_verified_at: string
    avatar: string
    thumbnail: string
    gender: string
    phone_number: string
    relationship: string
    location: string
    address: string
    description: string
    is_private: boolean
    is_banned: boolean
    created_at: string
    updated_at: string
  }
  export type uuid = string
  export class UpdateSocial{
    facebook:string;
    youtube:string;
    zalo:string;
    constructor(){
      this.facebook='';
      this.youtube='';
      this.zalo='';
    }
  }