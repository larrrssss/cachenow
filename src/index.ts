export interface IMapPayload<T> {
  data: T,
  set_on: number,
}

class CacheNow<T> {
  invalid_after: number;
  storage = new Map<string, IMapPayload<T>>();

  constructor(invalid_after = 30 * 1000) {
    this.invalid_after = invalid_after;
  }

  public get(key: string): T | null {
    const entry = this.storage.get(key);    
    
    if (!entry || entry.set_on - Date.now() <= -this.invalid_after) {
      this.storage.delete(key);
      return null;
    }
    
    return entry.data;
  }

  public set(key: string, data: T): T {
    this.storage.set(key, {
      data,
      set_on: Date.now(),
    });

    return data;
  }
}

export default CacheNow;