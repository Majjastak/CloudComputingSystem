import { getKey } from "./redistClient.mjs";

export class FeatureStore {
  async getFeatureKey(key) {
    return getKey(key);
  }

  async setFeatureKey(key, value) {
    return setKey(key, value);
  }
}
