"# React"
-SSG Static site generation:
(1) export async function getStaticProps() {
// if no req is needed and Authentication, cached
// fetch data from an API
return {
props: {
meetups: DUMMY_MEETUPS,
},
revalidate: 10,
};
}

(2) export async function getServerSideProps(context) {

// if data changes multiple times, if need to work with incoming request,regenerated,
const req = context.req;
const res = context.res;
// fetch data from an API
return {
props: {
meetups: DUMMY_MEETUPS,
},
};
}

- export async function getStaticPaths() {
  return {
  fallback: false,
  paths: [
  {
  params: {
  meetupId: "m1",
  },
  },
  {
  params: {
  meetupId: "m2",
  },
  },
  ],
  };
  } used for Dynamic pages [meetupId] to which dynamic pages this page need to be pre generated.

- API Routes

- Vercel is a great hosting provider for NextJs
