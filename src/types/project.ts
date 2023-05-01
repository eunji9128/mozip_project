export enum MeetingType {
  ONLINE = "온라인",
  BLENDED = "블렌디드",
  OFFLINE = "오프라인",
}

export enum MeetingCadence {
  ONCE_A_WEEK = "주 1회",
  TWICE_A_WEEK = "주 2회",
}

export interface MemberInfo {
  id: number | null; // 유저 id (fk)
  role: string; // 멤버 직무
  career: number; // 멤버 경력 (연차)
}

export interface Project {
  id: number; // 프로젝트 id (pk)
  title: string; // 프로젝트 제목
  topic_list: string; // 프로젝트 주제 리스트
  img_url?: string; // 프로젝트 이미지 url or 경로
  description: string; // 프로젝트 소개
  service_range: string[]; // 서비스 범위
  schedule: string[]; // 프로젝트 일정
  process: string; // 진행방식 및 사용 기술 스택
  suggestion: string[]; // 이런 분들께 추천드려요
  start_date: Date; // 프로젝트 시작일
  end_date: Date; // 프로젝트 종료일
  meeting_type: MeetingType; // 모임 방식
  tech_stack_list: string[]; // 기술 스택
  region: string; // 지역
  meeting_cadence: MeetingCadence; // 모임 횟수
  personnel: number; // 모집 인원
  leader: MemberInfo; // 프로젝트 모집장 id (fk)
  member_list: MemberInfo[]; // 프로젝트 멤버 id 리스트 (fk)
}
