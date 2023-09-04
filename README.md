"# React"

- react query === tanstack
- @tanstack/react-query - useQuery, useMutation

- Tanstack query for connecting frontend to backend.

- Tanstack query: A library that helps with sending HTTP requests & keeing your frontend UI in sync. But it can vastly simplify your code.

- Tanstack query does not Send HTTP Requests, At least not on its own you have to write the code that sends the actual HTTP request. Tanstack query then manages the data, errors, caching & much more.

- \*\* useQuery()[tanstack] want the function that returns a promise

- useQuery({
  queryKey: ["events"],
  queryFn: fetchEvents,
  staleTime: 5000, // waiting time to fetch request response after 1st
  gcTime: 5000, // how long data in the cache kept around after 5000ms it is discarded
  });

- By constructing a query key dynamically, React Query can cache(and reuse) different data for different keys based on the same query.

- queryClient.invalidateQueries({ queryKey: ["events"], exact: true }); to notify react query that contains queryKey: ["events"] is outdated and need to be fetched again.

- Disabling automatic fetching: queryClient.invalidateQueries({
  queryKey: ["events"],
  refetchType: "none",
  }); -- when we haul invalidateQueries this existing queries will not automatically triggred again immediately

- Optimistic updating: const { mutate } = useMutation({
  mutationFn: updateEvent,
  onMutate: async (data) => {
  const NewEvent = data.event;
  await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  const previousEvent = queryClient.getQueryData(["events", params.id]);
  queryClient.setQueryData(["events", params.id], NewEvent);
  return { previousEvent };
  },
  onError: (error, data, context) => {
  queryClient.setQueryData(["events", params.id], context.previousEvent);
  },
  onSettled: () => {
  queryClient.invalidateQueries(["events", params.id]);
  },
  });
