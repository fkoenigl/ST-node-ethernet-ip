declare module "st-ethernet-ip" {
  import { Socket } from "net";
  class ENIP extends Socket {
    constructor();
    connect(path: string): Promise<number>;
    write_cip(
      data: Buffer,
      additionalCPFItems?: {
        TypeID: number;
        data: Buffer;
      }[],
      connected?: boolean,
      timeout?: number,
      cb?: (() => void) | null
    ): void;
    destroy(exeption?: string): void;
  }

  export const EthernetIP = {
    ENIP,
  };
}
