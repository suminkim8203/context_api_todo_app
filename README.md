# 1. State와 Props로 할 일 목록 앱 개발 (JSX 버전)

- 실제로 이렇게까지 복잡한 컴포넌트 구조를 짜지 않음.
- ContextAPI 실습을 위해 구조를 이렇게 구성해보았다.

## 1.1 컴포넌트 구조

- App
  - TodoList Data
    - DataView
      - Title
      - TodoList
        - TodoItem
  - Todo Data
    - Input
      - TodoInput
        - TextInput
        - AddButton
      - InputButton

### 1.1.1 컴포넌트 관심사 분리 기준

- 이 구조는 프로젝트 마다 달라질 수 있다.

- PageComponent : 데이터의 상태관리를 할 수 있도록 해보자
- UiComponent : 화면또는 페이지를 구성하는 UI 로직을 가지도록 해보자
- APIComponent : API 로직을 분리해보자
