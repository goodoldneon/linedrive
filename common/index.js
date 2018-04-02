const datePartsToDateString = (year, month, day) => {
  year = year
  month = `${month}`.padStart(2, '0')
  day = `${day}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}

module.exports = {
  datePartsToDateString,
}
