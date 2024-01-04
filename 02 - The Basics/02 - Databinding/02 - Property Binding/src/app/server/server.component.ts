import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
})
export class ServerComponent {
  allowAddServer = false;
  serverId = 10;
  serverStatus = "offline";
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }
  getStatus() {
    return this.serverStatus;
  }
}
