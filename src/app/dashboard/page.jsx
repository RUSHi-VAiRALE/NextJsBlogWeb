'use client'

import React from 'react'
import useSWR from 'swr';

export default function Dashboard() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log(data);

  return (
    <div>Dashboard</div>
  )
}
