import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppServiceController, SampleDataById, SampleData } from 'proto/sample';

@Controller()
export class AppController implements AppServiceController {
  @GrpcMethod('AppService')
  findOne(data: SampleDataById): SampleData {
    const items: SampleData[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems.length > 0 ? filteredItems[0] : null;
  }
}
