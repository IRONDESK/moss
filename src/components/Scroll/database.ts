export type postType = {
  page: number;
  contents: string;
};

export const getPostList = (page: number): postType[] => {
  return postList.filter((post: postType) => post.page === page);
};

export const postList: postType[] = [
  {
    page: 1,
    contents: '첫번째 스터디',
  },
  {
    page: 1,
    contents: '두번째 스터디',
  },
  {
    page: 1,
    contents: '세번째 스터디',
  },
  {
    page: 1,
    contents: '네번째 스터디',
  },
  {
    page: 2,
    contents: '다섯번째 스터디',
  },
  {
    page: 2,
    contents: '여섯번째 스터디',
  },
  {
    page: 2,
    contents: '일곱번째 스터디',
  },
  {
    page: 2,
    contents: '여덟번째 스터디',
  },
  {
    page: 3,
    contents: '아홉번째 스터디',
  },
];
