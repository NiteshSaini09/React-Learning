import { useParams } from "react-router-dom";
function User() {
  const { name } = useParams();
  return (
    <p className="text-xl  flex flex-col items-center gap-2 justify-center my-30">
      Hello
      <h1 className="text-6xl text-red-900">{name.toLocaleUpperCase()}</h1> Good
      Morning{" "}
    </p>
  );
}
export default User;
