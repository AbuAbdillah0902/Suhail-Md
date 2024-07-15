const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064721790";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_14_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTnY4Mm5ha1NKV3VRcDRrZkY1SXJTb0RZUDFCV2VyRFFmNDd3L2xYTnFKWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRmpZUEU3TjFTUjIzejdTVXNxcktFd1wiLFxuICBcInBob25lSWRcIjogXCI2NTZjNjAzNy1mMGY0LTRiYWItODA1ZC0zZDU1MjZjNDgwYzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxNDIsXG4gICAgICAxMTMsXG4gICAgICAyMzYsXG4gICAgICAyNTEsXG4gICAgICA0MSxcbiAgICAgIDcsXG4gICAgICAyMjgsXG4gICAgICA2LFxuICAgICAgMTEsXG4gICAgICAzNyxcbiAgICAgIDE0OSxcbiAgICAgIDc5LFxuICAgICAgMjUyLFxuICAgICAgMTg5LFxuICAgICAgNixcbiAgICAgIDIzNCxcbiAgICAgIDE2MixcbiAgICAgIDE0NSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDI1LFxuICAgICAgMTI3LFxuICAgICAgODksXG4gICAgICA4OCxcbiAgICAgIDczLFxuICAgICAgNjksXG4gICAgICA5NixcbiAgICAgIDU5LFxuICAgICAgMjQ0LFxuICAgICAgMTYsXG4gICAgICAxMTYsXG4gICAgICAyNDUsXG4gICAgICAxNTUsXG4gICAgICAxMTgsXG4gICAgICA0NixcbiAgICAgIDUwLFxuICAgICAgMzMsXG4gICAgICA1OCxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIQkJXUlFWQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDcyMTc5MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU29kaXFjb25jZXB0XCIsXG4gICAgXCJsaWRcIjogXCIxMTAzNTk1NTM4MzA5NjE6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcWtsUkVRaTZYVXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZNcFlsay9jT3lRVURkcXA1OFVwUU1HOVBCTFN3OXR1aGhjLytPTEsrekE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZXFMdXMyN2ZrMmNVTHFyMlY2a2txV0M5NHZyeXdhd3JxeE1iR0Z6eFdTci9UUnE0NkdkUXJ3Y1N0b2padnhWa0p3czFQcXF5SXVxblFxbWpmNW1MQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ2JIeDUxdHRFWFQ4SG1NTWhDRnpCdFMvN1RYbkU2enlkSmlTVU9IUGZqd0kwUk5Mem5lTEowejVkeEhuaWRqSTNrOGc1UkM1MWRXanIyT1BZeG92Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NDcyMTc5MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA0NTY0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ5NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDk1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiKzFOYm1yajZSODRMVDdxYURWZzVJVHBDNGJuY1gvejh5b21aTU8vUHFSRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjAwMDI4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA0NDUzMTQ3MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
