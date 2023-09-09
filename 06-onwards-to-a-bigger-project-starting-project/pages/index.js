import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.freeimages.com/images/large-previews/228/chain-links-1312683.jpg",
    address: "Some address5, 12345",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://images.freeimages.com/images/large-previews/228/chain-links-1312683.jpg",
    address: "Some address 10, 89765",
    description: "This is second meetup",
  },
];
function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps(context) {
//   // if data changes multiple times, if need to work with incoming request,regenerated,
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // if no req is needed and Authentication, cached
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://karim:XB4DrnIIcX1f8bSw@cluster0.agxxvdt.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
