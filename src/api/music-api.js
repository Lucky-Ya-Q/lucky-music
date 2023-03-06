import service from '@/api/request'

// banner
export function banner(params) {
  return service.get('/banner', { params })
}
