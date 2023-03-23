## 원티드 프리온보딩 4주차

주문내역 관리 어드민 페이지 구현

### [배포주소](https://wanted-pre-3-7-flexsys.netlify.app/)
<br/>

<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/-SCSS-CA4245?style=flat-square&logo=SCSS&logoColor=white">


<br/>

## 프로젝트 실행 방법

react app

```
npm i
npm run dev
```

<br/>

## 요구사항

>

<br/>

<img src="https://user-images.githubusercontent.com/86880916/225870287-3df177c5-1921-45e7-a759-c15b90399144.png" width="500"/>

<br/>

1. 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
    - 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
    - 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
    - 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
        - 여기서 오늘은 **“2023-03-08”**일을 의미합니다.
    <br/>
2. 정렬 기능을 구현해주세요
    - 기본 정렬은 ID 기준 오름차순으로 구현해주세요
    - 표에서 `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요
    <br/>
3. 주문 처리 상태에 따라 filtering 기능을 구현해주세요
4. 고객이름을 검색할 수 있도록 해주세요
5. 서버에 들어온 주문을 5초마다 최신화 해주세요
    - 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요
6. 컴포넌트에 대한 **테스트 코드**를 구현해주세요


<br/>

## 🌟 최종 결과

<br/>

1. 시계열 차트 만들기
  <img width="700" alt="1" src="https://user-images.githubusercontent.com/86880916/225871029-51bb40b4-81de-4e93-9f8b-ebe55abc794f.png" alt="1">

<br/>

2. 호버 기능 구현 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225905733-9a9c1cf7-3c79-4a81-871b-52bdb7b64760.gif" alt="2" >

<br/>

3. 버튼을 통한 필터링
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225906911-36e610e1-a962-4621-bda6-b7ed113c905f.gif" alt="3">
  
<br/>

4. 클릭을 통한 필터링 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225907960-ddeded25-0017-469b-8937-4a6fa7b53477.gif" alt="4" >
  
<br/>

5. area / bar 필터링 
  <img width="700" src="https://user-images.githubusercontent.com/86880916/225908698-f5dbc75f-6f3b-45ed-b9f9-abb3a29b2622.gif" alt="5" >
  
<br/>

## **작업 방식 안내**

1. 어떤 라이브러리를 사용할 지 서로 의논하고, 필수적으로 사용할 기능들을 정합니다.
1. 각 요구사항마다 이슈를 생성합니다.
2. 요구사항에 해당하는 작업이 완료되면, 해당 이슈에 대한 커밋을 작성합니다.
3. 작성한 코드에 대해 리뷰를 진행합니다. 
5. Best Practice를 선정하고, 개선사항을 토론합니다.
6. 개선사항에 맞게 코드를 수정합니다.
7. 모든 작업이 완료되면 최종 결과물을 도출합니다. 

<br/>

## 개선사항

1. Pagenation 버튼 최대 5개로 고정

- 데이터가 많아지면 버튼이 무한대로 늘어날 수도 있어 최대 Pagenation 버튼 갯수를 고정하였다. 


<br/>

## convention

### **git Flow**

- branch : 기능별 작업
- main(master) : 최종 배포
<img src="https://user-images.githubusercontent.com/80516736/221170041-8b7d3762-1152-4407-a600-d9fe1e87e08d.png" width="500px">

<br/>

## **Commit Message Pre-fix**

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 내부 문서 추가/수정
- style: 코드 스타일 수정
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드 관련 코드 수정
- env: 초기 세팅

<br/>

## 회고 및 회의록

[회고](https://solwork.notion.site/3-1d7a2634809f4441b1a96e068d5938ba) <br/> 
[회의록](https://solwork.notion.site/cfbf7c8530ab43f29695dcac5923fd1c)<br/>
[기술 및 기능 리뷰](https://github.com/wanted-pre-7/pre-onboarding-9th-3-7/wiki/%EB%A6%AC%EB%B7%B0)

<br/>

## 팀원

<table>
<tbody>
<tr>
<td align="center"><a href="[https://github.com/yujiseok](https://github.com/yujiseok)"><img src="https://avatars.githubusercontent.com/u/83855636?v=4" width="100px;" alt=""/><br /><sub><b>유지석(팀장)</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/kimhw7](https://github.com/kimhw7)"><img src="https://avatars.githubusercontent.com/u/100066239?v=4" width="100px;" alt=""/><br /><sub><b>김현우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/Everylisy](https://github.com/Everylisy)"><img src="https://avatars.githubusercontent.com/u/60170829?v=4" width="100px;" alt=""/><br /><sub><b>이영우</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/hansejun](https://github.com/hansejun)"><img src="https://avatars.githubusercontent.com/u/86880916?v=4" width="100px;" alt=""/><br /><sub><b>한세준</b></sub></a><br /></td>
<tr/>
<td align="center"><a href="[https://github.com/cwonho](https://github.com/cwonho)"><img src="https://avatars.githubusercontent.com/u/104820973?v=4" width="100px;" alt=""/><br /><sub><b>정원호</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/sol-pine](https://github.com/sol-pine)"><img src="https://avatars.githubusercontent.com/u/105091138?v=4" width="100px;" alt=""/><br /><sub><b>조해솔</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/ilgon0110](https://github.com/ilgon0110)"><img src="https://avatars.githubusercontent.com/u/82035356?v=4" width="100px;" alt=""/><br /><sub><b>김일곤</b></sub></a><br /></td>
<td align="center"><a href="[https://github.com/che-97](https://github.com/che-97)"><img src="https://avatars.githubusercontent.com/u/80516736?v=4" width="100px;" alt=""/><br /><sub><b>최하은</b></sub></a><br /></td>
<tr/>
</tbody>
</table>
