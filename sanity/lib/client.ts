import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import baseUrl from '@/lib/baseUrl'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: `${baseUrl}/studio`,
  },
})
