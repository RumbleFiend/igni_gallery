import React, { useEffect, useState } from 'react'
import useFirestore from '../hooks/useFirestore';


const ImageGrid = ({ setSelectedImg }) => {
    const [loading, setLoading] = useState(true);
    const { docs } = useFirestore('images');
    console.log(docs);
    useEffect(() => {
        setLoading(false);
    }, [docs])
    return (
        <div className='img-grid'>
            <Loading loading={loading}></Loading>
            {docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploaded"></img>
                </div>
            ))}
        </div>
    )
}

function Loading(props) { /*cercle de chargement*/
    return props.loading ?  <div className="loader"></div> : <div hidden></div>
}
 
export default ImageGrid;