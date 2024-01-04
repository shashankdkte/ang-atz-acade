import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";
  servers: [{ serverId: Number; serverStatus: String }] = [
    {
      serverId: 1,
      serverStatus: "offline",
    },
  ];

  log: [a: number] = [4];
  constructor() {}
  getStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === "online" ? "palegreen" : "pink";
  }

  onServerCreated() {
    this.servers.push({
      serverId: Math.round(Math.random() * 20) + 1,
      serverStatus: Math.random() > 0.5 ? "online" : "offline",
    });
  }
}
