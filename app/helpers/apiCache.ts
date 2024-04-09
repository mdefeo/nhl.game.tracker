// /app/helpers/apiCache.ts
interface CacheEntry {
  data: any; 
  expiry: number;
}

class ApiCache {
  private cache: Record<string, CacheEntry>;
  private ttl: number;

  constructor(ttl: number = 60 * 60 * 1000) {
    this.cache = {};
    this.ttl = ttl;
  }

  set(key: string, data: any): void {
    const now = Date.now();
    this.cache[key] = {
      data: data,
      expiry: now + this.ttl,
    };
  }

  get(key: string): any | null {
    const entry = this.cache[key];
    if (!entry) return null;

    const now = Date.now();
    if (now >= entry.expiry) {
      delete this.cache[key];
      return null;
    }

    return entry.data;
  }
}

const apiCache = new ApiCache();
export default apiCache;
