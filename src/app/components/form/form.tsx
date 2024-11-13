"use client";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const JobSearchForm = () => {
  const [formData, setFormData] = useState({
    position: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Data:', formData);
    router.push({
      pathname: '/search',
      query: {
        role: `${formData.position}`
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-md shadow-md max-w-md mx-auto">
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <Input
          type="text"
          name="position"
          id="position"
          placeholder="Enter position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 block w-full"
        />
      </div>

      <Button type="submit" className="w-full mt-4">
        Search
      </Button>
    </form>
  );
};

export default JobSearchForm;