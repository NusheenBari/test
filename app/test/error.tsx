'use client'

export default function Error(){
    return(
        <>
            <div className="text-center error-message">
                <h3 className="text-red-600 ">
                    Oops! There was an error loading the data. Please try again after sometime.
                </h3>
            </div>
        </>
    )
}