export interface User {
  id: number; // 유저 id (pk)
  phone_number: string; // 유저 전화번호
  topic_list: string; // 관심사 리스트
  name: string; // 유저 이름
  birth: Date; // 유저 생년월일
  profile_url: string; // 유저 프로필 사진 url or 경로
}
