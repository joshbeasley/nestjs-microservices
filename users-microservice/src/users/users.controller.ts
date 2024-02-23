import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class UsersMicroserviceController {
  
  @MessagePattern({cmd: 'createUser'})
  createUser(@Payload() data:) {

  }
}