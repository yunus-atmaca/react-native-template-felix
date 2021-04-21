import {
  Platform
} from 'react-native'

import {
  PERMISSIONS,
} from 'react-native-permissions';

//Add Permissions according to config files
export const Permission = {
  CAMERA: Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA,
  STORAGE_READ: Platform.OS === 'android' ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE : PERMISSIONS.IOS.PHOTO_LIBRARY,
}
