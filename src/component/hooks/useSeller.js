import  { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [IsSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://furnitur-home-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                   setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, IsSellerLoading]
}


export default useSeller;