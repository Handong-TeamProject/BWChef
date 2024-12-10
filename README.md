# 흑백요리사 소개 사이트, WChef

흑백 요리사 출연진 정보 제공 사이트

## 1. 프로젝트 개요

‘흑백요리사’ 프로그램의 셰프 및 요리 소개를 위한 웹 서비스로, 흑백 요리사 프로그램의 매력과 정보를 직관적으로 전달하기 위해 기획되었습니다. 사용자 경험을 풍부하게 하기 위해 셰프의 배경, 요리, 운영 식당 등을 다루며, 퀴즈 등 상호작용 요소도 포함했습니다.

## 2. 콘텐츠 구성

### 1. 흑백요리사 개요

- 프로그램 정보 제공: 전 세계적으로 영향력 있는 '흑백요리사' 프로그램 소개.
- 주요 인물 설명: 흑/백 셰프 및 심사위원 정보 제공.

### 2. 셰프 정보

- **기본 정보**: 닉네임, 사진, 명대사, 요리 장르.
- **요리 정보**: 셰프의 대표 개인 요리와 상세 정보.
- **특별 이야기**: 세미파이널 미션 ‘인생을 요리하라’를 바탕으로 셰프의 스토리 제공.
- **운영 식당**: 레스토랑 정보와 예약 링크, SNS 정보 제공.

## 3. 기술 구현

### 1. JavaScript 활용

- **Chef.json 파일 파싱**: 셰프 프로필 카드 및 세부 정보 생성.
  ```javascript
  fetch("path/to/Chef.json")
    .then((response) => response.json())
    .then((data) => {
      const chefCards = document.getElementById("chef-cards");
      data.forEach((chef) => {
        // 카드 생성 코드
      });
    });
  ```
- **URL Parameter를 통한 데이터 전달**: u_id로 셰프 세부 페이지 구현.
- **지도 서비스**: 카카오맵 연동으로 동적 지도 제공.

### 2. 디바이스 최적화

- **데스크탑 전용 메시지**: 700px 이하 기기 접속 시 모바일 미지원 안내.

### 3. 배포 및 서버

- **Netlify 사용**: GitHub와 연동해 무료 배포.
- GitHub Repository: [Handong-TeamProject/BWChef](https://github.com/Handong-TeamProject/BWChef)

### 4. 기술적 주요 포인트

- **Chef.json 구조**: u_id, 이름, 장르 등 정보 체계화로 효율적 데이터 관리.
- **폴더 구조**: Images, Pages, Script 등 목적별 폴더로 개발 효율성 증대.
- **다양한 폰트 사용**: 디자인 통일성과 브라우저 호환성 고려.

## 4. 프로젝트 목표

사용자 중심의 직관적이고 실용적인 웹 서비스를 제공하며, 프로그램과 셰프들의 매력을 효과적으로 전달하고자 했습니다.

## 5. 팀원 정보

<div style = "text-align : center;">

|      | <img src = "https://i.namu.wiki/i/YMsOJPY4jmYU-1-7SDXq7Y4gqEXbb9WZWFJCYAnIFfyj8UfYq3CKYGwJ_FM-Btv-63hv3c2JvucE62cLVDRLs8HpbPTuiaxEpXbBLdzLskBkGgbOX9ILQG2eT227irVF2l2G_VRQdVKTntB00QLtew.webp" width = "100px" height = "100px" style = "object-fit: cover; object-position : 80% 50%;"> | <img src = "https://i.namu.wiki/i/u66gUZHlpJPuYkYf1bV6KZuXY3r26uGw-6Dj7NNLpG-7V62EBSPpYhm82WRuFtY6-RAy0oG-gE0UuUCEWmaegjpb4mI7_U5kWT52-3_-H1KKIvhpBoPvRASmfzE-1nry0c5b6Gr5Dhv9EHQpBh9PRg.webp" width = "100px" height = "100px" style = "object-fit: cover; object-position : 50% 80%"> | <img src = "https://i.namu.wiki/i/zz3e4oC7McGL_GZFfOkTTbAKnq44xTHFtD7Nnj-KDemiV-KUX6rcmiQHdzDbD1fw2btp51IdfItH7gS_wThVe4MCP9j2ZKXACs7FyVioIripPm2R_GBi2DVMsk2fbN1UCoZS7KObfawPyCgiM2T1rg.webp" width = "100px" height = "100px" style = "object-fit: cover; object-position : 50% 80%"> | <img src = "https://i.namu.wiki/i/61E2MNDp7AFQFpzXKn5_9jvhEyAl49dACxrscqN4t6MKvMujkAIocqVzL_-gdaevHvBMcHebmbHrFr-lyIgOAoG9OAT3rbr0-Hd6WtTaQLp-7XvyoPydGXQnuHy56eCPo_-vWjNgoYpukHkF9HDapQ.webp" width = "100px" height = "100px" style = "object-fit: cover; object-position : 50% 80%"> | <img src = "https://i.namu.wiki/i/q15ROg_J5J6l-Ie7HaZHfnTV3AnLdo9g4Q23zLfoiyX-I7OG6eC1XmZTJEMlvrixA36FqMdYBwU3hN830f8LA51s0VvOKThyOFVwivNJUERC9SBTYYA0vARGy6Ra9pWWKtfeNoKyMM7QCxEGNvu1lQ.webp" width = "100px" height = "100px" style = "object-fit: cover; object-position : 50% 80%"> |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이름 | 김광일                                                                                                                                                                                                                                                                                   | 김하희                                                                                                                                                                                                                                                                                  | 강지은                                                                                                                                                                                                                                                                                  | 이예진                                                                                                                                                                                                                                                                                  | 이승희                                                                                                                                                                                                                                                                                  |
| 학부 | 전산전자공학부                                                                                                                                                                                                                                                                           | 커뮤니케이션학부                                                                                                                                                                                                                                                                        | 콘텐츠융합디자인학부                                                                                                                                                                                                                                                                    | 상담심리사회복지학부                                                                                                                                                                                                                                                                    | 국제어문학부                                                                                                                                                                                                                                                                            |
| 역할 | 개발 리드, 출연진 정보                                                                                                                                                                                                                                                                   | 셰프 식당 정보                                                                                                                                                                                                                                                                          | 셰프 기본 정보                                                                                                                                                                                                                                                                          | 셰프 음식 정보                                                                                                                                                                                                                                                                          | 셰프 스토리 정보                                                                                                                                                                                                                                                                        |

</div>
