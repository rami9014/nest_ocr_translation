import {
  Injectable
} from '@nestjs/common';

const Slack = require('slack-node')
@Injectable()
export class SlackMsg{
  async doAlarm(msg: string) {
    const slack = new Slack();
    slack.setWebhook(process.env.SLACK_BOT);
        
    const send = async(message)=>{
      slack.webhook({
        channel:'#alarm',
        text:message
      },function(err,response){
        console.log('slack err = ' + err)
      })
    }
    send(msg);
  }
}
