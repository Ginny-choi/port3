## Pams Seoul Art Market
📌 서울 아트마켓 클론 코딩

📌 반응형 웹사이트

📌 사이트 주소 : http://oiokoo.dothome.co.kr/art/

## 프로젝트의 목적
* 게시판 Ajax 기술을 배우기 위함
* 테이블 구조에 익숙해지기 위함
* php 파일로 서브 페이지 연결 숙련도를 키우기 위함


---

## 프로젝트 화면 및 소개
+ **메인화면**

![art](https://user-images.githubusercontent.com/77954029/126524381-5939ca6a-de82-46f9-aa18-5abc01c5c40d.gif)


![다크](https://user-images.githubusercontent.com/77954029/126528543-7659fed3-c19c-4a41-807c-0c533be92b83.gif)


![slide](https://user-images.githubusercontent.com/77954029/126530291-262132f6-5628-4454-9f23-11a80519a2a7.gif)

- css 애니메이션 효과를 이용하여 동적인 요소를 더함
- window scrollTop 값을 사용하여 글자의 margin left 위치를 이동 시킴 
- mouse wheel 값을 통해 좌우 슬라이드를 구현함 
- 모바일, 태블릿 버전에서는 터치 스와이프로 변경

---
+ **반응형 메뉴**

![모바이](https://user-images.githubusercontent.com/77954029/126535819-0b0c9d65-45a1-4496-a12e-1adff124037e.png)

- 모바일, 테블릿 화면시 화면 우측에 네비메뉴가 나타남 

---

+ **서브페이지**
1.테이블 화면 


![서브1-1-2](https://user-images.githubusercontent.com/77954029/126531828-2988ce92-89cd-45fb-97e2-983a94c71017.png)


![서브2-2-1](https://user-images.githubusercontent.com/77954029/126531838-1ad475ca-c38d-4197-a804-37dfa465fc25.png)


![서브3-1](https://user-images.githubusercontent.com/77954029/126531840-2116928e-6462-433e-93de-bdd7095b1228.png)


![서브4-1](https://user-images.githubusercontent.com/77954029/126531846-3df8244e-09c7-495b-af8c-d321743c1173.png)

- table 태그를 이용하여 다양한 css 작업을 함


2.이미지 화면

![pams](https://user-images.githubusercontent.com/77954029/126532733-38a8edc6-de67-449c-ab71-26bdfefdd9da.gif)

- position:relative 설정 후 top, left 값을 조정하여 이미지를 정렬함 


3.게시판 화면

![게시판](https://user-images.githubusercontent.com/77954029/126534147-f20c5bf1-6703-48f8-8f6e-3fb250b17614.gif)

- json 파일을 사용하여 ajax로 게시판 구현
- 목록 버튼을 누를시 새로운 데이터를 추출한다



![그누보드](https://user-images.githubusercontent.com/77954029/126534115-574730df-a49c-4775-81ec-e0d462b4cff2.png)

- 게시판의 뉴스레터는 그누보드를 활용함
- css 스타일 수정
