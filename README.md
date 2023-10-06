"# React"
Drawback of ContextAPI

- Every component that use useContext will re build, no matter whether it is required or not.

- useEffect usecase - do something when comp mounts and umounts.
  useEffect(() => {
  listners.push(setState);

  return () => {
  listners = listners.filter((li) => li !== setState);
  };
  }, [setState]);

- state management

  1.  Redux(complex)
  2.  contextAPI(simple)
  3.  custom hook store(complex)(mix of useState, useEffect,..)

- optimizing custom hook store.
   
- replace-redux-06-bonus-multiple-slices - where more than one state slice gets managed.
  You can also use it to manage multiple, independent state slices though.
