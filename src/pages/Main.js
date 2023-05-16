import Render from "../component/Render";
import useFetch from '../util/useFetch';

const Main = ({simple}) => {
  const [lists,isPending,error] =useFetch('http://localhost:3001/lists')


  return (
    <>
      { error && <div>{ error }</div> }
        <Render lists={lists} isPending={isPending} simple={simple} />
    
    </>
  );
};

export default Main;