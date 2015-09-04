import { NOTIF_SEND, NOTIF_DISMISS, NOTIF_CLEAR } from '../actions/notifs'

export default function notifs(domain = [], action) {
  if (!action || !action.type) return domain

  switch (action.type) {
    case NOTIF_SEND:
      return [action.payload, ...domain]

    case NOTIF_DISMISS:
      return domain.filter(n =>
          n.id !== action.payload
      )

    case NOTIF_CLEAR:
        return notifClear(domain, action)

    default:
        return []
  }
}
