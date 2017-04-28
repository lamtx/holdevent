/**
 * Created by admin on 11/30/16.
 */
import { host } from '../application/Configuration';

export function fixImageUrl(url) {
  if (!!url && !url.startsWith('http')) {
    return host + '/' + url
  }
  return url
}
