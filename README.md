<div align="center">
  <h1>🍀 moss</h1>
  <p>자기개발을 위한 스터디 모임 플랫폼 입니다.</p>
</div>

[목차]

0. [팀원 소개](#chapter-0)
1. [목표와 기능](#chapter-1)
2. [개발 환경 및 배포 URL](#chapter-2)
3. [프로젝트 구조와 개발 일정](#chapter-3)
4. [역할 분담](#chapter-4)
5. [UI / BM](#chapter-5)
6. [메인 기능](#chapter-6)
7. [추가 기능](#chapter-7)
8. [개발하면서 느낀점](#chapter-8)

<br>
<br>

## 🌷 팀원 소개 <a id="chapter-0"></a>

<table>
    <tr height="160px">
        <td align="center" width="170px">
            <a href="https://github.com/yoojin-park19"><img height="120px" width="120px" src="https://github.com/yoojin-park19.png"/></a>
            <br />
            <strong>박유진</strong>
        </td>
        <td align="center" width="170px">
            <a href="https://github.com/IRONDESK"><img height="120px" width="120px" src="https://github.com/IRONDESK.png"/></a>
            <br />
            <strong>손수철</strong>
        </td>
        <td align="center" width="170px">
            <a href="https://github.com/ZERO2ONE23581"><img height="120px" width="120px" src="https://github.com/ZERO2ONE23581.png"/></a>
            <br />
            <strong>김준우</strong>
        </td>
        <td align="center" width="170px">
            <a href="https://github.com/choisung2ongddree"><img height="120px" width="120px" src="https://github.com/choisung2.png"/></a>
            <br />
            <strong>최성이</strong>
        </td>
        <td align="center" width="170px">
            <a href="https://github.com/dreamfulbud"><img height="120px" width="120px" src="https://github.com/dreamfulbud.png"/></a>
            <br />
            <strong>강혜진</strong>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td width="170px">
            <ul>
            <li>공지사항 기능</li> 
            <li>개인 목표량 기능</li>
            <li>배너 UI</li>
            </ul>
        </td>
        <td width="170px">
            <ul>
            <li>스터디 기능</li> 
            <li>더보기 기능</li>
            <li>개인 목표 UI</li>
            </ul>
        </td>
        <td width="170px">
            <ul>
            <li>로그인 기능</li>
            <li>일정 기능</li> 
            <li>회원가입 기능</li>
            </ul>
        </td>
        <td width="170px">
            <ul>
            <li>투두리스트 기능</li> 
            <li>회원가입 UI</li> 
            <li>공지사항 UI</li>
            </ul>
        </td>
        <td width="170px">
            <ul>
            <li>디자인</li> 
            <li>UI구현</li> 
            </ul>
        </td>
    </tr>
</table>

## 🌼 목표와 기능 <a id="chapter-1"></a>

<hr>

### 1.1 목표

- 원하는 스터디를 개설하고 회원을 모지하는 플랫폼
- 스터디를 함께 운영해 나가는 SNS
- 자기계발을 위햇 서로 정보를 공유하는 정보공유 네트워크

#### 1.2 기능

- 원하는 스터디를 개설할 수 있다.
- 원하는 스터디에 참여할 수 있다.
- 같은 목표를 가진 사람들과 소통할 수 있다.
- 개별적으로 공부의 목표를 가지고 그를 이루기 위한 측정이 가능하다.
- 일정 및 해야할일 들을 관리할 수 있다.

<br><br>

## 🌵 개발 환경 및 배포 URL <a id="chapter-2"></a>

#### 2.1 개발 환경

- 프론트 개발 환경 : React & Next.js,Typescript
- 백엔드 개발 환경 : planetScale, prisma

#### 2.2 배포 URL

[ moss ]<a href="https://moss-six.vercel.app/"> https://moss-six.vercel.app/</a>

<br><br>

## 🪴 프로젝트 구조와 개발 일정 <a id="chapter-3"></a>

```
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── prisma
│   └── schema.prisma
├── src
│   ├── components
│   │   ├── Banner.tsx
│   │   ├── Calendar
│   │   │   ├── Calendar.tsx
│   │   │   ├── MyPage
│   │   │   │   ├── MyCalendar.tsx
│   │   │   │   └── MyScheduleModal.tsx
│   │   │   └── StudyPage
│   │   │       ├── Button.tsx
│   │   │       ├── DeleteModal.tsx
│   │   │       ├── ScheduleList.tsx
│   │   │       ├── ScheduleModal.tsx
│   │   │       ├── StudyCalendarWrap.tsx
│   │   │       └── Title.tsx
│   │   ├── Find
│   │   │   ├── FindForm.tsx
│   │   │   └── modal
│   │   │       ├── FindModal.tsx
│   │   │       ├── Id_Modal.tsx
│   │   │       └── Pw_Modal.tsx
│   │   ├── Join
│   │   │   ├── FileUpload.tsx
│   │   │   └── JoinInput.tsx
│   │   ├── Login
│   │   │   ├── LoggedInStateBtn.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   ├── LoginInput.tsx
│   │   │   ├── LoginLink.tsx
│   │   │   └── LoginStart.tsx
│   │   ├── MyPage
│   │   │   ├── CreateStudy.tsx
│   │   │   ├── MyPageBanner.tsx
│   │   │   ├── MyPageContainer.tsx
│   │   │   ├── MyStudyChart.tsx
│   │   │   ├── Record.tsx
│   │   │   ├── StudyChart.tsx
│   │   │   ├── StudyList.tsx
│   │   │   ├── StudyTimer.tsx
│   │   │   └── UserInfo.tsx
│   │   ├── Notice
│   │   │   ├── Button.tsx
│   │   │   ├── NoticeList.tsx
│   │   │   ├── NoticeTitle.tsx
│   │   │   └── PostEditor.tsx
│   │   ├── SearchInput.tsx
│   │   ├── StudyCard.tsx
│   │   ├── StudyList.tsx
│   │   ├── StudyMain
│   │   │   ├── ApplyStudyModal.tsx
│   │   │   ├── Member.tsx
│   │   │   ├── Notice.tsx
│   │   │   ├── StudyBanner.tsx
│   │   │   ├── StudyComponents.tsx
│   │   │   ├── Todo.tsx
│   │   │   └── TodoItem.tsx
│   │   ├── StyleComponents.tsx
│   │   ├── TitleSearch.tsx
│   │   └── layouts
│   │       ├── Layout.tsx
│   │       ├── index.tsx
│   │       └── partials
│   │           ├── Footer.tsx
│   │           ├── Header.tsx
│   │           └── Title.tsx
│   ├── constants
│   │   └── index.tsx
│   ├── libs
│   │   ├── client
│   │   │   ├── useMutation.ts
│   │   │   └── useUser.ts
│   │   └── server
│   │       ├── client.ts
│   │       ├── withHandler.ts
│   │       └── withSession.ts
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── api
│   │   │   ├── goal
│   │   │   │   └── index.ts
│   │   │   ├── notice
│   │   │   │   ├── [id]
│   │   │   │   │   ├── current.ts
│   │   │   │   │   └── total.ts
│   │   │   │   ├── create.ts
│   │   │   │   ├── delete.ts
│   │   │   │   ├── edit.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── view.ts
│   │   │   ├── schedule
│   │   │   │   ├── mypage
│   │   │   │   │   └── index.ts
│   │   │   │   └── studypage
│   │   │   │       ├── [id]
│   │   │   │       │   ├── delete.ts
│   │   │   │       │   ├── edit.ts
│   │   │   │       │   └── total.ts
│   │   │   │       └── index.ts
│   │   │   ├── study
│   │   │   │   ├── [id]
│   │   │   │   │   └── index.ts
│   │   │   │   ├── apply.tsx
│   │   │   │   ├── create.ts
│   │   │   │   ├── getInfo.tsx
│   │   │   │   ├── getUser.tsx
│   │   │   │   ├── getUserName.tsx
│   │   │   │   ├── my_study.ts
│   │   │   │   └── total_study.ts
│   │   │   ├── todo
│   │   │   │   ├── delTodo.ts
│   │   │   │   ├── editTodo.ts
│   │   │   │   └── index.ts
│   │   │   ├── upload
│   │   │   │   ├── avatar.ts
│   │   │   │   └── image.ts
│   │   │   └── users
│   │   │       ├── find-id.ts
│   │   │       ├── find-pw.ts
│   │   │       ├── index.ts
│   │   │       ├── join.ts
│   │   │       ├── loggedInUser
│   │   │       │   ├── edit_idpw.ts
│   │   │       │   ├── edit_info.ts
│   │   │       │   └── index.ts
│   │   │       ├── login.ts
│   │   │       ├── logout.ts
│   │   │       └── token_login.ts
│   │   ├── edit
│   │   │   └── [id]
│   │   │       ├── id_pw.tsx
│   │   │       └── info.tsx
│   │   ├── index.tsx
│   │   ├── join
│   │   │   └── index.tsx
│   │   ├── login
│   │   │   ├── find_id.tsx
│   │   │   ├── find_pw.tsx
│   │   │   └── index.tsx
│   │   ├── my-page
│   │   │   └── index.tsx
│   │   ├── search
│   │   │   └── index.tsx
│   │   └── study
│   │       └── [studyId]
│   │           ├── index.tsx
│   │           └── notice
│   │               ├── [id].tsx
│   │               ├── edit
│   │               │   └── [id].tsx
│   │               ├── index.tsx
│   │               └── write.tsx
│   ├── styles
│   │   ├── components
│   │   │   ├── Calendar.ts
│   │   │   └── Find-id-pw.ts
│   │   ├── components.ts
│   │   ├── globals.css
│   │   └── reset.css
│   └── types
│       ├── Login.ts
│       ├── Member.ts
│       ├── Notice.ts
│       ├── Todo.ts
│       ├── edit.ts
│       ├── join.ts
│       ├── schedule.ts
│       └── study.ts
├── tsconfig.json
└── yarn.lock
```

## 🌳 프로젝트 일정

| 내용                | 일정                              | 기간 |
| ------------------- | --------------------------------- | ---- |
| 프로젝트 기획       | 2022년 2월 26일 ~ 2022년 3월 3일  | 5일  |
| 디자인, 컨벤션 구현 | 2022년 3월03일 ~ 2022년 3월 10일  | 8일  |
| UI,UX구현           | 2022년 3월 10일 ~ 2022년 3월 31일 | 21일 |
| 백엔드 구현         | 2021년 4월 1일 ~ 2022년 5월 9일   | 39일 |
| 정리 및 배포        | 2022년 5월 9일 ~ 2022년 5월 17일  | 9일  |

<br>

<a href="https://github.com/IRONDESK/moss/wiki/%ED%9A%8C%EC%9D%98%EB%A1%9D"> 🔗 &nbsp;moss 회의록</a><br>

<br>

## 🎍 역할 분담 <a id="chapter-4"></a>

<hr>

- 디자인, FE, BE : 최성이, 손수철, 박유진, 김준우
- 디자인, UI구현: 강혜진

<table>
    <tr>
        <td align="center" width="150px">
            <a href="https://github.com/IRONDESK/moss/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5">🔗 로그인 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/IRONDESK/moss/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5">🔗 회원가입</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/IRONDESK/moss/wiki/%EC%A3%BC%EC%9A%94%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5">🔗 검색 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%ED%99%88-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 스터디 페이지</a>
        </td>
    </tr>
    <tr>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168758472-13a08e0d-62a9-4925-ac78-5a9d668ae42c.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168758062-86882746-e624-40ff-aad8-538f9d681dfd.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168759620-6994602d-e011-41cf-ae25-1c662af9ab42.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168769562-93df1577-edf5-4bbe-af62-541b304ee652.png" height="100px" width="150px"/>
        </td>
    </tr>
        <tr>
        <td align="center" width="150px">
            <a href="https://user-images.githubusercontent.com/93498523/168769877-f1fb57b0-f474-44d3-be1d-48d9c3ee9cd6.png">🔗 마이 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://user-images.githubusercontent.com/93498523/168769877-f1fb57b0-f474-44d3-be1d-48d9c3ee9cd6.png">🔗 공지사항</a>
        </td>
        <td align="center" width="150px">
            <a href="https://user-images.githubusercontent.com/93498523/168769877-f1fb57b0-f474-44d3-be1d-48d9c3ee9cd6.png">🔗 투두리스트</a>
        </td>
        <td align="center" width="150px">
            <a href="https://user-images.githubusercontent.com/93498523/168769877-f1fb57b0-f474-44d3-be1d-48d9c3ee9cd6.png">🔗 일정관리</a>
        </td>
    </tr>
    <tr>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168770352-eb6f2934-93ec-4b7a-b353-ab2b3bf97a7d.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168762326-f37dcfbb-8ddd-491f-843e-a7e768a93421.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168761745-990ccc0c-2b2e-4905-8219-61adc0e527b1.png" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93498523/168765189-164c6ace-b058-4001-aef7-e7bbdbaa957b.png" height="100px" width="150px"/>
        </td>
    </tr>
</table>

<br><br>

## 🎋 UI / BM <a id="chapter-5"></a>

<img width="1175" alt="스크린샷 2022-05-17 오후 5 50 43" src="https://user-images.githubusercontent.com/93498523/168771125-741c5d7b-18bc-4346-80dc-fa98e6ac48b4.png">

<br><br>

## 🌻 메인 기능 <a id="chapter-6"></a>

<hr>

### 👐🏼 &nbsp; 원하는 스터디를 개설, 참여 할 수 있습니다.

> - 원하는 스터디를 개설하고, 이미 스터디가 있다면 참여할 수 있습니다..
> - 스터디를 개설할때는 인원제한이나, 카테고리, 내용등을 지정할 수 있습니다.

### 👨‍👩‍👧‍👧 &nbsp; 비슷한 목표를 가진 사람들과 소통할 수 있습니다..

> - 스터디를 통해 비슷한 목표를 가진 사람들과 채팅을 통해 소통할 수 있습니다.
> - 함께 목표를 나누며 투두리스트,공지사항을 통해 함께 목표를 이루어갈 수 있습니다..

### 🎯 &nbsp; 원하는 정보를 찾을 수 있다.

> - 비슷한 목표가 있는 사람들끼리 유용한 정보를 공유할 수 있습니다.

<br><br>

## 🧇 추가 기능 <a id="chapter-7"></a>

<hr>

### 🕐 &nbsp; 개별적으로 시간이나 일정을 관리할 수 있습니다..

> - 마이페이지를 통해 본인의 공부시간을 관리할 수 있습니다.
> - 일정 관리를 통해 본인의 일정을 확인할 수 있습니다.
> - 투두리스트를 이용하여 참여하고 있는 모든 스터디의 투두리스트 관리할 수 있습니다.

<br><br>

## 🥪 개발하며 느낀점 <a id="chapter-8"></a>

<hr>

### 💁‍♂️ 김준우

>

### 👩‍💻 최성이

> 이번 프로젝트에서 prisma와 pscale을 처음 접했습니다. schema와 api를 생성하는 초반에는 시행착오가 있었으나, DB 생성과 통신이 성공적으로 완료됐을 때, 큰 성취감을 느꼈습니다. 직접 DB를 생성하면서 데이터 처리의 중요성을 다시 한번 상기시킬 수 있었습니다. 기회가 된다면, prisma와 pscale을 활용해 DB를 확장하는 작업을 진행해 보고 싶습니다.
> 백엔드를 구성하는 부분이 낯설었으나, 팀원 분들의 도움으로 인해 빠르게 적응할 수 있었습니다. 배울 기회가 많았던 프로젝트였습니다.
> 타입 스크립트를 통해 에러를 사전에 방지할 수 있었습니다. 하지만 타입을 찾기 위해 많은 시간을 소요했고, 여전히 미흡한 부분이 존재합니다. 타입 스크립트 더 공부해 리팩토링할 예정입니다.
> 재사용성이 떨어지는 컴포넌트 설계가 아쉽습니다. 비슷한 컴포넌트들이 많은 페이지에 작성되어 있습니다. 이 부분에 대해서는 더 고민해야 할 것 같습니다.

### 🙋 손수철

> Next.js와 d3.js 등의 스택을 공부하고 활용하게 되어 유익했다
> *최신 백엔드 트렌드인 PlanetScale과 Prisma를 활용하게 되어 유익했다
> *Back-end도 해볼만 하다는 자신감을 갖는 계기가 되었다

### 🙋‍♀️ 박유진

> 이번 프로젝트는 배우는게 정말 많은 프로젝트 였습니다. 프론트 엔드부분도 리액트, 넥스트, 타입스크립트를 모두 적용하여,공부할 것도 많고 배울것도 많은 프로젝트였는데, 다른 분들이 많이 도와주고 알려주면서 많은 것들을 배우고, 실전에 적용하는 경험도 할 수 있는 프로젝트 였습닌다.
> 그리고 백엔드 부분에도 한국어 강의도 많지 않은 프리즈마와 플래닛 스케일이라는 것을 사용했는데, 처음에는 어렵지만 다같이 찾아보며 알아가면서 해서 서로의 도움을 많이 받아가며 진행했습니다. 이번 프로젝트를 통해 협업을 통해서 얻을 수 있는 긍정적인 시너지 효과를 한번 더 느끼게된 계기가 되었습니다. 중간 중간 어려운 부분들이 있었지만, 그래도 다같이 하면서 배우고 느끼는게 더 많은 프로젝트라고 생각합니다.
