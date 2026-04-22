import { useState, useEffect, useCallback } from "react";
import type { ApiResponse } from "../types";

export function useApi<T>(
  fetchFn: () => Promise<T>,
  deps: unknown[] = []
): ApiResponse<T> & { refetch: () => void } {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const data = await fetchFn();
      setState({ data, loading: false, error: null });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro ao buscar dados";
      setState({ data: null, loading: false, error: message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { ...state, refetch: execute };
}
