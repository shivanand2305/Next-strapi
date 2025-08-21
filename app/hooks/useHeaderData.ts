'use client';

import { useState, useEffect } from 'react';
import { HeaderData } from '../types/strapi';
import { StrapiApiService } from '../services/strapiApi';

export const useHeaderData = () => {
  const [data, setData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await StrapiApiService.getHeaderData();
        
        if (response.data) {
          setData(response.data);
        } else {
          setError('No header data found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch header data');
        console.error('Error fetching header data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
