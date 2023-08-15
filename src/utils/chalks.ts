import chalk from "chalk"

export const LogError = (content:any)=>{
  return console.error(`${chalk.bgHex('#f00').bold('ERROR:')} ${content}`)
}
export const LogOutput = (content:any)=>{
  return console.log(`${chalk.bgHex('#00f').bold('OUTPUT:')} ${content}`)
}
export const LogWarn = (content:any)=>{
  return console.log(`${chalk.bgHex('#ff0').hex('#000').bold('ALERT:')} ${content}`)
}