/**
 * 工具类
 */
export const formatAmount = num => {
  num = parseFloat(Number(num).toFixed(3))
  let [ integer, decimal ] = String.prototype.split.call(num, '.')
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,') // 正则先行断言
  return `${integer}${decimal ? '.' + decimal : '.00'}`
}

export const calcAge = date => {
  if (date === '' || date === null) return '-'
  let currentYear = new Date().getFullYear()
  let calculationYear = new Date(date).getFullYear()
  // const wholeTime = currentYear + date.slice(4)
  return currentYear - calculationYear
  // if (new Date().getTime() > new Date(wholeTime).getTime()) return calculationAge
  // else return calculationAge - 1
}

export const calcTime = date => {
  if (date === '' || date === null) return '-'
  let curDate = new Date()
  let targetDate = new Date(date)

  const arr = date.split(' ')
  // 判断是否是当年
  if (curDate.getFullYear() > targetDate.getFullYear()) {
    return targetDate.getFullYear() + '年' + targetDate.getMonth() + '月' + targetDate.getDate()
  }
  // 判断是否是前两天
  if (curDate.getFullYear() === targetDate.getFullYear() &&
    curDate.getMonth() === targetDate.getMonth()) {
    const curDay = curDate.getDate()
    const targetDay = targetDate.getDate()
    if ((curDay - targetDay) === 2) {
      return '前天'
    } else if ((curDay - targetDay) === 1) {
      return '昨天'
    } else if ((curDay - targetDay) === 0) {
      let hours = targetDate.getHours()
      let min = targetDate.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (min < 10) {
        min = '0' + min
      }
      return `${hours}:${min}`
    }
  }

  const arrDate = arr[0].split('-')
  return arrDate[1] + '月' + arrDate[2]
}

export const formatDateTime = date => {
  if (date === '' || date === null || date === undefined) return '-'
  const arr = date.split(' ')
  const time = arr[1].split(':')
  return arr[0] + ' ' + time[0] + ':' + time[1]
}

let util = {};

util.getBaseUrl = function () {
  return "/prod-api/common/file/upload"
};

// 格式化时间段
export const formatDoubleDateWeek = (datestr, datestr2) => {
  // 判断年月日是否相同，如果相同取并是当年取月日和时间段
  const year = new Date().getFullYear()
  const date1 = new Date(datestr)
  const date2 = new Date(datestr2)
  const date1Year = date1.getFullYear(), data1Mon = date1.getMonth() + 1,
    data1Hours = date1.getHours(), data1Min = date1.getMinutes(), data1Day = date1.getDay()
  const date2Year = date2.getFullYear(), data2Mon = date2.getMonth() + 1,
    data2Hours = date2.getHours(), data2Min = date2.getMinutes(), data2Day = date2.getDay()

  const week = {
    0: ' 星期日 ', 1: ' 星期一 ', 2: ' 星期二 ', 3: ' 星期三 ', 4: ' 星期四 ', 5: ' 星期五 ', 6: ' 星期六 '
  }
  let result1 = ''
  let result2 = ''

  // 不同年
  if (date1Year !== date2Year) {
    result1 += date1Year
    result2 += date2Year
  } else if (date1Year === date2Year && date1Year !== year) {
    result1 += date1Year
  }

  result1 += data1Mon + '月' + date1.getDate() + '日' + week[data1Day]
    + (data1Hours >= 10 ? data1Hours : '0' + data1Hours) + ':'
    + (data1Min >= 10 ? data1Min : '0' + data1Min) + ' ~ '

  // 不同月日
  if (data1Mon !== data2Mon || date1.getDate() !== date2.getDate()) {
    result2 += data2Mon + '月' + date2.getDate() + '日' + week[data2Day]
      + (data2Hours >= 10 ? data2Hours : '0' + data2Hours) + ':'
      + (data2Min >= 10 ? data2Min : '0' + data2Min)

  } else if (data1Mon === data2Mon && date1.getDate() === date2.getDate()) {
    result2 += (data2Hours >= 10 ? data2Hours : '0' + data2Hours) + ':'
      + (data2Min >= 10 ? data2Min : '0' + data2Min)
  }
  return result1 + result2
}

/**
 * 判断活动时间
 * @param applicantStartDate  报名开始时间
 * @param applicantEndDate  报名结束时间
 * @param startDate 活动开始时间
 * @param endDate 活动结束时间
 */
export const judgmentStatusNew = (applicantStartDate, applicantEndDate, startDate, endDate) => {
  applicantStartDate = new Date(applicantStartDate)
  applicantEndDate = new Date(applicantEndDate)
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  const curDate = new Date()
  let result = ''
  if (curDate < applicantStartDate) {
    result = '未开始'
  } else if (applicantStartDate < curDate && curDate < applicantEndDate) {
    result = '报名中'
  } else if (applicantEndDate < curDate && curDate < startDate) {
    result = '报名结束'
  } else if (startDate < curDate && curDate < endDate) {
    result = '进行中'
  } else if (endDate < curDate) {
    result = '已结束'
  }
  return result
}

export const compareCurrentDate = (date) => {
  let result = false
  if (date && new Date() <= new Date(date)) {
    result = true
  }
  return result
}
export default util;
