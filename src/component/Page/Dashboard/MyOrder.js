import React, { useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { AuthContext } from '../Authentication/Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(`https://furnitur-home-server.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
          
        }
    })


    const handleDeleteProduct = id => {
        fetch(`https://furnitur-home-server.vercel.app/booking/${id}`, {
              method: 'DELETE',
        })
              .then(res => res.json())
              .then(data => {
                    if (data.acknowledged) {
                          toast.success('Product deleted successfully');
                          refetch();
                    }
              })
  }
    return (



        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">My Order</h2>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                    <thead>
                        <tr className="dark:bg-gray-700  ">

                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Location</th>

                        </tr>
                    </thead>
                    <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">

                        {

                            myProducts.map((product, i) => <tr key={product._id} className="hover">
                             
					<td className="px-3 text-2xl font-medium dark:text-gray-400">
                    <p>{product?.product}</p>
                    </td>
					

                    <td className="px-3 py-2">
						
						<p className="dark:text-gray-400">{product?.price}</p>
					</td>

					<td className="px-3 py-2">
						<span>{product?.location}</span>
						
					</td>
					
					
					
                                

                                <td><button className='btn btn-xs btn-success'> Pay </button></td>
                                 <td><Button onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs btn-error'>Delete</Button></td> 
                   </tr> )
                        }
                    </tbody>

                </table>
            </div>
        </div>



    );
};

export default MyOrder;