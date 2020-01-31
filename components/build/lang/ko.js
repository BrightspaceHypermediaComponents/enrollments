'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangKoImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ko = {
			'activityProgress': '활동',
			'changeImage': '이미지 변경',
			'closed': '닫힘',
			'completed': '완료',
			'completedDaysAgo': '{number}일 전에 완료함',
			'completedOn': '{dateTime}에 완료함',
			'completedToday': '오늘 완료함',
			'completedTomorrow': '내일 완료함',
			'completedYesterday': '어제 완료함',
			'continue': '계속',
			'continueToModule': '모듈, {module}(으)로 이동하여 계속 진행합니다.',
			'courseOfferingInformation': '개설 강의 정보',
			'coursePinButton': '{course} 강의가 고정되었습니다. 강의 고정 취소',
			'courseSettings': '{course} 강의 설정',
			'description': '설명',
			'disabled': '비활성화됨',
			'dueDaysAgo': '{number}일 전에 마감',
			'dueOn': '{dateTime}에 마감',
			'dueToday': '오늘 마감',
			'dueTomorrow': '내일 마감',
			'dueYesterday': '어제 마감',
			'ended': '{date}일 {time}에 종료됨',
			'endsAt': '{date}일 {time}에 종료',
			'enrollmentProgressBar': '{title} 중 {percentage}% 완료됨',
			'inactive': '비활성',
			'moduleProgress': '모듈',
			'new': '신규',
			'overdue': '기한 경과',
			'pin': '고정',
			'pinActionResult': '{course} 고정됨',
			'startsAt': '{date}일 {time}에 시작',
			'unpin': '고정 취소',
			'unpinActionResult': '{course} 고정 취소됨',
			'noCoursesMessage': 'You don\'t have any courses or learning paths to display.',
			'viewAllLearning': 'View All Learning'
		};
	}
};

export const LangKo = dedupingMixin(LangKoImpl);

