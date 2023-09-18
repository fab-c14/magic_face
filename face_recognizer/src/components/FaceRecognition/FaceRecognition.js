import React from 'react';

const FaceRecognition = ({imageUrl})=>{
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imageUrl} alt={'image not found'} width={'500px'} height={'auto'}/>
            </div>
        </div>
    )
}

export default FaceRecognition;