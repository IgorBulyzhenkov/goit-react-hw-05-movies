import { useParams } from 'react-router-dom';

export default function Cast() {
  const params = useParams();
  console.log(params);
  return <div>Cast</div>;
}
