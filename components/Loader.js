import { React, useState } from 'react'

export default function Loader({isLoading}) {
    
    return (
        <div>
            {isLoading && (
                <div className="loader">
                    <div className="loader-spinner"></div>
                </div>
            )}
        </div>
    )
}