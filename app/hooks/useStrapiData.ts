'use client';

import { useState, useEffect } from 'react';
import { StrapiResponse, HomeData } from '../types/strapi';
import { StrapiApiService } from '../services/strapiApi';

export const useStrapiData = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response: StrapiResponse = await StrapiApiService.getHomeData();
        
        if (response.data && response.data.length > 0) {
          setData(response.data[0]); // Get the first home data
        } else {
          setError('No data found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        console.error('Error fetching Strapi data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
