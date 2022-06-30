import { useQuery, useQueryClient } from 'react-query'

export function useFormData<T extends Record<string, any>>(key: string, initialData?: T) {
  const queryClient = useQueryClient()
  const { data } = useQuery(key, { initialData })

  const mutate = (data: Partial<T>) => {
    queryClient.setQueryData<T>(key, (existing: any) => Object?.assign(existing, data))
  }

  return {
    data,
    edit: mutate,
  }
}
