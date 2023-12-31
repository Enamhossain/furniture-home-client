import { Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AlllSeller = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
              const res = await fetch('https://furnitur-home-server.vercel.app/users/sellers');
              const data = await res.json();
              return data;
        }
  })

  const handleVerifySeller = id => {
        fetch(`https://furnitur-home-server.vercel.app/users/sellers/${id}`, {
              method: 'PATCH',
              headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
        })
              .then(res => res.json())
              .then(data => {
                    if (data.modifiedCount > 0) {
                          toast.success('Seller Verified');
                          refetch();
                    }
              })
  };

  const handleDeleteUser = id => {
        fetch(`https://furnitur-home-server.vercel.app/users/sellers/${id}`, {
              method: 'DELETE',
              headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
        })
              .then(res => res.json())
              .then(data => {
                    if (data.acknowledged) {
                          toast.success('Seller deleted successfully');
                          refetch();
                    }
              })
            }

    return (
        <div>
           <div className="overflow-x-auto mt-3 p-10 bg-white rounded-2xl">
            <table className="table w-full">
                  <thead>
                        <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>User</th>
                              <th>Role</th>
                              <th></th>
                        </tr>
                  </thead>
                  <tbody>

                        {
                              allSellers.map((user, i) => <tr key={user._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td className='flex items-center'>
                                          <div className="avatar items-center">
                                                <div className="w-10 rounded-full">
                                                      <img src={user?.img} title={user?.name} alt='' />
                                                </div>
                                          </div>
                                          <p className='ml-2'>{user?.name}</p>
                                    </td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role ? user.role : 'Buyer'}</td>
                                    <td> {user?.role !== 'admin' && <Button onClick={() => handleVerifySeller(user._id)} size='sm' color="green" >   Verify Seller </Button> } </td>
                                    <td>{user?.role !== 'admin' && <Button onClick={() => handleDeleteUser(user._id)} size='md' color="red">Delete</Button>}</td>  
                              </tr>)
                        }

                  </tbody>
            </table>
      </div> 
        </div>
    );
};

export default AlllSeller;