# App Router

페이지나 layout 생성시 `export default`키워드를 반드시 적어줘야한다.

### (폴더명) 소괄호 라우터

폴더 주소는 app/(afterLogin)/home 이어도 브라우저에서는 /home 으로 나타난다.

### layout

layout을 다르게 적용하고 싶을떄  
RootLayout 과 home안의 Layout 중에 우선순위는 home layout이 적용된다.

### template

공식문서상 페이지를 넘나들때마다 기록하게 하고 싶을 때 사용하라고 권유 됨.

1. 페이지 넘어갈 때도 동일하게 유지(리랜더링 X)→ layout
2. 페이지 넘어갈 때마다 리랜더링되게 하고 싶다 →template

### Image

[https://nextjs.org/docs/pages/building-your-application/optimizing/images](https://nextjs.org/docs/pages/building-your-application/optimizing/images)

png 파일도 import해서 사용이 가능하다.
하지만 img가 아닌 Image로 사용해야 함. ⇒ 이 경우 next에서 알아서 최적화를 해줌.
