import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
      </Await>
    </Suspense>
  );
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(
    //   JSON.stringify({ message: "Could noot fetch events." }),
    //   { status: 500 }
    // )
    return json({ message: "Could noot fetch events." }, { status: 500 });
  } else {
    const reData = await response.json();
    return reData.events;
    // return response;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
