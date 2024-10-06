export interface MCategory {
  id: number;
  icon_url: string;
  slug: string;
  name: string;
  parent_id: number;
  haschild: boolean;
}
export interface MBanner {
  id: number;
  title: string;
  description: string;
  alt: string;
  link_to: string;
  banner_url: string;
  is_blank: number;
}
export interface MVoucher {
  id: number;
  title: string;
  code: string;
  date_start: string;
  date_end: string;
  min_price: number;
  discount_amount: number;
  used: number;
  quantity: number;
}
export interface MUser {
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
  socials: MSocial[];
}
export interface MCourse {
  id: number;
  title: string;
  sub_title: string;
  slug: string;
  image_url: string;
  duration: string;
  certificate_name: string;
  user_id: number;
  description: string;
  completed_content: string;
  price: number;
  percent_sale: number;
  level_id: string;
  priority: number;
  category_id: string;
  type: string;
  published_at: string;
  view_count: number;
  isEnrollment:boolean;
  enrollment_count: number;
  video_type: string;
  video_url: string;
  video: string;
  status: number;
  deleted_at: Date | null;
  created_at: Date;
  updated_at: Date;
  rating: number;
  user: MUser;
  total_steps: number;
  total_sections: number;
  percent_learning: number;
  intends: MIntend[];
}

export interface MTeacherInfo {
  id: number;
  user_id: number;
  bank_id: number;
  card_number: string;
  momo_number: string;
  major: string;
  position: string;
  description: string;
}
export interface MTeacher extends MUser {
  teacher_info: MTeacherInfo;
}
export interface BlogTag {
  id: number;
  tag_id: number;
  blog_id: number;

  tag: Tag;
}
export interface Tag {
  id: number;
  name: string;
  slug: string;
  description:string;
}
export interface MBlog {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  thumbnail_url: string;
  user_id: number;
  from: string;
  comment_count: number;
  view_count: number;
  is_show: number;
  is_published: number;
  published_at: Date;
  deleted_at: Date;
  created_at: string;
  updated_at: string;
  tags: BlogTag[];
  user:MUser
  is_loved: boolean;
  is_saved: boolean;
  love_counts: number;
  date_saved:string;
}
export interface MLevel {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface MStep {
  id: number;
  uuid: string;
  section_id: number;
  title: string;
  duration: number;
  type: string;
  priority: number;
  is_preview: number;
  deleted_at: Date;
  updated_at: Date;
  lecture: MLecture;
  question: MQuestion;
  answers: MAnswer[];
  article: MArticle;
}
export interface MArticle {
  id: number;
  step_id: number;
  content: string;
}
export interface MQuestion {
  id: number;
  content: string;
  parent_id: number;
  from: string;
}
export interface MAnswer {
  id: number;
  parent_id: number;
  content: string;
  explain: string;
  from: string;
  is_correct: boolean;
}
export interface MLecture {
  id: number;
  uuid: string;
  step_id: number;
  description: string;
  video_url: string;
  video_type: string;
  video: string;
  priority: number;
  is_show: number;
  deleted_at: Date;
}
export interface MSection {
  id: number;
  uuid: string;
  course_id: number;
  title: string;
  will_learn: string;
  priority: number;
  is_show: number;
  deleted_at: Date;
  duration: number;
  steps: MStep[];
}
export interface MReview {
  id: number;
  user_id: number;
  course_id: number;
  rating: number;
  content: string;
  created_at: string;
  updated_at: string;
  user: MUser;
}
export interface MIntend {
  id: number;
  course_id: number;
  type: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}
export interface MTeacherDashboard {
  count_courses: number;
  count_students: number;
}
export interface MSocial {
  id: number;
  user_id: number;
  name: string;
  type: string;
  url: string;
}
export interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}
export interface GoogleLoginProps {
  handleLoginWithGoogle: (response: GoogleCredentialResponse) => void;
}
export interface MOrderCreate {
  user_id: number;
  email: string;
  subtotal: number;
  total: number;
  status: string;
  voucher_id: number | null;
  payment_method: string;
  order_code: string;
  updated_at: string;
  created_at: string;
  id: number;
}
export interface PaymentInfo {
  momo: SettingItem[];
  bank: SettingItem[];
}
export interface SettingItem {
  id: number;
  type: string;
  key: string;
  value: string;
}
export interface MLearningLog {
  id: number;
  user_id: number;
  course_id: number;
  current_step: string;
  user_progress: number[];
  is_completed: number;
  time_start: Date;
  created_at: Date;
  updated_at: Date;
}
export interface MCertificate{
  title:string;
  username:string;
  fullname:string
  date:Date;
}
export interface MNote {
  id: number
  note: string
  step_id: string
  step: MStep
  updated_at:Date
}
export interface MComment {
  id: number
  comment: string
  type: string
  user_id: number
  commentable_id: string
  is_approved: number
  is_deleted: number
  is_answered: number
  created_at: string
  updated_at: string
  reaction_count: number
  replies_count: number
  commentor: MUser
  is_reaction:boolean,
  type_reaction:MReaction
  all_reaction_type:{type:string}[]
}
export interface MReaction {
  id: number
  user_id: number
  commentable_id: string
  commentable_type: string
  type: string
}
export interface MOrder {
  id: number
  user_id: number
  email: string
  subtotal: number
  total: number
  status: string
  voucher_id: number
  payment_method: string
  order_code: string
  created_at: string
  updated_at: string
  order_details: MOrderDetail[]
}
export interface MOrderDetail {
  id: number
  order_id: number
  course_id: number
  price: number
  created_at: string
  updated_at: string
  course: MCourse
}
export interface MyReview{
  is_log: boolean
  can_review: boolean;
  review:MReview
}