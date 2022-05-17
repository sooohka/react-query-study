# React Query Study

> React data fetching library

리액트에서 보통 서버 데이터를 useEffect로 받아 useState 혹은 상태관리 라이브러리에 저장함, 하지만 대다수의 상태관리 라이브러리는 클라이언트 상태에 초점이 맞춰져있음(비동기 작업이 까다로움).

- 클라이언트 상태

  theme, modal open 등등 ui에 관련된 상태

- 서버 상태

  원격으로 관리되는 데이터, 불러올때 비동기 api처리가 필요

## Stale And Fresh

### Stale

- 더렵혀짐, 즉 최신의 상태가 필요
- react-query는 stale된 상태이고 아래 상태일때 refetch함(react-query에서 fetching이랑 loading은 매우 다름)
  - window refocus
  - network refocus
  - refetchInterval 값 설정했을때
- loading값은 초기 데이터 로드시 true가 되고 refetch될때마다는 fetching값이 true로 바뀜 -> 네트워크 탐

### Fresh

## Queries 및 캐싱

> 서버 데이터 불러올때(Get)사용

- enabled옵션으로 호출시점을 결정 가능
- idle, loading, error, success상태를 가짐
  - error상태일때 error속성에 접근 가능
  - success상태일때 data속성에 접근 가능
- 기본적으로 stale상태로 취급됨(default staleTime = 0)
  - staleTime옵션을 통해 stale상태가 되기 까지의 delay를 줄 수 있음
- caching했다고 데이터를 안불러오는게 아님
  - 초기 값을 caching하지만 refetch하는 상태가 되면 데이터를 불러옴
  - 데이터는 불러오지만 query값은 기존값 유지하다가 서버에서 값을 받아올때 캐싱된 데이터 업데이트 -> 결국 네트워크를 탄다는것
- 현재 쿼리값이 어디에도 사용되지 않으면 inactive상태로 빠지고 cacheTime후에 가비지컬랙팅됨 -> 현재 값이 사용되고 있다면 cacheTime은 무의미

### Query Key

- unique해야함
- refetching, caching등 전반적으로 사용됨
- 직렬화가능한 모든 자료구조 가능
- 내부적으로 배열로 변환됨 ex) useQuery("todo") -> useQuery(["todo"])
- useQuery에 전달되는 callback(Query Function)에 인자가 필요하다면 query키로 전달하면됨

```js
useQuery(['todo', todoId], getTodo)

async function getTodo({ queryKey }) {
  const [_key, todoId] = queryKey
}
```

### Query Function

- 어떤 형태든 Promise를 리턴하는 함수이기만 하면 됨

## Mutations

> 서버 데이터 수정할때(CREATE,UPDATE,DELETE 등)

- Query key필요없음
- Query와 마찬가지로 idle, loading, error, success상태를 가짐
- Query와 다르게 mutate속성(함수임)을 호출해야 비동기작업 실행됨

## Query Invalidation(쿼리 무효화)

> 유저가 서버의 데이터를 수정했을때 쿼리 무효화를 통해 cache초기화를 할 수 있음

- queryClient의 invalidateQueries메소드를 통해 가능
- query가 invalidate 되면 query가 stale상태가 됨, query가 현재 렌더링 중이면 refetched됨
