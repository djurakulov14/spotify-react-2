import { useNavigate } from 'react-router-dom'

const PlaylistCard = ({item}) => {
   const img = item?.images[0]?.url

   const navigate = useNavigate('/playlist/name')
   
   const showPlaylist = () => {
      navigate('/playlist/id=' + item.id, {state: {track: item.tracks?.href, img, playlist: item}})
   }

   return (
      <div onClick={showPlaylist} className="max-sm:max-w-full max-sm:p-3 bg-[#ffffff10] p-4 rounded-lg w-full max-w-[224px]">
         <img src={img} alt="" className="w-full rounded-lg" />
         <div>
            <p className="max-sm:mt-3 text-white text-xl font-bold mb-2 mt-6 truncate">{item.name}</p>
            <span className="text-[#B3B3B3] text-base font-medium block truncate">{item.description}</span>
         </div>
      </div>
   );
}

export default PlaylistCard;