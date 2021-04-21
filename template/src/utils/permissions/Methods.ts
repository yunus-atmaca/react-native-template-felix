import {
  checkMultiple,
  requestMultiple,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

import { Permission } from './Permissions'
import { Status } from './Status'

export function checkPermissions(permissions: string[] | string, callback: (status: string) => void) {

  if (!permissions || permissions.length === 0) {
    throw new Error('Please define permission array')
  }

  let tmpPermission: any = Array.isArray(permissions) ?
    permissions : [permissions]

  checkMultiple(tmpPermission).then((status) => {
    callback && callback(getPermissionResult(status, permissions));
  }).catch(err => {
    callback && callback(Status.ERROR)
    console.debug(err)
  })
}

export function requestPermissions(permissions: string[] | string, callback: (status: string) => void) {

  if (!permissions || permissions.length === 0) {
    throw new Error('Please define permission array')
  }

  let tmpPermission: any = Array.isArray(permissions) ?
    permissions : [permissions]

  requestMultiple(tmpPermission)
    .then((status) => {
      callback && callback(getPermissionResult(status, permissions));
    })
    .catch(error => {
      console.debug(error)
    });

}

function getPermissionResult(status, permissions): string {
  let res: any = []

  permissions.forEach(permission => {
    if (status[permission] === RESULTS.GRANTED) {
      res.push(Status.GRANTED)
    } else if (status[permission] === RESULTS.DENIED) {
      res.push(Status.DENIED)
    } else if (status[permission] === RESULTS.BLOCKED) {
      res.push(Status.BLOCKED)
    }
  })

  if (res.includes(Status.BLOCKED)) {
    return Status.BLOCKED
  } else if (res.includes(Status.DENIED)) {
    return Status.DENIED
  } else {
    return Status.GRANTED
  }
}