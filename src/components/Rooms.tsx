import useSWR from 'swr';
import { fetcher } from '../lib/api';

interface Rooms {
  id: number;
  name: string;
  label: string;
  created_at: string;
}

const Rooms = () => {
  const { data: rooms } = useSWR(`/rooms`, fetcher<Rooms[]>, {
    suspense: true,
  });
  
  return (<div role='group' className="rooms-switcher">
    {rooms && rooms.map(room => (<a href={`/room/${room.id}`}>{room.label}</a>))}
  </div>);
}

export default Rooms;
