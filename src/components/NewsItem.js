import React from "react";



const NewsItem =(props)=> {
        let { title, description, imageUrl, newsurl, author, date } = props;
        return (
            <div className="my-3 grid grid-flow-col mt-10">
                <div>
                <img className='' src={!imageUrl?"http://redbrickhousenursery.com/wp-content/uploads/2013/11/dummy-image-square.jpg": imageUrl} alt="..." />
                <div className="card-body">
                    <h5 className="text-lg font-medium">{title}...</h5>
                    <p className="my-5">{description}...</p>
                    <p className='text-gray-700 my-3'>By {!author?"Unknow": author} - {new Date(!date?" ": date).toUTCString()}</p>
                    <button><a className="p-2  bg-slate-700 text-white rounded-lg" href={newsurl} target='noopener'>Read More</a></button>
                    <hr className='mt-5' />
                </div>
                </div>
            </div>
        );
}
export default NewsItem