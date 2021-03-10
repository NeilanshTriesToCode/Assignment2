const Discord = require('discord.js')
const client = new Discord.Client()
const trigger = [
    //0 Greeting 
    ["hi", "hey", "hello","good morning","good evening", "good afternoon","hey there"],
    //1 
    ["how are you", "how are things", "how's life"],
    //2
    ["what is going on", "what is up", "what's up"],
    //3
    ["happy", "good", "well", "fantastic", "cool", "haha", "awesome", "dope", "fine", "so so"],
    //4 Negative
    ["bad", "bored", "tired", "sad", "bad", "sucks", "terrible", "not well", "like shit", "disaster"],
    //5
    ["tell me story", "tell me joke",],
    //6
    ["thanks", "thank you", "appreciate it"],
    //7
    ["bye", "good bye", "goodbye"]
];
    
const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?",
        "Good, how about you?"
    ],
    //2
    [
        "Nothing much",
        "Exciting things!",
        "Wonderful things are coming...Wonderful!"
    ],
    //3
    ["Glad to hear it", "That's great to hear"],
    //4
    ["Why?", "Cheer up buddy", "What's the matter?", "Minor setbacks before a major comeback"],
    //5
    ["A pig without 3.14 is 9.8", 
     "What did the ghost say to the other ghost?...Do you believe in people?"
    ],
    //6
    ["You're welcome", "No problem", "Don't mention it", "Glad I could help", "It's my pleasure"],
    
    //7
    ["Goodbye", "See you later", "See you around"],
];
    
const alternative = [
      "Same",
      "Go on...",
      "Try again",
      "I'm listening...",
      "Type again",
      "Come again, would ya?"
];

client.on('ready', () => {
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name);

        // List all channels
        guild.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
    //var generalChannel = client.channels.cache.get("812168245129773070") // Replace with known channel ID
    //generalChannel.send("I am a functioning bot!");

    client.on('message', (receivedMessage) => {
        // Prevent bot from responding to its own messages
        if (receivedMessage.author == client.user) {
            return;
        }
        receivedMessage.channel.send(output(receivedMessage.content));
    })
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "ODEyMTY4NjAwNjg0MDY4OTQ0.YC808w.6orb79luGhaLPTgTC2RNAEX1lps"

client.login(bot_secret_token)


function compare(triggerArray, replyArray, text) {
    let item = "";
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (text.includes(triggerArray[x][y])) {
          items = replyArray[x];
          item = item + " " + items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }
  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");
  
  //compare arrays
  //then search keyword
  //then random alternative
  
    if (compare(trigger, reply, text)) {
      product = compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
      product = robot[Math.floor(Math.random() * robot.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    return product;
  }