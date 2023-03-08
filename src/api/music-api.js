import service from '@/api/request'

// banner
export function banner(params) {
  return service.get('/banner', { params })
}

// 歌单 ( 网友精选碟 )
export function topPlaylist(params) {
  return service.get('/top/playlist', { params })
}

// 热门歌手
export function topArtists(params) {
  return service.get('/top/artists', { params })
}

// 所有榜单
export function toplist(params) {
  return service.get('/toplist', { params })
}

// 获取歌单所有歌曲
export function playlistTrackAll(params) {
  return service.get('/playlist/track/all', { params })
}
