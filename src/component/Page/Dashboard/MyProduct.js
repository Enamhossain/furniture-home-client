
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Context/AuthProvider';
import { toast } from 'react-hot-toast';
const MyProduct = () => {

   
   
    
        const { user } = useContext(AuthContext);
    
        const { data: myProducts = [], refetch } = useQuery({
              queryKey: ['allSellers'],
              queryFn: async () => {
                    const res = await fetch(`https://furnitur-home-server.vercel.app/myproducts?email=${user?.email}`);
                    const data = await res.json();
                    return data;
              }
        })
    
    
    
        const handleDeleteProduct = id => {
              fetch(`https://furnitur-home-server.vercel.app/products/${id}`, {
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
        <div>
             <div className='p-10'>
                  <h2 className='text-3xl text-center underline underline-offset-8 font-bold'>My Products</h2>

                  <div className="overflow-x-auto mt-3 p-10 bg-white rounded-2xl">
                        <table className="table w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Price</th>
                                          <th></th>

                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          myProducts.map((product, i) => <tr key={product._id} className="hover">
                                                <th>{i + 1}</th>
                                                <td className='flex items-center'>
                                                      <div className="avatar items-center">
                                                            <div className="w-24 rounded">
                                                                  <img src={product?.img} title={product?.product} alt='' />
                                                            </div>
                                                      </div>
                                                      <p className='ml-2'>{product?.product}</p>
                                                </td>
                                                <td>${product?.price}</td>

                                                <td>{product?.role !== 'Admin' && <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs btn-error'>Delete</button>}</td>
                                          </tr>)
                                    }

                              </tbody>
                        </table>
                  </div>

            </div>
        </div>
    );
};

export default MyProduct;