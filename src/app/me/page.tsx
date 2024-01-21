'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
interface UserData {
  id: string;
  username: string;
  // Properti lain dari respons API bisa ditambahkan di sini
}

const Page: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = Cookies.get('accessToken');

        console.log(accessToken); // Ambil accessToken dari cookies
        if (!accessToken) {
          // Handle jika accessToken tidak ada
          return;
        }

        const base_url = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get<UserData>(`${base_url}users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Sertakan accessToken dalam header
          },
        });
        console.log(response);
        setUserData(response.data); // Menyimpan data dari respons ke dalam state
      } catch (error) {
        console.error(error);
      }
    };

    // Panggil fungsi fetchUserData saat komponen dirender
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>This is the about me page</h1>
      {userData ? (
        <div>
          <p>User ID: {userData.id}</p>
          <p>Name: {userData.username}</p>
          {/* Tampilkan informasi lainnya dari userData */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
