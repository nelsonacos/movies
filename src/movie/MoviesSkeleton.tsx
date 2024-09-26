export function MoviesSkeleton() {
    return (
        <div className='grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 mx-auto w-4/5'>
            <div className='w-full h-80 drop-shadow-lg rounded-2xl mx-auto'>
                <div className="w-3/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="w-1/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="h-full bg-gray-400 rounded" />
            </div>
            <div className='w-full h-80 drop-shadow-lg rounded-2xl mx-auto'>
                <div className="w-3/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="w-1/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="h-full bg-gray-400 rounded" />
            </div>
            <div className='w-full h-80 drop-shadow-lg rounded-2xl mx-auto'>
                <div className="w-3/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="w-1/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="h-full bg-gray-400 rounded" />
            </div>
            <div className='w-full h-80 drop-shadow-lg rounded-2xl mx-auto'>
                <div className="w-3/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="w-1/4 h-5 my-2 bg-gray-400 rounded" />
                <div className="h-full bg-gray-400 rounded" />
            </div>
        </div>
    )
}