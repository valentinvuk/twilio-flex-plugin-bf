import { Notifications, NotificationType } from '@twilio/flex-ui'

Notifications.registerNotification({
  id: 'parkedNotification',
  closeButton: true,
  content: 'Conversation was paused successfully!',
  timeout: 3000,
  type: NotificationType.success
})

Notifications.registerNotification({
  id: 'errorParkedNotification',
  closeButton: true,
  content: 'An error has ocurred',
  timeout: 3000,
  type: NotificationType.error
})

Notifications.registerNotification({
  id: 'wrappingSuccessful',
  closeButton: true,
  content: 'Call was ended successfully!',
  timeout: 3000,
  type: NotificationType.success
})

Notifications.registerNotification({
  id: 'errorWrapping',
  closeButton: true,
  content: 'An error has ocurred',
  timeout: 3000,
  type: NotificationType.error
})

