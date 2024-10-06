export class FormRegister{
    first_name:string
    last_name:string
    email:string
    code:string 
    password:string
    constructor(){
        this.first_name=''
        this.last_name=''
        this.email=''
        this.code=''
        this.password=''
    }
}
export class FormLogin{
    email:string;
    password:string;
    constructor(){
        this.email=''
        this.password=''
    }
}
export class User {
    id: number;
    uuid: string;
    first_name: string;
    last_name: string;
    full_name: string;
    username: string;
    email: string;
    phone_number: string;
    avatar_url: string;
    thumbnail_url: string;
    birthday: string;
    address: string;
    is_blocked: number;
    is_pro: number;
    is_comment_blocked: number;
    comment_blocked_at: string;
    is_learn_tour_completed: boolean | null;
    is_onboarding_completed: boolean | null;
    bio: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    failed_attempts: number;
    blocked_until: string;
    roles: string[];
    constructor(){
        this.id = 0
        this.uuid = ''
        this.first_name = ''
        this.last_name = ''
        this.full_name = ''
        this.username = ''
        this.email = ''
        this.phone_number = ''
        this.avatar_url = ''
        this.thumbnail_url = ''
        this.birthday = ''
        this.address = ''
        this.is_blocked = 0
        this.is_pro = 0
        this.is_comment_blocked = 0
        this.comment_blocked_at = ''
        this.is_learn_tour_completed = null
        this.is_onboarding_completed = null
        this.bio = ''
        this.email_verified_at = ''
        this.created_at = ''
        this.updated_at = ''
        this.failed_attempts = 0
        this.blocked_until = ''
        this.roles =[]
    }
  }

  export class AsyncCart{
    id:number;
    constructor(){
        this.id=0
    }
    
  }
export class ChangePasswordObj{
    password_old:string
    password_new:string
    password_confirm:string
    constructor(){
        this.password_old=''
        this.password_new=''
        this.password_confirm=''
    }
}