'use client';

import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import React, { useState } from 'react'

export default function Card() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    
    <div className={clsx('bg-white rounded-lg shadow-md p-4', {
      'h-96': expanded,
    })}>Card</div>
    
    <Button variant='outline' onClick={() =>setExpanded(!expanded)}>Expanded</Button>
    </>
  )
}
