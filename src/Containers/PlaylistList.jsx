import { useState } from "react";
import PlaylistCard from "../Components/PlaylistCard";

const PlaylistList = ({type, plaslists, errorMsg = "", title}) => {

	const [all, setAll] = useState(false)

	return (
		<div className="mt-[50px] w-full">
			<div className="flex items-center justify-between">
				<h2 className="max-sm:text-[22px] text-white text-3xl font-bold mb-4">
					{title}
				</h2>
				<button
					onClick={() => setAll(!all)}
					className="max-sm:text-[14px] text-[#ADADAD] text-base font-bold uppercase"
				>
					{type === "songs" ? all ? 'Close' : 'See all' : ''}
				</button>
			</div>
			<div className="max-2xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-2 w-full max-w-[1400px] mt-5 grid grid-cols-5 gap-6">
				{
					errorMsg.length > 0 ? <span className="text-[red] text-[24px]" >{errorMsg}</span> :
					
					type === 'songs' ? plaslists.slice(0, all ? plaslists.length : 5).map(item => <PlaylistCard key={item.id} item={item} />) : plaslists?.map(item => <PlaylistCard key={item.id} item={item} />)
					
				}
			</div>
		</div>
	);
};

export default PlaylistList;
