# Product Listing Application

Next.js와 shadcn/ui를 사용한 제품 목록 애플리케이션입니다.

## 주요 기능

- 제품 목록 조회 (그리드/리스트 뷰)
- 제품 검색
- 별점 기준 정렬 (오름차순/내림차순)
- 무한 스크롤
- 반응형 디자인

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/robinyoon-dev/product-listing-app.git
cd product-listing-app
```

2. 의존성 설치
```bash

yarn install
```

3. 개발 서버 실행
```bash
yarn dev
```

4. 브라우저에서 `http://localhost:3000` 접속

## 프로젝트 구조

```
product-listing-app/
├── app/
│   ├── products/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── common/
│   │   └── [공통으로 사용하는 컴포넌트 모음]
│   ├── products/
│   │   └── [products 페이지에서 사용하는 컴포넌트 모음]
│   └── ui/
│       └── [shadcn components]
└──  lib/
   ├── definition/
   │   └── [상수 모음]
   ├── types/
   │   └── [타입 정의 모음]
   └── utils/
       └── [유틸리티 모음]

```
