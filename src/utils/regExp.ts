export const passwordRegExpCheck = (value: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/g.test(value);
}

export const emailRegExpCheck = (value: string) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(value);
}

export const onlyTextRegExpCheck = (value: string) => {
  return /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,12}$/.test(value)
}

export const spaceBarCheck = (value: string) => {
  return value.indexOf(' ')
}