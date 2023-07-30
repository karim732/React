const Todo = ({ className, concept: { image, title, description } }) => {
  //   const { image, title, description } = concept;
  return (
    <li className={className}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Todo;
