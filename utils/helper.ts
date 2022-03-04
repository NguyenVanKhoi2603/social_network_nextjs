import dayjs, { OpUnitType } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

require('dayjs/locale/vi')
require('dayjs/locale/en')
dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Ho_Chi_Minh')
type TLanguage = 'vi' | 'en'


export const displayDateTime = (
  dateTime: string | any,
  format: string = 'L',
  locale: TLanguage = 'vi',
  defaultValue = ''
) => {
  return dayjs(dateTime).isValid() ? dayjs(dateTime).locale(locale).format(format) : defaultValue
}

export const timeFromNow = (dateTime: string | any) => {
  dayjs.extend(relativeTime)
  return dayjs(dateTime).fromNow()
}