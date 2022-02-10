import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';

@Processor('emails')
export class SendMailTweetsJob {
  @Process()
  async handle(job: Job) {
    console.log('kafka para enviar a mensagem para o Wesley');
  }
}

//Monitora integracao entre nest e golang.
//nest       Kafka        golang