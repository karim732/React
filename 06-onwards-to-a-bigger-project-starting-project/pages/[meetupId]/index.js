import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  console.log("njj");
  return (
    <MeetupDetail
      image="https://images.freeimages.com/images/large-previews/228/chain-links-1312683.jpg"
      title="title"
      address="some address"
      description="description"
    />
  );
}

export async function getStaticPaths() {
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
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image: "jjjj",
        id: meetupId,
        title: "First meetup",
        address: "Some Street 5, Some City",
        description: "Some description",
      },
    },
  };
}

export default MeetupDetails;
