import { UserModel } from "./user";

export interface FileType{
  file:string;
  type:string
}
export interface GroupModel {
  id: number
  uuid: string
  user_id: number
  avatar: string
  thumbnail: string
  description: string
  name: string
  location: string
  type: string
  is_private: number
  members: GroupMemberModel[]
  created_at: string
  updated_at: string
  user: UserModel
  is_joined:boolean
  activate_recent:string
}
export interface GroupMemberModel {
  id: number
  user_id: number
  group_id: number
  created_at: string
  updated_at: string
  user: UserModel
}
export interface NotificationModel {
  id: number
  type: string
  user_id: number
  from_user_id: number
  message: string
  url: string
  read_at: string
  created_at: string
  updated_at: string
  user: UserModel
}
export interface ConversationModel{
  id:number
  user1_id:number
  user2_id:number
  created_at: string
  updated_at: string
  user: UserModel
  recent_message: MessageModal
}
export interface MessageModal {
  id: number
  conversation_id: number
  user_id: number
  content: string
  media: string
  is_read: number
  is_seen: number
  is_deleted: number
  created_at: string
  updated_at: string
  user: UserModel
}